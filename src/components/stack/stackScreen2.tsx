import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {StackParmsList} from './stackNavigationDemo';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

export type StackScreen2NavigationProps = StackNavigationProp<
  StackParmsList,
  'StackScreen2'
>;
export type StackScreen2Props = RouteProp<StackParmsList, 'StackScreen2'>;

const StackScreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProps>();
  const route = useRoute<StackScreen2Props>();
  return (
    <View>
      <Text>StackScreen 2</Text>
      <Text>Item Id : {route.params.itemId}</Text>
      <Text>name : {route.params.name}</Text>
      <Button title='Go back to Screen 1' onPress={() => navigation.goBack()}/>
    </View>
  );
};

export default StackScreen2;
