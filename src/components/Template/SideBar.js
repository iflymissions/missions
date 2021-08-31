import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>I Fly Missions</h2>
        <p><a href="mailto:ameyers@iflymissions.com">ameyers@iflymissions.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Adrienne, an Aviation Maintenance specialist.
      I have been flying drones recreationally for over 4 years.
      I am a FAA licensed remote pilot now offer my professional drone services to you.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; I Fly Missions <Link to="/">iflymissions.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
