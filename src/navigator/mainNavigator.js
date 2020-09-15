import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item101738Navigator from '../features/Add-Item101738/navigator';
import Maps101734Navigator from '../features/Maps101734/navigator';
import UserProfile101730Navigator from '../features/UserProfile101730/navigator';
import BlankScreen1101707Navigator from '../features/BlankScreen1101707/navigator';
import BlankScreen0101706Navigator from '../features/BlankScreen0101706/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item101738: { screen: Add-Item101738Navigator },
Maps101734: { screen: Maps101734Navigator },
UserProfile101730: { screen: UserProfile101730Navigator },
BlankScreen1101707: { screen: BlankScreen1101707Navigator },
BlankScreen0101706: { screen: BlankScreen0101706Navigator },

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
