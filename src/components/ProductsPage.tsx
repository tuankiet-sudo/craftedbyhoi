import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Stack
} from '@mui/material';
import ProductsFilterSidebar from './ProductsFilterSidebar'; // Use the sidebar from previous response
import { useCart } from './cartContext';

const productsData = [
  {
    id: 1,
    name: 'Giao Sắc Văn Kỳ',
    price: 2499000,
    images: [
      '/main4.png', // main
      '/main2.png', // hover
    ],
    available: true,
    type: 'Cờ tỷ phú',
  },
  // More products here in future
];


const minPrice = 0;
const maxPrice = 3000000;

export default function ProductsPage() {
  // Filter states
  const [typeChecked, setTypeChecked] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [hover, setHover] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Filtering logic
  const filtered = productsData.filter(p => {
    if (typeChecked && p.type !== 'Cờ tỷ phú') return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    if (availableOnly && !p.available) return false;
    return true;
  });

  // Chips logic (inside ProductsPage)
  const chips = [
    typeChecked ? "Cờ tỷ phú" : null,
    (priceRange[0] !== minPrice || priceRange[1] !== maxPrice)
      ? `${priceRange[0].toLocaleString('vi-VN')}₫ - ${priceRange[1].toLocaleString('vi-VN')}₫` : null,
    availableOnly ? 'Còn hàng' : null
  ].filter(Boolean);

  const removeChip = (chip: string) => {
    if (chip === 'Còn hàng') setAvailableOnly(false);
    else if (chip === "Cờ tỷ phú") setTypeChecked(false);
    else setPriceRange([minPrice, maxPrice]);
  };

  const handleBuyNow = () => {
    addToCart(
      {
        id: "giao-sac-van-ky",
        name: "Giao Sắc Văn Kỳ",
        price: 2499000,
        image: '/giao-sac-van-ky-1.jpg'
      },
      1
    );
    navigate('/thanh-toan');
  };

  return (
    <Box sx={{ display: 'flex', px: { xs: 0, md: 6 }, pt: 4, pb: 8 }}>
      {/* FILTERS */}
      <Box
        sx={{
          minWidth: 280,
          maxWidth: 310,
          pr: { md: 5 },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <ProductsFilterSidebar
          minPrice={minPrice}
          maxPrice={maxPrice}
          value={priceRange}
          onPriceChange={setPriceRange}
          onAvailableChange={setAvailableOnly}
          available={availableOnly}
          onTypeChange={setTypeChecked}
          typeChecked={typeChecked}
        />
      </Box>

      {/* PRODUCT GRID */}
      <Box flex={1} pl={{ md: 6 }} pt={1} >
<Box sx={{ minHeight: 64, mb: 3, display: 'flex', alignItems: 'center' }}>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          {chips.map(chip => (
            <Chip
              key={chip}
              label={chip}
              onDelete={() => removeChip(chip!)}
              sx={{
                fontSize: 18,
                bgcolor: '#f6f6f6',
                color: '#222',
                height: 40,
                px: 2.5, py: 2,
                fontWeight: 500,
                borderRadius: 1.5,
                '& .MuiChip-deleteIcon': { color: '#999', fontSize: 24 }
              }}
            />
          ))}
        </Stack>
        </Box>
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
                    onClick={() => navigate('/san-pham/giao-sac-van-ky')}
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
                      '&:hover': { color: '#66431b', bgcolor: '#fff', borderColor: '#66431b'},
                    }}
                    onClick={handleBuyNow}
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
                    onClick={() => navigate('/san-pham/giao-sac-van-ky')}
                  >
                    Giao Sắc Văn Kỳ
                  </Typography>
                  <Typography sx={{ color: '#222', fontSize: 16 }}>
                    2.499.000₫
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
