import { RequestHandler } from "express";
import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { Recette } from '@models/recette';
import { Categorie } from '@models/categorie';




// create Recette
const createRecette = async (req: Request, res: Response) => {
    
    interface IRecette {
        nom: string,
        description: string,
        categorieId: string,
        prix:number,
        images:Array<string>
    }
    // const data = req.body as IRecette

    try {

       const data = {
            nom:req.body.nom,
            description:req.body.description,
            prix:req.body.prix,
            images:req.body.images
        } as IRecette
        
        const categorieRecette= await Categorie.findOne({nom:req.body.categorie});
        if( categorieRecette){
         
         data.categorieId=categorieRecette.id;
        
        }    
        const recette:any = await Recette.create(data);

        await recette.save((err:any, recette:any)=>{
  
            if(err){
                res.status(500).send({message:err})
            }
        })

        res.status(200).send({ message: "Recette was register successfully!" });

    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// get all Recettes

 const getRecettes=  catchAsync(async (req: Request, res: Response) => {
    

    try{

        const Recettes = await Recette.find();
  
    res.status(200).json({
      Recettes,
    });

   } 
catch (err: any) {
    return res.status(400).json({
        status: false,
        message: err.message
    })
}
  });

// get one recette 
 const getOneRecette=  catchAsync(async (req: Request, res: Response) => {
    

    try{

        const Recettes = await Recette.findById(req.params.id);
  
    res.status(200).json({
      Recettes,
    });

   } 
catch (err: any) {
    return res.status(400).json({
        status: false,
        message: err.message
    })
}
  });

  // update Recette
const updateRecette = async (req: Request, res: Response) => {
    
    interface IRecette {
        nom: string,
        description: string,
        categorieId: string,
        prix:number,
        images:Array<string>
    }
    // const data = req.body as IRecette

    try {
       const data = {
            nom:req.body.nom,
            description:req.body.description,
            prix:req.body.prix,
            images:req.body.images
        } as IRecette
        
        const categorieRecette= await Categorie.findOne({nom:req.body.categorie});
        if( categorieRecette){
         
         data.categorieId=categorieRecette.id;
        
        }    

        const recette:any=  await Recette.findByIdAndUpdate(req.params.id, data);
   
        await recette.save((err:any, recette:any)=>{
  
            if(err){
                res.status(500).send({message:err})
            }
        })

        res.send({ message: "Recette was updated successfully!" });

    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// delete reccete
const deleteRecette = async (req: Request, res: Response) => {
        
        // const data = req.body as IRecette
    
        try {
                        
    const deleteReccete = await Recette.findByIdAndDelete(req.params.id);
    if (!deleteReccete){
        res.status(404).json({
            status: false,
            message: "Recette not found"
        })
    } else {
        res.status(200).json({
            status: true,
            message: "Recette was deleted successfully"
        })
    }
            } catch (err: any) {
                return res.status(400).json({
                    status: false,
                    message: err.message
                })
            }                                                                 

}
export { createRecette, getRecettes,updateRecette,deleteRecette,getOneRecette }
