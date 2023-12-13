'use client';

import { User } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconContext } from 'react-icons';
import { FaFilePen, FaGear } from 'react-icons/fa6';

function NavAuthorized({ user }: { user: User }) {
  const currentPathname = usePathname();
  const getActiveClassName = (path: String) =>
    currentPathname === path ? 'active' : '';

  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link className={`nav-link ${getActiveClassName('/')}`} href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${getActiveClassName('/editor')}`}
            href="/editor"
          >
            &nbsp;
            <FaFilePen />
            &nbsp;New Article&nbsp;
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${getActiveClassName('/settings')}`}
            href="/settings"
          >
            &nbsp;
            <FaGear />
            &nbsp;Settings&nbsp;
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/profile/eric-simons">
            {/* <img src="" className="user-pic" /> */}
            {user.image !== null && (
              <Image
                src={user.image!}
                alt={user.name!}
                width={26}
                height={26}
                className="user-pic"
              />
            )}

            {user.name}
          </Link>
        </li>
      </ul>
    </IconContext.Provider>
  );
}

function NavNotAuthorized() {
  const currentPathname = usePathname();
  const getActiveClassName = (path: String) =>
    currentPathname === path ? 'active' : '';

  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link className={`nav-link ${getActiveClassName('/')}`} href="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${getActiveClassName('/login')}`}
          href="/api/signin"
        >
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${getActiveClassName('/register')}`}
          href="/register"
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
}

export { NavAuthorized, NavNotAuthorized };
