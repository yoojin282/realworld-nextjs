import { auth } from '@/auth';
import Link from 'next/link';
import { NavAuthorized, NavNotAuthorized } from './nav';

async function TopNavigation() {
  const session = await auth();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        {session?.user !== null ? (
          <NavAuthorized user={session!.user!} />
        ) : (
          <NavNotAuthorized />
        )}
      </div>
    </nav>
  );
}

export default TopNavigation;
