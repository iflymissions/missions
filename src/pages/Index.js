import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"I Fly Missions's website. Savannah, GA,"
    + 'Aerospace engineer now offering commercial drone services.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p> I Fly Missions is a professional drone service by an experienced aerospace engineer.
          </p>
        </div>
      </header>
      <p> Welcome to our website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> This site is built with respect from Open Source code, available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
