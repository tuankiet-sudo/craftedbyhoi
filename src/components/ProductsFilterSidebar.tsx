import React, { useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  InputBase,
  Divider,
  Collapse,
  IconButton,
  Switch
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const currency = '₫';

export default function ProductsFilterSidebar({
  minPrice,
  maxPrice,
  value,
  onPriceChange,
  onAvailableChange,
  available,
  onTypeChange,
  typeChecked
}: {
  minPrice: number,
  maxPrice: number,
  value: [number, number],
  onPriceChange: (val: [number, number]) => void,
  onAvailableChange: (val: boolean) => void,
  available: boolean,
  onTypeChange: (checked: boolean) => void,
  typeChecked: boolean
}) {
  // Collapsible sections
  const [typeOpen, setTypeOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  // Controlled text inputs for price fields
  const [minField, setMinField] = useState(value[0].toString());
  const [maxField, setMaxField] = useState(value[1].toString());

  // Handle typing in the input boxes
  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setMinField(val);
    if (/^\d+$/.test(val)) {
      onPriceChange([Number(val), value[1]]);
    }
  };
  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setMaxField(val);
    if (/^\d+$/.test(val)) {
      onPriceChange([value[0], Number(val)]);
    }
  };

  // Sync field with slider
  React.useEffect(() => {
    setMinField(value[0].toString());
    setMaxField(value[1].toString());
  }, [value]);

  return (
    <Box sx={{ minWidth: 280, maxWidth: 310, px: 1, pt: 2 }}>
      {/* FILTER ICON */}
      <Box sx={{ mb: 2, px: 1 }}>
        <Box
          sx={{
            width: 32, height: 32,
            display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            border: '1.5px solid #eee',
            borderRadius: '8px',
            mb: 1,
          }}
        >
          <svg width="20" height="20" fill="none"><rect y="7" width="20" height="2" rx="1" fill="#222" /><rect x="4" y="13" width="12" height="2" rx="1" fill="#222" /><rect x="7" y="3" width="6" height="2" rx="1" fill="#222" /></svg>
        </Box>
      </Box>
      {/* Sản phẩm */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
          onClick={() => setTypeOpen(o => !o)}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 17 }}>Sản phẩm</Typography>
          <IconButton size="small" sx={{ ml: 'auto', color: '#222' }}>
            {typeOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        </Box>
        <Collapse in={typeOpen}>
          <Box sx={{ mt: 0.5, mb: 1, ml: 1.5 }}>
            <FormControlLabel
              sx={{
                alignItems: 'flex-start',
                '& .MuiTypography-root': { fontWeight: 400, fontSize: 15 },
              }}
              control={
                <Checkbox
                  checked={typeChecked}
                  onChange={(_, checked) => onTypeChange(checked)}
                  size="small"
                  sx={{ p: 0.5 }}
                />
              }
              label={<span>Cờ tỷ phú<span style={{ color: '#888', fontWeight: 400, fontSize: 15 }}>  (1)</span></span>}
            />
          </Box>
        </Collapse>
      </Box>
      <Divider sx={{ my: 2, borderColor: '#eee' }} />

      {/* Giá */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
          onClick={() => setPriceOpen(o => !o)}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 17 }}>Giá</Typography>
          <IconButton size="small" sx={{ ml: 'auto', color: '#222' }}>
            {priceOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        </Box>
        <Collapse in={priceOpen}>
          <Box sx={{ mt: 2, px: 1.5 }}>
            <Slider
              value={value}
              onChange={(_, v) => onPriceChange(v as [number, number])}
              min={minPrice}
              max={maxPrice}
              step={10000}
              valueLabelDisplay="off"
              sx={{
                color: '#222',
                height: 3,
                '& .MuiSlider-rail': { opacity: 0.18, background: '#222' },
                '& .MuiSlider-thumb': {
                  width: 18, height: 18, bgcolor: '#fff',
                  border: '2px solid #66431b'
                },
                '& .MuiSlider-track': { bgcolor: '#222' },
              }}
            />
            <Box sx={{ display: 'flex', mt: 1, gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', border: '1.2px solid #eee', borderRadius: 1, px: 1, width: '100%' }}>
                <Typography sx={{ fontSize: 18, color: '#c0a573', fontWeight: 600 }}>{currency}</Typography>
                <InputBase
                  value={minField}
                  onChange={handleMinInput}
                  sx={{
                    ml: 1, flex: 1, fontWeight: 600, fontSize: 16, p: 0, color: '#222',
                  }}
                  inputProps={{ style: { padding: 0, textAlign: 'right', width: 80 } }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', border: '1.2px solid #eee', borderRadius: 1, px: 1, width: '100%' }}>
                <Typography sx={{ fontSize: 18, color: '#c0a573', fontWeight: 600 }}>{currency}</Typography>
                <InputBase
                  value={maxField}
                  onChange={handleMaxInput}
                  sx={{
                    ml: 1, flex: 1, fontWeight: 600, fontSize: 16, p: 0, color: '#222',
                  }}
                  inputProps={{ style: { padding: 0, textAlign: 'right', width: 80 } }}
                />
              </Box>
            </Box>
          </Box>
        </Collapse>
      </Box>
      <Divider sx={{ my: 2, borderColor: '#eee' }} />

      {/* Còn hàng */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 2 }}>
        <Typography sx={{ fontSize: 16, color: '#222', fontWeight: 400, mr: 1, flex: 1 }}>Còn hàng</Typography>
        <Switch
          checked={available}
          onChange={(_, checked) => onAvailableChange(checked)}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#66431b',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#c0a573',
            }
          }}
        />
      </Box>
      <Divider sx={{ borderColor: '#eee' }} />
    </Box>
  );
}
