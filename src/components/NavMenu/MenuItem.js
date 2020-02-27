import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon} from 'antd';
import {Link} from 'gatsby';

const MenuItem = ({children, key, iconType, href, ...props}) => {
  return (
    <Menu.Item key={key} {...props}>
      <Link to={href}>
        <Icon type={iconType} />
        <span className="nav-text">{children}</span>
      </Link>
    </Menu.Item>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  key: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MenuItem;
