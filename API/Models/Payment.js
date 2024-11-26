import mongoose, { Schema } from 'mongoose';


const paymentSchema = new Schema({
  orderDate:{type:Date,default:Date.now},
  payStatus:{type:String}

},{strict:false})

export const Payment = mongoose.model('Payment',paymentSchema);

