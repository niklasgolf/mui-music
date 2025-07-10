'use client';

import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h4" color="primary">
        Welcome to the Home Page
      </Typography>
    </Box>
  );
}
