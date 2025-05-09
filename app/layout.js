
import "./globals.css";
import "./aref.css";
import './variables.css';

import Footer from "@/components/layout/Fotter";
import Header from "@/components/layout/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
