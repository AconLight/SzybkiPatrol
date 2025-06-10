import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function StatsCard({ 
    title,
    stats,
    onIncrease,
    onDecrease,
    editable = false
}) {
    return (
        <Card sx={{
            background: 'linear-gradient(135deg, rgba(25,25,25,0.95) 0%, rgba(35,35,35,0.98) 100%)',
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'visible',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: -1,
                left: '10%',
                width: '80%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,0,55,0.3), transparent)'
            }
        }}>
            <CardContent>
                <Typography variant="h6" sx={{ 
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    mb: 2,
                    textAlign: 'center',
                    fontSize: '0.9rem'
                }}>
                    {title}
                </Typography>
                {Object.entries(stats).map(([stat, value]) => (
                    <Box key={stat} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 1,
                        p: 1,
                        borderRadius: 1,
                        background: 'rgba(0,0,0,0.2)',
                        '&:hover': {
                            background: 'rgba(0,0,0,0.3)'
                        }
                    }}>
                        <Typography sx={{ 
                            color: 'rgba(255,255,255,0.8)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            fontSize: '0.8rem'
                        }}>
                            {stat}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {editable && (
                                <IconButton 
                                    size="small"
                                    onClick={() => onDecrease(stat)}
                                    sx={{ 
                                        color: 'rgba(255,255,255,0.5)',
                                        '&:hover': {
                                            color: 'rgba(255,0,55,0.7)'
                                        }
                                    }}
                                >
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                            )}
                            <Typography sx={{ 
                                color: '#fff',
                                fontWeight: 'bold',
                                minWidth: 30,
                                textAlign: 'center'
                            }}>
                                {value}
                            </Typography>
                            {editable && (
                                <IconButton 
                                    size="small"
                                    onClick={() => onIncrease(stat)}
                                    sx={{ 
                                        color: 'rgba(255,255,255,0.5)',
                                        '&:hover': {
                                            color: 'rgba(255,0,55,0.7)'
                                        }
                                    }}
                                >
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            )}
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}
