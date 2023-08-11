import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Downloads } from '../screens/Downloads'
import { MyPrime } from '../screens/MyPrime'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2D3743',
          height: 70,
          borderTopWidth: 0,
          paddingTop: 8,
          paddingBottom: 8
        },
        tabBarActiveTintColor: "#1793BF",
        tabBarInactiveTintColor: "#AFBBC6",
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={30} color={color} />,
          tabBarLabel: "Início",
          tabBarLabelStyle: {
            fontSize: 13
          },
        }}
      />
      <Tab.Screen
        name="downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="file-download" size={30} color={color} />,
          tabBarLabel: "Downloads",
          tabBarLabelStyle: {
            fontSize: 13
          }
        }}
      />
      <Tab.Screen
        name="myprime"
        component={MyPrime}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="play-arrow" size={30} color={color} />,
          tabBarLabel: "Meu prime",
          tabBarLabelStyle: {
            fontSize: 13
          }
        }}
      />
    </Tab.Navigator>

  )
}