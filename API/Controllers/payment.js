import { Payment } from "../Models/Payment.js";
import Razorpay from "razorpay";


const razorpay = new Razorpay({
  key_id:"rzp_test_BY9L3AnU7aZSKs",
  key_secret:"qMG53LX8tOSNq9yBhsHTNvq6",
});

//checkout
export const checkout = async(req,res)=>{
  const {amount,cartItems,userShipping,userId} = req.body;

  var options = {
    amount:amount*100,
    currency:"INR",
    receipt:`receipt_${Date.now()}`,
  };

  const order = await razorpay.orders.create(options);
  
  res.json({
    orderId: order.id,
    amount: amount,
    cartItems,
    userShipping,
    userId,
    payStatus: "created",
  });
};

// verify , save to db
export const verify = async (req, res) => {
  const {
    orderId,
    paymentId,
    signature,
    amount,
    orderItems,
    userId,
    userShipping,
  } = req.body;

  let orderConfirm = await Payment.create({
    orderId,
    paymentId,
    signature,
    amount,
    orderItems,
    userId,
    userShipping,
    payStatus: "paid",
  });

  res.json({ message: "payment successfull..", success: true, orderConfirm });
};

// user specificorder
export const userOrder = async (req,res) =>{
  let userId = req.user._id.toString();
  // console.log(userId)
  let orders = await Payment.find({ userId: userId }).sort({ orderDate :-1});
  res.json(orders)
}

// user specificorder
export const allOrders = async (req,res) =>{
 
  let orders = await Payment.find().sort({ orderDate :-1});
  res.json(orders)
}