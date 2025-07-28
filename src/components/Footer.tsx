import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '40px', padding: '20px' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} CraftedbyHoi. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;