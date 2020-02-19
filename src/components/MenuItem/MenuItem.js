import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon} from 'antd';

const MenuItem = ({children, key, iconType, ...props}) => {
  return (
    <Menu.Item key={key} {...props}>
      <Icon type={iconType} />
      <span className="nav-text">{children}</span>
    </Menu.Item>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  key: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
};

export default MenuItem;
