const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connected to DB");
  })

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 25,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price is too low for a book"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);
Book.findByIdAndUpdate(
  "68a6c6eef5c2b0e402b40cc4",
  { price: -550 },
  { runValidators: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book1 = new Book({
//   title: "Marvel Comics V2",
//   //   author: "RD Sharma",
//   price: 800,
//   //   category: "fiction",
//   genre: ["action", "adventure"],
// });
// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
