import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface IMessage {
  sender_id: object;
  recipient_id: object;
  content: string;
  content_type: string;
  read_at?: object;
  created_at: object;
}

const messageSchema = new Schema<IMessage>(
  {
    sender_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    recipient_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    content_type: {
      type: String,
      required: true,
    },
    read_at: Date,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: false,
    },
  }
);

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;
