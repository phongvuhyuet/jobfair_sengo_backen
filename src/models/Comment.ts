import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface IComment {
  post_id: object;
  user_id: object;
  content: string;
  created_at: object;
  updated_at: object;
}

const commentSchema = new Schema<IComment>(
  {
    post_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'Post',
    },
    user_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Comment = mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
