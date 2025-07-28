import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Slider,
  Switch,
  Button,
  // Card,
  // CardMedia,
  // CardContent,
  // Fade,
} from '@mui/material';

const productsData = [
  {
    id: 1,
    name: 'Giao Sắc Văn Kỳ',
    price: 1222000,
    images: [
      '/images/giao-sac-van-ky-1.png', // main
      '/images/giao-sac-van-ky-2.png', // hover
    ],
    available: true,
    type: 'boardgame',
  },
  // More products here in future
];

// List unique types from productsData
const productTypes = [
  ...new Set(productsData.map(p => p.type))
];

export default function ProductsPage() {
  // State for filters
  const [selectedType, setSelectedType] = useState('');
  const [price, setPrice] = useState([0, 2000000]);
  const [availableOnly, setAvailableOnly] = useState(false);

  // Product hover state (by id)
    const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  // Filtering logic
  const filtered = productsData.filter(p => {
    if (selectedType && p.type !== selectedType) return false;
    if (p.price < price[0] || p.price > price[1]) return false;
    if (availableOnly && !p.available) return false;
    return true;
  });

  return (
    <Box sx={{ display: 'flex', px: { xs: 0, md: 6 }, pt: 8, pb: 8 }}>
      {/* FILTERS */}
      <Box
        sx={{
          minWidth: 240,
          maxWidth: 280,
          pr: { md: 4 },
          borderRight: { md: '1px solid #f0f0f0' },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Typography sx={{ fontWeight: 600, mb: 4 }}>Bộ lọc</Typography>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Sản phẩm</InputLabel>
          <Select
            value={selectedType}
            label="Sản phẩm"
            onChange={e => setSelectedType(e.target.value)}
          >
            <MenuItem value=""><em>Tất cả</em></MenuItem>
            {productTypes.map(type =>
              <MenuItem value={type} key={type}>{type}</MenuItem>
            )}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Giá</InputLabel>
          <Box px={2} pt={3}>
            <Slider
              value={price}
              onChange={(_, val) => setPrice(val as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={2000000}
              step={10000}
            />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="caption">{price[0].toLocaleString('vi-VN')}₫</Typography>
              <Typography variant="caption">{price[1].toLocaleString('vi-VN')}₫</Typography>
            </Box>
          </Box>
        </FormControl>

        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <Typography sx={{ mr: 2 }}>Còn hàng</Typography>
          <Switch checked={availableOnly} onChange={e => setAvailableOnly(e.target.checked)} />
        </Box>
      </Box>

      {/* PRODUCT GRID */}
      <Box flex={1} pl={{ md: 6 }} pt={1}>
        <Grid container spacing={4}>
          {filtered.map(product => (
            <Grid size={{xs:12, sm:6, md:4}} key={product.id}>
              <Box
                sx={{
                  p: 2,
                  background: '#fff',
                  overflow: 'hidden',
                  transition: 'border 0.2s',
                  minWidth: 260,
                  cursor: 'default',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 320,
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => navigate('/san-pham/giao-sac-van-ky')}
                >
                  <Box component="img"
                    src={hover ? productsData[0].images[1] : productsData[0].images[0]}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'all .5s cubic-bezier(.3,.6,.3,1)',
                      display: 'block',
                      borderRadius: 2,
                    }}
                  />
                  {/* "Mua ngay" button only shows on hover */}
                  <Button
                    variant="contained"
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      right: 12,
                      px: 3,
                      py: 1,
                      fontWeight: 500,
                      fontSize: '0.98rem',
                      borderRadius: 2,
                      bgcolor: '#66431b',
                      color: '#fff',
                      textTransform: 'none',
                      opacity: hover ? 1 : 0,
                      pointerEvents: hover ? 'auto' : 'none',
                      transition: 'opacity 0.3s cubic-bezier(.3,.6,.3,1)',
                      boxShadow: 'none',
                      '&:hover': { bgcolor: '#66431b' },
                    }}
                    onClick={e => {
                      e.stopPropagation(); // so it doesn't trigger image link
                      navigate('san-pham/giao-sac-van-ky');
                    }}
                  >
                    Mua ngay
                  </Button>
                </Box>
                {/* Product Info */}
                <Box sx={{ mt: 2, textAlign: 'left' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: 18,
                      cursor: 'pointer',
                      color: '#222',
                      transition: 'color 0.15s',
                      '&:hover': { color: '#66431b' }
                    }}
                    onClick={() => navigate('san-pham/giao-sac-van-ky')}
                  >
                    Giao Sắc Văn Kỳ
                  </Typography>
                  <Typography sx={{ color: '#222', fontSize: 16 }}>
                    {price.toLocaleString('vi-VN')}₫
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        {!filtered.length && (
          <Typography sx={{ mt: 6, color: '#999' }}>Không có sản phẩm phù hợp.</Typography>
        )}
      </Box>
    </Box>
  );
}
