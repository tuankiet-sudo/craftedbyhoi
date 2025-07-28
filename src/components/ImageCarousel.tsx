import { Box, styled } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const images = [
  '/HOI_LOGO.jpg',
  '/aboutus_background.jpg',
  '/HOI_LOGO.jpg',
  '/aboutus_background.jpg',
];

// Custom Indicator (dot) styling
const Indicator = styled('li')<{isSelected?: boolean}>(({ isSelected }) => ({
  background: isSelected ? '#A2AF9B' : '#EEEEEE',
  width: isSelected ? '36px' : '12px',
  height: '12px',
  display: 'inline-block',
  margin: '0 4px',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'width 0.4s ease, background-color 0.4s ease',
}));


const ImageCarousel = () => {
  return (
    <Box sx={{ position: 'relative', '.carousel .control-dots': { bottom: '20px', padding: '0 40px', textAlign: 'right' } }}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={1000}
        // This is the function that renders our custom dots
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <Indicator
                isSelected
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <Indicator
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'calc(100vh - 64px)', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;