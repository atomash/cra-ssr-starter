import React from 'react';
import { Link,} from 'react-router-dom'
import logo from './logo.svg';
import './index.css';

export const HeaderComponent = () => (
    <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <nav>
            <li>
              <Link to="/">
                home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
              <li>
                  <Link to="/red">
                      Redirect
                  </Link>
              </li>
          </nav>
        </div>
  )