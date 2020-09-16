import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home";
import { DetailsScreen } from "../screens/details";
import SplashScreen from "../screens/splash";
import SignInScreen from "../screens/signin";
import SignUpScreen from "../screens/signup";
import { connect } from "react-redux";
import { setAuth, setUrl, setLoading } from "../actions/connectionActions";

const Stack = createStackNavigator();

function AppNavigator(props) {
  if (props.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {props.authenticated == false ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: "Iniciar Sesion",
              animationTypeForReplace: props.isSignout ? "pop" : "push",
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              title: "Registrate",
            }}
          />
        </Stack.Navigator>
      ) : (
        // User is signed in
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    url: state.url,
    authenticated: state.authenticated,
    isLoading: state.isLoading,
    isSignout: false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (authenticated) => {
      dispatch(setAuth(authenticated));
    },
    setLoading: (loading) => {
      dispatch(setLoading(loading));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
