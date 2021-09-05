import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Screens/redux/Store/store';
import Auth from './Screens/Screen/Authentication/Auth';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
let persistor = persistStore(store);

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Auth />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Provider store={store}>
//         <Auth />
//       </Provider>
//     </NavigationContainer>
//   );
// };

export default App;
