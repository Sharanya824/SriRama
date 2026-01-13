import React, { useEffect, useRef, useState } from "react";
import { Box, Typography} from "@mui/material";
import Sun from "../../assets/Sun.png";

const EnhancingAgriculture = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        overflow: "hidden",
        width: "90%",
        mx: "auto",
        mt:{xs:4, md:-8}
      }}
    >
      <Box
        container
        alignItems="center"
        spacing={6}
        sx={{display: 'flex', flexDirection: { xs: "column", sm: "row" }}}
      >
        {/* IMAGE */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" ,sm:'50%',lg:'60%'},
            justifyContent: { xs: "center", md: "flex-start" },
            transform: visible ? "translateX(0)" : "translateX(-120px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.9s ease",
          }}
        >
          <Box
            component="img"
            src={Sun}
            alt="Sunflower"
            sx={{
              width: "100%",
              maxWidth: 520,
              borderRadius: "0 0 140px 0",
            }}
          />
        </Box>

        {/* TEXT */}
        <Box
          sx={{
            transform: visible ? "translateX(0)" : "translateX(120px)",
            opacity: visible ? 1 : 0,
            width: { xs: "100%", md: "50%" ,sm:'50%',lg:"42%"},
            transition: "all 0.9s ease",
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 4, md: 12,sm:12,lg:10 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, md: 30 },
              fontWeight: 700,
              mb: 2,
              color: "#222",
              fontFamily :'Lato , sans-serif'
            }}
          >
            Enhancing Agriculture Through{" "}
            <Box component="span" sx={{ color: "#F57C00" }}>
              Scientific Advancements
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#000000",
              maxWidth: 520,
              mx: { xs: "auto", md: 0 },
              fontFamily :'Lato , sans-serif'
            }}
          >
            Driven by science, we develop and deliver high-quality seeds that
            enhance agriculture across India. With innovation at our core,
            we’re sowing the seeds of progress and prosperity.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EnhancingAgriculture;
