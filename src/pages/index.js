import React from 'react';
import {Button} from 'antd';
import LayoutTemplate from '../templates/layoutTemplate';

const IndexPage = () => {
  return (
    <LayoutTemplate>
      <Button type="primary">Test</Button>
      <h1>Init</h1>
    </LayoutTemplate>
  );
};

export default IndexPage;
