const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontFamily: {
        'sans': ['"Inter var"', 'system-ui', '-apple-system',  '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
        'mons': ['Montserrat'],
        'mono': ['"ui-monospace"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },
      fontSize: {
        'headline-sm': ['24px', '32px'],
        'title-lg': ['22px', '28px'],
        'title-md': ['16px', '24px'],
        'title-sm': ['14px', '20px'],
        'label-lg': ['14px', '20px'],
        'label-md': ['12px', '16px'],
        'label-sm': ['11px', '16px'],
        'body-lg': ['16px', '24px'],
        'body-md': ['14px', '20px'],
        'icon-xl': ['4rem', '4rem']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
