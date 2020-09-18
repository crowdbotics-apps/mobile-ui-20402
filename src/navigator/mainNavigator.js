import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings103490Navigator from '../features/Settings103490/navigator';
import Messaging1103487Navigator from '../features/Messaging1103487/navigator';
import EmailAuth2103486Navigator from '../features/EmailAuth2103486/navigator';
import Feed3103485Navigator from '../features/Feed3103485/navigator';
import SignUp27103482Navigator from '../features/SignUp27103482/navigator';
import NotificationList8103481Navigator from '../features/NotificationList8103481/navigator';
import Settings10103479Navigator from '../features/Settings10103479/navigator';
import CalendarView11103478Navigator from '../features/CalendarView11103478/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings103490: { screen: Settings103490Navigator },
Messaging1103487: { screen: Messaging1103487Navigator },
EmailAuth2103486: { screen: EmailAuth2103486Navigator },
Feed3103485: { screen: Feed3103485Navigator },
SignUp27103482: { screen: SignUp27103482Navigator },
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
