import { RequestHandler } from "express";
import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { Categorie } from '@models/categorie';


// create Categorie
const addCategorie = async (req: Request, res: Response) => {
    
    interface ICategorie {
        nom: string,
    }
    const data = req.body as ICategorie

    try {

        const categorie:any = await Categorie.create(data);

        await categorie.save((err:any, categorie:any)=>{
  
            if(err){
                res.status(500).send({message:err})
            }
        })

        res.send({ message: "categorie was register successfully!" });

    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// get all Categories
 const getCategories=  catchAsync(async (req: Request, res: Response) => {
    

    try{

        const categories = await Categorie.find();
  
    res.status(200).json({
        categories,
    });

   } 
catch (err: any) {
    return res.status(400).json({
        status: false,
        message: err.message
    })
}
  });
export { addCategorie, getCategories }
