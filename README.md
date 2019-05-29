# Zemoga Mobile Test

## How to run

```
# Run in iPhone 8 simulator
yarn ios # use yarn
npm run ios # use npm
```

```
# Run in Android device
yarn android # use yarn
npm run android # use npm
```

## Structure

```
# Run in Android device
---src
    |--Interfaces # Interfaces to validate data structure
    |--Navigation # Navigation configuration.
    |--Screens # Screens components.
    |--Utils 
        |--utils # some functions or helpers.
        |--Requester # Class to manage all http requests .
    |--Store # all Redux implementation, are organized by knowledge domain.
    |--Theme # Everything related to styles: colors, global styles, themes, etc.

```

## Third-party libs

- [`axios:`](https://github.com/axios/axios) 
- [`react-native-gesture-handler:`](https://github.com/kmagiera/react-native-gesture-handler) 
- [`react-native-vector-icons:`](https://github.com/oblador/react-native-vector-icons) 
- [`react-navigation:`](https://reactnavigation.org/)
- [`redux:`](https://github.com/reduxjs/redux)
- [`react-redux:`](https://github.com/reduxjs/react-redux)
- [`redux-saga:`](https://redux-saga.js.org/)
- [`react-native-material-tabs`](https://github.com/iRoachie/react-native-material-tabs)
- [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)
