'use client';

import { Container, Paper, Typography, Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
          bgcolor: '#fffde7',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Welcome to MUI Music
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Start your music journey now.
        </Typography>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" onClick={() => router.push('/home')}>
            Home
          </Button>
          <Button variant="outlined" color="error" onClick={() => router.push('/notmember')}>
            Not a Member
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
