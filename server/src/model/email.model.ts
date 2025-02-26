import { model, Schema } from 'mongoose';

const emailSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  sendingAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Email', emailSchema);
