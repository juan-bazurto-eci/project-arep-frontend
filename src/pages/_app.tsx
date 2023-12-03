import React, { useEffect, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import { Router } from "next/router";

// CSS FILES
import "@/styles/nprogress.css";
import createEmotionCache from "@/createEmotionCache";
import { ThemeSettings } from "@/theme/Theme";
import Store from "@/store/Store";
import FullLayout from "@/components/templates/FullLayout";
import BlankLayout from "@/components/templates/BlankLayout";
import { useAuth, AuthProvider } from "@/context/authContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const layouts: any = {
  Blank: BlankLayout,
  Full: FullLayout,
};

const MyApp = (props: MyAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  }: any = props;
  const theme = ThemeSettings();
  const { user } = useAuth();
  const [layout, setLayout] = useState<string>("Blank");
  useEffect(() => {
    if (user) {
      setLayout(Component.layout || "Full");
    } else {
      setLayout("Blank");
    }
  }, [user, Component.layout]);
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  const Layout = layouts[layout] || FullLayout;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Medical Learning</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

MyApp.displayName = "MyApp";

const WrappedApp = (props: MyAppProps) => (
  <Provider store={Store}>
    <AuthProvider>
      <MyApp {...props} />
    </AuthProvider>
  </Provider>
);

WrappedApp.displayName = "WrappedApp";

export default WrappedApp;
