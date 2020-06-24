import React from 'react';
import AppNavigator from './navigator/App/AppNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';

const rootReducer = createStore(reducer);

export default function App() {
  return (
    <Provider store={rootReducer}>
      <AppNavigator />
    </Provider>
  );
}
