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
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        }
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
                    "info": "#22d3ee"
                }
            },
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    "info": "#22d3ee"
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
