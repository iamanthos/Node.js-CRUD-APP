import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { CRUDController } from './controller/crudController';

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

// app.use('/', router);

useExpressServer(app, {
    controllers: [CRUDController]
});

app.get('/', (req, res) => {
    res.send('CRUD Node Server');
});

app.listen(port, err => {
    if(err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${port}`);
});