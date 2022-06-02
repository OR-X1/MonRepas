import { Schema, model,ObjectId } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IMenu {
    nom: string,
    description: string,
    produits:any,
    images:any,
    categorieId:ObjectId,
    prix:number,

}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IMenu>(
  {
    nom: { type: String, required: true },
    description: { type: String, required: true },
    produits: [{ type: Schema.Types.ObjectId, ref: 'Produit' }],
    images: { type: Array, required: false },
    prix: { type: Number, required: true },
    categorieId: { type: Schema.Types.ObjectId, ref: 'Categorie' },

  },
  { timestamps: true }
);

// 3. Create a Model.
export const Menu = model<IMenu>('Menu', schema);
