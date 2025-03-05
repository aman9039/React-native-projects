import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen1 from "./tabScreen1";
import TabScreen2 from "./tabScreen2";

export type BottomTamParmsList = {
    TabScreen1 : undefined,
    TabScreen2 : undefined,
}
const BottomTab = createBottomTabNavigator<BottomTamParmsList>();

const TabNavigationDemo : React.FC = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="TabScreen1" component={TabScreen1} />
            <BottomTab.Screen name="TabScreen2" component={TabScreen2} />
        </BottomTab.Navigator>
    )
};

export default TabNavigationDemo;