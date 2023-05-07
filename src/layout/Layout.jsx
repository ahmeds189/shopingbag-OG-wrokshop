import CardContainer from "../components/card/CardContainer";
import Hero from "../components/hero/Hero";
import "./layout.scss";

const Layout = () => {
  return (
    <main className="container">
      {/* <CardContainer /> */}
      <Hero type="one" />
      <Hero type="two" />
    </main>
  );
};

export default Layout;
