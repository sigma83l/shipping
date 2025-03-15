import { AppBar, Toolbar, Typography, Button, Container, Box, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

// Define the type for menu items
type MenuItemType = { label: string; href: string };

// Define the menu structure with explicit keys
const menuItems: Record<string, MenuItemType[]> = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
  ],
  Services: [
    { label: "Web Development", href: "/services/web-dev" },
    { label: "SEO", href: "/services/seo" },
    { label: "Marketing", href: "/services/marketing" },
  ],
  Support: [
    { label: "Help Center", href: "/support/help" },
    { label: "Contact Us", href: "/support/contact" },
    { label: "FAQ", href: "/support/faq" },
  ],
  "Member Area": [
    { label: "Dashboard", href: "/member/dashboard" },
    { label: "Settings", href: "/member/settings" },
    { label: "Logout", href: "/logout" },
  ],
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<keyof typeof menuItems | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>, menu: keyof typeof menuItems) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f8f9fa",
        color: "#333",
        paddingY: 1.5,
        borderBottom: "2px solid #ddd",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo (Left side) */}
          <Typography component="div" sx={{ fontWeight: "bold" }}>
            <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
          </Typography>

          {/* Navigation & Button (Right side) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {Object.keys(menuItems).map((text) => (
              <Box
                key={text}
                onMouseEnter={(e) => handleMenuOpen(e, text as keyof typeof menuItems)}
                onMouseLeave={handleMenuClose}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  fontWeight: 500,
                  paddingX: 2,
                  paddingY: 1,
                  borderRadius: 1,
                  color: "#555",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: "#1976d2",
                    backgroundColor: "rgba(25, 118, 210, 0.1)",
                  },
                }}
              >
                {text}
                {/* Dropdown Menu */}
                {activeMenu === text && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "#fff",
                      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                      borderRadius: 1,
                      paddingY: 1,
                      minWidth: 150,
                      zIndex: 10,
                    }}
                    onMouseEnter={() => setActiveMenu(text as keyof typeof menuItems)}
                    onMouseLeave={handleMenuClose}
                  >
                    {menuItems[text as keyof typeof menuItems].map((item, idx) => (
                      <MenuItem key={idx} onClick={handleMenuClose}>
                        <Link href={item.href} passHref>
                          <Typography variant="body2" sx={{ color: "#333", paddingX: 1 }}>
                            {item.label}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            ))}

            {/* Track It Button */}
            <Button
              variant="contained"
              sx={{
                borderRadius: 20,
                px: 2.5,
                py: 1,
                fontSize: "0.875rem",
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Track It
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
