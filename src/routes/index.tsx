import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/Welcome/Welcome";
import SignIn from "../screens/SignIn/SignIn";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{
          headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
