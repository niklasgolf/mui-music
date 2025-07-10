'use client';

import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Page() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" color="primary" align="center">
        Welcome to MUI Music
      </Typography>
      <Button
        component={Link}
        href="/home"
        variant="contained"
        color="primary"
      >
        Go to Home
      </Button>
    </Box>
  );
}
