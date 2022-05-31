/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { EvilIcons, FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import ChatScreen from '../screens/ChatScreen'
import StatusScreen from '../screens/StatusScreen'
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import { Text, View } from '../components/Themed'
import { Feather, Fontisto } from '@expo/vector-icons'
import CallsScreen from '../screens/CallsScreen'
import CameraScreen from '../screens/CameraScreen'

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.light.tint,
                },
            }}
        >
            <Stack.Screen
                name="WhatsApp"
                component={MyTabs}
                options={{
                    headerShadowVisible: false,
                    headerRight: () => (
                        <>
                            <TouchableOpacity>
                                <EvilIcons
                                    name="search"
                                    size={28}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather
                                    name="more-vertical"
                                    size={24}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </>
                    ),
                }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

const Tab = createMaterialTopTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Chat"
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                tabBarStyle: { backgroundColor: Colors.light.tint },
                tabBarIndicatorStyle: {
                    height: 4,
                    backgroundColor: '#fff',
                },
            }}
        >
            <Tab.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Fontisto name="camera" size={15} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{ tabBarLabel: 'Chat' }}
            />
            <Tab.Screen
                name="Status"
                component={StatusScreen}
                options={{ tabBarLabel: 'Status' }}
            />
            <Tab.Screen
                name="Calls"
                component={CallsScreen}
                options={{ tabBarLabel: 'Calls' }}
            />
        </Tab.Navigator>
    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name']
    color: string
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
