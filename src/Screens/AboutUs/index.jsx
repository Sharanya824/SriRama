import { Box, Button, Chip, Grid, Typography, Paper, Card, CardContent } from '@mui/material'
import React from 'react'
import Man from '../../assets/Man.png';
import About from '../../assets/About.png';
import Team from '../../assets/Team.png';
import DSIR from '../../assets/DSIR.png';
import Bollgard from '../../assets/Bollgard.png';
import Mission from '../../assets/Mission.png';
import Vision from '../../assets/Vision.png';

const advantages = [
    { title: "R&D Innovation", desc: "Built on data, science, and ethics." },
    { title: "Quality Assurance", desc: "Built on data, science, and ethics." },
    { title: "Advanced Seed Processing", desc: "Built on data, science, and ethics." },
    { title: "Empowering Farmers", desc: "Built on data, science, and ethics." },
    { title: "Pioneering Agritech", desc: "Built on data, science, and ethics." },
    { title: "Extensive Farmer Network", desc: "Built on data, science, and ethics." },
    { title: "Sales & Marketing Expertise", desc: "Built on data, science, and ethics." },
    { title: "Global Exports", desc: "Built on data, science, and ethics." },
];

const milestones = [
    {
        img: DSIR,
        title: "DSIR",
        description:
            "In 2007 our research facility received DSIR approval. The Department of Scientific & Industrial Research (DSIR) is operating a scheme for granting recognition & registration to in-house R&D units established by corporate industry.",
    },
    {
        img: Bollgard,
        title: "Bollgard-II",
        description:
            "In 2010, Sri Rama Agri Genetics joined forces with Mahyco Monsanto to develop the Bollgard-II technology. Discover more about Bollgard-II and its significant impact in revolutionizing the agricultural industry.",
    },
    {
        img: Bollgard,
        title: "NABL",
        description:
            "In 2023, we proudly received accreditation from the National Accreditation Board for Testing and Calibration Laboratories. This esteemed accomplishment brings us great joy and reinforces our commitment to delivering exceptional services.",
    },
];

