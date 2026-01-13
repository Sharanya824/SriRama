import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Goldy from "../../assets/Goldy.png";
import grass from "../../assets/grass.png";
import Man2 from "../../assets/Man2.png";
import Suruchi from "../../assets/Suruchi.png";
import Gowri from "../../assets/Gowri.png";
import Swarna from "../../assets/Swarna.png";
import Gch from "../../assets/Gch.png";
import Captain from "../../assets/Captain.png";
import Tulasi from "../../assets/Tulasi.png";
import Rama296 from "../../assets/Rama296.png";
import Shakti from "../../assets/Shakti.png";
import RamaGold from "../../assets/RamaGold.png";

const products = [
  Suruchi,
  Goldy,
  Gowri,
  Swarna,
  Gch,
  Captain,
  Tulasi,
  Rama296,
  Shakti,
  RamaGold
];

const Products = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'spaace-between', alignItems: 'center', gap: 10, marginX: 'auto' }}>

        {/* LEFT CONTENT */}
        <Grid item xs={12} md={6} ml={4}>
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ color: '#000' }}
          >
            Crops We Serve
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 10, maxWidth: 480 }}
          >
            Sri Rama Agri Genetics is committed to farmer prosperity by
            providing the perfect seed for varied crop requirements. We
            continuously innovate to develop high-quality hybrid seeds that
            improve farmers’ yields.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 480 }}
          >
            We are one of India’s leading developers and producers of seeds
            for grains, oilseeds, vegetables, and cotton.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff7a00",
              px: 4,
              py: 1.2,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e56d00",
              },
            }}
          >
            Discover More
          </Button>
        </Grid>

        {/* RIGHT IMAGES */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Goldy Image */}
                <Box
                  component="img"
                  src={Goldy}
                  alt="Goldy"
                  sx={{
                    width: 220,
                    objectFit: "cover",
                    borderRadius: 3,
                  }}
                />
                {/* Man2 Image */}
                <Box
                  component="img"
                  src={Man2}
                  alt="Man2"
                  sx={{
                    width: 220,
                    objectFit: "cover",
                    borderRadius: 3,
                  }}
                />
              </Box>
              {/* Grass Image */}
              <Box
                component="img"
                src={grass}
                alt="grass"
                sx={{
                  width: 220,
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </Box>
          </Grid>
        </Grid>

      </Box>
      <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 } }}>

        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={5}
        >
          Product Portfolio
        </Typography>

        {/* Products Grid */}
        <Grid container spacing={4} justifyContent="center">
          {products.map((img, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`product-${index}`}
                  sx={{
                    width: "100%",
                    maxWidth: 200,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
};

export default Products;
