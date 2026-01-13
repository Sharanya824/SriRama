import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { keyframes } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const features = [
  {
    title: "Seeds Ensured for Quality",
    description:
      "Sri Rama AgriGenetics partners with farmers, enabling them to plant top-notch seeds and achieve bountiful harvests.",
    icon: <YardOutlinedIcon />,
  },
  {
    title: "Farmer Focus",
    description:
      "Our commitment lies in prioritizing farmer welfare and prosperity. With unwavering dedication to the farming community.",
    icon: <PersonIcon />,
  },
  {
    title: "Support and Guidance in the Field",
    description:
      "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt nec metus. Vivamus accumsan.",
    icon: <SupportAgentIcon />,
  },
  {
    title: "Robust Infrastructure",
    description:
      "Cutting-edge processing facility with the capability to produce and process seeds efficiently.",
    icon: <BusinessOutlinedIcon />,
  },
];

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const SeedsForAgriculture = () => {
  const [played, setPlayed] = useState(false); // one-time flag

  const handleEnter = () => {
    if (!played) setPlayed(true);
  };

  return (
    <Box
      onMouseEnter={handleEnter}
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#fff",
        mt: 2,
        overflow: "hidden",
      }}
    >
      {/* Heading Section */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          mb: 6,
          opacity: played ? 1 : 0,
          transform: played ? "translateY(0)" : "translateY(40px)",
          animation: played ? `${slideUp} 600ms ease forwards` : "none",
          willChange: "transform, opacity",
        }}
      >
        <Box sx={{ display: "inline-block", cursor: "pointer" }}>
          <Typography sx={{ fontSize: { xs: 26, md: 46 },width:{xs:400,sm:600}, fontWeight: 700, color: "#222",fontFamily:'Bricolage Grotesque,sans-serif' }}>
            Seeds for Agricultural{" "}
            <span style={{ color: "#F57C00" }}>Advancements</span>
          </Typography>
        </Box>

        <Typography sx={{ mt: 2, fontSize: 14, color: "#525252", display: { xs: 'none', sm: 'block' } }}>
          “Founded in 1996 by Ch. Sri Rama Murthy, Sri Rama Agri Genetics (India)
          Pvt. Ltd. (SRAGIPL) is a fast-growing, fully integrated seed company
          headquartered in Kurnool, A.P. With a strong focus on R&D, we develop,
          produce, and market high-quality seeds across India.”
        </Typography>
      </Box>

      {/* Cards Section (all animate at once) */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                height: "100%",
                width: { xs: 320, sm: 350, md: 350, lg: 520 },
                mx: "auto",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                opacity: played ? 1 : 0,
                transform: played ? "translateY(0)" : "translateY(40px)",
                animation: played ? `${slideUp} 600ms ease forwards` : "none",
                willChange: "transform, opacity",
              }}
            >
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      minWidth: 58,
                      height: 58,
                      borderRadius: "10%",
                      backgroundColor: "#FF7A00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: { xs: 16, sm: 18,md:18,lg:20 }, fontWeight: 600, color: "#FF7A00", mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 10, sm: 12,md:12,lg:15 }, color: "#555" }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SeedsForAgriculture;
