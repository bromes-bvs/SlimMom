import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import UserNav from './UserNav';
import { ReactComponent as Logo } from '../../assets/image/header/logo-svg.svg';
import { ReactComponent as LogoText } from '../../assets/image/header/Group 18.svg';
import mainLogo from '../../assets/image/header/logo-desk-png.png';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ModalMenu from 'components/Menu/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          minWidth: '100%',
          backgroundColor: 'transparent',
          boxShadow: { lg: 'none' },
          // paddingTop: { lg: '131px' },
          top: '80px',
          minHeight: '80px',
          position: { lg: 'absolute' },
        }}
      >
        <Toolbar
          sx={{
            minHeight: '80px !important',
            justifyContent: {
              xs: 'space-between',
              lg: isLoggedIn ? 'space-between' : 'start',
            },
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            spacing={2}
            sx={{
              alignItems: { xs: 'center', md: 'center', lg: 'baseline' },
              width: { xs: '100%', md: '100%', lg: 'auto' },
              justifyContent: { md: 'space-between', lg: 'flex-start' },
            }}
          >
            <Link
              to={isLoggedIn ? '/diary' : '/'}
              style={{
                marginRight: 'auto',
              }}
            >
              <Stack direction={'row'} alignItems="center" spacing={1}>
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'flex', lg: 'none' },
                  }}
                >
                  <Logo />
                </Box>
                <Box
                  sx={{
                    display: { xs: 'none', md: 'none', lg: 'flex' },
                  }}
                >
                  <img src={mainLogo} alt="logo" />
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: isLoggedIn ? 'flex' : 'none',
                      md: 'flex',
                      lg: 'none',
                    },
                  }}
                >
                  <LogoText />
                </Box>
              </Stack>
            </Link>
            {!isLoggedIn && (
              <>
                <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    sx={{
                      alignSelf: 'center',
                      height: '32px',
                      m: '0 auto',
                      borderWidth: '1.5px',
                      position: { lg: ' relative' },
                      top: { lg: '6px' },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                  }}
                >
                  <AuthNav />
                </Box>
              </>
            )}

            {isLoggedIn && (
              <>
                <Box
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                  }}
                >
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    sx={{
                      alignSelf: 'center',
                      height: '32px',
                      m: '0 auto',
                      borderWidth: '1.5px',
                      position: { lg: ' relative' },
                      top: { lg: '6px' },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                  }}
                >
                  <UserNav />
                </Box>
              </>
            )}
            {!isLoggedIn && (
              <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                <AuthNav />
              </Box>
            )}
          </Stack>
          <Stack direction={'row'} spacing={3}>
            {isLoggedIn && (
              <UserMenu styles={{ xs: 'none', md: 'flex', lg: 'none' }} />
            )}
            {isLoggedIn && (
              <>
                {open ? (
                  <CloseIcon sx={{ color: 'black' }} />
                ) : (
                  <IconButton
                    size="large"
                    color="blue"
                    aria-label="menu"
                    sx={{ m: 0, p: 0, display: { sm: 'flex', lg: 'none' } }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
                {open && (
                  <ModalMenu
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={open}
                  >
                    <UserNav handleClose={handleClose} changeStyle></UserNav>
                  </ModalMenu>
                )}
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {isLoggedIn && <UserMenu styles={{ md: 'none' }} />}
    </>
  );
};

export default Header;
