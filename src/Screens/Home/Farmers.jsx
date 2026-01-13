import { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    Avatar,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Listen from "../../assets/Listen.png";

const testimonials = [
    {
        name: "Kitliri Rama Rao",
        rating: "★★★★★",
        text: `My experience cultivating SRCH-819 Hybrid Cotton has been very positive.
The large boll size significantly facilitates the harvesting process,
reducing labor requirements.`,
        location: "Julurpadu, Bhadradri Kothagudem",
        image: Listen,
    },
    {
        name: "Ch. Anil",
        rating: "★★★★★",
        text: `Last season, I planted ‘USHA’ paddy in my 1-acre field.
Even during heavy rains, the plants stayed strong.`,
        location: "Nadigudem, Suryapeta",
        image: Listen,
    },
    {
        name: "Palsa Upendar",
        rating: "★★★★★",
        text: `I’ve had great success planting ‘KRISHNA’ paddy seed.
Its pest resistance minimizes chemical use.`,
        location: "Sattirajupalle",
        image: Listen,
    },
];

const Farmers = () => {
    const [animated, setAnimated] = useState(false);

    return (
        <Box
            onMouseEnter={() => {
                if (!animated) setAnimated(true);
            }}
            sx={{
                py: { xs: 6, md: 10 },
                px: 2,
                overflow: "hidden",
                transform: animated ? "translateY(0)" : "translateY(60px)",
                opacity: animated ? 1 : 0,
                transition: "all 0.9s ease-out",
            }}
        >
            {/* Heading */}
            <Box textAlign="center" maxWidth={900} mx="auto" mb={6}>
                <Typography
                    sx={{
                        fontSize: { xs: 26, md: 46 },
                        fontWeight: 700,
                        color: "#FF7F00",
                        fontFamily: "Bricolage Grotesque, sans-serif",
                        lineHeight: 1.2,
                    }}
                >
                    Listen to what our Farmers{" "}
                    <Box component="span" sx={{ color: "#2FB95D" }}>
                        say
                    </Box>
                </Typography>

                <Typography
                    sx={{
                        maxWidth: 750,
                        mx: "auto",
                        color: "#555",
                        fontSize: { xs: 14, md: 16 },
                        mt: 2,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    hendrerit suscipit egestas.
                </Typography>
            </Box>

            {/* Cards */}
            <Grid container spacing={4} justifyContent="center">
                {testimonials.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{ p: 4, borderRadius: 3, height: 250, position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", overflow: "visible", }} >
                            {/* Quote Icon */}
                            <Box sx={{ position: "absolute", top: -20, right: 20, backgroundColor: "#FF7A00", borderRadius: "50%", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, }} >
                                <FormatQuoteIcon sx={{ color: "#fff", fontSize: 28 }} />
                            </Box> {/* Header */}
                            <Box display="flex" alignItems="center" mb={2}>
                                <Avatar src={item.image} sx={{ width: 56, height: 56, mr: 2 }} />
                                <Box>
                                    <Typography fontWeight="bold" color="#FF7A00" fontFamily='Work Sans, sans-serif'> {item.name} </Typography>
                                    <Typography fontSize={14} color="#FF7A00"> {item.rating} </Typography>
                                </Box>
                            </Box>
                            {/* Text */}
                            <Typography fontSize={12} color="#333" lineHeight={1.2} width={200} fontFamily='Work Sans, sans-serif'> {item.text} </Typography>
                            {/* Location */}
                            <Typography mt={2} fontSize={13} fontWeight="500" color="#000" fontFamily='Work Sans, sans-serif' > {item.location} </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default Farmers;
