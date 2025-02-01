import { withJamsrUI } from "@jamsr-ui/theme";

import type { Config } from "tailwindcss";



const config: Config = withJamsrUI({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@jamsr-ui/*/dist/*.js",
    
    
  ],
  theme: {},
  plugins: [
    
  ],
});
export default config;