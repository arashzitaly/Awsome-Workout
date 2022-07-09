import React from 'react';
import {Platform, View, Text, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// ====================== Auth Screens
import SignUp from '@screen/auth/SignUp';
import Login from '@screen/auth/Login';
import ForgetPassword from '@screen/auth/ForgetPassword';
import Splash from '@screen/auth/Splash';
import {stringHelper} from '@utility/helper/stringHelper';
import {Colors} from '@utility/constants/Colors';
import {useHiddenTabs} from './navigationService';
import Workout from '@screen/workout/Workout';
import Profile from '@screen/workout/Profile';
import Area from "@screen/workout/Area";
import Intensity from "@screen/workout/Intensity";
import { TimerComponent } from "@screen/workout/timerComponent";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenNames = stringHelper.screens;
const routesWithTab = [screenNames.Workout];
const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={screenNames.signup} component={SignUp} />
      <Stack.Screen name={screenNames.login} component={Login} />
      <Stack.Screen
        name={screenNames.forgetPassword}
        component={ForgetPassword}
      />
    </Stack.Navigator>
  );
};

const WorkoutStack = () => {
  useHiddenTabs(routesWithTab, screenNames.Workout);

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={screenNames.Workout} component={Workout} />

      <Stack.Screen name={screenNames.timerComponent} component={TimerComponent} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  useHiddenTabs(routesWithTab, screenNames.Workout);

  return (
    <Stack.Navigator headerMode="none">

      <Stack.Screen name={screenNames.Workout} component={Profile} />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  const tabBarIcon = (tabName, normalName, focusedName, focused) => {
    const styles = {
      itemBoxStyle: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    };

    const color = focused ? '#0093fd' : Colors.DATE_COLOR;
    return (
      <View style={styles.itemBoxStyle}>
        <Image
          size={28}
          name={focused ? focusedName : normalName}
          color={color}
        />
        <Text style={{color: color, fontSize: 13}}>{tabName}</Text>
      </View>
    );
  };

  const tabBarOptions = {
    showIcon: true,
    showLabel: false,
    inactiveBackgroundColor:  Colors.DATE_COLOR,
    activeBackgroundColor: Colors.DATE_COLOR,
    style: {
      height: 70,
      backgroundColor:  Colors.DATE_COLOR,
      borderTopWidth: 1,
      borderTopColor: '#4e4f5d',
      paddingBottom: 12,
      paddingTop: 5,
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={screenNames.Workout}
      tabBarOptions={tabBarOptions}
      options={{tabBarLabel: 'Home!'}}
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
          headerForceInset: {top: 0, bottom: 'never'},
        },
      }}>
      <Tab.Screen
        name={screenNames.Workout}
        component={WorkoutStack}
        options={{
          tabBarIcon: ({focused}) =>
            tabBarIcon('Workout', 'Workout', 'Sessions-Fill', focused),
        }}
      />
      <Tab.Screen
        name={screenNames.profile}
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) =>
            tabBarIcon('profile', 'profile', 'Sessions-Fill', focused),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={screenNames.intensity} component={Intensity} />
      <Stack.Screen name={screenNames.area} component={Area} />
      <Stack.Screen name={screenNames.tabNavigator} component={TabNavigator} />
      {/*<Stack.Screen name={screenNames.session} component={Session} />*/}
      {/*<Stack.Screen*/}
      {/*  name={screenNames.readOnlySession}*/}
      {/*  component={ReadOnlySession}*/}
      {/*/>*/}
      {/*<Stack.Screen name={screenNames.sessionInfo} component={SessionInfo} />*/}

      {/*<Stack.Screen name={screenNames.partsList} component={PartsList} />*/}
      {/*<Stack.Screen name={screenNames.partDetails} component={PartDetails} />*/}
      {/*<Stack.Screen name={screenNames.partColors} component={PartColors} />*/}
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.splash} headerMode="none">
      <Stack.Screen name={screenNames.splash} component={Splash} />
      <Stack.Screen name={screenNames.mainStack} component={MainNavigator} />
      <Stack.Screen name={screenNames.authStack} component={AuthStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
