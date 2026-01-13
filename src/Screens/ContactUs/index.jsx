import { Box, Typography, Grid, Button, TextField, Divider } from '@mui/material'
import React from 'react'
import Contact from '../../assets/Contact.png'
import SrsLocation from '../../assets/SrsLocation.png'
import SriRama from '../../assets/SriRama.png'
import SrsGroup from '../../assets/SrsGroup.png'
import Call from '../../assets/Call.png'
import Email from '../../assets/Email.png'
import Location from '../../assets/Location.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactUs() {
    return (
        <Box sx={{
            overflowX: 'hidden',
        }}>
            <Box>
                <Box sx={{
                    display: 'flex',
                    position: 'relative',
                }}>
                    <Box
                        component="img"
                        src={Contact}
                        alt="About Us"
                        sx={{
                            width: { xs: 360, sm: '100%' },
                            height: { xs: 300, sm: 'auto' },
                            objectFit: 'cover',
                            display: 'block',
                            mx: { xs: 'auto', sm: 0 },
                        }}
                    />
                </Box>
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    position: 'absolute',
                    flexDirection: 'column',
                    top: { xs: '10%', sm: '15%', md: '15%', lg: '40%' },
                    left: '5%',
                    width: { xs: 300, sm: 600 }
                }}>
                    <Typography
                        sx={{
                            fontSize: { xs: 18, sm: 40 },
                            fontWeight: 700,
                            fontFamily: 'Rozha One , serif',
                        }}>Our Story: Nurturing Growth, Cultivatin Prosperity</Typography>
                    <Typography sx={{
                        fontFamily: 'PT Serif Caption , serif',
                        width: { xs: 250, sm: 450 },
                        fontSize: { xs: 12, sm: 18 },
                    }}>Sri Rama Agri Genetics (India) Private Limited Your partner in growth from seed to harvest</Typography>
                </Box>
                <Box sx={{
                    display: { xs: 'flex', sm: 'none' },
                    position: 'absolute',
                    flexDirection: 'column',
                    top: { xs: '30%', sm: '15%', md: '15%', lg: '40%' },
                    left: '25%',
                    width: { xs: 300, sm: 600 }
                }}>
                    <Typography sx={{ fontSize: 25 }}>Contact Us</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "flex-start",
                    mt: { xs: 4, md: 8 },
                    minHeight: 'fit-content',
                    alignItems: "center",
                    px: { xs: 2, sm: 4, md: 8 },
                }}
            >
                {/* LEFT IMAGE */}
                <Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Box
                            component="img"
                            src={SrsLocation}
                            alt="Farmer using technology"
                            sx={{
                                width: { xs: 400, sm: 350, md: 350, lg: 550 },
                                borderRadius: "20px",
                            }}
                        />
                    </Box>
                </Grid>
                {/* RIGHT CONTENT */}
                <Grid item xs={12} md={6} sx={{ width: { xs: 350, sm: 450 }, ml: { xs: 0, sm: 4, md: 4, lg: 8 } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 500,
                            color: "#0F1729",
                            fontFamily: 'Outfit, sans-serif',
                            mb: 2,
                            fontSize: {
                                xs: "28px",
                                sm: "34px",
                                md: "44px",
                            },
                            lineHeight: 1.2,
                        }}
                    >
                        Contact US
                    </Typography>

                    <Typography
                        sx={{
                            color: "#4F5D75",
                            fontSize: "16px",
                            mb: 4,
                            maxWidth: { xs: '100%', sm: '420px', md: '420px', lg: '520px' },
                        }}
                    >
                        We are Sri Rama AgriGenetics and we value your thoughts and opinions. Our team is excited to connect with you regarding any queries or concerns. Please reach out to us and rest assured, we will respond promptly.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#157F3C",
                                px: 3,
                                py: 1.2,
                                borderRadius: "8px",
                                textTransform: "none",
                                fontSize: { xs: 10, sm: 16 },
                                fontWeight: 600,
                                "&:hover": {
                                    backgroundColor: "#256428",
                                },
                            }}
                        >
                            Contact US
                        </Button>
                    </Box>
                </Grid>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: { xs: 'center', sm: "flex-start" },
                    gap: { xs: 4, md: 8 },
                    mt: 6,
                    px: { xs: 2, md: 8 },
                }}
            >
                {/* Office Info */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 4, sm: 2, md: 2, lg: 8 },
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    {/* Head Office */}
                    <Box sx={{ textAlign: "center", minWidth: { xs: 200, sm: 350, md: 350, lg: 250 } }}>
                        <Typography sx={{ color: "#000", fontSize: { xs: 22, sm: 28 }, fontWeight: 'bold' }}>
                            Head <span style={{ color: "#FF7F00" }}>Office</span>
                        </Typography>
                        <img src={SriRama} alt="Sri Rama Logo" style={{ height: 48, margin: "12px auto" }} />
                        <Typography sx={{ fontSize: { xs: 16, sm: 14 }, color: "#666666" }}>
                            Srirama Agri Genetics P. Ltd.<br />
                            Krishna Nagar <br />
                            Kurnool<br />
                            AP – 518002<br />
                            India.<br />
                            Ph: 08518-257478
                        </Typography>
                    </Box>
                    {/* Corporate Office */}
                    <Box sx={{ textAlign: "center", minWidth: { xs: 200, sm: 350, md: 350, lg: 250 } }}>
                        <Typography sx={{ color: "#000", fontSize: { xs: 22, sm: 28 } }}>
                            Corporate <span style={{ color: "#FF7F00" }}>Office</span>
                        </Typography>
                        <img src={SrsGroup} alt="SRS Group Logo" style={{ height: 48, margin: "12px auto" }} />
                        <Typography sx={{ fontSize: { xs: 16, sm: 14 }, color: "#666666" }}>
                            S.y no-53, Plot No.:26 & 29<br />
                            Agro Processing Park<br />
                            Bandamailaram Village<br />
                            Mulugu Mandal<br />
                            Siddipet District<br />
                            Telangana – 502336<br />
                            India.
                        </Typography>
                    </Box>
                </Box>
                {/* Contact Form */}
                <Box
                    sx={{
                        flex: 1,
                        mx: 'auto',
                        maxWidth: { xs: 300, sm: 200, md: 350, lg: 350 },
                        p: 3,
                        minWidth: { xs: 260, sm: 400, md: 400, lg: 260 },
                    }}
                >
                    <form>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField
                                type="text"
                                placeholder="Name"
                                size='small'
                                sx={{
                                    fontSize: 16,
                                    backgroundColor: '#F9F9F9'
                                }}
                            />
                            <TextField
                                type="email"
                                size='small'
                                placeholder="Email"
                                sx={{
                                    fontSize: 16,
                                    backgroundColor: '#F9F9F9'
                                }}
                            />
                            <TextField
                                type="text"
                                placeholder="Subject"
                                size='small'
                                sx={{
                                    fontSize: 16,
                                    backgroundColor: '#F9F9F9'
                                }}
                            />
                            <TextField
                                type="text"
                                size='small'
                                multiline
                                placeholder="Message"
                                rows={4}
                                sx={{
                                    fontSize: 16,
                                    backgroundColor: '#F9F9F9'
                                }}
                            />
                        </Box>
                    </form>
                </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: 'none' }, p: 2 }}>
                <Button sx={{ color: '#fff', backgroundColor: '#157F3C', textTransform: 'none', px: 3, py: 1.2, '&:hover': { backgroundColor: '#256428' } }}>
                    Send Message
                </Button>
                {/* Social icons */}
                <Box sx={{ display: 'flex', alignItems: "center", gap: 1.25, ml: 3 }}>
                    {[TwitterIcon, FacebookIcon, PinterestIcon, InstagramIcon].map((Icon, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: 34,
                                height: 34,
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
            </Box>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'space-between' }, alignItems: "center", gap: 2, marginX: { xs: 0, sm: 8 }, mb: 10 }}>
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexWrap: 'wrap', gap: 4 }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: { xs: 1, sm: 10 },
                        mt: { xs: 2, sm: 4 },
                    }}>
                        {/* Call */}
                        <Box sx={{ display: 'flex', alignItems: "center", gap: 1, ml: 2 }}>
                            <img src={Call} alt="Call" style={{ height: 24, width: 24 }} />
                            <Box>
                                <Typography variant="caption" color="#000">
                                    Call anytime
                                </Typography><br />
                                <Typography variant="caption" sx={{ fontWeight: 600, color: '#000' }}>
                                    +91 88976 55001
                                </Typography>
                            </Box>
                        </Box>

                        <Divider orientation="vertical" flexItem sx={{ bgcolor: '#fff', }} />

                        {/* Email */}
                        <Box sx={{ display: 'flex', alignItems: "center", gap: 1 }}>
                            <img src={Email} alt="Email" style={{ height: 24, width: 24 }} />
                            <Box>
                                <Typography variant="caption" color="#000">
                                    Send email
                                </Typography><br />
                                <Typography variant="caption" sx={{ fontWeight: 600, color: '#000' }}>
                                    info@sriramaseeds.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: "center", gap: 1, ml: 2, mx: 'auto' }}>
                        <img src={Location} alt="Call" style={{ height: 24, width: 24 }} />
                        <Box>
                            <Typography variant="caption" color="#000">
                                Village Mulugu Mandal Siddipet
                            </Typography><br />
                            <Typography variant="caption" sx={{ fontWeight: 600, color: '#000' }}>
                                Telangana – 502356 India.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexWrap: 'wrap', gap: 4 }}>
                    {/* Call */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1, ml: 2 }}>
                        <img src={Call} alt="Call" style={{ height: 24, width: 24 }} />
                        <Box>
                            <Typography variant="caption" color="text.secondary">
                                Call anytime
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#000' }}>
                                +91 88976 55001
                            </Typography>
                        </Box>
                    </Box>

                    <Divider orientation="vertical" flexItem display={{ xs: "none", md: "flex" }} />

                    {/* Email */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
                        <img src={Email} alt="Email" style={{ height: 24, width: 24 }} />
                        <Box>
                            <Typography variant="caption" color="text.secondary">
                                Send email
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#000' }}>
                                info@sriramaseeds.com
                            </Typography>
                        </Box>
                    </Box>

                    <Divider orientation="vertical" flexItem display={{ xs: "none", md: "flex" }} />

                    {/* Location */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
                        <img src={Location} alt="Location" style={{ height: 28, width: 20 }} />
                        <Box>
                            <Typography variant="caption" color="text.secondary">
                                Village Mulugu Mandal Siddipet
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#000' }}>
                                Telangana – 502356 India.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Button sx={{ display: { xs: 'none', sm: 'flex' }, color: '#fff', backgroundColor: '#157F3C', textTransform: 'none', px: 3, py: 1.2, '&:hover': { backgroundColor: '#256428' } }}>
                    Send Message
                </Button>
                {/* Social icons */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: "center", gap: 1.25, ml: 3 }}>
                    {[TwitterIcon, FacebookIcon, PinterestIcon, InstagramIcon].map((Icon, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: 34,
                                height: 34,
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
            </Box>
        </Box>
    )
}

export default ContactUs