import Header from "./components/layout/Header";
import HomeIntro from "./components/layout/HomeIntro";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div>
      <Header />
      <HomeIntro />
      <Footer />
    </div>
  );
}

export default App;
