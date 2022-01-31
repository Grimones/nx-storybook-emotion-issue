import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={{ textColor: 'red' }}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
