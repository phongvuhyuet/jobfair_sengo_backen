import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface IReport {
  post_id?: object;
  comment_id?: object;
  reason: string;
  created_at: object;
  processed_at?: object;
  state_id: number;
}

const reportSchema = new Schema<IReport>(
  {
    post_id: {
      type: Types.ObjectId,
      ref: 'Post',
    },
    comment_id: {
      type: Types.ObjectId,
      ref: 'Comment',
    },
    reason: {
      type: String,
      required: true,
    },
    processed_at: Date,
    state_id: {
      type: Number,
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

const Report = mongoose.model<IReport>('Report', reportSchema);

export default Report;
