'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import './globals.css';

const theme = createTheme({
  palette: {
    mode: 'light', // Light theme
    primary: {
      main: '#3f51b5',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
