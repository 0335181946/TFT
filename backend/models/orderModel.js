import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    orderItems: [
        {
            title: { type: String, required: true },
            quantity: { type: Number, required: true },
            image: { type:String, required: true},
            size: { type:String, required: true},
            image: { type:String, required: true},
            price: { type:String, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            }
        }
    ],
    userId: { type: String, required: true },
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    address:{ type: String, required: true },
    phone:{ type: Number, required: true },
    subTotal: {type: Number, required: true},
    cod: {type: Number, required: true},
    total: {type: Number, required: true},
    isPaid: {type: Boolean, required: true, default: false},
    isDelivered: {type: Boolean, required: true, default: false},
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;