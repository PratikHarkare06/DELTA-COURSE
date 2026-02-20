const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
const orderSchema = new Schema({
  item: String,
  price: Number,
});
const Order = mongoose.model("Order", orderSchema);
const customerSchema = new Schema({
  name: String,
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("Pre  middleware called");
// });
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.order.length) {
    let res = await Order.deleteMany({
      _id: {
        $in: customer.order,
      },
    });
    console.log(res);
  }
});

const Customer = mongoose.model("Customer", customerSchema);

const addCustomers = async () => {
  //   let customer1 = new Customer({
  //     name: "Rahul Kumar",
  //   });

  //   let order1 = await Order.findOne({ item: "Samosa" });
  //   let order2 = await Order.findOne({ item: "Burger" });
  //   let order3 = await Order.findOne({ item: "Pizza" });

  //   customer1.order.push(order1);
  //   customer1.order.push(order2);
  //   customer1.order.push(order3);

  //   let result = await customers1.save();
  //   console.log(result);

  let result = await Customer.find({}).populate("order");
  // console.log(result[0]);
};
addCustomers();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 20 },
//     { item: "Burger", price: 50 },
//     { item: "Pizza", price: 100 },
//   ]);
//   console.log(res);
// };

// addOrders();

// Functions to add customers

const findCustomers = async () => {
  let result = await Customer.find({}).populate("order");

  // console.log(result);
};

const addCust = async () => {
  let newCust = new Customer({
    name: "Raman Agrawal",
  });

  let newOrder = new Order({
    item: "Kheer",
    price: 1000,
  });

  newCust.order.push(newOrder);
  await newOrder.save();
  await newCust.save();

  console.log("Added new customer and order");
};

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("68da1f451d39430e23b2f9cc");
  console.log(data);
};
// addCust();
delCust();
