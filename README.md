# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


How to creact React Vite
B1: Open CMD ->> npm creact vite@latest
B2: Đặt tên project + chọn framework "Vanila" + ngôn ngữ Javascript
B3: npm run dev (run chương trình)
===============######===============
Creact thư viện đi kèm cho project

B1: Install Tailwind CSS(Vite) "npm install -D tailwindcss postcss autoprefixer"
B2: npx tailwindcss init -p

<!-- Đọc tài liệu để config tailwind -->
<!-- https://tailwindcss.com/docs/guides/vite -->
B3: Configure your template paths (open tailwind.config.js)
coppy + pass đoạn dưới vào
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** End config */


B4: npm install react-icons --save 
B5: npm i axios
B6: npm i tailwind-scrollbar
B7: npm install prop-types
