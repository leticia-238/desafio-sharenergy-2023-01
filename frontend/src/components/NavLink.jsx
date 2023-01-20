import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink({ path, children }) {
  return (
    <Link
      to={ path }
      className="rounded-lg px-3 py-2 text-slate-700 font-medium
      hover:bg-slate-100 hover:text-slate-900"
    >
      { children }
    </Link>
  );
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
