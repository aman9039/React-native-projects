import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/homeScreen";
import StackNavigationDemo from "./components/stack/stackNavigationDemo";
import TabNavigationDemo from "./tab/tabNavigationDemo";
import DrawerNavigationDemo from "./components/drawer/drawerNavigationDemo";


export type rootStackParmsList = {
  Home: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
  DrawerDemo : undefined;
};


// create a stack
const Stack = createStackNavigator<rootStackParmsList>();

const RootNavigator: React.FC = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
        <Stack.Screen name="TabDemo" component={TabNavigationDemo}/>
        <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo}/>
      </Stack.Navigator>  
    )
};

export default RootNavigator;