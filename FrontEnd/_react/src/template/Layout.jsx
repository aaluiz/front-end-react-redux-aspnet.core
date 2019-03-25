import React from 'react';


import Navigation from './Navigation';
import TitleContent from './TitleContent';
import Footer from './Footer';
import PageContent from './PageContent';

const Layout = props => {
  return (
    <React.Fragment>
      <Navigation />
      <PageContent>
        <TitleContent title={props.pageTitle} subtitle={props.pageSubTitle} />
        {props.children}
      </PageContent>
      <Footer siteName="Basic App" />
    </React.Fragment>
  );
}

export default Layout;

