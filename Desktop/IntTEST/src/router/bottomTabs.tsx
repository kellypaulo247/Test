import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculatorScreen from '../pages/answers/challenge1';
import NavbarScreen from '../pages/answers/challenge2';
import { TwoSumScreen } from '../pages/answers/challenge3';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Challenge 1" component={CalculatorScreen} />
      <Tab.Screen name="Challenge 2" component={NavbarScreen} />
      <Tab.Screen name="Challenge 3" component={TwoSumScreen} />
    </Tab.Navigator>
  );
} 