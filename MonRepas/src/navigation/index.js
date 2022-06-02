import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { Platform, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';
import Profile from '../screens/Profile';
import Pharmacies from '../screens/Pharmacies';
import { TabBarIcon, MapButton } from '../components/index';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FoodInfo } from "../screens/FoodInfo";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
            Icon={<Ionicons name="heart-outline" size={24} color="black" />}
              name='Profile'
              source={require('../../assets/png/user.png')}
              isFocuse={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Tasks'
        component={Pharmacies}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name='Tasks'
              source={require('../../assets/png/task.png')}
              isFocuse={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          title: "Remindely",
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#000',
          headerTitleStyle: {
            color: COLORS.primary,
            ...FONTS.h2,
          },
          tabBarIcon: ({ focused }) => <MapButton isFocuse={focused} />,
        }}
      />
      <BottomTab.Screen
        name='Commande'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name='Favoris'
              source={require('../../assets/png/heart.png')}
              isFocuse={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name='Réglages'
              source={require('../../assets/png/settings.png')}
              isFocuse={focused}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="FoodInfo"
        component={FoodInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


function FoodNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FoodInfo"
        component={FoodInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
