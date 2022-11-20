import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    correo: {
        type: 'string',
        required: true,
        trim: true
    },
    contraseña: {
        type: 'string',
        required: true,
        trim: true
    },
    esAdmin: {
        type: Boolean,
        required: true,
        trim: true
    }
})

export default mongoose.model('User', userSchema);