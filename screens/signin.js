import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Input,
  Button,
} from "@ui-kitten/components";

import axios from "axios";
import { connect } from "react-redux";
import {
  setAuth,
  setUrl,
  setLoading,
  setUser,
} from "../actions/connectionActions";

export const SignInScreen = ({ navigation }) => {
  const navigateSignup = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">Iniciar Sesion</Text>
        <Divider />
        <Input placeholder="Email" />
        <Input placeholder="Contraseña" />
        <Button>Iniciar Sesion</Button>
        <Button onPress={navigateSignup}>Registrate</Button>
      </Layout>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    url: state.url,
    authenticated: state.authenticated,
    isLoading: state.isLoading,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (authenticated) => {
      dispatch(setAuth(authenticated));
    },
    setUrl: (url) => {
      dispatch(setUrl(url));
    },
    setLoading: (loading) => {
      dispatch(setLoading(loading));
    },
    setUser: (user) => {
      dispatch(setUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
