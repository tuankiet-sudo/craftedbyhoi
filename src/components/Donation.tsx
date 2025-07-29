import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider
} from '@mui/material';

function Step1({ onNext, form, setForm }: any) {
  return (
    <Grid container spacing={0} sx={{ minHeight: 480 }}>
      <Grid size={{xs:12, md:6}} sx={{ px: { xs: 2, md: 5 }, py: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Thông tin đóng góp</Typography>
        <Stack spacing={2} sx={{ mb: 3 }}>
          <TextField
            label="Họ tên"
            fullWidth
            value={form.name}
            onChange={e => setForm((f: any) => ({ ...f, name: e.target.value }))}
          />
          <TextField
            label="Email"
            fullWidth
            type="email"
            value={form.email}
            onChange={e => setForm((f: any) => ({ ...f, email: e.target.value }))}
          />
          <TextField
            label="Số điện thoại"
            fullWidth
            value={form.phone}
            onChange={e => setForm((f: any) => ({ ...f, phone: e.target.value }))}
          />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, px: 6, py: 1.4, fontWeight: 600, borderRadius: 2, bgcolor: "#66431b", '&:hover': { bgcolor: "#fff", color: '#66431b' } }}
          onClick={onNext}
          disabled={!form.name || !form.email || !form.phone}
        >
          Xác nhận
        </Button>
      </Grid>
      <Grid size={{xs:12, md:6}} sx={{ bgcolor: "#fff", px: { xs: 2, md: 5 }, py: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: 18, color: '#66431b', fontWeight: 600, mb: 2 }}>
          Hành trình lan tỏa di sản
        </Typography>
        <Typography sx={{ fontSize: 15.5, color: '#333', whiteSpace: "pre-line", mb: 2 }}>
          Tại HỘI, chúng tôi tin rằng di sản không chỉ thuộc về quá khứ mà là mạch sống nối dài từ thế hệ đi trước đến thế hệ hôm nay và mai sau. Những nghệ nhân với đôi tay chai sạn và trái tim lặng lẽ chính là người đang giữ gìn và thắp sáng mạch sống ấy. Tuy nhiên, để duy trì ngọn lửa di sản trong thời đại mới, họ không chỉ cần sự tôn trọng, mà còn cần một điều thiết thực hơn - sinh kế để tiếp tục sống cùng nghề và truyền lại ngọn lửa cho thế hệ sau.
        </Typography>
        <Typography sx={{ fontSize: 15.5, color: '#333', whiteSpace: "pre-line", mb: 2 }}>
          Đó là lý do vì sao chúng tôi khởi tạo Quỹ Bảo Trợ Di Sản như một cam kết lâu dài để đồng hành cùng cộng đồng nghệ nhân trên hành trình bảo tồn các giá trị văn hóa truyền thống. Hơn nữa, với mỗi bộ sản phẩm được bán ra, HỘI trích 5% doanh thu trên mỗi bộ sản phẩm đóng góp vào quỹ này như một phần trách nhiệm và tri ân với những người gìn giữ hồn Việt.
        </Typography>
        <Typography sx={{ fontSize: 15.5, color: '#333', whiteSpace: "pre-line", mb: 2 }}>
          Và hơn thế nữa, chúng tôi mong muốn hành trình này không chỉ là của riêng mình mà là một sứ mệnh tập thể. Mỗi khách hàng khi đồng hành cùng HỘI đều có thể tự nguyện đóng góp vào Quỹ Bảo Trợ Di Sản, chung tay cùng chúng tôi tiếp thêm động lực và sinh kế cho những người đang lặng thầm gìn giữ di sản. Bởi mỗi đóng góp đều là một lời cam kết rằng: chúng ta còn lắng nghe, còn trân trọng, và còn muốn giữ gìn điều đẹp đẽ này cho mai sau.
        </Typography>
      </Grid>
    </Grid>
  );
}

