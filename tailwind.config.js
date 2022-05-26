module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  //will remove quotes around some of the tags if not ignored, weird
  // prettier-ignore
  theme: {
        fontSize: {
            'base': "1rem",
            'lg': "1.25rem",
            'xl': "1.563rem",
            "2xl": "1.953rem",
            "3xl": "2.441rem",
            "4xl": "3.052rem",
            "5xl": "3.819rem",
            "6xl": "4.773rem",
            "12xl": "clamp(8rem, 21.3vw - 1.3rem, 12rem);",
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
