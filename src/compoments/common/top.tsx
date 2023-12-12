"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { FaGear, FaFilePen } from "react-icons/fa6";

function TopNavigation() {
  const currentPathname = usePathname();

  const getActiveClassName = (path: String) =>
    currentPathname === path ? "active" : "";

  let authorized = false;

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        {authorized ? (
          <Authorized getActiveClassName={getActiveClassName} />
        ) : (
          <NotAuthorized getActiveClassName={getActiveClassName} />
        )}
      </div>
    </nav>
  );
}

type ActiveClassNameFunction = (pathname: string) => string;

function NotAuthorized({
  getActiveClassName,
}: {
  getActiveClassName: ActiveClassNameFunction;
}) {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link className={`nav-link ${getActiveClassName("/")}`} href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${getActiveClassName("/login")}`}
            href="/login"
          >
            Sign in
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${getActiveClassName("/register")}`}
            href="/register"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </IconContext.Provider>
  );
}

function Authorized({
  getActiveClassName,
}: {
  getActiveClassName: ActiveClassNameFunction;
}) {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link className={`nav-link ${getActiveClassName("/")}`} href="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${getActiveClassName("/editor")}`}
          href="/editor"
        >
          &nbsp;
          <FaFilePen />
          &nbsp;New Article&nbsp;
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${getActiveClassName("/settings")}`}
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
          Eric Simons
        </Link>
      </li>
    </ul>
  );
}

export default TopNavigation;
