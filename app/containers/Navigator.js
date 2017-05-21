import React, { Component } from 'react';
import { dimensions } from '~/styles';
import NavigationRouter from '~/containers/NavigationRouter';
import Drawer from 'react-native-drawer';
import Menu from '~/components/Menu';
import PropTypes from 'prop-types';

class Navigator extends Component {
  static propTypes = {
    initialScreen: PropTypes.string,
  };
  closeDrawer = () => {
    this._drawer.close();
  };
  openDrawer = () => {
    this._drawer.open();
  };
  getChildContext() {
    return { openDrawer: this.openDrawer };
  }
  render() {
    return (
      <Drawer
        ref={ref => (this._drawer = ref)}
        content={<Menu closeDrawer={this.closeDrawer} />}
        openDrawerOffset={Math.floor(dimensions.screenWidth) - 200}
        styles={drawerStyles}
        tapToClose>
        <NavigationRouter initialScreen={this.props.initialScreen} />
      </Drawer>
    );
  }
}

Navigator.childContextTypes = {
  openDrawer: React.PropTypes.func,
};

export default Navigator;

const drawerStyles = {
  drawer: { shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 0 },
};
