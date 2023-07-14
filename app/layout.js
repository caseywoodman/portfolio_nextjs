import Nav from "@/components/Nav";
import "../styles/global.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Casey Woodman",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col min-h-screen">
          <Nav className="flex-none" />
          <section className="flex-1 w-8/12 m-auto my-2">{children}</section>
          <Footer className="flex-none" />
        </main>
      </body>
    </html>
  );
}
