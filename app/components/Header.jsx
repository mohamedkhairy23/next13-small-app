import Link from "next/link";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">My App</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/code/repos">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

// Advantages of RSC:

// Load faster - Don't have to wait for the JavaScript to load
// Smaller client bundle size
// SEO friendly
// Access to resources the client can't access
// Hide sensitive data from the client
// More secure against XSS attacks
// Improved developer experience
// Just like with anything else, there are also disadvantages:

// Not as interactive
// No component state. We can not use the useState hook.
// No component lifecycle methods. We can not use the useEffect hook.
