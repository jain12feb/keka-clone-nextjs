import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Keka | The HR Payroll software loved by businesses like yours",
  description:
    "Payroll Software on cloud. Keka HR, the best Hrms software in India is an employee experience platform with HR & Payroll. Sign up for 7-day free trial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
