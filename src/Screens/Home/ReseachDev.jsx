import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Research from "../../assets/research.png";

const ResearchDev = () => {
  const [animated, setAnimated] = useState(false);
  const rootRef = useRef(null);
  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            io.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' } // trigger earlier
      );
      io.observe(el);
    } else {
      setAnimated(true); // no IO support
    }

    // iOS Safari fallback in case IO doesn't fire
    const t = setTimeout(() => setAnimated(true), 800);

    return () => {
      clearTimeout(t);
      io && io.disconnect();
    };
  }, []);

  return (
    <Box
      ref={rootRef}
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#ff7a00",
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Image Section */}
        <Grid
          item
          sx={{
            transform: isTab ? 'none' : (animated ? "translateX(0)" : "translateX(24px)"), // smaller offset
            opacity: isTab ? 1 : (animated ? 1 : 0),
            transition: "all 0.8s ease",
          }}
        >
          <Box component="img" src={Research} alt="Research" sx={{ width: { xs: "100%", sm: '400px', md: '500px', lg: '100%' }, height: 430, objectFit: "cover", borderRadius: 1, }} />

        </Grid>

        {/* Text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            color: "#fff",
            transform: isTab ? "none" : animated ? "translateX(0)" : "translateX(24px)",
            opacity: isTab ? 1 : animated ? 1 : 0,
            transition: "all 0.8s ease",
            px: { xs: 2, md: 4 },
            width: { xs: '100%', sm: 400, md: 400, lg: 500 },
          }}
        >

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, width: 200, fontFamily: 'Outfit, sans-serif' }}
          >
            Research & Development
          </Typography>
          <Typography sx={{ fontSize: 13, maxWidth: 400, fontFamily: 'Outfit, sans-serif' }}>
            SRS's research and development is supported by advanced infrastructure, including climate-controlled facilities, net-houses, precision farms, and biotech labs. The program is run by qualified crop scientists and focuses on:
          </Typography>
          <Typography sx={{ fontSize: 13, maxWidth: 600, mt: 1, fontFamily: 'Outfit, sans-serif', lineHeight: '1.6em' }}>
            • Developing superior, multi-disciplinary crop products.<br />
            • Enhancing genetic traits to create unique recombinants.<br />
            • Conducting market-oriented research to meet farmer and industry needs.<br />
            • Using biotechnology for transgenic research and market-assisted selection.<br />
            • Designing products tailored for different agro-climatic situations.<br />
            • Running intensive hybridization programs to create new hybrids annually.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResearchDev;
