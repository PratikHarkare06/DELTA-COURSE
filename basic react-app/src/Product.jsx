import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrice = ["12,450", "11,800", "9,999", "2,499"];
  let newPrice = ["10,999", "9,999", "8,499", "1,999"];
  let DescriptionList = [
    ["8000 DPI ", "5 programmable Buttons "],
    ["2nd Generation Stylus Pen", "Precision Tip "],
    ["Wireless Transfer", "High Speed Data "],
    ["Bluetooth Speaker", "Built-in Microphone"],
  ];
  // const featureslist = features.map((feature, index) => (
  //   <li key={index}>{feature}</li>
  // ));
  // let isDiscount = price >= 100;
  // let styles = { backgroundColor: isDiscount ? "lightgreen" : "lightcoral" };
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{DescriptionList[idx][0]}</p>
      <p>{DescriptionList[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      {/* // <div className="Product" style={styles}> */}
      {/* <h3>{title}</h3>
      <h4>Price: {price}</h4>
      <p>Features: {featureslist}</p> */}
      {/* <h5>This is a sample product description.</h5>
      {price >= 100 && <p>Discount of 5% applied</p>} */}
    </div>
  );
}
export default Product;
