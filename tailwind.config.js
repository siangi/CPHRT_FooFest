module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  //will remove quotes around some of the tags if not ignored, weird
  // prettier-ignore
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
        fontSize: {
            'base': "calc(1rem + (1.2 - 1) * ((100vw - 300px) / (1600 - 300)));",
            'lg': "calc(1rem + (1.25 - 1) * ((100vw - 300px) / (1600 - 300)));",
            'xl': "calc(1.25rem + (1.563 - 1.25) * ((100vw - 300px) / (1600 - 300)));",
            "2xl": "calc(1.563rem + (1.953 - 1.563) * ((100vw - 300px) / (1600 - 300)));",
            "3xl": "calc(1.953rem + (2.441 - 1.953) * ((100vw - 300px) / (1600 - 300)));",
            "4xl": "calc(1.953rem + (3.052 - 1.953) * ((100vw - 300px) / (1600 - 300)));",
            "5xl": "calc(3.052rem + (3.819 - 3.052) * ((100vw - 300px) / (1600 - 300)));",
            "6xl": "calc(3.819rem + (4.773 - 3.819) * ((100vw - 300px) / (1600 - 300)));",
            "12xl": "calc(7.451rem + (9.313 - 7.451) * ((100vw - 300px) / (1600 - 300)));",
            //font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
            //font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
        },
        extend: {
            colors: {
                darkmode_black: "#0E0E10",
                darkmode_black2: "#1C1C21",
                darkmode_black3: "#26262C",
                darkmode_black4: "#2F2F37",
                darkmode_black5: "#383842",
                darkmode_black6: "#42424D",
                darkmode_black7: "#4B4B58",
                darkmode_black8: "#545463",

                shade_darker_white: "#F4F4F6",
                transparent_black: "rgba(0, 0, 0, 0.8)",

                accent_yellow: "#E19F54",
                accent_yellow2: "#E7B174",
                accent_yellow3: "#EABB85",

                accent_red: "#B85C38",
                accent_red2: "#C56844",
                accent_red3: "#CA7553",

                accent_blue: "#448FA3",
                accent_blue2: "#52A1B7",
                accent_blue3: "#61A9BD",
            },
            fontFamily: {
                bodyFont: "futura-pt, sans-serif",
                displayFont: "boucherie-block, sans-serif",
            },
            animation: {
                'fade-in': 'modalAppear 0.2s linear',
                'fade-out': 'modalDisappear 0.2s linear',
              },
            keyframes: {
                modalAppear: {
                  'from': {opacity: "0" },
                  'to': {opacity: "1" },
                },

                modalDisappear: {
                    'from': {opacity: "1" },
                    'to': {opacity: "0" },
                  }
              }
        },
    },
  plugins: [require("@tailwindcss/forms")],
};
