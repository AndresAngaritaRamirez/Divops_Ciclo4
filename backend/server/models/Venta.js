import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
    fecha: {
        type: 'string',
        required: true,
        trim: true
    },
    valor: {
        type: Number,
        required: true,
        trim: true
    }
})

export default mongoose.model('Venta', ventaSchema);