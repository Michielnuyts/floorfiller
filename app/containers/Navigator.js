import React, { Component } from 'react';
import { dimensions } from '~/styles';
import NavigationRouter from '~/containers/NavigationRouter';
import Drawer from 'react-native-drawer';
import Menu from '~/components/Menu';

export default class Navigator extends Component {
  closeDrawer = () => {
    this._drawer.close();
  };
  openDrawer = () => {
    this._drawer.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => this._drawer = ref}
        content={<Menu closeDrawer={this.closeDrawer} />}
        openDrawerOffset={dimensions.screenWidth - 200}
        styles={drawerStyles}
        tapToClose>
        <NavigationRouter openDrawer={this.openDrawer} />
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 0 },
};
