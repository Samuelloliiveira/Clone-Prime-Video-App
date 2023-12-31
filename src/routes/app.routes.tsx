import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Downloads } from '../screens/Downloads'
import { MyPrime } from '../screens/MyPrime'
import { DetailsMovie } from '../screens/DetailsMovie'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2D3743',
          height: 60,
          borderTopWidth: 0,
          paddingTop: 8,
          paddingBottom: 8
        },
        tabBarActiveTintColor: "#1793BF",
        tabBarInactiveTintColor: "#AFBBC6",
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={25} color={color} />,
          tabBarLabel: "Início",
          tabBarLabelStyle: {
            fontSize: 13
          },
        }}
      />
      <Screen
        name="downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="file-download" size={25} color={color} />,
          tabBarLabel: "Downloads",
          tabBarLabelStyle: {
            fontSize: 13
          }
        }}
      />
      <Screen
        name="myprime"
        component={MyPrime}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="play-arrow" size={25} color={color} />,
          tabBarLabel: "Meu prime",
          tabBarLabelStyle: {
            fontSize: 13
          }
        }}
      />
      <Screen
        name="detailsMovie"
        component={DetailsMovie}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
}
