import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LoginComp} from "../Components/Registration/LoginComp"
import {SignupComp} from "../Components/Registration/SignupComp"
import {RegistrationForm} from "../Components/Registration/SignupComp"

import { auth } from "../Firebase/FirebaseConfig";

import { StoreData } from "../App";

const NavigationComp = () => {

  const user = auth.currentUser;


  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SignupComp"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ResturantLogin" component={LoginComp} />
      <Stack.Screen name="ResturantSignup" component={SignupComp} />
      <Stack.Screen
        name="ResturantRegistrationForm"
        component={RegistrationForm}
      />

    </Stack.Navigator>
  );
};

export default NavigationComp;

const styles = StyleSheet.create({});
