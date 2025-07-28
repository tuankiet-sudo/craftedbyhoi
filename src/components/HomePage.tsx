import { Button, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <ImageCarousel />
      
      {/* Introductory Sections */}
      <Container maxWidth={false} style={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          <Grid size={{xs: 12, md: 4}}>
            <img
              src="https://example.com/your-about-us-image.jpg" // Replace with your image
              alt="About Us"
              style={{ width: '100%', height: 'auto' }}
            />
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography paragraph>
              Learn more about our story and our passion for board games.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/gioi-thieu"
            >
              Read More
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <img
              src="https://example.com/your-products-image.jpg" // Replace with your image
              alt="Products"
              style={{ width: '100%', height: 'auto' }}
            />
            <Typography variant="h6" gutterBottom>
              Our Products
            </Typography>
            <Typography >
              Check out our unique collection of board games.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/san-pham"
            >
              View Products
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <img
              src="https://example.com/your-donation-image.jpg" // Replace with your image
              alt="Donation"
              style={{ width: '100%', height: 'auto' }}
            />
            <Typography variant="h6" gutterBottom>
              Support Us
            </Typography>
            <Typography >
              Your donations help us create more amazing games.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/quyen-gop"
            >
              Donate
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;