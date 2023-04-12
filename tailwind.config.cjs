/* eslint-env node */
const { fontFamily } = require('tailwindcss/defaultTheme')
const config = require('./tailwind.theme.config.cjs')
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const aspectratio = require('@tailwindcss/aspect-ratio')
/**
 * Find the applicable theme color palette, or use the default one
 */
const themeConfig = process.env.THEME_KEY && config[process.env.THEME_KEY] ? config[process.env.THEME_KEY] : config.default
const { colors } = themeConfig
module.exports = {
    darkMode: 'class',
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,ts,svelte}'
    ],
    safelist: ['dark'],
    theme: {
		fontFamily: {
			sans: ['iA Writer Duo', ...fontFamily.sans],
		},
		extend: {
            colors: {
                theme: {
                    ...colors
                }
            },
            typography: (theme) => ({
                dark: {
                    css: {
                        color: theme("colors.gray.200"),
                    },
                },
                DEFAULT: {
                    css: {
                        a: {
                            color: colors.dark.primary,
                              '&:hover': {
                                color: colors.primary,
                              },
                        },
                        blockquote: {
                            color: colors.primary,
                            borderColor: colors.dark.primary
                        },
                        'blockquote > p::before, p::after': {
                            color: colors.dark.primary,
                        },
                        h1: {
                            color: colors.dark.secondary,
                        },
                        h2: {
                            color: colors.dark.secondary,
                        },
                        h3: {
                            color: colors.dark.secondary,
                        },
                    }
                },
            }),
		},
	},
    variants: {
        extend: { typography: ["dark"] }
    },
    plugins: [
        typography,
        forms,
        aspectratio,
    ]
};
