/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0E14',       // deep graphite-navy background
        surface: '#12161F',    // card surface
        surface2: '#171C27',   // hover / raised surface
        line: '#232937',       // hairline borders
        text: '#E7ECEF',       // primary text
        muted: '#8B96A5',      // secondary text
        accent: '#3ED6C4',     // working accent — cyan (data / interaction)
        gold: '#E8B34A',       // reserved strictly for honors & awards
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
