import  { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Chairman from "../../assets/Chairman.png";
import ChairmanBackground from "../../assets/ChairmanBackground.png";

const ChairmanMessage = () => {
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
        width: "100%",
        mx: "auto",
        mt: { xs: 4, md: -8 }
      }}
    >
      <Box
        container
        alignItems="center"
        spacing={6}
        sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row" } }}
      >
        {/* TEXT */}
        <Box
          sx={{
            transform: visible ? "translateX(0)" : "translateX(120px)",
            opacity: visible ? 1 : 0,
            display: { xs: 'none', sm: 'block' },
            width: { xs: "100%", sm: "100%" ,md:'80%',lg:"60%"},
            transition: "all 0.9s ease",
            textAlign: { xs: "center", md: "left" },
            ml: { xs: 0, md: 10 },
            mt: { xs: 4, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, md: 30 },
              fontWeight: 700,
              mb: 2,
              color: "#222",
            }}
          >
            Chairman’s  {" "}
            <Box component="span" sx={{ color: "#F57C00" }}>
              Message
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#000000",
              maxWidth: 500,
              mx: { xs: "auto", md: 0 },
            }}
          >
            I am honored to address you as Chairman of SRS Group Seed Productions. Our journey in advancing agriculture through science has been marked by passion, dedication, and a relentless pursuit of excellence. At SRS, we are not just a seed production company; we are stewards of innovation, contributing to the global effort to enhance agricultural practices.
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#000000",
              maxWidth: 500,
              mx: { xs: "auto", md: 0 },
              mt: 2,
            }}
          >Our commitment to research-driven solutions and state-of-the-art facilities reflects our vision for sustainable and impactful agriculture. We take pride in delivering high-quality seeds that empower farmers with increased yields, resilience, and productivity. As we navigate the dynamic landscape of seed production, I express my gratitude to each member of the SRS family for their hard work and unwavering commitment. Together, let us continue sowing the seeds of progress and prosperity.
          </Typography>
        </Box>
        {/* IMAGE */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "60%",md:'60%',lg:'50%' },
            justifyContent: "center",
            transform: visible ? "translateX(0)" : "translateX(-120px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.9s ease",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 300, md: 360 },
              mt: { xs: 0, md: 8 },
              height: { xs: 300, md: 360 },
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Colored background segments */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: `url(${ChairmanBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Chairman Image */}
            <Box
              component="img"
              src={Chairman}
              alt="Chairman"
              sx={{
                position: "relative",
                zIndex: 2,
                width: "65%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            transform: visible ? "translateX(0)" : "translateX(120px)",
            opacity: visible ? 1 : 0,
            display: { xs: 'block', sm: 'none' },
            width: 350,
            transition: "all 0.9s ease",
            textAlign: { xs: "center", md: "left" },
            ml: { xs: 0, md: 10 },
            mt: { xs: 4, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, md: 30 },
              fontWeight: 700,
              mb: 2,
              color: "#222",
            }}
          >
            Chairman’s  {" "}
            <Box component="span" sx={{ color: "#F57C00" }}>
              Message
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#000000",
              maxWidth: 400,
              mx: { xs: "auto", md: 0 },
            }}
          >
            As Chairman of SRS Group Seed Productions, I'm proud of our passionate journey advancing agriculture through science. We are stewards of innovation, committed to research-driven solutions and sustainable practices. We deliver high-quality seeds that empower farmers with increased yields and resilience. My gratitude goes to the SRS family for their hard work. Together, let's continue sowing the seeds of progress and prosperity.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChairmanMessage;
