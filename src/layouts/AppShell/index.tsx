import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppShell;
