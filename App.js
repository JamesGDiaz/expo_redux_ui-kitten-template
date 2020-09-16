import { StatusBar } from "expo-status-bar";
import React from "react";
import {SafeAreaView} from 'react-native'
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./components/navigation";
import { ThemeContext } from "./components/theme-context";

export default function App() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <>
    <StatusBar />
    <SafeAreaView style={{flex:1}}>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaView>
    </>
  );
}
