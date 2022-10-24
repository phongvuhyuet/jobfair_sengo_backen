import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

interface IUser {
  username: string;
  email: string;
  password: string;
  admin: boolean;
  avatar_url: string;
  university_id?: number;
  grade_id?: number;
  workplace_id?: number;
  lastest_report_id?: object;
  inhibited_time?: number;
  created_at: object;
  updated_at: object;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
    avatar_url: {
      type: String,
      required: true,
    },
    university_id: Number,
    grade_id: Number,
    workplace_id: Number,
    lastest_report_id: {
      type: Types.ObjectId,
      ref: 'Report',
    },
    inhibited_time: Number,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
