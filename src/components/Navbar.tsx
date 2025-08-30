
import React from 'react';

const Navbar = ({ toggleDark, dark }) => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Personal Brainly Pro</a>
      </div>
      <div className="flex-none gap-2">
        <button onClick={toggleDark} className="btn btn-sm">
          {dark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
