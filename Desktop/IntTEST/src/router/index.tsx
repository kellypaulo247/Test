import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabs } from './bottomTabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Test" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
