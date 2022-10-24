import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface INotification {
  user_id: object;
  content: string;
  redirect_url: string;
  read_at?: object;
  created_at: object;
  updated_at: object;
}

const notificationSchema = new Schema<INotification>(
  {
    user_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    redirect_url: {
      type: String,
      required: true,
    },
    read_at: Date,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Notification = mongoose.model<INotification>(
  'Notification',
  notificationSchema
);

export default Notification;