function Step2({ onNext, receipt, setReceipt }: any) {
  // You can replace src with your QR code image link
  const QR_SRC = "/hoi-qr.png";
  return (
    <Grid container spacing={0} sx={{ minHeight: 400 }}>
      <Grid size={{xs:12, md:6}} sx={{ px: { xs: 2, md: 5 }, py: 8, display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center' }}>
        <Typography variant='h5' sx={{ fontWeight: 700, mb: 4 }}>Quét QR để đóng góp</Typography>
        <Paper elevation={0} sx={{ p: 4, bgcolor: '#fff', borderRadius: 3 }}>
          <img src={QR_SRC} alt="Quỹ HỘI QR" style={{ width: 280, height: 280 }} />
        </Paper>
      </Grid>
      <Grid size={{xs:12, md:6}} sx={{ px: { xs: 2, md: 5 }, py: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 600, mb: 2 }}>Tải ảnh hóa đơn chuyển khoản</Typography>
        <Button
          variant="outlined"
          component="label"
          sx={{ py: 1, px: 3, borderRadius: 2, borderColor: "#66431b", color: "#66431b", fontWeight: 600, mb: 2, bgcolor: "#faf9ee" }}
        >
          Chọn hình ảnh
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={e => setReceipt(e.target.files && e.target.files[0])}
          />
        </Button>
        {receipt && (
          <Paper sx={{ mt: 1, p: 1, borderRadius: 2, border: '1px solid #eee', maxWidth: 240 }}>
            <img
              src={URL.createObjectURL(receipt)}
              alt="receipt"
              style={{ width: "100%", maxHeight: 180, objectFit: "contain" }}
            />
          </Paper>
        )}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, px: 6, py: 1.4, fontWeight: 600, borderRadius: 2, bgcolor: "#66431b", '&:hover': { bgcolor: "#fff", color: "#66431b" } }}
          onClick={onNext}
          disabled={!receipt}
        >
          Hoàn thành
        </Button>
      </Grid>
    </Grid>
  );
}

function Step3({ email }: any) {
  return (
    <Box sx={{ maxWidth: 700, mx: "auto", textAlign: "center", py: 10 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#66431b" }}>Cảm ơn bạn đã đồng hành cùng HỘI!</Typography>
      <Divider sx={{ mb: 3, borderColor: "#ecd7be" }} />
      <Typography sx={{ color: "#333", fontSize: 17, mb: 3 }}>
        Chúng tôi xin chân thành cảm ơn bạn vì đã đồng hành cùng HỘI trong hành trình gìn giữ và tiếp sức cho di sản Việt.
        Khoản đóng góp của bạn là một hạt mầm quý giá, tiếp thêm sinh kế, động lực và niềm tin cho những nghệ nhân đang lặng lẽ gìn giữ bản sắc văn hoá truyền thống. Nhờ bạn, những đôi bàn tay chai sạn ấy sẽ có thêm lý do để tiếp tục thổi hồn vào từng nếp vải, đường gốm, tiếng đàn, câu hát.
        <br /><br />
        Sau khi chúng tôi xác nhận khoản đóng góp của bạn là hợp lệ, giấy chứng nhận đóng góp (Certificate of Participation) sẽ được gửi qua địa chỉ email {email && <b>{email}</b>} mà bạn đã cung cấp.
      </Typography>
      <Typography sx={{ color: "#66431b", fontWeight: 600, fontSize: 16, mt: 4 }}>Một lần nữa, xin cảm ơn bạn không chỉ vì đã chia sẻ, mà vì đã cùng tin tưởng vào một hành trình lớn hơn. Bởi di sản không thể gìn giữ chỉ bằng ký ức mà bằng những hành động hôm nay, từ những con người như bạn.</Typography>
      <Typography sx={{ mt: 4, color: "#444" }}>Trân trọng,<br />HỘI</Typography>
    </Box>
  );
}

export default function DonationPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [receipt, setReceipt] = useState<File | null>(null);

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: "100vh",
        position: "relative",
        backgroundImage: 'url(/aboutus_background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        // Always cover viewport, no horizontal scroll
        overflowX: 'hidden'
      }}
    >
      {/* Overlay for contrast */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.85)",
          zIndex: 0,
        }}
      />
      {/* Main content container */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          minHeight: "65vh",
          py: { xs: 4, md: 7 },
          position: "relative",
          zIndex: 1,
          px: { xs: 1, md: 0 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            borderRadius: 5,
            p: { xs: 2, md: 5 },
            background: { xs: 'rgba(255,255,255,0.97)', md: '#fff' },
            boxShadow: '0 4px 32px 0 #eedcc366',
            minHeight: { xs: 440, md: 500 }
          }}
        >
          {step === 1 && <Step1 onNext={() => setStep(2)} form={form} setForm={setForm} />}
          {step === 2 && <Step2 onNext={() => setStep(3)} receipt={receipt} setReceipt={setReceipt} />}
          {step === 3 && <Step3 email={form.email} />}
        </Paper>
      </Box>
    </Box>
  );
}
