import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContextProvider from "./context/ContextProvider";
import RoutesControler from "./routes/RoutesControler";

export default function App() {
  return (
    <ContextProvider>
      <div className="font-raleway">
        <Navbar />
        <RoutesControler />
        <Footer />
      </div>
    </ContextProvider>
  );
}
