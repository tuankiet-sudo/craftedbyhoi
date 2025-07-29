import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// Change this path to your real image
const howtoImage = "/HOI_LOGO.png";

export default function HowToPlayPage() {
  return (
    <Box  sx={{ py: { xs: 4, md: 4}, px: { xs: 2, md: 6 }, minHeight: 400, justifyContent: 'center' }}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: { xs: 5, md: 8 },
          fontSize: { xs: 32, md: 56 },
          letterSpacing: "-0.02em"
        }}
      >
        Cách chơi
      </Typography>

      {/* Main content */}
      <Grid container spacing={3} alignItems="center" justifyContent="center" alignSelf={'center'}>
        {/* Image left */}
        <Grid size={{xs:12, md:6}} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={howtoImage}
            alt="Giao Sắc Văn Kỳ"
            sx={{
              maxWidth: { xs: "100%", md: 500 },
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: "0 6px 36px 0 #eee"
            }}
          />
        </Grid>
        {/* Text and button right */}
        <Grid size={{xs:12, md:6}}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: 28, md: 38 },
              color: "#1a1a1a"
            }}
          >
            Giao Sắc Văn Kỳ
          </Typography>
          <Button
            component={Link}
            to="/cach-choi/giao-sac-van-ky"
            variant="contained"
            sx={{
              bgcolor: "#66431b",
              color: "#fff",
              px: 4,
              py: 2,
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: "#ffefd1",
                color: "#66431b"
              }
            }}
            // Add link to your actual instructions if needed:
            // component={Link} to="/huong-dan/giao-sac-van-ky"
          >
            Xem hướng dẫn
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
