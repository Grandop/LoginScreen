import React from "react";
import Routes from "./routes";
import { StatusBar } from "react-native";

export default function App() {
  return(
    <>
    <StatusBar backgroundColor="#7209b7" barStyle="light-content" />
    <Routes/>
    </>
  );
}