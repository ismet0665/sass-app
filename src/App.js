import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./scss/app.scss"; // klasik css gibi import ediyoruz. module.css olsaydı from lu şekilde import edecektik.
import data from "./data";

function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  );
}

export default App;
