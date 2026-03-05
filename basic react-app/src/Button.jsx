function handleClick(event) {
  console.log(event);
  console.log("Button clicked!");
}
function handleonOver() {
  console.log("Bye Bye");
}
function handleDbClick() {
  console.log("Double clicked!");
}

export default function Button({ text, onClick }) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      {/* <p onClick={printBye}> */}
      <p onMouseOver={handleonOver}>
        This para is for event demo Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dicta nesciunt illo inventore, dignissimos at pariatur
        incidunt, doloremque deleniti aut placeat dolor excepturi odit, aperiam
        nemo nam corrupti. Error, vitae iusto!
      </p>
      <button onDoubleClick={handleDbClick}>Double Click me </button>
    </div>
  );
}
