import { Schema, model, Document} from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder & Document>({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product', 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    }
});


export const OrderModel = model<TOrder & Document>('Order', orderSchema);
