import { Schema, model,ObjectId } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export interface IAction {
    userId: ObjectId,
    factureId: ObjectId
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IAction>(
  {
 
    userId:{type: Schema.Types.ObjectId, ref: 'User'},
    factureId: { type: Schema.Types.ObjectId, ref: 'Facture' },

  },
  { timestamps: true }
);

// 3. Create a Model.
export const Action = model<IAction>('Action', schema);