import Product from "./Product";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
  };
  // let features = [
  //   "High Resolution",
  //   "Water Resistant",
  //   "Long Battery Life",
  //   //   <li>"High Resolution"</li>,
  //   //   <li>"Water Resistant"</li>,
  //   //   <li>"Long Battery Life"</li>,
  // ];

  return (
    <div style={styles}>
      {/* <Product title="Phone" price={500} features={features} />
      <Product title="Laptop" price={1000} features={features} />
      <Product title="Tablet" price={10} features={features} /> */}

      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil(2nd Generation)" idx={1} />
      <Product title="Zebronics Zeb-Transfer" idx={2} />
      <Product title="Potronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
