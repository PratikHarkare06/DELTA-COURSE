const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connected to DB");
  })

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
User.findOneAndDelete({ name: "John Doe" }, { age: 30 }, { new: true }).then(
  (res) => {
    console.log(res);
  }
);

// User.findByIdAndDelete({ _id: "68a554f9bdeb16c71d9dfa6b" }).then((res) => {
//   console.log(res);
// });
// User.deleteMany({ age: 33 }).then((res) => {
//   console.log(res);
// });

// User.deleteOne({ name: "Bruce" }).then((res) => {
//   console.log(res);
// });

// User.findByIdAndUpdate(
//   { _id: "68a554f9bdeb16c71d9dfa6d" },
//   { age: 70 },
//   { new: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Bruce" }, { age: 65 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Bruce" }, { age: 50 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// User.updateMany({ age: { $gt: 48 } }, { age: 60 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "Bruce" }, { age: 50 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $gt: 30 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ age: { $gt: 30 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById({ _id: "68a554f9bdeb16c71d9dfa6d" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const user1 = new User({
//   name: "John Doe",
//   email: "john@doe.com",
//   age: 30,
// });
// const user2 = new User({
//   name: "Eve",
//   email: "evegoogle@gmail.com",
//   age: 33,
// });

// user1.save();
// user2.save();

// User.insertMany([
//   {
//     name: "Tony",
//     email: "tony@gmail.com",
//     age: 30,
//   },
//   {
//     name: "Bruce",
//     email: "bruce@gmail.com",
//     age: 40,
//   },
//   {
//     name: "Peter",
//     email: "peter@gmail.com",
//     age: 50,
//   },
// ]).then((res) => {
//   console.log(res);
// });
