import * as React from 'react';
import CardWidget from "../CardWidget/CardWidget";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";

const pages = [
  { label: 'Home', link: '/' },
  {
    label: 'Category',
    subPages: [
      { label: 'Asian', id: 'asian' },
      { label: 'Videogame', id: 'videogame' },
      { label: 'Space', id: 'space' },
      { label: 'Anime', id: 'anime' },
      { label: 'Cats', id: 'cats' },
      { label: 'Sky', id: 'sky' }
    ],
  },
  { label: 'About us', link: '/aboutUs' },
  { label: 'Contact us', link: '/contact' },
];
const settings = ['Profile', 'Account', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#93AAE8" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portrait world
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <React.Fragment key={page.label}>
                {page.subPages ? (
                  <Box sx={{ position: 'relative' }}>
                    <Button
                      onClick={handleOpenNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block', position: 'relative', pr: 3 }}
                    >
                      {page.label}
                      <MenuIcon
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          right: 0,
                          transform: 'translateY(-50%)',
                        }}
                      />
                    </Button>
                    <Menu
                      anchorEl={anchorElNav}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {page.subPages.map((subPage) => (
                        <MenuItem
                          key={subPage.id}
                          component={Link}
                          to={`/category/${subPage.id}`}
                          onClick={handleCloseNavMenu}
                        >
                          <Typography textAlign="center">
                            {subPage.label}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    component={Link}
                    to={page.link}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <div>
            <CardWidget />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

