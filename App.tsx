import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import Read from './screens/Read';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: ' হনুমান চালিশা ',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'tirobangla_regular',
          },
        }}
        name="Read"
        component={Read}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
