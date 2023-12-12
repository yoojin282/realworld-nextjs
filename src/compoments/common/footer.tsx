import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link href="/" className="logo-font">
          conduit
        </Link>
        <span className="attribution">
          An interactive learning project from&nbsp;
          <a href="https://thinkster.io" target="_blank">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
}
