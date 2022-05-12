import React from 'react';
import Header from '../Header';
import InfoBar from '../InfoBar';
import SideBar from '../SideBar';
import './Page.css'

const Page = ({children}) => {
  return (
    <div className="page">
      <div className="page__header">
        <Header />
      </div>
      <div className="page__content">
        <div className="page__part page__part-left">
          <SideBar />
        </div>
        <div className="page__part page__part-center">
          {children}
        </div>
        <div className="page__part page__part-right">
          <InfoBar />
        </div>
      </div>
    </div>
  )
}

export default Page;