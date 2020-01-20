import React, {Component} from 'react';
import Router from './src/drawer/routes';
import {AppRegistry, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import page1 from '../drawer/src/screens/page1';
import page2 from '../drawer/src/screens/page2';
import page3 from '../drawer/src/screens/page3';
import nativepage from '../drawer/src/screens/nativepage';
import webpage from '../drawer/src/screens/webpage';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomStack = createStackNavigator(
  {
    page1: {
      screen: page1,
    },
    page2: {
      screen: page2,
    },
  },
  {
    initialRouteName: 'page1',

    defaultNavigationOptions: ({navigation}) => {
      return {
        headerStyle: {
          backgroundColor: '#e33f36',
        },
        headerLeft: () => (
          <Icon
            style={{paddingLeft: 10}}
            // onPress={() => navigation.openDrawer()}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            name="md-menu"
            color="#fff"
            size={30}
          />
        ),
      };
    },
  },
);
const NativeStack = createStackNavigator(
  {
    NativePage: {
      screen: nativepage,
    },
  },
  {
    initialRouteName: 'NativePage',

    defaultNavigationOptions: ({navigation}) => {
      return {
        headerStyle: {
          backgroundColor: '#e33f36',
        },
        headerLeft: () => (
          <Icon
            style={{paddingLeft: 10}}
            // onPress={() => navigation.openDrawer()}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            name="md-menu"
            color="#fff"
            size={30}
          />
        ),
      };
    },
  },
);
const WebStack = createStackNavigator(
  {
    webpage: {
      screen: webpage,
    },
  },
  {
    initialRouteName: 'webpage',

    defaultNavigationOptions: ({navigation}) => {
      return {
        headerStyle: {
          backgroundColor: '#e33f36',
        },
        headerLeft: () => (
          <Icon
            style={{paddingLeft: 10}}
            // onPress={() => navigation.openDrawer()}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            name="md-menu"
            color="#fff"
            size={30}
          />
        ),
      };
    },
  },
);
const CustomDrawer = createDrawerNavigator(
  {
    Dashboard: {screen: CustomStack},
    NativePage: {screen: NativeStack},
    Webpage: {screen: WebStack},
    Webpage2: {screen: WebStack},
  },
  {
    initialRouteName: 'Dashboard',
  },
  {
    contentComponent: CustomStack,
    drawerWidth: 320,
  },
);

const AppContainer = createAppContainer(CustomDrawer);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
// export default App;
// AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);
