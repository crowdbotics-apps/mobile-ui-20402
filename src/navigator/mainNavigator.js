import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList8103481Navigator from '../features/NotificationList8103481/navigator';
import Settings10103479Navigator from '../features/Settings10103479/navigator';
import CalendarView11103478Navigator from '../features/CalendarView11103478/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList8103481: { screen: NotificationList8103481Navigator },
Settings10103479: { screen: Settings10103479Navigator },
CalendarView11103478: { screen: CalendarView11103478Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
