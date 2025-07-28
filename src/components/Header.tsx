import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Fade } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useCart } from './cartContext'; // import path as needed

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { cart } = useCart();

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
    transition: 'all 0.22s cubic-bezier(.3,.6,.3,1)',
    '&:hover': {
      color: '#66431b',
      backgroundColor: '#f7efe3',
      transform: 'translateX(8px) scale(1.03)',
      boxShadow: '0 2px 16px 0 #f7efe344',
    },
  };

  // ---- Products Button Handlers ----
  const handleProductsButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    // Only open menu on hover, not on click
    if (event.type === 'mouseenter') {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleProductsButtonMouseLeave = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 120); // allow time for pointer to move to Menu
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  // ---- Navigation Handler ----
  const handleProductsClick = () => {
    // Only trigger on actual click, not on hover
    navigate('/san-pham');
    handleMenuClose();
  };

  // Styles (as before) ...

  return (
    <AppBar position="sticky" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
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

        {/* --- PRODUCTS BUTTON --- */}
        <Box
          sx={{ position: 'relative', display: 'inline-block' }}
          onMouseEnter={handleProductsButtonClick}
          onMouseLeave={handleProductsButtonMouseLeave}
        >
          <Button
            sx={navButtonStyles}
            endIcon={<KeyboardArrowDownIcon />}
            aria-controls={open ? 'products-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleProductsClick} // ← this is the KEY for navigation
            component="button" // NOT Link! (else it’ll navigate on hover too)
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
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            TransitionComponent={Fade} // <--- Smooth fade
            transitionDuration={300}   // <--- Adjust speed if desired
            PaperProps={{
              sx: {
                backgroundColor: 'white',
                width: 200,
                padding: '8px 8px',
                borderRadius: 2,
                boxShadow: '0 6px 32px 0 #eee',
                transition: 'all 0.25s cubic-bezier(.3,.6,.3,1)',
                overflow: 'hidden',
              }
            }}
          >
            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuItemClick('/san-pham')}
            >
              Tất cả sản phẩm
            </MenuItem>
            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuItemClick('/san-pham/giao-sac-van-ky')}
            >
              Giao Sắc Văn Kỳ
            </MenuItem>
          </Menu>
        </Box>
        <Button sx={navButtonStyles} component={Link} to="/quyen-gop">
          Quyên góp
        </Button>
                <IconButton
          sx={{ ml: 2, color: "#001524" }}
          onClick={() => navigate("/gio-hang")}
          aria-label="Giỏ hàng"
        >
          <Badge badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)} color="error">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
