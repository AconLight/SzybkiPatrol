import React from 'react';
import { Box, Button, Grid, Typography, Icon } from '@mui/material';
import LightedGroup from '../../components/group/LightedGroup';
import CardImgTitle from '../../components/card/CardImgTitle';
import Space from '../../components/group/Space';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from '@mui/icons-material/Speed';
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function Premium() {
    const premiumFeatures = [
        {
            title: "ZŁOTY PAKIET",
            price: "9.99",
            features: [
                "Dodatkowe 100 kredytów dziennie",
                "Złoty kolor nicku",
                "Dostęp do ekskluzywnych aut",
                "5% bonus do zarobków"
            ],
            color: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)",
            icon: StarIcon
        },
        {
            title: "PLATYNOWY PAKIET",
            price: "19.99",
            features: [
                "Dodatkowe 250 kredytów dziennie",
                "Platynowy kolor nicku",
                "Dostęp do legendarnych aut",
                "15% bonus do zarobków",
                "Priorytetowy dostęp do wyścigów"
            ],
            color: "linear-gradient(135deg, #e5e4e2 0%, #8c8c8c 100%)",
            icon: DiamondIcon
        },
        {
            title: "NITRO PAKIET",
            price: "29.99",
            features: [
                "Dodatkowe 500 kredytów dziennie",
                "Chromowany kolor nicku",
                "Wszystkie auta w grze",
                "25% bonus do zarobków",
                "VIP status w wyścigach",
                "Ekskluzywne malowania"
            ],
            color: "linear-gradient(135deg, #ff4d4d 0%, #f9cb28 100%)",
            icon: SpeedIcon
        }
    ];

    return (
        <LightedGroup>
            <CardImgTitle 
                isMain={true}
                title="Konto Premium" 
                description="Odblokuj dodatkowe możliwości i zostań prawdziwą legendą wyścigów"
                icon={<WorkspacePremiumIcon sx={{ fontSize: 40 }} />}
            />
            <Space />
            <Grid container spacing={3}>
                {premiumFeatures.map((pkg, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Box
                            sx={{
                                background: 'rgba(0,0,0,0.6)',
                                borderRadius: 2,
                                padding: 3,
                                height: '100%',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: pkg.color
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Icon 
                                    component={pkg.icon} 
                                    sx={{ 
                                        fontSize: 40,
                                        background: pkg.color,
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent'
                                    }} 
                                />
                                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                                    {pkg.title}
                                </Typography>
                            </Box>
                            
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    mb: 3,
                                    background: pkg.color,
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    fontWeight: 'bold'
                                }}
                            >
                                {pkg.price} zł<Typography component="span" sx={{ color: 'rgba(255,255,255,0.7)' }}>/mies.</Typography>
                            </Typography>

                            <Box sx={{ flex: 1 }}>
                                {pkg.features.map((feature, idx) => (
                                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                            • {feature}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Button 
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    background: pkg.color,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: pkg.color,
                                        filter: 'brightness(1.1)'
                                    }
                                }}
                            >
                                Wybierz pakiet
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </LightedGroup>
    );
}