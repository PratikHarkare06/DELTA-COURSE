export default function Price({ oldPrice, newPrice }) {
  let oldstyle = {
    textDecoration: "line-through",
  };
  let newstyle = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "lightgrey",
    padding: "5px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    height: "90px",
  };
  return (
    <div style={styles}>
      <span style={oldstyle}>Old Price: {oldPrice}</span>
      <br />
      <span style={newstyle}>New Price: {newPrice}</span>
    </div>
  );
}
