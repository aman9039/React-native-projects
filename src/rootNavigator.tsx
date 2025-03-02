


import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/homeScreen";
import StackNavigationDemo from "./components/stack/stackNavigationDemo";

export type rootStackParmsList = {
  Home: undefined;
  StackDemo: undefined;
};


// create a stack
const Stack = createStackNavigator<rootStackParmsList>();

const RootNavigator: React.FC = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
      </Stack.Navigator>  
    )
};

export default RootNavigator;