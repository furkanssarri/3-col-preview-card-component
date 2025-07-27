import Attribution from "./components/Attribution";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <main className="main-content">
        <Card />
      </main>
      <Attribution />
      <Footer />
    </div>
  );
}

export default App;
