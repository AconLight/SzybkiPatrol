import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export default function ActionCard({ 
    title, 
    description, 
    actionText, 
    onAction,
    disabled = false,
    color = "rgba(255,0,55,0.2)"
}) {
    return (
        <Card sx={{
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.98) 100%)',
            borderRadius: 2,
            border: `1px solid ${color}`,
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`
            }
        }}>
            <CardContent>
                <Typography variant="h6" sx={{ 
                    color: '#fff',
                    fontWeight: 'bold',
                    letterSpacing: '0.5px',
                    mb: 1
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    mb: 2,
                    minHeight: 60
                }}>
                    {description}
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={onAction}
                        disabled={disabled}
                        sx={{
                            background: `linear-gradient(45deg, ${color} 30%, rgba(255,255,255,0.3) 90%)`,
                            color: '#fff',
                            px: 4,
                            letterSpacing: '1px',
                            border: `1px solid ${color}`,
                            '&:hover': {
                                background: `linear-gradient(45deg, ${color} 50%, rgba(255,255,255,0.3) 110%)`,
                                boxShadow: `0 0 20px ${color}`
                            },
                            '&:disabled': {
                                background: 'rgba(60,60,60,0.5)',
                                color: 'rgba(255,255,255,0.3)'
                            }
                        }}
                    >
                        {actionText}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
