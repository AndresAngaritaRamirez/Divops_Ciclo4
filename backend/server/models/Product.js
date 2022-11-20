import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    nombre: {
        type: 'string',
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    cantidad: {
        type: Number,
        required: true,
        trim: true
    }
})

export default mongoose.model('Product', productSchema);