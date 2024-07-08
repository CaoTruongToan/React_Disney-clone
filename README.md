# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<br/>
How to creact React Vite<br/>
B1: Open CMD ->> npm creact vite@latest<br/>
B2: Đặt tên project + chọn framework "Vanila" + ngôn ngữ Javascript<br/>
B3: npm run dev (run chương trình)<br/>
===============######===============<br/>
Creact thư viện đi kèm cho project<br/>

B1: Install Tailwind CSS(Vite) "npm install -D tailwindcss postcss autoprefixer"<br/>
B2: npx tailwindcss init -p<br/>

<!-- Đọc tài liệu để config tailwind --><br/>
<!-- https://tailwindcss.com/docs/guides/vite --><br/>
B3: Configure your template paths (open tailwind.config.js)<br/>
coppy + pass đoạn dưới vào<br/>
/** @type {import('tailwindcss').Config} */<br/>
export default {<br/>
  content: [<br/>
    "./index.html",<br/>
    "./src/**/*.{js,ts,jsx,tsx}",<br/>
  ],<br/>
  theme: {<br/>
    extend: {},<br/>
  },<br/>
  plugins: [],<br/>
}<br/>

/** End config */<br/>
B4: npm install react-icons --save <br/>
B5: npm i axios<br/>
B6: npm i tailwind-scrollbar<br/>
B7: npm install prop-types<br/>
