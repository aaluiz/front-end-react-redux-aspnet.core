import React from 'react';

import SideBar from './SideBar';
import Card from '../common/Card';

const PageContent = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {props.children}
        </div>
        <SideBar>
          <br/>
          <Card title="Widget">
            <p>tudo de bom nessa vida!</p>
          </Card>
        </SideBar>
      </div>
    </div>
  );
}

export default PageContent;