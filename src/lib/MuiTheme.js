import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const MuiTheme = ({ children }) => {

    const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        // const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        // if (userMedia.matches) {
        //     return 'dark';
        // }
    }

    return 'dark';
};

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
            mode: getInitialTheme()
        //   mode: prefersDarkMode ? 'light' : 'dark',
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
