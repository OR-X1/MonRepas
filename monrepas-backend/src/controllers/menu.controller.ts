import { RequestHandler } from "express";
import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { Menu } from '@models/menu';
import { Categorie } from '@models/categorie';


// create Menu
const createMenu = async (req: Request, res: Response) => {
    
    interface IMenu {
        nom: string,
        description: string,
        categorieId: string,
        prix:number,
        produits:Array<string>
        images:Array<string>

    }
    // const data = req.body as IMenu

    try {


       const data = {
            nom:req.body.nom,
            description:req.body.description,
            prix:req.body.prix,
            produits:req.body.produits,
            images:req.body.images
        } as IMenu
        
        const categorieMenu= await Categorie.findOne({nom:req.body.categorie});
        if( categorieMenu){
         
         data.categorieId=categorieMenu.id;
        
        }    
        const menu:any = await Menu.create(data);

        await menu.save((err:any, Menu:any)=>{
  
            if(err){
                res.status(500).send({message:err})
            }
        })

        res.send({ message: "Menu was register successfully!" });

    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// get all Menus

 const getMenus=  catchAsync(async (req: Request, res: Response) => {
    

    try{

        const menu = await Menu.find();
  
    res.status(200).json({
        menu,
    });

   } 
catch (err: any) {
    return res.status(400).json({
        status: false,
        message: err.message
    })
}
  });

// get one Menu 
 const getOneMenu=  catchAsync(async (req: Request, res: Response) => {
    

    try{

        const Menus = await Menu.findById(req.params.id);
  
    res.status(200).json({
      Menus,
    });

   } 
catch (err: any) {
    return res.status(400).json({
        status: false,
        message: err.message
    })
}
  });

  // update Menu
const updateMenu = async (req: Request, res: Response) => {
    
    interface IMenu {
        nom: string,
        description: string,
        categorieId: string,
        prix:number,
        produits:Array<string>,
        images:Array<string>

    }
    // const data = req.body as IMenu

    try {
       const data = {
            nom:req.body.nom,
            description:req.body.description,
            prix:req.body.prix,
            produits:req.body.produits,
            images:req.body.images
        } as IMenu
        
        const categorieMenu= await Categorie.findOne({nom:req.body.categorie});
        if( categorieMenu){
         
         data.categorieId=categorieMenu.id;
        
        }    

        const menu:any=  await Menu.findByIdAndUpdate(req.params.id, data);
   
        await menu.save((err:any, menu:any)=>{
  
            if(err){
                res.status(500).send({message:err})
            }
        })

        res.send({ message: "Menu was updated successfully!" });

    } catch (err: any) {
        return res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

// delete reccete
const deleteMenu = async (req: Request, res: Response) => {
        
        // const data = req.body as IMenu
    
        try {
                        
    const deleteReccete = await Menu.findByIdAndDelete(req.params.id);
    if (!deleteReccete){
        res.status(404).json({
            status: false,
            message: "Menu not found"
        })
    } else {
        res.status(200).json({
            status: true,
            message: "Menu was deleted successfully"
        })
    }
            } catch (err: any) {
                return res.status(400).json({
                    status: false,
                    message: err.message
                })
            }                                                                 

}
export { createMenu, getMenus,updateMenu,deleteMenu,getOneMenu }
