import {
  Drawer, Box, Typography, IconButton, Button, Divider, Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from './cartContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CartDrawer({ open, onClose }: { open: boolean, onClose: () => void }) {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const [orderNote, setOrderNote] = useState(() => localStorage.getItem('orderNote') || '');

  useEffect(() => {
    localStorage.setItem('orderNote', orderNote);
  }, [orderNote]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
        PaperProps={{
            sx: {
            width: { xs: "98vw", sm: 440, md: 640 }, // wider on desktop, almost full on mobile
            p: 2,
            boxShadow: 4,
            maxWidth: '100vw'
            }
        }}
    >
      <Box sx={{ p: 2, pb: 1, display: 'flex', alignItems: 'center', borderBottom: '1.5px solid #eee' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, flex: 1 }}>Giỏ hàng</Typography>
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </Box>
      <Box sx={{ p: 2, minHeight: 180 }}>
        {cart.length === 0 ? (
          <Typography sx={{ color: "#888", textAlign: "center", mt: 6 }}>Giỏ hàng của bạn đang trống.</Typography>
        ) : (
          <Stack spacing={3}>
            {cart.map(item => (
              <Box key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="img" src={item.image} alt={item.name} sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: 2, mr: 2 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                  <Typography sx={{ color: "#66431b", fontWeight: 500 }}>
                    {item.price.toLocaleString('vi-VN')}₫
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Button size="small" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <Button size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </Box>
                </Box>
                <IconButton onClick={() => removeFromCart(item.id)} size="small" sx={{ ml: 1 }}><CloseIcon fontSize="small" /></IconButton>
              </Box>
            ))}
          </Stack>
        )}
        {/* Total */}
        {cart.length > 0 && (
        <Box sx={{ mt: 6 }}>
            <Divider sx={{ mb: 3 }} />
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 4
            }}>
            <Typography sx={{ fontWeight: 700, fontSize: 23 }}>
                Tổng cộng
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 28, color: "#001524" }}>
                {total.toLocaleString('vi-VN')}₫
            </Typography>
            </Box>
            {/* Order note input */}
            <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 500, fontSize: 16, mb: 1, color: "#222" }}>
                Ghi chú đơn hàng
            </Typography>
            <textarea
                value={orderNote}
                onChange={e => setOrderNote(e.target.value)}
                placeholder="Thêm ghi chú cho đơn hàng của bạn"
                style={{
                    width: "100%",
                    minHeight: 54,
                    fontSize: 16,
                    borderRadius: 8,
                    padding: "8px 12px",
                    border: "1.2px solid #eee",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                    background:  "white",
                    color: "#001524"
                }}
            />
            </Box>
            {/* Action buttons */}
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
                variant="outlined"
                fullWidth
                sx={{
                py: 1.6,
                fontSize: 17,
                fontWeight: 600,
                borderRadius: 2,
                borderColor: "#66431b",
                color: "#66431b",
                bgcolor: "#fff",
                boxShadow: "none",
                '&:hover': { borderColor: "#001524", color: "#001524", bgcolor: "#f6f6f6" }
                }}
                onClick={() => {
                onClose();
                navigate('/gio-hang');
                }}
            >
                Xem giỏ hàng
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{
                py: 1.6,
                fontSize: 18,
                bgcolor: "#66431b",
                color: "#fff",
                fontWeight: 700,
                borderRadius: 2,
                boxShadow: "none",
                '&:hover': { bgcolor: "#fff", color: "#66431b" }
                }}
                onClick={() => {
                onClose();
                navigate('/thanh-toan');
                }}
            >
                Thanh toán
            </Button>
            </Stack>
        </Box>
        )}
      </Box>
    </Drawer>
  );
}
