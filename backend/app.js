require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const userRouter = require("./api/users/user.router");
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,

}
app.use(cors(corsOptions))
app.use(express.json());
app.use("/api", userRouter);

app.listen(process.env.PORT, ()=>{
    console.log("Server up and running on ", process.env.PORT || 8000);
});