import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
      <Container maxWidth="lg" sx={{py:6, flexShrink: 0, height:'60px'}}>
          <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="/">
                  AnTimber
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
          </Typography>
      </Container>
  );
}
