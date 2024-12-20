import { model, Schema, models } from "mongoose";
// создание схемы базы данных food
const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const foodModel = models.food || model("food", foodSchema);
export default foodModel;
