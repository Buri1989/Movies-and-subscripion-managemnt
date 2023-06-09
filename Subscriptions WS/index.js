const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');
const membersDal = require('./DAL/membersWS');
const moviesDal = require('./DAL/moviesWS')
const moviesRouter = require('./routers/moviesRouter')
const membersRouter = require('./routers/membersRouter');
const subscriptionRouter = require('./routers/subscriptionRouter')

const app = express();
const port = 8888;

connectDB()
membersDal();
moviesDal();

app.use(cors());
app.use(express.json());

/*Routers */
app.use('/movies', moviesRouter);
app.use('/members', membersRouter);
app.use('/subscriptions', subscriptionRouter);


app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
});
