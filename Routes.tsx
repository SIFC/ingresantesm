import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import{createStackNavigator } from 'react-navigation-stack';
import Home from "./src/Home";
import Taller from "./src/Taller";
import Login from "./src/Login";
import Taller_detalles from "./src/Taller_detalles";
import Alumno from "./src/Alumno";
const Project= createStackNavigator({
  // Home: {
  //   screen: Home
  //  },

  Login: {
    screen: Login
   },

  Taller: {
    screen: Taller
   },

   Taller_detalles: {
    screen: Taller_detalles
   },

   Alumno: {
    screen: Alumno
   }
  
  });
export default createAppContainer(Project);