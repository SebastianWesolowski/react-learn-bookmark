import React from 'react';
import {Menu} from 'antd';
import MenuItem from './MenuItem';

const NavMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <MenuItem key="1" iconType="twitter">
        Titter
      </MenuItem>
      <MenuItem key="2" iconType="container">
        Artykuły
      </MenuItem>
      <MenuItem key="3" iconType="file-text">
        Notatki
      </MenuItem>
    </Menu>
  );
};

export default NavMenu;
