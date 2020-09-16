import "dotenv/config";

export default {
  name: "Psique Care",
  slug: "psique-care",
  version: "0.0.1",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    devHost: process.env.DEV_HOST,
    devPort: process.env.DEV_PORT,
    productionUrl: process.env.PRODUCTION_URL,
  },
};
