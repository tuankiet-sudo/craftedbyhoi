import { useCart } from './cartContext';
import { Box, Typography, IconButton, Button, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Giỏ hàng</Typography>
      {cart.length === 0 ? (
        <Typography>Giỏ hàng của bạn đang trống.</Typography>
      ) : (
        <Stack spacing={3}>
          {cart.map(item => (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', borderBottom: "1px solid #eee", pb: 2 }}>
              <Box component="img" src={item.image} alt={item.name} sx={{ width: 80, height: 80, objectFit: "cover", borderRadius: 2, mr: 3 }} />
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                <Typography sx={{ color: "#66431b" }}>{item.price.toLocaleString('vi-VN')}₫</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Button size="small" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
                  <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                  <Button size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </Box>
              </Box>
              <IconButton onClick={() => removeFromCart(item.id)}><DeleteIcon /></IconButton>
            </Box>
          ))}
          <Typography sx={{ fontWeight: 600, fontSize: 18, mt: 2 }}>
            Tổng: {total.toLocaleString('vi-VN')}₫
          </Typography>
          <Button 
            component={Link}
            to="/thanh-toan"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#66431b",
              color: "#fff", // normal text color
              '&:hover': {
                bgcolor: "#001524",   // hovered background
                color: "#fff"      // hovered text color
              }
            }}
          >
            Thanh toán
          </Button>
        </Stack>
      )}
    </Box>
  );
}
