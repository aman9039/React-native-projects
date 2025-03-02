import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native"
import { StackParmsList } from "./stackNavigationDemo";
import { useNavigation } from "@react-navigation/native";

export type StackScreen1NavigationProps = StackNavigationProp<StackParmsList,'StackScreen1'>;

const StackScreen1 : React.FC = () => {
    const navigation = useNavigation<StackScreen1NavigationProps>();
    return (
        <View>
            <Text>StackScreen 1</Text>
            <Button onPress={()=> navigation.navigate('StackScreen2',{itemId : 105,name:"aman"})} title="Go to Screen 2"/>
        </View>
    )
};

export default StackScreen1;