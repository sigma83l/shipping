import { ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Header />
      {/* <Hero /> */}
      {/* Main Content */}
      <Box component="main" flexGrow={1} py={4}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
