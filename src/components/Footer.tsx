import { Box, Typography, Grid, Container, Button, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const linkStyles = {
    mb: 1,
    color: '#001524', // Set a base color for the links
    transition: 'color 0.3s ease', // Add a smooth transition
    '&:hover': {
      color: '#66431b', // This is the color the text will change to on hover
    },
  };
  return (
    <Box sx={{ backgroundColor: '#f5f1e9', color: '#333', pt: 12, pb: 6 }}>
      <Container maxWidth={false} >
        <Grid container spacing={4} marginLeft={4}>

          {/* Column 1: Sign Up */}
          <Grid size={{xs:12, md:4}} >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#001524' }}>
              Đăng ký
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: '#001524' }}>
              Nhận ngay mã giảm giá 10% cho đơn đặt hàng đầu tiên
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#001524',
                color: 'white',
                textTransform: 'none',
                width: '90%',
                mb: 3,
                '&:hover': { backgroundColor: '#66431b' },
              }}
            >
              Get 10% Off
            </Button>
            {/* Placeholder for the seal image */}
          </Grid>

          {/* Column 2: About Us */}
          <Grid size={{xs:6, md:2}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Về chúng tôi
            </Typography>
            <MuiLink component={RouterLink} to="/gioi-thieu" display="block" color="inherit" underline="none" sx={ linkStyles }>Giới thiệu</MuiLink>
            <MuiLink component={RouterLink} to="/cach-choi" display="block" color="inherit" underline="none" sx={ linkStyles }>Cách chơi</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Cam kết</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Press</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Blog</MuiLink>
          </Grid>

          {/* Column 3: Follow Us */}
          <Grid size={{xs:6, md:2}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Theo dõi
            </Typography>
            <MuiLink href="#" target="_blank" display="block" color="inherit" underline="none" sx={ linkStyles }>Facebook</MuiLink>
            <MuiLink href="#" target="_blank" display="block" color="inherit" underline="none" sx={ linkStyles }>Instagram</MuiLink>
            <MuiLink href="#" target="_blank" display="block" color="inherit" underline="none" sx={ linkStyles }>Pinterest</MuiLink>
            <MuiLink href="#" target="_blank" display="block" color="inherit" underline="none" sx={ linkStyles }>Youtube</MuiLink>
          </Grid>

          {/* Column 4: Partnership */}
          <Grid size={{xs:6, md:2}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Hợp tác
            </Typography>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Quà tặng doanh nghiệp</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Đối tác mua sỉ</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Thiết kế theo yêu cầu</MuiLink>
            <MuiLink component={RouterLink} to="/catalog" display="block" color="inherit" underline="none" sx={ linkStyles }>Catalogue sản phẩm</MuiLink>
          </Grid>

          {/* Column 5: Policies */}
          <Grid size={{xs:6, md:2}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Chính sách
            </Typography>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Đổi trả</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Giao hàng</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Bảo mật</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Khuyến mãi</MuiLink>
            <MuiLink href="#" display="block" color="inherit" underline="none" sx={ linkStyles }>Liên hệ</MuiLink>
          </Grid>

        </Grid>
        <Typography variant="body2" color="#001524" align="left" mt={16} ml={4}>
          © {new Date().getFullYear()} CraftedbyHoi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;