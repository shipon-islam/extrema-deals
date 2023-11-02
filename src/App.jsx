import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutesControler from "./routes/RoutesControler";

export default function App() {
  return (
    <div className="font-raleway">
      <Navbar />
      <RoutesControler />
      <Footer />
    </div>
  );
}
