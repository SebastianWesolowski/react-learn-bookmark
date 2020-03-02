/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'antd';
import MenuItem from './MenuItem';
import AppContext from '../../context';

class NavMenu extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedPage: '1',
  //   };
  // }
  state = {
    selectedPage: '1',
  };

  // {selectedPage} = this.state;
  handleChange = e => {
    this.setState({selectedPage: 'e.key'});
    console.log(e.key);
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.selectedPage = e.key;
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.selectedPage);
  };

  // changePage(e) {
  //   this.setState({selectedPage: e.key});
  // }

  render() {
    const {theme} = this.props;
    const {selectedPage} = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <>
            <Menu theme={theme} mode="inline" selectedKeys={[selectedPage]}>
              <MenuItem key="1" iconType="twitter" href="/twitter" onClick={this.handleChange}>
                Twitter
              </MenuItem>
              <MenuItem key="2" iconType="container" href="/article" onClick={this.handleChange}>
                Artykuły
              </MenuItem>
              <MenuItem key="3" iconType="file-text" href="/note" onClick={this.handleChange}>
                Notatki
              </MenuItem>
            </Menu>
          </>
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
