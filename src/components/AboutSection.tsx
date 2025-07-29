import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 'bold', mb: { xs: 2, md: 3 }, color: '#66431b', fontSize: { xs: 22, md: 32 } }}
        >
          Về HỘI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            my: { xs: 2, md: 4 },
            color: '#001524',
            maxWidth: '650px',
            mx: 'auto',
            fontSize: { xs: 13.5, md: '1rem' },
            fontWeight: '500'
          }}
        >
          HỘI là thương hiệu sáng tạo dựa trên di sản, kết nối nghệ nhân, nghệ thuật thủ công tinh tế và thiết kế hiện đại để tạo nên trải nghiệm văn hóa độc bản, sống động và có chiều sâu.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/gioi-thieu"
          sx={{
            backgroundColor: '#66431b',
            color: 'white',
            textTransform: 'none',
            fontSize: { xs: '0.93rem', md: '1rem' },
            px: { xs: 3, md: 4 },
            py: { xs: 1.3, md: 2 },
            mt: { xs: 2, md: 0 },
            '&:hover': {
              backgroundColor: 'white',
              color: '#66431b',
            },
          }}
        >
          Tìm hiểu thêm
        </Button>
      </Container>
    </Box>
  );
};

export default AboutSection;