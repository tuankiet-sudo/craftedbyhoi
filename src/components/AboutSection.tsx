import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <Box sx={{ py: 12, textAlign: 'center'}}>
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ fontWeight: 'bold', mb: 3, color: '#001524' }}
        >
          Về HỘI
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ my: 4, color: '#001524', maxWidth: '650px', mx: 'auto', fontSize: '1rem', fontWeight: '500' }}
        >
          HỘI là thương hiệu sáng tạo dựa trên di sản, kết nối nghệ nhân, nghệ thuật thủ công tinh tế và thiết kế hiện đại để tạo nên trải nghiệm văn hóa độc bản, sống động và có chiều sâu.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/gioi-thieu"
          sx={{
            backgroundColor: '#66431b', // A dark brown color similar to the image
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            px: 4,
            py: 2,
            '&:hover': {
              backgroundColor: 'white', // A slightly darker brown for hover
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