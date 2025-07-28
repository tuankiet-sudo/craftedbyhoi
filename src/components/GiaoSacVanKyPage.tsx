import  { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Stack,
} from '@mui/material';
import FlipbookIframeCatalog from './FlipbookIframeCatalog';
import { useParams } from 'react-router-dom';

const product = {
  name: 'Giao Sắc Văn Kỳ',
  price: 1222000,
  images: [
    '/images/giao-sac-van-ky-1.png',
    '/images/giao-sac-van-ky-2.png',
  ],
  description: `Giao Sắc Văn Kỳ là bộ cờ văn hóa lấy cảm hứng từ di sản Việt Nam. Chất liệu thủ công tinh xảo, thiết kế hiện đại, phù hợp để làm quà tặng hoặc chơi cùng gia đình, bạn bè.`,
  specs: [
    { label: 'Chất liệu', value: 'Gỗ tự nhiên, vải canvas, giấy mỹ thuật' },
    { label: 'Kích thước', value: '30cm x 30cm x 5cm' },
    { label: 'Sản xuất', value: 'Việt Nam' }
  ]
};

export default function GiaoSacVanKyPage() {
  const [mainImg, setMainImg] = useState(product.images[0]);
  const page = useParams<{ page: string }>();
  console.log('Current page:', page.page);
  const url = `https://heyzine.com/flip-book/a799c6d307.html#page/${page.page}`;

  return (
    <div>
    <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 8 }, maxWidth: 1200,  mx: 'auto' }}>
      <Grid container spacing={6}>
        {/* Image section */}
        <Grid size={{xs:12, md:6}}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#fafafa', borderRadius: 3 }}>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <img
                src={mainImg}
                alt={product.name}
                style={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  borderRadius: 10,
                  boxShadow: '0 6px 24px 0 #eee',
                }}
              />
            </Box>
            {/* Thumbnail images */}
            <Stack direction="row" spacing={2} justifyContent="center">
              {product.images.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={`${product.name} thumb ${i + 1}`}
                  sx={{
                    width: 64,
                    height: 64,
                    objectFit: 'cover',
                    border: mainImg === img ? '2px solid #001524' : '2px solid #eee',
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'border .2s',
                  }}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Product Info section */}
        <Grid size={{xs:12, md:6}}>
          <Box sx={{ pl: { md: 4 }, pt: { xs: 4, md: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#001524' }}>
              {product.name}
            </Typography>
            <Typography sx={{ fontSize: 22, color: '#66431b', fontWeight: 500, mb: 3 }}>
              {product.price.toLocaleString('vi-VN')}₫
            </Typography>
            <Button
              variant="contained"
              sx={{
                px: 5, py: 1.8,
                bgcolor: '#001524',
                fontWeight: 500,
                fontSize: '1rem',
                borderRadius: 2,
                textTransform: 'none',
                mb: 3,
                '&:hover': { bgcolor: '#66431b' }
              }}
            >
              Mua ngay
            </Button>
            <Divider sx={{ my: 3 }} />
            <Typography variant="subtitle1" sx={{ color: '#222', fontWeight: 600, mb: 1 }}>
              Thông tin sản phẩm
            </Typography>
            <Typography sx={{ color: '#222', mb: 2 }}>
              {product.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {product.specs.map((s, i) => (
                <Typography key={i} sx={{ color: '#666', fontSize: 15 }}>
                  <b>{s.label}:</b> {s.value}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <FlipbookIframeCatalog src={url}/>
    </div>
  );
}
