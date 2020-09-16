import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

/* theme */
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import AppNavigator from "./components/navigation";
import { ThemeContext } from "./components/theme-context";

/* redux */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

/* axios*/
import axios from "axios";
axios.defaults.withCredentials = true;

function App(props) {
  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);

  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar />
        <SafeAreaView style={{ flex: 1 }}>
          <IconRegistry icons={EvaIconsPack} />
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ApplicationProvider {...eva} theme={eva[theme]}>
              <SafeAreaProvider>
                <AppNavigator />
              </SafeAreaProvider>
            </ApplicationProvider>
          </ThemeContext.Provider>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}



export default App;
