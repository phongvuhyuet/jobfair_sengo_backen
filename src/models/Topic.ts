import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface ITopic {
  name: string;
  created_at: object;
  updated_at: object;
}

const topicSchema = new Schema<ITopic>(
  {
    name: {
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

const Topic = mongoose.model<ITopic>('Topic', topicSchema);

export default Topic;
