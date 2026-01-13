import React from 'react';
import { Box, Container,  Typography,  Divider, useTheme, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SRS from '../../assets/SRS.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Call from '../../assets/Call.png';
import Email from '../../assets/Email.png';

function Footer() {
    const year = new Date().getFullYear();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box component="footer" sx={{ bgcolor: '#24231D', pt: 2, pb: 6 }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img src={SRS} alt="SRS Logo" style={{ width: '250px', marginBottom: '16px' }} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: {xs:1,sm:10},
                    mt:{xs:2,sm:4},
                    mb:{xs:2,sm:4}
                }}>
                    {/* Call */}
                    <Box sx={{ display: 'flex', alignItems: "center", gap: 1, ml: 2 }}>
                        <img src={Call} alt="Call" style={{ height: 24, width: 24 }} />
                        <Box>
                            <Typography variant="caption" color="#fff">
                                Call anytime
                            </Typography><br />
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                +91 88976 55001
                            </Typography>
                        </Box>
                    </Box>

                    <Divider orientation="vertical" flexItem sx={{ bgcolor: '#fff', }} />

                    {/* Email */}
                    <Box sx={{ display: 'flex', alignItems: "center", gap: 1 }}>
                        <img src={Email} alt="Email" style={{ height: 24, width: 24 }} />
                        <Box>
                            <Typography variant="caption" color="#fff">
                                Send email
                            </Typography><br />
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                info@sriramaseeds.com
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1.25, mt: 3 }}>
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
                <Typography
                    variant="body2"
                    color="#fff"
                    align="center"
                    sx={{ mt: 4, fontFamily: 'Outfit, sans-serif' }}
                >
                    Terms of Use   l  Privacy Policy <br />
                    © All Copyright 2024 by ClearBiz Software Solutions Pvt Ltd
                </Typography>
            </Container>
        </Box >
    );
}

export default Footer;