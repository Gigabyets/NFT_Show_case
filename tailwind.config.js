
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
   
    themes: [
      "night",
      "retro",

    
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
