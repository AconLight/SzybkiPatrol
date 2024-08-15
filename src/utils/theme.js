const defaultPalette = {
	primary: {
		light: '#F87171',
		100: '#F87171',
		200: '#F87171',
		300: '#F87171',
		400: '#F87171',
		main: '#7F1D1D',
		dark: '#450A0A',
		700: '#450A0A',
		800: '#450A0A',
		contrastText: '#fff',
	},
    background: {
        default: '#27272A',
        paper: '#27272A',
     },
	secondary: {
		light: '#94A3B8',
		100: '#94A3B8',
		200: '#94A3B8',
		300: '#94A3B8',
		400: '#94A3B8',
		main: '#64748B',
		dark: '#475569',
		700: '#475569',
		800: '#475569',
		contrastText: '#343A40',
	},
	tertiary: {
		light: '#94A3B8',
		100: '#94A3B8',
		200: '#94A3B8',
		300: '#94A3B8',
		400: '#94A3B8',
		main: '#64748B',
		dark: '#475569',
		700: '#475569',
		800: '#475569',
		contrastText: '#343A40',
	},
	cuaternary: {
		light: '#94A3B8',
		100: '#94A3B8',
		200: '#94A3B8',
		300: '#94A3B8',
		400: '#94A3B8',
		main: '#64748B',
		dark: '#475569',
		700: '#475569',
		800: '#475569',
		contrastText: '#343A40',
	},
	success: {
		light: '#D9EEDA',
		100: '#BCE2BE',
		200: '#A0D6A2',
		300: '#83C986',
		400: '#67BD6A',
		main: '#4CAF50',
		dark: '#3B883E',
		700: '#2A612C',
		800: '#193A1A',
		contrastText: '#fff',
	},
	warning: {
		light: '#ff9800',
		main: '#ed6c02',
		dark: '#e65100',
	},
	error: {
		light: '#F3C7C7',
		100: '#EFB6B6',
		200: '#E89494',
		300: '#E17272',
		400: '#DA5151',
		main: '#D32F2F',
		dark: '#A72323',
		700: '#781919',
		800: '#4A1010',
		contrastText: '#fff',
	},
};

const lightPalette = {
	...defaultPalette,
	mode: 'light',
	border: '#DEE2E6',
	text: {
		// #121926  #212121
		primary: '#CBD5E1',
		secondary: '#868BA1',
		tertiary: '#6C757D',
		hint: '#EEF2F6',
	},
};

const darkPalette = {
	...defaultPalette,
	mode: 'dark',
	border: '#fff2',
	text: {
		primary: '#F3F6F9',
		secondary: '#B2BAC2',
		tertiary: '#bdbdbd',
		hint: '#fff2',
	},
};

// https://www.tailwindshades.com/
// this template needs four color shades
// for now manual color change for scroll bar  src/assets/css/styles.css

const getPalette = (mode) => {
	if (mode === 'light') return lightPalette;
	if (mode === 'dark') return darkPalette;
	return lightPalette;
};

export default getPalette;