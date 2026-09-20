import React from 'react';
// 1. Import NavLink from react-router-dom
import { NavLink } from 'react-router-dom';

/**
 * Navbar: Demonstrates NavLink active class and style injection.
 *
 * Notice the `className` function:
 * React Router calls it with `{ isActive, isPending }`,
 * allowing us to apply custom active styles effortlessly!
 */
export default function Navbar() {
  return (
    <nav className="nav-bar">
      {/* 👈 NavLink automatically receives `isActive` boolean */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'nav-tab active' : 'nav-tab')}
      >
        Home
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? 'nav-tab active' : 'nav-tab')}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? 'nav-tab active' : 'nav-tab')}
      >
        Settings
      </NavLink>
    </nav>
  );
}
