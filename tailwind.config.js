/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      post: ["14px", "17px"],
      mob: ["18px", "24px"],
      base: ["16px", "25px"],
      lg: ["20px", "25px"],
      det: ["28px", "34px"],
      smh: ["24px", "30px"],
      hm: ["13px", "25px"],
      btn: ["12px", "16px"],
      ent: ["16px", "16px"],
      dep: ["16px", "19px"],
    },
    extend: {
      colors: {
        descr: "rgba(56, 65, 93, 0.82)",
        posted: "rgba(56, 65, 93, 0.602109)",
        et: "rgba(161, 177, 219, 0.317343)",
        bord: "rgba(85, 105, 158, 0.3)",
        bene: "rgba(255, 207, 0, 0.15)",
        cont: "rgba(255, 255, 255, 0.669635)",
      },
      boxShadow: {
        hug: "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
        mob: "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
        hov: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
