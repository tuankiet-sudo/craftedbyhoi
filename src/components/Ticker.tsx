import { Box, Typography } from '@mui/material';

const Ticker = () => {
  const text = 'Gieo một nước cờ - Giữ ngàn di sản';

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        color: '#66431b',
        padding: '4rem 0',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          whiteSpace: 'nowrap',
          // Define the animation
          animation: 'scroll-infinite 45s linear infinite',
          '@keyframes scroll-infinite': {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' }, // The text scrolls its entire width
          },
        }}
      >
        {/* We render the text multiple times to fill the screen and create the loop */}
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
      </Box>

      {/* This is the crucial part: a duplicated, hidden block that continues the animation */}
      <Box
        sx={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'scroll-infinite 45s linear infinite',
          // This second block is visually hidden but essential for the seamless loop
          // It ensures that as the first block is disappearing, the second is already appearing
          ariaHidden: 'true', 
        }}
      >
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h4" // use h4 on xs, h2 on md+
          sx={{
            padding: { xs: '0 0.25rem', md: '0 4rem' },
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: { xs: 20, md: 32 }
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Ticker;