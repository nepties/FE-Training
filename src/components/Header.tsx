import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GoogleIcon from "@mui/icons-material/Google";

import { Link as RouterLink } from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  User,
} from "firebase/auth";

import { openDB } from "idb";

const pages = [
  { name: "캐릭터", path: "/characters" },
  { name: "장비", path: "/equipments" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [user, setUser] = React.useState<User | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getUser = async (): Promise<void> => {
    let user: User | null = getAuth().currentUser;

    if (user === null) {
      const firebaseDb = await openDB("firebaseLocalStorageDb");
      const firebaseLocalStorage = await firebaseDb.getAll(
        "firebaseLocalStorage",
      );
      if (firebaseLocalStorage.length !== 0) {
        setUser(firebaseLocalStorage[0].value as User);
      }
    } else {
      setUser(user);
    }
  };

  const signIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
      alert("로그인 실패.\n관리자에게 문의해주세요.\n\n" + error);
    }
  };

  const signOutByClick = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
      alert("로그아웃 실패.\n관리자에게 문의해주세요.\n\n" + error);
    }
  };

  const signButtonByUserState = () => {
    if (user === null) {
      return (
        <Button variant="contained" color="info" onClick={signIn}>
          <GoogleIcon sx={{ width: "14px", height: "14px", mr: "0.5rem" }} />
          로그인
        </Button>
      );
    } else {
      return (
        <Button variant="contained" color="error" onClick={signOutByClick}>
          로그아웃
        </Button>
      );
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            WAFURI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                component={RouterLink}
                to={page.path}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textAlign: "center",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {signButtonByUserState()}
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
