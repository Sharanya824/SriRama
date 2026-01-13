import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Quality from "../../assets/Quality.png";

const QualityManagement = () => {
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
                mt: { xs: 4, md: 0 }
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
                        display: { xs: 'none', sm: "flex" },
                        flexDirection: 'column',
                        width: { xs: "100%", md: "50%", sm: '50%', lg: '60%' },
                        justifyContent: { xs: "center", md: "flex-start" },
                        transform: visible ? "translateX(0)" : "translateX(-120px)",
                        opacity: visible ? 1 : 0,
                        transition: "all 0.9s ease",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: 22, md: 30 },
                            fontWeight: 700,
                            mb: 2,
                            color: "#222",
                            fontFamily: 'Lato , sans-serif'
                        }}
                    >
                        Quality{" "}
                        <Box component="span" sx={{ color: "#FF5600" }}>
                            Management
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 16,
                            lineHeight: 1.6,
                            color: "#000000",
                            maxWidth: 520,
                            mx: { xs: "auto", md: 0 },
                            fontFamily: 'Lato , sans-serif'
                        }}
                    >
                        At Sri Rama Agri Genetics, our advanced seed technology laboratory ensures superior quality by testing over 100,000 seed samples annually. We conduct comprehensive tests for genetic and physical purity, as well as germination potential in diverse climatic conditions.
                    </Typography>
                    <Typography sx={{
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: "#000000",
                        maxWidth: 520,
                        mt: 2,
                        fontFamily: 'Lato , sans-serif'
                    }}>Trust us to provide the finest quality seeds. Join forces with Sri Rama Agri Genetics for the guarantee of exceptional seed solutions.</Typography>
                </Box>
                {/* IMAGE */}
                <Box
                    sx={{
                        transform: visible ? "translateX(0)" : "translateX(120px)",
                        opacity: visible ? 1 : 0,
                        width: { xs: "100%", md: "50%", sm: '50%', lg: "42%" },
                        transition: "all 0.9s ease",
                        textAlign: { xs: "center", md: "left" },
                        mt: { xs: 4, md: 12, sm: 12, lg: 10 },
                    }}
                >
                    <Box
                        component="img"
                        src={Quality}
                        alt="Sunflower"
                        sx={{
                            width: "100%",
                            maxWidth: 420,
                        }}
                    />

                </Box>
                <Box sx={{
                    display: { xs: 'flex', sm: "none" },
                    flexDirection: 'column',
                    justifyContent:'center'
                }}>
                    <Typography
                        sx={{
                            fontSize: 30,
                            fontWeight: 700,
                            mb: 2,
                            color: "#222",
                            alignItems: 'center',
                            fontFamily: 'Lato , sans-serif'
                        }}
                    >
                        Quality{" "}
                        <Box component="span" sx={{ color: "#FF5600" }}>
                            Management
                        </Box>
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            lineHeight: 1.6,
                            color: "#000000",
                            maxWidth: 520,
                            mx: { xs: "auto", md: 0 },
                            fontFamily: 'Lato , sans-serif'
                        }}
                    >
                        Sri Rama Agri Genetics' advanced seed lab tests over 100,000 samples annually to ensure superior quality. These tests check for genetic and physical purity, as well as germination potential in diverse climatic conditions.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default QualityManagement;
