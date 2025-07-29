import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';

type FlipbookIframeProps = {
  src?: string;
  height?: string | number;
  width?: string | number;
};

const FlipbookIframe: React.FC<FlipbookIframeProps> = ({
  src = "https://heyzine.com/flip-book/2e1b7dba53.html",
  height, // handled below
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Responsive height
  const responsiveHeight = height ||
    (isMobile ? 340 : "calc(100vh - 64px)");

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        borderRadius: { xs: 2, md: 3 },
        overflow: 'hidden',
        boxShadow: { xs: '0 4px 24px #00152418', md: 'none' },
        my: { xs: 2, md: 3 },
      }}
    >
      <iframe
        allowFullScreen
        allow="clipboard-write"
        className="fp-iframe"
        style={{
          border: '1px solid #ececec',
          width: '100%',
          height: responsiveHeight,
          borderRadius: 12,
          background: '#fff'
        }}
        src={src}
        title="Heyzine Flip Book"
      ></iframe>
    </Box>
  );
};

export default FlipbookIframe;
