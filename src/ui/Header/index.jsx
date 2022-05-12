import React from 'react';
import './Header.css'
import {ReactComponent as HomeSVG} from '../../images/home.svg';
import {ReactComponent as SelectSVG} from '../../images/select.svg';
import {ReactComponent as PeopleSVG} from '../../images/people.svg';
import {ReactComponent as ArrowDownSVG} from '../../images/chevron-down.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="home-btn">
          <HomeSVG />
        </div>
        <div className="company">
          <span>Acme Inc.</span>
          <SelectSVG />
        </div>
      </div>
      <div className="header__center">
        <span className="page-title">Inbox</span>
      </div>
      <div className="header__right">
        <div className="user-name">
          <PeopleSVG />
          <span>
            L. van Loon
          </span>
          <ArrowDownSVG />
        </div>
      </div>
    </header>
  )
}

export default Header;