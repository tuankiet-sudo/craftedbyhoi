import { Box, Typography, Container } from '@mui/material';

// Update these paths to your actual images
const heroBg = "/images/hoi-about-hero.jpg"; // Hero bg image
const contentBg = "/aboutus_background.jpg"; // Content paragraph bg

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section with overlayed background */}
      <Box
        sx={{
          minHeight: { xs: 220, md: 380 },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(10,12,22,0.44)',
          }
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            zIndex: 1,
            fontWeight: 700,
            fontStyle:'italic',
            fontSize: { xs: 38, md: 80 },
            textAlign: 'center'
          }}
        >
          HỘI
        </Typography>
      </Box>

      {/* Content Section with its own bg image and overlay */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          py: { xs: 6, md: 8 },
          backgroundImage: `url(${contentBg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          minHeight: { xs: 520, md: 660 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 5,
              color: '#1a1a1a'
            }}
          >
            Giới thiệu về HỘI
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 18, mb: 3 }}>
            Tại Việt Nam, nhiều giá trị văn hóa truyền thống đang đứng trước nguy cơ mai một. Không chỉ là những làng nghề thủ công, câu hò điệu ví hay kiến trúc cổ mà cả một hệ sinh thái biểu đạt tinh thần, ký ức thị thành và mỹ học dân tộc đang dần mờ đi giữa những biến chuyển nhanh chóng của thời đại số. HỘI ra đời như một “bến hội ngộ” của những con người mang trong mình tình yêu với cái đẹp, với văn hóa Việt nhưng có một mối quan tâm chung: Làm sao để những gì thuộc về “xưa” không chỉ tồn tại như một lát cắt tĩnh trong bảo tàng, mà được tái hiện sống động, phù hợp với tâm thế và ngôn ngữ của con người hôm nay? 
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 18, mb: 3 }}>
            Chúng tôi - nghệ nhân, designer, coder, storyteller, curator - “hội tụ” tại một điểm giao thoa: niềm tin vào việc kiến tạo trải nghiệm đương đại dựa trên gốc rễ văn hóa bản địa. Từ đó, HỘI vận hành như một nơi di sản được tái cấu trúc qua các định dạng mới - thiết kế thị giác, trò chơi tương tác, ứng dụng công nghệ, vật phẩm nghệ thuật, không gian trưng bày, sản phẩm kể chuyện. Tại HỘI, mỗi dự án không chỉ là một sản phẩm sáng tạo, mà là một nỗ lực “dịch chuyển” ký ức từ quá khứ sang hiện tại, từ hình thức tĩnh sang trải nghiệm động, từ tư liệu sang cảm nhận. Chúng tôi không sáng tạo lại di sản mà cùng nó bước tiếp một hành trình mới bằng sự hiểu biết, tôn trọng và đối thoại. 
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 18, mb: 3 }}>
            Với cách tiếp cận đa tầng, giàu tính bản địa và ứng dụng tư duy thiết kế hiện đại, HỘI mong muốn trở thành cầu nối giữa thế hệ hôm nay với các lớp giá trị văn hóa đã và đang lặng lẽ chảy trong dòng mạch Việt. Đó là một hành trình không thuần hoài cổ, mà mang tính định hướng: giúp di sản không chỉ được bảo tồn, mà thực sự sống, chuyển hóa và tiếp tục sinh lời về mặt thẩm mỹ, tri thức và cảm xúc cho cộng đồng đương đại.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              mt: 5,
              mb: 1,
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 20,
              color: '#66431b'
            }}
          >
            HỘI - nơi những tinh hoa cũ tìm được hình hài mới để bước vào tương lai.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 20,
              color: '#66431b'
            }}
          >
            HỘI - “Gieo một nước cờ - Giữ ngàn di sản”.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
