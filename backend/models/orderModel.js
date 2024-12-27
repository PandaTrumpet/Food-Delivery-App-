import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;

// This schema defines the structure of the order document in the MongoDB database.
// The orderSchema object has the following properties:
// userId: The ID of the user who placed the order.
// items: An array of items in the order.
// amount: The total amount of the order.
// address: The delivery address of the order.
// status: The status of the order, which defaults to "Food Processing".
// date: The date and time when the order was placed, which defaults to the current date and time.
// payment: A boolean flag indicating whether the payment has been made for the order, which defaults to false.
