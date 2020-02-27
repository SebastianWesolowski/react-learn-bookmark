import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'antd';
import MenuItem from './MenuItem';

const NavMenu = ({theme, ...props}) => {
  return (
    <>
      <Menu theme={theme} {...props} mode="inline" defaultSelectedKeys={['1']}>
        <MenuItem key="1" iconType="twitter" href="/twitter">
          Twitter
        </MenuItem>
        <MenuItem key="2" iconType="container" href="/article">
          Artykuły
        </MenuItem>
        <MenuItem key="3" iconType="file-text" href="/note">
          Notatki
        </MenuItem>
      </Menu>
    </>
  );
};

NavMenu.defaultProps = {
  theme: 'dark',
};

NavMenu.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
};

export default NavMenu;
