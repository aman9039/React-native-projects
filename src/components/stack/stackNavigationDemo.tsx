import { createStackNavigator } from "@react-navigation/stack";
import StackScreen1 from "./stackScreen1";
import StackScreen2 from "./stackScreen2";

export type StackParmsList = {
    StackScreen1 : undefined,
    StackScreen2: {
        itemId : number,
        name: string,
    }
}

const Stack = createStackNavigator<StackParmsList>();

const StackNavigationDemo : React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{title : 'stack screen one'}} name="StackScreen1" component={StackScreen1}  />

            <Stack.Screen options={({route}) => ({title: `item ${route.params.itemId}`})} name="StackScreen2" component={StackScreen2}  />
        </Stack.Navigator>
    );
}

export default StackNavigationDemo