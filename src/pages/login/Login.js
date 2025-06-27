import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import track from '../../assets/track.jpg';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { lime, purple } from '@mui/material/colors';
import getPalette from '../../utils/theme';
import { fetchImages } from '../../redux/images/imagesSlice';


function Copyright(props) {
  return (
    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }} align="center" {...props}>
      {'Copyright © '}
      <Link sx={{ color: 'rgba(255,255,255,0.7)' }} href="#">
        Szybki Patrol
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const theme2 = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});

const theme = createTheme({
  palette: getPalette(),
});

export default function Login() {
  const user = useSelector((state) => state.user)
  const images = useSelector((state) => state.images)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      login: formData.get('email'),
      password: formData.get('password'),
    };
    dispatch(login(data))
  };

  React.useEffect(() => {
    if (user.data) {
        navigate('/overview')
    } else {

    }
 }, [user]);

  React.useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div style={{ 
      backgroundImage: `url(${images?.links?.['loginbg'] || track})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
      }
    }}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ position: 'relative', zIndex: 1 }}>
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
          }}
        >
        </Box>
        <Box
          sx={{
            padding: 4,
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(15,15,15,0.98) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Avatar sx={{ bgcolor: 'error.main', transform: 'rotate(-15deg)' }}>
              <DirectionsCar />
            </Avatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <DirectionsCar />
            </Avatar>
            <Avatar sx={{ bgcolor: 'error.main', transform: 'rotate(15deg)' }}>
              <DirectionsCar />
            </Avatar>
          </Box>
          <Typography component="h1" variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 3 }}>
            SZYBKI PATROL
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nick / Email"
              name="email"
              autoComplete="email"
              autoFocus
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
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
            <FormControlLabel
              control={
                <Checkbox 
                  value="remember" 
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }}
                />
              }
              label={<Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Zapamiętaj mnie</Typography>}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                height: '48px',
                background: 'linear-gradient(90deg, #ff4d4d 0%, #f9cb28 100%)',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(90deg, #ff3333 0%, #f9bc28 100%)',
                }
              }}
            >
              Wejdź do gry
            </Button>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <Link href="#" variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.main' } }}>
                  Zapomniałeś hasła?
                </Link>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Link href="#" variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.main' } }}>
                  Załóż konto
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}