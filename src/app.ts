import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import petRoutes from './routes/petRoutes';
import { defaultPets } from './controllers/petController';
import { db } from './models';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../src/public')));

// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

// TODO: Add routing middleware here
app.use('/pets', petRoutes);
app.use('/', defaultPets);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});

// Syncing our database
db.sync().then(() => {
    console.info("connnected to the database!")
});

app.listen(3000);