function AboutUs() {
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
                        src={About}
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
                    display: 'flex',
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
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    mt: { xs: 4, md: 8 },
                    minHeight: 'fit-content',
                    alignItems: "center",
                    px: { xs: 2, sm: 4, md: 8 },
                }}
            >
                {/* LEFT CONTENT */}
                <Grid item xs={12} md={6}>
                    <Chip
                        label="Agri Genetics • Sustainable"
                        sx={{
                            backgroundColor: "#16A34A1A",
                            color: "#15803D",
                            mb: 2,
                            fontWeight: 500,
                        }}
                    />

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
                        Cultivating growth,
                        <br />
                        powered by science
                    </Typography>

                    <Typography
                        sx={{
                            color: "#4F5D75",
                            fontSize: "16px",
                            mb: 4,
                            maxWidth: { xs: '100%', sm: '420px', md: '420px', lg: '520px' },
                        }}
                    >
                        Shri Rama Seed – resilience and profitability with advanced
                        seed genetics and farmer-first solutions.
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
                            Discover our mission
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                px: 3,
                                py: 1.2,
                                borderRadius: "8px",
                                textTransform: "none",
                                fontSize: { xs: 10, sm: 16 },
                                fontWeight: 600,
                                color: "#2E7D32",
                                borderColor: "#2E7D32",
                                "&:hover": {
                                    borderColor: "#256428",
                                },
                            }}
                        >
                            Why choose us
                        </Button>
                    </Box>
                </Grid>

                {/* RIGHT IMAGE */}
                <Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-end" },
                        }}
                    >
                        <Box
                            component="img"
                            src={Man}
                            alt="Farmer using technology"
                            sx={{
                                width: { xs: 350, sm: 350, md: 350, lg: 550 },
                                borderRadius: "20px",
                            }}
                        />
                    </Box>
                </Grid>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    mt: { xs: 6, md: 10 },
                    mb: { xs: 6, md: 10 },
                    backgroundColor: "#ffffff",
                }}
            >
                {/* Title */}
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontWeight: 500,
                        mb: { xs: 4, md: 6 },
                        color: '#0F1729'
                    }}
                >
                    Our Purpose
                </Typography>

                {/* Content */}
                <Grid container spacing={4} justifyContent="center"
                    sx={{ display: 'flex', width: '100%', pt: 6, pb: 6, flexDirection: { xs: 'column', sm: 'row' }, backgroundColor: '#FFFFFFB2', border: '1px solid #DEEDE3' }}>
                    <Paper
                        elevation={0}
                        sx={{
                            textAlign: "center",
                            p: { xs: 3, md: 4 },
                            backgroundColor: '#FFFFFFB2',
                            width: { xs: 320, sm: 300, md: 300, lg: 400 },
                        }}
                    >
                        <Box
                            sx={{
                                width: 64,
                                height: 64,
                                mx: "auto",
                                mb: 2,
                                borderRadius: "50%",
                                backgroundColor: "#4BAF4742",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src={Mission} alt="Mission" style={{ width: 32, height: 32 }} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 1 }}
                        >
                            Our Mission
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: "#6b7280", lineHeight: 1.6 }}
                        >
                            Enhance agricultural productivity and prosperity by delivering
                            high-quality seeds, agronomic insights, and trusted support for
                            every season.
                        </Typography>
                    </Paper>
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: '#FFFFFFB2',
                            textAlign: "center",
                            p: { xs: 3, md: 4 },
                            width: { xs: 320, sm: 300, md: 300, lg: 400 },
                        }}
                    >
                        <Box
                            sx={{
                                width: 64,
                                height: 64,
                                mx: "auto",
                                mb: 2,
                                borderRadius: "50%",
                                backgroundColor: "#4BAF4742",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src={Vision} alt="Vision" style={{ width: 32, height: 32 }} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 1 }}
                        >
                            Our Vision for Tomorrow
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: "#6b7280", lineHeight: 1.6 }}
                        >
                            Combine cutting-edge biotechnology with on-ground wisdom to meet
                            evolving needs—sustainably, profitably, and globally.
                        </Typography>
                    </Paper>
                </Grid>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    px: { xs: 2, md: 6 },
                }}
            >
                {/* Title */}
                <Typography
                    align="center"
                    sx={{
                        fontSize: { xs: "20px", md: "28px" },
                        fontWeight: 500,
                        mb: { xs: 4, md: 5 },
                        color: '#0F1729'
                    }}
                >
                    SRI Rama Seeds Advantage
                </Typography>

                {/* Cards */}
                <Grid container spacing={2}>
                    {advantages.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: { xs: 150, sm: 200, md: 200, lg: 220 },
                                    height: { xs: 60, sm: 'auto' },
                                    p: { xs: 1, sm: 2.5 },
                                    borderRadius: "10px",
                                    border: "1.5px solid #DEEDE3",
                                    boxShadow: '0px 0px 0px 0px #00000000',
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: '12px', sm: "14px" },
                                        fontWeight: 500,
                                        mb: 0.5,
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: { xs: '10px', sm: "12px" },
                                        color: "#6b7280",
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{
                display: 'flex',
                mt: 5, pb: 5,
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#4BAF470F',

            }}>
                <Typography sx={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: 12, md: 30 },
                    color: '#0F1729',
                    fontWeight: 500,
                    py: 4,
                }}>
                    Our Dedicated Team
                </Typography>
                <img src={Team} alt="Our Team" style={{ width: '80%', height: 'auto', objectFit: 'cover', alignSelf: 'center' }} />
                <Typography sx={{
                    ml: { xs: 5, sm: 12, md: 12, lg: 20 },
                    fontSize: { xs: 12, md: 18 },
                    color: '#455E4E',
                    fontWeight: 400,
                }}>
                    Experienced agronomists, scientists, and field experts committed to farmers' success.
                </Typography>
            </Box>
            <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 8 } }}>
                {/* Section Title */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{
                        color: '#157F3C'
                    }}>
                        MILESTONES
                    </Typography>
                    <Typography variant="body1" color="text.secondary" maxWidth={700} mx="auto" sx={{
                        color: '#455E4E'
                    }}>
                        Founded in 1996 by Ch. Sri Rama Murthy Garu in Kurnool, India, Sri Rama Agri Genetics is a leading seed industry player. We specialize in researching, developing, producing, and marketing genetically improved seeds to boost agricultural productivity and farmer prosperity.
                    </Typography>
                </Box>

                {/* Milestone Cards */}
                <Grid container spacing={4} justifyContent="center">
                    {milestones.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' ,flexDirection: 'column', alignItems: 'center' }}>
                            <Box component="img" src={item.img} alt={item.title} sx={{ width:200, mb: 2, alignSelf: 'center' }} />
                            <Card
                                sx={{
                                    width: { xs: 300, sm: 350, md: 350, lg: 300 },
                                    height:300,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    py: 4,
                                    px: 2,
                                    boxShadow: "0px 0px 65.9px 0px #0000001A",
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" component="h3" gutterBottom sx={{
                                        color: '#157F3C',
                                        fontFamily:'Manrope , sans-serif',
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2} sx={{
                                        color: '#878680',
                                        fontFamily:'Manrope , sans-serif',
                                    }}>
                                        {item.description}
                                    </Typography>
                                    <Button variant="contained" sx={{backgroundColor:'#157F3C',borderRadius:2,p:'5px 10px'}}>
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default AboutUs