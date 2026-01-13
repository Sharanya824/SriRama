import React from 'react'
import Cotton from '../../assets/Cotton.png';
import Corn from '../../assets/Corn.png';
import Sunflower2 from '../../assets/Sunflower2.png';
import Jowar from '../../assets/Jowar.png';
import Soyabean from '../../assets/Soyabean.png';
import Redgram from '../../assets/Redgram.png';
import Castor from '../../assets/Castor.png';
import Wheat1 from '../../assets/Wheat1.png';
import Wheat2 from '../../assets/Wheat2.png';
import { Box, Typography } from '@mui/material';

function Explore() {
  const [animated, setAnimated] = React.useState(false);

  const seeds = [
    { title: 'Cotton', image: Cotton, tag: 'Kharif' },
    { title: 'Paddy', image: Wheat1, tag: 'Rabi' },
    { title: 'Maize', image: Corn, tag: 'Kharif' },
    { title: 'Jowar', image: Jowar, tag: 'Kharif' },
    { title: 'Castor', image: Castor, tag: 'Summer' },
    { title: 'Redgram', image: Redgram, tag: 'Kharif' },
    { title: 'Wheat', image: Wheat2, tag: 'Rabi' },
    { title: 'Sunflower', image: Sunflower2, tag: 'Hybrid' },
    { title: 'Soyabean', image: Soyabean, tag: 'Kharif' },
  ];

  // Mobile carousel state
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const slides = [...seeds, seeds[0]]; // clone first for seamless loop
  const autoPlayMs = 3000;

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), autoPlayMs);
    return () => clearInterval(id);
  }, [paused, autoPlayMs]);

  const handleTransitionEnd = () => {
    if (index === seeds.length) {
      // Jump back to first without visible transition
      setIsTransitioning(false);
      setIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  };

  const cardTransition = 'transform 500ms ease, opacity 500ms ease';

  return (
    <Box
      onMouseEnter={() => !animated && setAnimated(true)}
      onTouchStart={() => !animated && setAnimated(true)}
      sx={{ px: 2, py: { xs: 4, md: 6 } ,overflow:'hidden'}}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          mb: 6,
          mt: 4,
        }}
      >
        <Typography sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 700, color: "#FF7F00", fontFamily: 'Bricolage Grotesque,sans-serif' }}>
          Explore Our Diverse{" "}
          <span style={{ color: "#058900" }}>Selection Of Seeds</span>
        </Typography>
      </Box>

      {/* Mobile: auto-advancing single-card carousel */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Box
          sx={{
            overflow: 'hidden',
            maxWidth: 1000,
            mx: 'auto',
            width: 1,
          }}
        >
          <Box
            onTransitionEnd={handleTransitionEnd}
            sx={{
              display: 'flex',
              width: 1,
              transform: `translateX(-${index * 100}%)`,
              transition: isTransitioning ? 'transform 600ms ease-in-out' : 'none',
              willChange: 'transform',
              touchAction: 'pan-y',
            }}
          >
            {slides.map((s, i) => (
              <Box key={`${s.title}-${i}`} sx={{ flex: '0 0 100%', minWidth: '100%' }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: '#fff',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
                    mx: 'auto',
                  }}
                >
                  <Box
                    component="img"
                    src={s.image}
                    alt={s.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      display: 'block',
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ p: 2.2, textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 16, mb: 1, color:'#04000B' }}>
                      {s.title}
                    </Typography>
                    <Box
                      sx={{
                        display: 'inline-block',
                        border: '1.5px solid #FFB84D',
                        color: '#FF7F00',
                        px: 1.6,
                        py: 0.6,
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: 0.3,
                        bgcolor: '#fff',
                      }}
                    >
                      {s.tag}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Desktop/Tablet: grid (unchanged) */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'grid' },
          maxWidth: 1000,
          mx: 'auto',
          gap: { sm: 2, md: 3 },
          gridTemplateColumns: { sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        {seeds.map((s) => (
          <Box
            key={s.title}
            sx={{
              transform: animated ? 'translateY(0)' : 'translateY(40px)',
              opacity: animated ? 1 : 0,
              transition: cardTransition,
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: '#fff',
                boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src={s.image}
                alt={s.title}
                sx={{
                  width: '100%',
                  height: 200,
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
              <Box sx={{ p: 2.2, textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 600, fontSize: 16, mb: 1, color:'#04000B' }}>
                  {s.title}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-block',
                    border: '1.5px solid #FFB84D',
                    color: '#FF7F00',
                    px: 1.6,
                    py: 0.6,
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.3,
                    bgcolor: '#fff',
                  }}
                >
                  {s.tag}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Explore