import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface IAttachment {
  post_id: object;
  url: string;
  type: string;
  created_at: object;
}

const attachmentSchema = new Schema<IAttachment>(
  {
    post_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'Post',
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: false,
    },
  }
);

const Attachment = mongoose.model<IAttachment>('Attachment', attachmentSchema);

export default Attachment;
