import { Box, Typography, Grid, Container } from '@mui/material';
import React from 'react';
// Import the icons from Material-UI
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

// An array holding the data for the three columns
const infoItems = [
  {
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 35 }} />,
    title: 'Bảo hành 12 tháng',
    description: 'Áp dụng với tất cả sản phẩm của HỘI. An tâm mua sắm tại website chính hãng.',
  },
  {
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 35 }} />,
    title: 'Miễn phí giao hàng',
    description: 'Giao hàng toàn quốc. Miễn phí vận chuyển với đơn hàng trên 1 triệu đồng.',
  },
  {
    icon: <SentimentSatisfiedOutlinedIcon sx={{ fontSize: 35 }} />,
    title: 'Thêm ưu đãi 10%',
    description: 'Nhận ngay mã giảm 10% đối với các khách hàng lần đầu tiên mua sắm tại website.',
  },
];

const InfoSection = () => {
  return (
    <Box sx={{ backgroundColor: '#DCCFC0', py: { xs: 6, md: 12 }, textAlign: 'center' }}>
      <Container maxWidth={false}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {infoItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  width: { xs: 54, md: 80 },
                  height: { xs: 54, md: 80 },
                  mb: { xs: 1.5, md: 2 },
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#FAF9EE',
                }}
              >
                {/* Adjust icon size with sx */}
                {React.cloneElement(item.icon, { sx: { fontSize: { xs: 26, md: 35 } } })}
              </Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 'bold', my: { xs: 1, md: 3 }, color: '#001524', fontSize: { xs: 16, md: 22 } }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#001524',
                  px: 2,
                  fontSize: { xs: 13.5, md: '1rem' },
                  fontWeight: '500'
                }}
              >
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InfoSection;