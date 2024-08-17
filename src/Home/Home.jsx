import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="container max-w-6xl mx-auto">
      <Navbar></Navbar>
      <h1 className="text-center text-xl font-medium">Our Menu</h1>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
