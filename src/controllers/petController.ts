import { RequestHandler } from "express";
import { Pet } from "../models/pet";

export const defaultPets: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const allPets: RequestHandler =  async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('all-pets', { petList });
}

export const onePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let petItem: Pet | null = await Pet.findByPk(itemId);

    if(petItem){
        res.render('pet-detail', { foundPet: petItem});
    }
    else{
        res.status(404).render('error', { message: 'Pet not found'});
    }
}

export const addPetPage: RequestHandler = (req, res, next) => {
    res.render('add-pet');
}

export const addPet: RequestHandler =  async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/pets');
}

export const editPetPage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let petItem: Pet | null = await Pet.findOne({ 
        where: { petId: itemId}
    });

    if(petItem){
        res.render('edit-pet', { foundPet: petItem});
    }
    else{
        res.status(404). render('error', { message: 'Pet not found' });
    }

}

export const editPet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let updatedItem: Pet = req.body;

    let [updated] = await Pet.update(updatedItem, {
        where: { petId: itemId }
    });

    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
}

export const deletePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;

    let deleted = await Pet.destroy({
        where: { petId: itemId }
    });

    if (deleted) {
        res.redirect('/pets')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
}