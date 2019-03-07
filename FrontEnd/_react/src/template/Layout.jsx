import React from 'react';
import Navigation from './Navigation';
import TitleContent from './TitleContent';
import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';

const Layout = props => {

const header = props.header;
  return (
    <React.Fragment>
      <Navigation />
      {header ? (<Header/>):("")}
      <PageContent>
        <TitleContent title={props.pageTitle} subtitle={props.pageSubTitle} />
        {props.children}
      </PageContent>
      <Footer siteName="Basic App" />
    </React.Fragment>

  );
}

export default Layout;

