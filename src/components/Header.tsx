import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  // Common styles for navigation buttons
  const navButtonStyles = {
    color: 'black',
    textTransform: 'none',
    fontSize: '1rem',
    margin: '16px 8px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'grey',
    },
  };

  // Styles for dropdown menu items
  const menuItemStyles = {
    color: 'black',
    backgroundColor: 'transparent',
    '&:hover': {
      color: 'grey',
      backgroundColor: 'transparent',
    },
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ backgroundColor: 'white' }}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img
              src="/HOI_LOGO.png"
              alt="CraftedbyHoi Logo"
              style={{ height: '50px', display: 'block', padding: '4px 16px' }}
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Button sx={navButtonStyles} component={Link} to="/">
          Trang chủ
        </Button>
        <Button sx={navButtonStyles} component={Link} to="/gioi-thieu">
          Giới thiệu
        </Button>

        {/* Products Button with Hover Dropdown */}
        <Box onMouseLeave={handleMenuClose} sx={{ position: 'relative' }}>
          <Button
            sx={navButtonStyles}
            component={Link}
            to="/san-pham"
            endIcon={<KeyboardArrowDownIcon />}
            onMouseEnter={handleMenuOpen}
            onClick={() => handleMenuItemClick('/san-pham')} // <--- handle click to route
            id="products-button"
            aria-controls={open ? 'products-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            Sản phẩm
          </Button>
          <Menu
            id="products-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseLeave: handleMenuClose,
              'aria-labelledby': 'products-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: { backgroundColor: 'white' },
            }}
          >
            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuItemClick('/san-pham/giao-sac-van-ky')}
            >
              Giao Sắc Văn Kỳ
            </MenuItem>
            {/* More items if needed */}
          </Menu>
        </Box>

        <Button sx={navButtonStyles} component={Link} to="/quyen-gop">
          Quyên góp
        </Button>
        <Button sx={navButtonStyles} component={Link} to="/lien-he">
          Liên hệ
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;