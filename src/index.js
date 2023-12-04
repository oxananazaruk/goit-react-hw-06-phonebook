import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    background: '#F6F6F6',
    green: '#008000',
    red: '#FF0000',
    black: '#2a2a2a',
    blue: '#87CEEB',
    white: '#FFFAFA',
  },
  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
