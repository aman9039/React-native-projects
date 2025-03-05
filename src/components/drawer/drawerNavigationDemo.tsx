import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import { Button, Text, View } from "react-native";

export type DrawerParmsList =  {
    DrawerScreen1 : undefined;
    DrawerScreen2 : undefined;
};

const Drawer = createDrawerNavigator<DrawerParmsList>();

type DrawerScreen1Props = {
 navigation : DrawerNavigationProp<DrawerParmsList,'DrawerScreen1'>
};

type DrawerScreen2Props = {
 navigation : DrawerNavigationProp<DrawerParmsList,'DrawerScreen2'>
};

const DrawerScreen1 : React.FC<DrawerScreen1Props> = ({navigation}) => {
    console.log(navigation);
    
    return (
        <View>
            <Text>Drawer screen 1</Text>
            <Button title="open Drawer" onPress={() => navigation.openDrawer()}/>
        </View>
    );
};
const DrawerScreen2 : React.FC<DrawerScreen2Props> = ({navigation}) => {
    return (
        <View>
            <Text>Drawer screen 2</Text>
            <Button title="open Drawer" onPress={() => navigation.openDrawer()}/>
        </View>
    );
};

const DrawerNavigationDemo : React.FC = () => {
   return <Drawer.Navigator>
   <Drawer.Screen  name="DrawerScreen1" component={DrawerScreen1}/>
   <Drawer.Screen  name="DrawerScreen2" component={DrawerScreen2}/>
   </Drawer.Navigator>
};


export default DrawerNavigationDemo;