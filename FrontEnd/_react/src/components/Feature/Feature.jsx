import React from 'react';
import Layout from '../../template/Layout';
import ItemsListContainer from '../../containers/ItemsListContainer';

const Feature = () => {
  return (
    <Layout pageTitle="Read Redux"  pageSubTitle="Um exemplo">
         <ItemsListContainer></ItemsListContainer>     
    </Layout>
  );
};

export default Feature;