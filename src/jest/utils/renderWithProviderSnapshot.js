import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { configureStore } from 'store';

const renderWithProviderSnapshot = (
  uiComponent,
  { initialState, store = configureStore(initialState, { isServer: false }) } = {},
) => {
  return renderer.create(<Provider store={store}>{uiComponent}</Provider>);
};

export default renderWithProviderSnapshot;
