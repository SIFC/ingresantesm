import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import{createStackNavigator } from 'react-navigation-stack';
import Home from "./src/Home";
import Taller from "./src/Taller";
import Login from "./src/Login";
const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Login: {
   screen: Login
  },
  Taller: {
    screen: Taller
   }
  });
export default createAppContainer(Project);