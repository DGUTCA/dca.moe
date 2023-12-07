import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
        container:{
            center: true,
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            // screens: { 
            //     'se': '375px',
            //     'laptop': '1024px',
            //     'desktop': '1280px',
            // },
        },
        
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    /**
                     * customize existing theme here, example:
                     * "primary": "#ffffff",
                     */
                    "info": "#22d3ee",
                    "primary": "#1F2937"
                }
            },
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    "info": "#22d3ee",
                    "primary":"#A6ADBA"
                }
            },
        ],
    },
    plugins: [
        require("@tailwindcss/typography"), 
        require("daisyui")
    ],
}
export default config
