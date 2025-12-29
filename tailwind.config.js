/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sansation': ['Sansation', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'fira': ['"Fira Code"', 'monospace'],
            },
            animation: {
                'slide-in-from-top': 'slideInFromTop 0.3s ease-out',
            },
            keyframes: {
                slideInFromTop: {
                    '0%': { transform: 'translateY(-16px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
    darkMode: 'class',
}
