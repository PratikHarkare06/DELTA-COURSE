const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async () => {
  let result = await Post.find({}).populate("user", "username");
  console.log(result);
  //   let user = await User.findOne({ username: "Ram Mohan" });
  //     username: "Ram Mohan",
  //     email: "rammohan@gmail.com",
  //   });
  //   let post2 = new Post({
  //     content: "Bye Bye",
  //     likes: 56,
  //   });
  //   post2.user = user;
  //   await post2.save();
  //   await user1.save();
  //   await post1.save();
};
// addData();

getData();
