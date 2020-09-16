import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Divider, Icon, Layout, Text, Spinner } from "@ui-kitten/components";

import Constants from "expo-constants";
import axios from "axios";
import { connect } from "react-redux";
import {
  setAuth,
  setUrl,
  setLoading,
  setUser,
} from "../actions/connectionActions";

function SplashScreen(props) {
  const setUrl = () => {
    let url = "";
    if (__DEV__) {
      url = `http://${Constants.manifest.extra.devHost}:${Constants.manifest.extra.devPort}`;
    } else {
      url = Constants.manifest.extra.productionUrl;
    }
    props.setUrl(url);
  };
  const checkLogin = async () => {
    axios.interceptors.response.use(undefined, (error) => {
      console.error(error);
      if (error.response.status === 401) {
        props.setAuth(false);
        return Promise.reject(error);
      }
    });
    const authenticated = await axios.post(`${props.url}/api/auth/check`);
    props.setAuth(authenticated.data.success);
    props.setUser(authenticated.data.user);
  };

  useEffect(() => {
    setUrl();
    checkLogin();
    props.setLoading(false);
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Spinner />
        <Text category="h1">Loading...</Text>
      </Layout>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    url: state.url,
    authenticated: state.authenticated,
    isLoading: state.isLoading,
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
