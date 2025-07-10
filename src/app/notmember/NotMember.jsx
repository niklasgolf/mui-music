'use client';

import { Box } from '@mui/material';

export default function NotMember() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>You are not a member!</h1>
    </Box>
  );
}