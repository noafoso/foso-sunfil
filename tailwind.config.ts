import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				spaceGrotesk: ['var(--font-space-grotesk)'],
				montserrat: ['var(--font-montserrat)'],
			},
			backgroundImage: {
				discountCodeBanner: "url('/home/discountCodeBanner.png')",
			},
			gridTemplateColumns: {
				'13': 'repeat(13, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'15': 'repeat(15, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))'
			},
			gridColumn: {
				"span-13": "span 13 / span 13",
				"span-14": "span 14 / span 14",
				"span-15": "span 15 / span 15",
				"span-16": "span 16 / span 16",
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					new: "#1C252E",
					lighter: '#C8FAD6',
					light: '#5BE49B',
					main: '#00A76F',
					dark: '#007867',
					darker: '#004B50'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					new: "#637381",
					lighter: '#EFD6FF',
					light: '#C684FF',
					main: '#8E33FF',
					dark: '#5119B7',
					darker: '#27097A'
				},
				info: {
					lighter: '#CAFDF5',
					light: '#61F3F3',
					main: '#00B8D9',
					dark: '#006C9C',
					darker: '#003768'
				},
				success: {
					lighter: '#D3FCD2',
					light: '#77ED8B',
					main: '#22C55E',
					dark: '#118D57',
					darker: '#065E49'
				},
				warning: {
					lighter: '#FFF5CC',
					light: '#FFD666',
					main: '#FFAB00',
					dark: '#B76E00',
					darker: '#7A4100'
				},
				error: {
					lighter: '#FFE9D5',
					light: '#FFAC82',
					main: '#FF5630',
					dark: '#B71D18',
					darker: '#7A0916'
				},
				brand: {
					50: '#E6F1FF',
					100: '#CDE4FE',
					200: '#9AC9FE',
					300: '#68AEFD',
					400: '#3592FD',
					500: '#0373F3',
					600: '#025FCA',
					700: '#024897',
					800: '#013065',
					900: '#011832',
					950: '#000C19'
				},
				red: {
					700: '#E53935',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: {
				'4xl': '2560px',
				'3xl': '1920px',
				xxl: '1440px'
			},
			aspectRatio: {
				'5/3': '5 / 3',
				'4/3': '4 / 3',
				'3/2': '3 / 2',
				'3/1': '3 / 1',
				'2/1': '2 / 1',
				'1.5/1': '1.5 /1',
				'1.1/1': '1.1 / 1',
				'0.88/1': '0.88 / 1',
				'3.83/1': '3.83 / 1',
				'1.3/1': '1.3 / 1'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	// important: true,
	plugins: [animate],
};
export default config;
