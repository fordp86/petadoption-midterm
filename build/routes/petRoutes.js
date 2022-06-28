"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petController_1 = require("../controllers/petController");
const router = (0, express_1.Router)();
// GET /coffee - renders a list of coffee items
router.get('/', petController_1.allPets);
// GET /coffee/add - render the add coffee item page
router.get('/add', petController_1.addPetPage);
// POST /coffee/add - add coffee item to array
router.post('/add', petController_1.addPet);
// GET /coffee/edit/:coffeeId - render the edit coffee page
router.get('/edit/:petId', petController_1.editPetPage);
// POST /coffee/edit/:coffeeId - render the edit coffee page
router.post('/edit/:petId', petController_1.editPet);
// POST /coffee/delete/:coffeeId - delete coffee item
router.post('/delete/:petId', petController_1.deletePet);
// GET /coffee/:coffeeId - render the coffee item requested
router.get('/:petId', petController_1.onePet);
exports.default = router;
