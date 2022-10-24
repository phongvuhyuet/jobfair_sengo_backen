import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface IPost {
  topic_id: object;
  user_id: object;
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
  released_at?: object;
  state_id: number;
  refuse_reason?: string;
  created_at: object;
  updated_at: object;
  deleted_at?: object;
}

const postSchema = new Schema<IPost>(
  {
    topic_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'Topic',
    },
    user_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    upvotes: {
      type: Number,
      required: true,
    },
    downvotes: {
      type: Number,
      required: true,
    },
    released_at: Types.ObjectId,
    state_id: {
      type: Number,
      required: true,
    },
    refuse_reason: {
      type: String,
      required: true,
    },
    deleted_at: Date,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
