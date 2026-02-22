import "./App.css";
// import TodoList from "../TodoList";
// import Counter from "../Counter";
// import LikeButton from "../LikeButton";

// import Lottery from "../Lottery";
// import TicketNum from "../TicketNum";
// import { sum } from "../helper";
// import Form from "./Form";
// import CommentsForm from "./CommentsForm";
// import Counterr from "./Counterr";
import Joker from "./Joker";

function App() {
  // // Win condition: all 3 numbers are the same (e.g., 111, 222)
  // let winCondition = (ticket) => {
  //   const { numbers } = ticket;
  //   return numbers.every((num) => num === numbers[0]);
  // };

  return (
    <>
      {/* <TodoList /> */}
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      {/* <Form /> */}
      {/* <CommentsForm /> */}
      {/* <Counterr /> */}
      <Joker />
    </>
  );
}

export default App;
