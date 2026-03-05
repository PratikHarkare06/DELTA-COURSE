import "./App.css";
//import
// import Title1 from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
// import MessageBox from "./MessageBox.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

function App() {
  return (
    <div>
      <Button text="Click Me" onClick={() => console.log("Clicked")} />
      <h2>Blockbuster Deals | Shop Now</h2>
      {/* <MessageBox username="Pratik" textcolor="violet" />
      <MessageBox username="John Doe" textcolor="red" /> */}
      <ProductTab />
      <Form />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>This is my first React Component</h1>
//       <p>Inside app component we have:</p>
//       <Title />
//     </div>
//   );
// }

export default App;
