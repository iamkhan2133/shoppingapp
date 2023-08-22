
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/AntDesign';
import shop from 'react-native-vector-icons/Entypo';
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Buying from "./Screens/Buying";
import Myinfo from "./Screens/Myinfo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const App = () => {
  let presistor = persistStore ()
  const TabNav = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="home"
                size={19}
                color={'#ED6767'} /> // Render the icon here
            ),

          }} />
        <Tab.Screen name="Cart" component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="menufold"
                size={19}
                color={'lightgray'} />
            )
          }}
        />
        <Tab.Screen name="Buying" component={Buying}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="shoppingcart"
                size={20}
                color={'lightgray'} />
            )
          }}
        />
        <Tab.Screen name="Myinfo" component={Myinfo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="user"
                size={19}
                color={'lightgray'} />
            )
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <Provider>
      <PersistGate loading={null} presistor={presistor}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNav} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="buying" component={Buying} />
        <Stack.Screen name="myinfo" component={Myinfo} />

      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  )
};
export default App;
