import * as React from 'react';
import 'react-native-gesture-handler';


import
MaterialCommunityIcons
    from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/home';
import DetailsScreen from './pages/details';
import ProfileScreen from './pages/login';
import Lista from './pages/lista';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: '#8901CF' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
           
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Pagina de Detalhes' }} />
            <Stack.Screen     name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }} />
            <Stack.Screen
                name="Login"
                component={ProfileScreen}
                options={{ title: 'Login' }} />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ title: 'Pagina de Cadastro' }} />
            <Stack.Screen
                name="Lista"
                component={Lista}
                options={{ title: 'Listas' }} />
        </Stack.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerStyle: { backgroundColor: '#8901CF' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Login' }} />

        </Stack.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: '#8901CF',
                }}>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />

                        ),
                    }} />
                <Tab.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;

