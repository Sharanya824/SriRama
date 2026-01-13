import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Sunflower from '../../assets/Sunflower.png'
import Wheat1 from '../../assets/Wheat1.png'
import Wheat2 from '../../assets/Wheat2.png'
import Jawar from '../../assets/Jawar.png'
import Cotton from '../../assets/Cotton.png'
import Corn from '../../assets/Corn.png'

function HeroSection() {
  const images = [Cotton, Sunflower, Wheat1, Wheat2, Jawar, Corn]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <Box>
      {/* Mobile text */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'column',
          textAlign: 'left',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{
            color: '#4BAF47',
            fontSize: 30,
            ml: 1,
            fontWeight: 800,
          }}
        >
          Latest in Agriculture{' '}
          <span style={{ color: '#FF7F00', fontWeight: 800 }}>
            & Seed Innovation
          </span>
        </Typography>

        <Typography sx={{ color: '#222', mt: 2, mb: 2, ml: 2 }}>
          Success Stories from the Fields. <br />
          Insights that Inspire Growth.
        </Typography>

        <Box sx={{ alignSelf: 'flex-start', ml: 1 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF7F00',
              color: '#fff',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: 1,
              mb: 1,
              '&:hover': { backgroundColor: '#e58312' },
            }}
          >
            Discover More
          </Button>
        </Box>
      </Box>

      {/* Hero Slider */}
      <Box
        component="section"
        role="banner"
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          height: { xs: 300, sm: 480, md: 458 },
          backgroundColor: '#000',
        }}
      >
        {/* Slides */}
        {images.map((src, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 900ms ease-in-out',
              opacity: index === i ? 1 : 0,
            }}
          />
        ))}

        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Desktop content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#00000080',
            width: { sm: '40%', md: '40%' },
            px: { sm: 4, md: 6 },
            py: { sm: 6, md: 8 },
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: { sm: '1.8rem', md: 24 },
              lineHeight: 1.6,
              fontFamily: 'Manrope,sans-serif',
              textAlign: 'center',
            }}
          >
            Insights that Inspire Growth.
            <br />
            Latest in Agriculture{' '}
            <span style={{ color: '#FF7F00', fontWeight: 800 }}>
              & Seed Innovation
            </span>
            <br />
            Success Stories from the Fields.
          </Typography>

          <Box sx={{ alignSelf: 'center', mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF7F00',
                color: '#fff',
                fontWeight: 700,
                textTransform: 'none',
                borderRadius: 1,
                '&:hover': { backgroundColor: '#e58312' },
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#00000080',
            width: { sm: '40%', md: '40%' },
            px: { sm: 4, md: 6 },
            py: { sm: 6, md: 8 },
            gap: 2,
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 700,
              letterSpacing: '0.7rem',
              fontSize: 30,
              p: '10px 10px',
              backgroundColor: '#00000080',
              writingMode: 'vertical-lr',
              textOrientation: 'upright',
              position: 'absolute',
            }}
          >
            SRI
            <span style={{ color: '#F7941D' }}> RAMA</span>
          </Typography>
        </Box>
        {/* Brand */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            left: '39%',
            zIndex: 2,
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 700,
              letterSpacing: { xs: '0.35rem', sm: '0.5rem' },
              fontSize: { sm: '1.05rem', md: 50 },
            }}
          >
            SRI
            <span style={{ color: '#F7941D' }}> RAMA</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HeroSection
