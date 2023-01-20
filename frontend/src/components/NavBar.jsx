import NavLink from './NavLink';

function NavBar() {
  return (
    <nav
      className="flex sm:justify-center space-x-4 text-sm font-medium
      bg-gradient-to-r from-cyan-400 to-green-400 p-4"
    >
      <NavLink path="/">Users</NavLink>
      <NavLink path="/http-status-cat">HTTP Cats</NavLink>
      <NavLink path="/random-dog">Dog Generator</NavLink>
    </nav>
  );
}

export default NavBar;
