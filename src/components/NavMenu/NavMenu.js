/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'antd';
import MenuItem from './MenuItem';
import AppContext from '../../context';

class NavMenu extends React.Component {
  state = {selectedPage: '1'};

  changePage = e => {
    const {selectedPage} = this.state;
    console.log(e.key);
    this.setState({selectedPage: e.key});

    console.log('selectedPage:', selectedPage);
  };

  render() {
    const {theme} = this.props;
    const {selectedPage} = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <Menu theme={theme} mode="inline" selectedKeys={[selectedPage]}>
            <MenuItem key="1" iconType="twitter" href="/twitter" onClick={e => this.changePage(e)}>
              Twitter
            </MenuItem>
            <MenuItem key="2" iconType="container" href="/article" onClick={e => this.changePage(e)}>
              Artykuły
            </MenuItem>
            <MenuItem key="3" iconType="file-text" href="/note" onClick={e => this.changePage(e)}>
              Notatki
            </MenuItem>
          </Menu>
        )}
      </AppContext.Consumer>
    );
  }
}

NavMenu.defaultProps = {
  theme: 'dark',
};

NavMenu.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
};

export default NavMenu;
