import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { setUserRole } from "../store/userSlice";

import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import CartIcon from "./card/cardIcon";

function Navbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if localStorage is available (executing in the browser)
    if (typeof window !== "undefined") {
      // Access localStorage and update isLoggedIn state accordingly
      setIsLoggedIn(localStorage.getItem("accessToken") ? true : false); // need to add although expiration date Verification
    }
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [role, setRole] = useState("");

  const userRole = useSelector((state: any) => state.user.userRole);
  console.log(userRole, "blabla");
  useEffect(() => {
    setRole(userRole);
  }, [userRole]);
  console.log("role is from nav", role);
  // State to track user login status

  const handleLogout = () => {
    // Check if localStorage is available (executing in the browser)
    if (typeof window !== "undefined") {
      // Remove tokens from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("userRole");
      localStorage.removeItem("cart");
      // Update isLoggedIn state
      setIsLoggedIn(false); // Set isLoggedIn to false
      // Redirect to home page
      dispatch(setUserRole(""));

      router.push("/auth/login");
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("handleOpenUserMenu called"); // Add this line for debugging

    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link className="w-28 h-full" href={"/"}>
              <img className=" " src="/favicon1.jpg" />
            </Link>
          </Typography>
          {(role && role == "manager") || role == "company" ? (
            <>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href={"/"}>
                  <Typography
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                    }}
                    textAlign="center"
                  >
                    Companies
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href={"/order/myorders"}>
                  <Typography
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                    }}
                    textAlign="center"
                  >
                    Orders
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href={"/order/sales"}>
                  <Typography
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                    }}
                    textAlign="center"
                  >
                    Sales
                  </Typography>
                </Link>
              </MenuItem>
            </>
          ) : null}
          {!role ? (
            <>
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
                <MenuItem key={"signup"} onClick={handleCloseNavMenu}>
                  <Link href={"/auth/signup"}>
                    <Typography textAlign="center">Register</Typography>
                  </Link>
                </MenuItem>

                <MenuItem key={"login"} onClick={handleCloseNavMenu}>
                  <Link href={"/auth/login"}>
                    <Typography textAlign="center">Login</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </>
          ) : null}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {!role ? (
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
            ) : null}
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link href={"/"}>GoTrip</Link>
          </Typography>
          {!role ? (
            <>
              <Box
                className="	d-flex justify-end	"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                <Button
                  key={"signup"}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link href={`/auth/signup`}>Register</Link>
                </Button>

                <Button
                  key={"login"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link href={`/auth/login`}>Login</Link>
                </Button>
              </Box>
            </>
          ) : null}
          {role ? (
            <>
              {role !== "driver" ? (
                <Link href={`/card`}>
                  <MenuItem key={"home"} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      Card {""}
                      <CartIcon />
                    </Typography>
                  </MenuItem>
                </Link>
              ) : null}
              <Box sx={{ flexGrow: 0 }} className="ml-auto	">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      className="object-contain"
                      alt="Remy Sharp"
                      src="/client.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link href={`/`}>
                    <MenuItem key={"home"} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Home</Typography>
                    </MenuItem>
                  </Link>
                  {/* <Link href={`/card`}>
                    <MenuItem key={"home"} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <CartIcon />
                      </Typography>
                    </MenuItem>
                  </Link> */}
                  <Link href={`/account/profile`}>
                    <MenuItem key={"progile"} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                  </Link>
                  {userRole == "company" && (
                    <Link href={`/account/myservices`}>
                      <MenuItem
                        key={"myServices"}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography textAlign="center">My Services</Typography>
                      </MenuItem>
                    </Link>
                  )}
                  {userRole == "company" && (
                    <Link href={`/account/address`}>
                      <MenuItem
                        key={"addServices"}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography textAlign="center">Locations</Typography>
                      </MenuItem>
                    </Link>
                  )}
                  {userRole == "company" && (
                    <Link href={`/account/company/employees`}>
                      <MenuItem
                        key={"companyEmployees"}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography textAlign="center">
                          Company Employees
                        </Typography>
                      </MenuItem>
                    </Link>
                  )}
                  {userRole == "company" && (
                    <Link href={`/account/company/vehicles`}>
                      <MenuItem key={"vehicles"} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Vehicles</Typography>
                      </MenuItem>
                    </Link>
                  )}
                  {userRole == "driver" && (
                    <Link href={`/trips/drivertrips`}>
                      <MenuItem key={"trips"} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">My Trips</Typography>
                      </MenuItem>
                    </Link>
                  )}

                  {userRole == "company" && (
                    <Link href={`/order/sales`}>
                      <MenuItem key={"saled"} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">
                          company Sales
                        </Typography>
                      </MenuItem>
                    </Link>
                  )}
                  {userRole == "company" && (
                    <Link href={`/order/myorders`}>
                      <MenuItem key={"saled"} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">
                          company Orders
                        </Typography>
                      </MenuItem>
                    </Link>
                  )}
                  <MenuItem key={"logout"} onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
