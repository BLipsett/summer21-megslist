import mongoose from "mongoose";
const Schema = mongoose.Schema;

//  description,
//     levels,
//     bedrooms,
//     bathrooms,
//     year,
//     price,
//     imgUrl,

const House = new Schema({
  levels: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  img: { type: Image },
});

export default House;
