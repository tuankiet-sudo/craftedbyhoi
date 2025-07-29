import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  Collapse,
  IconButton,
  Paper,
  Stack,
  InputBase,
  useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from './cartContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const images = [
  '/main4.png',
  '/main1.png',
  '/main2.png',
  '/main3.png',
  '/main5.png'
];

const DESCRIPTION = [
  "Giao Sắc Văn Kỳ - nơi hội tụ những sắc màu di sản trên bàn cờ sáng tạo, mở ra hành trình giao thoa giữa truyền thống và hiện đại, giữa bản sắc văn hóa và tinh thần kết nối cộng đồng.",
  "Dẫn lối từ những di sản được UNESCO vinh danh đến hành trình kết nối con người với văn hóa, Giao Sắc Văn Kỳ mang đến trải nghiệm đầy cảm hứng - nơi mỗi bước đi là một hành động gìn giữ và lan tỏa bản sắc văn hóa Việt.",
  "Sản phẩm gồm:",
  "+ 1 bàn cờ tinh xảo",
  "+ 6 chiếc giày đại diện cho mỗi người chơi",
  "+ 17 thẻ Lan tỏa",
  "+ 15 thẻ Vi phạm",
  "+ 15 thẻ Thử thách",
  "+ 32 nón bảo trợ",
  "+ 12 cúp bảo trợ",
  "+ 230 thẻ sao bảo trợ.",
  "Một trò chơi nghệ thuật giàu giá trị - kết hợp giải trí, giáo dục và khơi dậy tình yêu di sản."
];

const HANDCRAFT = [
  "Bộ bàn cờ được chế tác từ chất liệu vải canvas thô và vải thổ cẩm dệt tay, thể hiện rõ sự kết hợp giữa tính biểu đạt hiện đại và hơi thở truyền thống.",
  "Mặt trong là bàn cờ thêu thủ công với 40 ô cờ và các hoạ tiết di sản, được thực hiện qua bàn tay tỉ mỉ của các nghệ nhân.",
  "Mặt ngoài sử dụng vải thổ cẩm, được xử lý mềm và bền chắc, kết hợp khóa kéo hai bên để biến thành một túi tote tiện dụng - sẵn sàng mang bản sắc theo bạn đi khắp nơi."
];

const MATERIALS = [
  "Đường thêu tay sử dụng chỉ sợi cotton bền màu, được chọn lọc theo bảng màu gợi nhắc các gam sắc trong tranh dân gian và kiến trúc cổ.",
  "Mỗi tấm thổ cẩm được dệt tại các làng nghề với hoạ tiết riêng biệt, không tấm nào trùng lặp hoàn toàn - tạo nên bản thể độc bản cho từng sản phẩm.",
  "Bảng cờ dễ dàng gấp gọn, chống nhăn và thân thiện môi trường, phù hợp để sử dụng và gìn giữ lâu dài như một vật phẩm mang hồn văn hóa."
];

const COMMUNITY = `Với doanh thu mỗi bộ sản phẩm, HỘI trích 5% vào quỹ bảo tồn và phát triển sinh kế nghệ nhân thủ công truyền thống.`;

