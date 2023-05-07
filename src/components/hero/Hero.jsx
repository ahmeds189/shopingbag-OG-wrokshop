import "./hero.scss";

const Hero = ({ type }) => {
  return (
    <section className={`hero ${type === "one" ? "type-one" : "type-two"}`}>
      {type === "one" && <h4>topbrands</h4>}
      <h2>new collection</h2>
      {type === "one" ? (
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      ) : (
        <p>shop men's & women's</p>
      )}

      <button type="button">shop now</button>
    </section>
  );
};

export default Hero;
