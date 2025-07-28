//import { Button, Typography, Container, Grid } from '@mui/material';
//import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import Ticker from './Ticker';
import InfoSection from './InfoSection';
import AboutSection from './AboutSection';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <ImageCarousel />

      <Ticker />

      <InfoSection />

      <AboutSection />

    </div>
  );
};

export default HomePage;