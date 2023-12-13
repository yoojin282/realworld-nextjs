'use client';

import { fetchLocal } from '@/fetch';
import { useLoginStore } from '@/store/useLoginStore';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

export default function Login() {
  const {
    username,
    password,
    errors,
    setUsername,
    setPassword,
    setErrors,
    validate,
  } = useLoginStore();

  const [csrfToken, setCsrfToken] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    initCsrfToken();
    if (searchParams.get('error') === 'CredentialsSignin') {
      setErrors(['인증 정보가 일치하지 않습니다.']);
    }
    return () => setErrors([]);
  }, [searchParams, setErrors]);

  const initCsrfToken = async () => {
    const token = await fetchLocal('/api/csrf', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((csrfObject) => csrfObject?.csrfToken);
    setCsrfToken(token);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const errorMessage = validate();
    if (errorMessage !== null) {
      setErrors([errorMessage]);
      e.preventDefault();
    }
  };

  return (
    <>
      <h1 className="text-xs-center">Sign in</h1>
      <p className="text-xs-center">
        <Link href="/register">Need an account?</Link>
      </p>

      <ul className="error-messages">
        {errors.map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </ul>

      <form
        method="post"
        action="/api/callback/credentials"
        onSubmit={handleSubmit}
        noValidate
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            name="email"
            required
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            name="password"
            required
            minLength={4}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
}
