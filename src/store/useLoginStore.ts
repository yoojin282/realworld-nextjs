import { create } from 'zustand';

interface LoginFormState {
  username: string;
  password: string;
  errors: string[];
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setErrors: (messages: string[]) => void;
  validate: () => string | null;
}

export const useLoginStore = create<LoginFormState>((set, get) => ({
  username: '',
  password: '',
  errors: [],
  setUsername: (username) => set(() => ({ username: username.trim() })),
  setPassword: (password) => set(() => ({ password: password.trim() })),
  setErrors: (errors) => set(() => ({ errors })),
  validate: () => {
    const { username, password } = get();
    if (username === '') {
      return '이메일을 입력해주세요.';
    }
    if (password === '') {
      return '비밀번호를 입력해주세요.';
    }
    return null;
  },
}));
