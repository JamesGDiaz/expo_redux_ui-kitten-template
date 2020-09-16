# Expo SDK 38 Template

This repository contains a template for an Expo managed app using SDK 38.
It includes:
- State managament using Redux
- State persistence using redux-persist
- UI theme from [Kitten-UI](https://akveo.github.io/react-native-ui-kitten/)
- Icon set from [Eva Icons](https://github.com/akveo/eva-icons/)


## Installation

Clone this repository 

```bash
git clone https://github.com/JamesGDiaz/expo_redux_ui-kitten-template.git
```

## Usage

Create a `.env` file in the root folder that contains your necessary environment variables (API secrets, fixed values, etc.).
At the very least, you must define these variables:

```
DEV_HOST=192.168.0.5
DEV_PORT=3001
PRODUCTION_URL=https://yoururl.com
```

Define the variables in `app.config.js` in the `extra` section:
```
import "dotenv/config";

export default {
  ...
  extra: {
    devHost: process.env.DEV_HOST,
    devPort: process.env.DEV_PORT,
    productionUrl: process.env.PRODUCTION_URL,
    ...
  },
};
```

These variables will be available in runtime using the `Constants` package from [Expo](https://docs.expo.io/versions/latest/sdk/constants/).
```javascript
import Constants from "expo-constants";

console.log(Constants.manifest.extra)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)