import express from 'express'
const app = express()
import router from './routes/contacts.routes'
import {connectDb} from './config/database'
connectDb();
app.use("/",router)
app.listen(3000,()=>{
    console.log('succesfullly connected on 3000');
    
})
app.set('view engine','ejs')
// =====middelwire======
app.use(express.json())
app.use(express.urlencoded({extended:false}))
