import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './cartContext';
import CartDrawer from './CartDrawer';

export default function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // For desktop dropdown
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navButtonStyles = {
    color: '#001524',
    textTransform: 'none',
    fontSize: '1rem',
    margin: '16px 8px',
    display: { xs: 'none', md: 'inline-flex' },
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#66431b',
    },
  };

  // Desktop dropdown menu items
  const menuItemStyles = {
    color: '#001524',
    backgroundColor: 'transparent',
    transition: 'all 0.22s cubic-bezier(.3,.6,.3,1)',
    pr: 2.5,
    borderRadius: 2,
    marginRight: 1,
    '&:hover': {
      color: '#66431b',
      backgroundColor: '#f7efe3',
      boxShadow: '0 2px 8px 0 #f7efe344',
      transform: 'translateX(8px) scale(1.03)',
    },
  };

  // Cart item count
  const cartCount = cart?.reduce?.((sum, item) => sum + item.quantity, 0) || 0;

  // Desktop dropdown handlers
  const handleProductsButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.type === 'mouseenter') setAnchorEl(event.currentTarget);
  };
  const handleProductsButtonMouseLeave = () => {
    setTimeout(() => setAnchorEl(null), 120);
  };
  const handleMenuClose = () => setAnchorEl(null);
  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  // Mobile drawer navigation
  const handleDrawerNav = (path: string) => {
    setMobileNavOpen(false);
    navigate(path);
  };

  return (
    <AppBar position="sticky" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ minHeight: { xs: 60, md: 72 } }}>
        {/* Hamburger menu icon - mobile only */}
        <IconButton
          edge="start"
          sx={{ display: { xs: 'inline-flex', md: 'none' }, mr: 1, color: "#001524" }}
          onClick={() => setMobileNavOpen(true)}
          aria-label="Mở menu"
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img
              src="/HOI_LOGO.png"
              alt="CraftedbyHoi Logo"
              style={{
                height: 40,
                display: 'block',
                padding: '4px 8px',
                maxWidth: 160,
              }}
            />
          </Link>
        </Box>

        {/* Desktop Nav Buttons */}
        <Button sx={navButtonStyles} component={Link} to="/">Trang chủ</Button>
        <Button sx={navButtonStyles} component={Link} to="/gioi-thieu">Giới thiệu</Button>
        {/* Products dropdown - desktop only */}
        <Box
          sx={{ position: 'relative', display: { xs: 'none', md: 'inline-block' } }}
          onMouseEnter={handleProductsButtonClick}
          onMouseLeave={handleProductsButtonMouseLeave}
        >
          <Button
            sx={navButtonStyles}
            endIcon={<KeyboardArrowDownIcon />}
            aria-controls={open ? 'products-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={() => handleMenuItemClick('/san-pham')}
            component="button"
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
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{
              sx: {
                backgroundColor: 'white',
                width: 200,
                padding: '8px 12px',
                borderRadius: 2,
                boxShadow: '0 6px 32px 0 #eee',
                transition: 'all 0.25s cubic-bezier(.3,.6,.3,1)',
                overflow: 'hidden',
              }
            }}
          >
            <MenuItem sx={menuItemStyles} onClick={() => handleMenuItemClick('/san-pham')}>Tất cả sản phẩm</MenuItem>
            <MenuItem sx={menuItemStyles} onClick={() => handleMenuItemClick('/san-pham/giao-sac-van-ky')}>Giao Sắc Văn Kỳ</MenuItem>
          </Menu>
        </Box>
        <Button sx={navButtonStyles} component={Link} to="/quyen-gop">Quyên góp</Button>
        
        {/* Cart Icon */}
        <IconButton
          sx={{ ml: 2, color: "#001524" }}
          onClick={() => setCartOpen(true)}
          aria-label="Giỏ hàng"
        >
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

        {/* Drawer for Mobile Nav */}
        <Drawer
          anchor="left"
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
          PaperProps={{ sx: { width: 270, pt: 2, bgcolor: "#fff" } }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleDrawerNav('/')}>
                <ListItemText primary="Trang chủ" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleDrawerNav('/gioi-thieu')}>
                <ListItemText primary="Giới thiệu" />
              </ListItemButton>
            </ListItem>
            {/* Products collapsible group */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setMobileProductsOpen((v) => !v)}>
                <ListItemText primary="Sản phẩm" />
                {mobileProductsOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
              </ListItemButton>
            </ListItem>
            <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => handleDrawerNav('/san-pham')}>
                    <ListItemText primary="Tất cả sản phẩm" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => handleDrawerNav('/san-pham/giao-sac-van-ky')}>
                    <ListItemText primary="Giao Sắc Văn Kỳ" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleDrawerNav('/quyen-gop')}>
                <ListItemText primary="Quyên góp" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
