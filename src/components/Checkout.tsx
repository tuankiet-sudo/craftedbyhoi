import { useState } from 'react';
import {
  Box, Grid, Typography, TextField, FormControlLabel, Checkbox, Button,
  Select, MenuItem, InputAdornment, Divider, Stack, IconButton,RadioGroup, Radio, FormLabel
} from '@mui/material';
import { useCart } from './cartContext'; // adjust path as needed

const COUNTRIES = ['Việt Nam']; // Can add more
const SHIPPING_COST = 0;

export default function CheckoutPage() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('onepay');

  // Form states
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Việt Nam');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [phone, setPhone] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  // Simple sum
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - (discountApplied ? 0 : 0) + SHIPPING_COST;

  // Apply discount (placeholder logic)
  const applyDiscount = () => {
    // Placeholder: No actual discount logic yet
    setDiscountApplied(true);
  };

  return (
    <Box sx={{ px: { xs: 0, md: 8 }, py: 8, bgcolor: '#fafafa', minHeight: '90vh' }}>
      <Grid container spacing={0} justifyContent="center">
        {/* LEFT: Contact + Shipping */}
        <Grid size={{xs:12, md:7, lg:6}}>
          <Box sx={{ maxWidth: 500, mx: "auto", bgcolor: "#fff", borderRadius: 3, p: { xs: 2, md: 5 }, boxShadow: 0 }}>
            {/* Liên hệ */}
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Liên hệ</Typography>
            <TextField
              label="Email"
              type="email"
              fullWidth
              sx={{ mb: 3 }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            {/* Giao hàng */}
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Giao hàng</Typography>
            <Select
              fullWidth
              value={country}
              sx={{ mb: 3, fontWeight: 600 }}
              onChange={e => setCountry(e.target.value)}
            >
              {COUNTRIES.map(c => (
                <MenuItem key={c} value={c}>{c}</MenuItem>
              ))}
            </Select>
            <Grid container spacing={2}>
              <Grid size={{xs:12, md:6}}>
                <TextField label="Tên" fullWidth sx={{ mb: 2 }} value={firstName} onChange={e => setFirstName(e.target.value)} />
              </Grid>
              <Grid size={{xs:12, md:6}}>
                <TextField label="Họ" fullWidth sx={{ mb: 2 }} value={lastName} onChange={e => setLastName(e.target.value)} />
              </Grid>
            </Grid>
            <TextField label="Địa chỉ" fullWidth sx={{ mb: 2 }} value={address} onChange={e => setAddress(e.target.value)} />
            <TextField label="Căn hộ, phòng, v.v. (không bắt buộc)" fullWidth sx={{ mb: 2 }} value={address2} onChange={e => setAddress2(e.target.value)} />
            <Grid container spacing={2}>
              <Grid size={{xs:12, md:6}}>
                <TextField label="Thành phố" fullWidth sx={{ mb: 2 }} value={city} onChange={e => setCity(e.target.value)} />
              </Grid>
              <Grid size={{xs:12, md:6}}>
                <TextField label="Mã bưu chính (không bắt buộc)" fullWidth sx={{ mb: 2 }} value={postal} onChange={e => setPostal(e.target.value)} />
              </Grid>
            </Grid>
            <TextField
              label="Điện thoại"
              fullWidth
              sx={{ mb: 2 }}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small" tabIndex={-1}>
                      <span role="img" aria-label="info">❓</span>
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <FormControlLabel
              sx={{ mb: 2, mt: 0 }}
              control={<Checkbox checked={saveInfo} onChange={e => setSaveInfo(e.target.checked)} />}
              label="Lưu lại thông tin này cho lần sau"
            />
            <div></div>
            <FormLabel sx={{ mt: 3, fontWeight: 700 }}>Phương thức thanh toán</FormLabel>
<RadioGroup
  value={paymentMethod}
  onChange={e => setPaymentMethod(e.target.value)}
  sx={{ mb: 2, mt: 1 }}
>
  <FormControlLabel
    value="onepay"
    control={<Radio sx={{ color: "#66431b", '&.Mui-checked': { color: "#66431b" } }} />}
    label="OnePAY - Credit/ATM card/QR"
    sx={{ mb: 1, fontSize: 16 }}
  />
  <FormControlLabel
    value="cod"
    control={<Radio sx={{ color: "#66431b", '&.Mui-checked': { color: "#66431b" } }} />}
    label="Thanh toán khi nhận hàng (COD)"
    sx={{ fontSize: 16 }}
  />
</RadioGroup>

<Button
  variant="contained"
  color="primary"
  fullWidth
  sx={{
    mt: 4,
    py: 1.5,
    fontSize: 16,
    fontWeight: 600,
    bgcolor: "#66431b",
    borderRadius: 2,
    '&:hover': { bgcolor: "#001524" }
  }}
  onClick={() => {
    // Replace with real order logic!
    alert("Đơn hàng của bạn đã được ghi nhận!");
  }}
>
  Hoàn tất đơn hàng
</Button>

          </Box>
        </Grid>

        {/* RIGHT: Cart summary */}
        <Grid size={{xs:12, md:5, lg:4}} position={'sticky'}>
          <Box sx={{
            bgcolor: '#f6f6f6',
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            maxWidth: 500,
            mx: "auto",
            minHeight: 420
          }}>
            {/* Cart items */}
            <Stack spacing={2} sx={{ mb: 2 }}>
              {cart.map(item => (
                <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{
                    position: "relative", mr: 2,
                  }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 54,
                        height: 54,
                        objectFit: "cover",
                        borderRadius: 2,
                        border: "1.5px solid #eee"
                      }}
                    />
                    <Box sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      bgcolor: "#222",
                      color: "#fff",
                      borderRadius: "50%",
                      width: 22,
                      height: 22,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      boxShadow: "0 2px 8px #0001"
                    }}>
                      {item.quantity}
                    </Box>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* Discount input */}
            <Box sx={{ display: "flex", mb: 2, gap: 1 }}>
              <TextField
                placeholder="Mã giảm giá"
                size="small"
                value={discountCode}
                onChange={e => setDiscountCode(e.target.value)}
                fullWidth
                sx={{ bgcolor: "#fff" }}
              />
              <Button
                variant="outlined"
                sx={{ px: 3, fontWeight: 600, borderRadius: 2, color: "#bbb", borderColor: "#ddd" }}
                onClick={applyDiscount}
                disabled={discountApplied || !discountCode}
              >
                Áp dụng
              </Button>
            </Box>

            {/* Subtotal, shipping, total */}
            <Box sx={{ my: 2 }}>
              <Typography sx={{ color: "#444" }}>
                Tổng phụ · {cart.length} mặt hàng
              </Typography>
              <Typography sx={{ fontWeight: 500, mt: 1 }}>
                {subtotal.toLocaleString("vi-VN")} đ
              </Typography>
              <Typography sx={{ color: "#444", mt: 1 }}>
                Vận chuyển
              </Typography>
              <Typography sx={{ fontWeight: 500, mb: 2 }}>
                MIỄN PHÍ
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", alignItems: "baseline" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 24, mr: 2 }}>
                  Tổng
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 28 }}>
                  {total.toLocaleString("vi-VN")} đ
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
