import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Divider,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Call from "../../assets/Call.png";
import Email from "../../assets/Email.png";
import Location from "../../assets/Location.png";
import SRS from '../../assets/SRS.png';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);
  const openProducts = Boolean(productsAnchorEl);

  // mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const handleProductsClick = (event) => {
    navigate("/products");
    setProductsAnchorEl(event.currentTarget)
  };
  const handleProductsClose = () => setProductsAnchorEl(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false); // close drawer after navigation
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#fff",
        color: "#000",
        overflowX: "hidden",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* Top row: Logo + social + contact */}
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: 'space-between', sm: "center" },
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          px: 0,
          py: 1,
        }}
      >
        {/* Left — Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <img src={SRS} alt="SRS SRI RAMA" style={{ height: 40, width: 220 }} />
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: "none" }, alignItems: "center" }}>
          <IconButton sx={{ color: "#1f2937" }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: "none" }, alignItems: "center" }}>
          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "#1f2937" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Right — Social + Contact blocks */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 2 }}>
          {/* Social icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, ml: 3 }}>
            {[TwitterIcon, FacebookIcon, PinterestIcon, InstagramIcon].map((Icon, i) => (
              <Box
                key={i}
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: "#F5F2EA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon sx={{ fontSize: 18, color: "#222" }} />
              </Box>
            ))}
          </Box>

          {/* Call */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1, ml: 2 }}>
            <img src={Call} alt="Call" style={{ height: 24, width: 24 }} />
            <Box>
              <Typography variant="caption" color="text.secondary">
                Call anytime
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                +91 88976 55001
              </Typography>
            </Box>
          </Box>

          <Divider orientation="vertical" flexItem display={{ xs: "none", md: "flex" }} />

          {/* Email */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            <img src={Email} alt="Email" style={{ height: 24, width: 24 }} />
            <Box>
              <Typography variant="caption" color="text.secondary">
                Send email
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                info@sriramaseeds.com
              </Typography>
            </Box>
          </Box>

          <Divider orientation="vertical" flexItem display={{ xs: "none", md: "flex" }} />

          {/* Location */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            <img src={Location} alt="Location" style={{ height: 28, width: 20 }} />
            <Box>
              <Typography variant="caption" color="text.secondary">
                Village Mulugu Mandal Siddipet
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Telangana – 502356 India.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>

      {/* Bottom row: Navigation + Search */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
          width: "100%",
        }}
      >

        {/* Left nav */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            color: "#6b7280",
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer", fontFamily: "Poppins, sans-serif" }}
          >
            Home
          </Typography>
          <Typography
            onClick={() => navigate("/aboutUs")}
            sx={{ cursor: "pointer", fontFamily: "Poppins, sans-serif" }}
          >
            About
          </Typography>
          <Typography
            onClick={() => navigate("/contactUs")}
            sx={{ cursor: "pointer", fontFamily: "Poppins, sans-serif" }}
          >
            Contact
          </Typography>

          {/* Products dropdown */}
          <Box
            onClick={handleProductsClick}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
              color: "#6b7280",
            }}
          >
            <Typography>Products</Typography>
            <KeyboardArrowDownIcon fontSize="small" />
          </Box>
          <Menu
            anchorEl={productsAnchorEl}
            open={openProducts}
            onClose={handleProductsClose}
            MenuListProps={{ "aria-labelledby": "products-button" }}
          >
            <MenuItem onClick={handleProductsClose}>Product A</MenuItem>
            <MenuItem onClick={handleProductsClose}>Product B</MenuItem>
            <MenuItem onClick={handleProductsClose}>Product C</MenuItem>
          </Menu>
        </Box>

        {/* Right: Search or Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider orientation="vertical" flexItem />
          <IconButton sx={{ color: "#1f2937" }}>
            <SearchIcon />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "#1f2937" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Right Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 220 } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon><HomeOutlinedIcon sx={{ color: "#6b7280" }} /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/aboutUs")}>
            <ListItemIcon><ArticleOutlinedIcon sx={{ color: "#6b7280" }} /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>

          <ListItemButton onClick={() => setMobileProductsOpen((v) => !v)}>
            <ListItemIcon><Inventory2OutlinedIcon sx={{ color: "#6b7280" }} /></ListItemIcon>
            <ListItemText primary="Products" />
            <KeyboardArrowDownIcon
              sx={{ transform: mobileProductsOpen ? "rotate(180deg)" : "none", transition: "0.2s" }}
            />
          </ListItemButton>
          <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 7 }} onClick={() => scrollTo("product-a")}>
                <ListItemText primary="Product A" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }} onClick={() => scrollTo("product-b")}>
                <ListItemText primary="Product B" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 7 }} onClick={() => scrollTo("product-c")}>
                <ListItemText primary="Product C" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => scrollTo("contact")}>
            <ListItemIcon><PersonOutlineOutlinedIcon sx={{ color: "#6b7280" }} /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>

          <ListItemButton onClick={() => scrollTo("we-serve")}>
            <ListItemIcon><DescriptionOutlinedIcon sx={{ color: "#6b7280" }} /></ListItemIcon>
            <ListItemText primary="We Serve" />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
}
