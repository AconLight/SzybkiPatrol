import React, { useState } from 'react';
import { Box, TextField, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, IconButton } from '@mui/material';
import LightedGroup from '../../components/group/LightedGroup';
import CardImgTitle from '../../components/card/CardImgTitle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SendIcon from '@mui/icons-material/Send';
import Space from '../../components/group/Space';

export default function Chat() {
    const [message, setMessage] = useState('');
    
    // Dummy data for chat messages
    const messages = [
        { id: 1, sender: 'RacerX', message: 'Świetny wyścig!', time: '10:30' },
        { id: 2, sender: 'SpeedDemon', message: 'Dzięki, następnym razem się zrewanżuję!', time: '10:31' },
        { id: 3, sender: 'DriftKing', message: 'Kto chce się ścigać?', time: '10:35' }
    ];

    return (
        <LightedGroup>
            <CardImgTitle 
                isMain={true} 
                title="Czat wyścigowy" 
                description="Rozmawiaj z innymi kierowcami"
            />
            <Space />
            <Box sx={{ 
                height: '60vh', 
                display: 'flex', 
                flexDirection: 'column',
                gap: 2
            }}>
                <Paper sx={{ 
                    flex: 1, 
                    bgcolor: 'rgba(0,0,0,0.4)',
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.1)',
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'rgba(0,0,0,0.2)',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '4px',
                    }
                }}>
                    <List>
                        {messages.map((msg) => (
                            <ListItem key={msg.id}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                                        <DirectionsCarIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                                            {msg.sender}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                            {msg.message}
                                        </Typography>
                                    }
                                />
                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                    {msg.time}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                        fullWidth
                        placeholder="Napisz wiadomość..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': {
                                    borderColor: 'rgba(255,255,255,0.3)',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'rgba(255,255,255,0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'rgba(255,255,255,0.7)',
                            },
                        }}
                    />
                    <IconButton 
                        sx={{ 
                            bgcolor: 'primary.main',
                            '&:hover': { bgcolor: 'primary.dark' },
                            width: '56px',
                            height: '56px'
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </LightedGroup>
    );
}