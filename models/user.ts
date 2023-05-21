import { Schema, model, Types } from 'mongoose'
import { IUser } from '../interfaces/auth.user.interface'


const schema  = new Schema<IUser>({
    email: {type: String, required: true, unique: true},
    password: {type: String, require: true},
    links: [{type: Types.ObjectId, ref: 'Link'}]
})

export const User = model<IUser>('User', schema);