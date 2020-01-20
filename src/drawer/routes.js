import page1 from '../screens/page1';
import Page2 from '../screens/page2';
import Page3 from '../screens/page3';
import {createDrawerNavigator} from 'react-navigation-drawer';

export default createDrawerNavigator({
  Page1: {
    screen: page1
  },
  Page2: {
    screen: Page2
  },
  Page3: {
    screen: Page3
  }
}, {
  drawerWidth: 300
});