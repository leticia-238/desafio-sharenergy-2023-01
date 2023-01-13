import NavLink from './NavLink';

function NavBar() {
  return (
    <nav className="flex sm:justify-center space-x-4">
      <NavLink path="/">Users</NavLink>
      <NavLink path="/http-status-cat">HTTP Status Cats</NavLink>
      <NavLink path="/">Dog Generator</NavLink>
    </nav>
  );
}

export default NavBar;
