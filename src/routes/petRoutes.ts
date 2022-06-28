import { Router } from 'express';
import { allPets, onePet, addPetPage,
    addPet, editPetPage, editPet, deletePet } from '../controllers/petController';

const router = Router();

// GET /coffee - renders a list of coffee items
router.get('/', allPets);

// GET /coffee/add - render the add coffee item page
router.get('/add', addPetPage);

// POST /coffee/add - add coffee item to array
router.post('/add', addPet);

// GET /coffee/edit/:coffeeId - render the edit coffee page
router.get('/edit/:petId', editPetPage);

// POST /coffee/edit/:coffeeId - render the edit coffee page
router.post('/edit/:petId', editPet);

// POST /coffee/delete/:coffeeId - delete coffee item
router.post('/delete/:petId', deletePet);

// GET /coffee/:coffeeId - render the coffee item requested
router.get('/:petId', onePet);

export default router;