const sections = [
  {
    label: "Mô Tả Sản Phẩm",
    content: (
      <Box>
        {DESCRIPTION.slice(0, 2).map((txt, i) => (
          <Typography key={i} sx={{ mb: 1.5 }}>{txt}</Typography>
        ))}
        <ul style={{ margin: 0, paddingLeft: 24 }}>
          {DESCRIPTION.slice(3, -1).map((item, i) => (
            <li key={i}>
              <Typography>{item.replace(/^\+ /, '')}</Typography>
            </li>
          ))}
        </ul>
        <Typography sx={{ mt: 2 }}>{DESCRIPTION.at(-1)}</Typography>
      </Box>
    )
  },
  {
    label: "Tinh Hoa Thủ Công",
    content: (
      <Box>
        <ul style={{ margin: 0, paddingLeft: 24 }}>
          {HANDCRAFT.map((txt, i) => (
            <li key={i}>
              <Typography sx={{ mb: 1 }}>{txt}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    )
  },
  {
    label: "Chất Liệu Tạo Câu Chuyện",
    content: (
      <Box>
        <ul style={{ margin: 0, paddingLeft: 24 }}>
          {MATERIALS.map((txt, i) => (
            <li key={i}>
              <Typography sx={{ mb: 1 }}>{txt}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    )
  }
];

export default function GiaoSacVanKyPage() {
  const { addToCart } = useCart();
  const [mainImg, setMainImg] = useState(images[0]);
  const [open, setOpen] = useState([true, false, false]);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleSection = (idx: number) => {
    setOpen(arr => arr.map((x, i) => (i === idx ? !x : x)));
  };

  const handleQuantityChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const handleAddToCart = () => {
    setAdding(true);
    addToCart(
      {
        id: "giao-sac-van-ky",
        name: "Giao Sắc Văn Kỳ",
        price: 2499000,
        image: mainImg
      },
      quantity
    );
    setTimeout(() => setAdding(false), 700); // Debounce for user experience
  };

  const handleBuyNow = () => {
    addToCart(
      {
        id: "giao-sac-van-ky",
        name: "Giao Sắc Văn Kỳ",
        price: 2499000,
        image: '/main4.png'
      },
      1
    );
    navigate('/thanh-toan');
  };

  return (
    <Box sx={{ maxWidth: 1450, mx: 'auto', pt: { xs: 3, md: 5 }, pb: { xs: 7, md: 12 }, px: { xs: 3, md: 2 } }}>
      <Grid container spacing={{ xs: 2, md: 5 }}>
        {/* Left: Image Gallery */}
        <Grid size={{ xs: 12, md: 7, lg: 7 }} order={{ xs: 1, md: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              height: { xs: 'auto', md: 500 }
            }}
          >
            {/* Thumbnails */}
            <Stack
              spacing={2}
              direction={{ xs: 'row', md: 'column' }}
              sx={{
                mb: { xs: 2, md: 0 },
                mr: { xs: 0, md: 2 },
                mt: { xs: 0, md: 1 },
                height: { xs: 'auto', md: 440 },
                width: { xs: '100%', md: 'auto' },
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              {images.map(img => (
                <Box
                  key={img}
                  component="img"
                  src={img}
                  alt="thumbnail"
                  onClick={() => setMainImg(img)}
                  sx={{
                    width: { xs: 58, md: 64 },
                    height: { xs: 58, md: 64 },
                    objectFit: 'cover',
                    borderRadius: 2,
                    cursor: 'pointer',
                    border: mainImg === img ? '2.5px solid #66431b' : '2.5px solid #eee',
                    boxShadow: mainImg === img ? '0 2px 16px 0 #66431b22' : undefined,
                    transition: 'border .18s, box-shadow .18s'
                  }}
                />
              ))}
            </Stack>
            {/* Main Image */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                minHeight: { xs: 180, md: 400 },
                width: { xs: '100%', md: 'auto' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fafafa',
                borderRadius: 3,
                boxShadow: '0 6px 32px 0 #eee',
                position: 'relative'
              }}
            >
              <img
                src={mainImg}
                alt="Giao Sắc Văn Kỳ"
                style={{
                  maxWidth: '94%',
                  maxHeight: isMobile ? 240 : 440,
                  objectFit: 'contain',
                  borderRadius: 12
                }}
              />
            </Paper>
          </Box>
        </Grid>

        {/* Right: Info & Dropdowns */}
        <Grid size={{ xs: 12, md: 5, lg: 5 }} order={{ xs: 2, md: 2 }} maxWidth={1000}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#001524',
              mb: 2,
              fontSize: { xs: 22, md: 32 }
            }}
          >
            Giao Sắc Văn Kỳ
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 28 },
              color: '#66431b',
              fontWeight: 500,
              mb: 3
            }}
          >
            2.499.000₫
          </Typography>
          {/* Dropdown Sections */}
          {sections.map((sec, idx) => (
            <Box key={sec.label} sx={{ mb: 1.5 }}>
              <Box
                onClick={() => toggleSection(idx)}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  py: 1.2
                }}
              >
                <Typography sx={{
                  fontWeight: 600,
                  fontSize: { xs: 16, md: 19 },
                  flex: 1
                }}>
                  {sec.label}
                </Typography>
                <IconButton
                  size="small"
                  sx={{
                    color: open[idx] ? '#66431b' : '#222',
                    bgcolor: open[idx] ? '#f7efe3' : 'transparent',
                    transition: 'all 0.2s',
                    '&:hover': { color: '#66431b', bgcolor: '#f7efe3' }
                  }}
                >
                  {open[idx] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>
              <Collapse in={open[idx]}>
                <Box sx={{ pl: 0.5, pb: 2 }}>{sec.content}</Box>
              </Collapse>
              <Divider sx={{ my: 1.5, borderColor: '#ececec' }} />
            </Box>
          ))}
          {/* Community box */}
          <Box sx={{
            p: { xs: 2, md: 2.5 },
            mt: { xs: 2, md: 3 },
            border: '1.5px solid #eee',
            borderRadius: 2,
            bgcolor: '#faf9ee'
          }}>
            <Typography sx={{
              fontSize: { xs: 16, md: 20 },
              color: '#66431b',
              fontWeight: 700
            }}>
              Cùng bạn viết tiếp câu chuyện di sản
            </Typography>
            <Typography sx={{
              color: '#222',
              mt: 1,
              fontSize: { xs: 13.5, md: 15.5 }
            }}>
              {COMMUNITY}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'stretch', sm: 'center' },
              gap: 2.5,
              flexWrap: 'wrap'
            }}
          >
            {/* Quantity selector */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1.3px solid #ececec',
                borderRadius: 2,
                p: { xs: '4px 10px', md: '6px 16px' },
                width: { xs: '100%', sm: 'auto' },
                justifyContent: 'center'
              }}
            >
              <IconButton
                size="small"
                aria-label="Giảm số lượng"
                onClick={() => handleQuantityChange(quantity - 1)}
                sx={{ color: '#66431b' }}
                disabled={quantity <= 1}
              >
                <RemoveIcon />
              </IconButton>
              <InputBase
                type="number"
                value={quantity}
                onChange={e => {
                  const val = Math.max(1, parseInt(e.target.value) || 1);
                  setQuantity(val);
                }}
                inputProps={{
                  min: 1,
                  style: {
                    textAlign: 'center',
                    width: 36,
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#222',
                    border: 'none',
                    MozAppearance: 'textfield',
                  },
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
                sx={{
                  mx: 1.2,
                  fontWeight: 600,
                  fontSize: 18,
                  border: 'none',
                  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                  '& input[type=number]': {
                    MozAppearance: 'textfield',
                  }
                }}
              />
              <IconButton
                size="small"
                aria-label="Tăng số lượng"
                onClick={() => handleQuantityChange(quantity + 1)}
                sx={{ color: '#66431b' }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            {/* Buttons */}
            <Button
              variant="contained"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                px: 2.5,
                py: 1.2,
                fontWeight: 600,
                fontSize: { xs: '0.98rem', md: '1rem' },
                bgcolor: '#ffe8c2',
                color: '#66431b',
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': { bgcolor: '#fff2df' },
                textTransform: 'none'
              }}
              onClick={handleAddToCart}
              disabled={adding}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button
              variant="contained"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                px: 2.5,
                py: 1.2,
                fontWeight: 600,
                fontSize: { xs: '0.98rem', md: '1rem' },
                bgcolor: '#66431b',
                color: '#fff',
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': { bgcolor: '#fff', color: '#66431b' },
                textTransform: 'none'
              }}
              onClick={handleBuyNow}
            >
              Mua ngay
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
