import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
        container:{
            center: true,
        },
        extend: {
            colors: {
                "primary": "#15803d",
                "secondary": "#f000b8",  
                "accent": "#1dcdbc",  
                "neutral": "#2b3440",
                "bg": "#fcfcff" 
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        }
    },

    plugins: [
        require("@tailwindcss/typography"), 
        require("daisyui")
    ],
    

}
export default config
