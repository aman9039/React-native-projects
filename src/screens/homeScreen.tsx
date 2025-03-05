import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { rootStackParmsList } from "../rootNavigator";

export type HomeScreenNavigationProps = StackNavigationProp<rootStackParmsList,'Home'>

const HomeScreen: React.FC = () => {

    const navigation = useNavigation<HomeScreenNavigationProps>();
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Home Screen</Text>
            <Button onPress={()=>navigation.navigate('StackDemo')} title="Stack Navigation Demo"/>
            <Button onPress={()=>navigation.navigate('TabDemo')} title="Tab Navigation Demo"/>
            <Button onPress={()=>navigation.navigate('DrawerDemo')} title="Drawer Navigation Demo"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default HomeScreen;