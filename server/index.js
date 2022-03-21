//import "dotenv/config"
import express from "express"
import cors from "cors"
import compress from 'compression'
import cookieParser from "cookie-parser"
import helmet from "helmet"
import models,{sequelize} from './models/init-models'
import routes from './routes/indexRoute'
import config from "./config/config"
import middleware from "./helpers/middleware"


const port = config.port || 3000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(helmet())
app.use(compress())
app.use(cors())

app.use(async(req,res,next)=>{
    req.context = {models}
    next()
})

app.use(config.URL_API+"/instructor",routes.instructorRoute)
app.use(config.URL_API+"/users",routes.usersRoute)
app.use(config.URL_API+"/curriculum",routes.curriculumRoute)
app.use(config.URL_API+"/curriculumMateri",routes.curriculum_materiRoute)
app.use(config.URL_API+"/curriculumReviews",routes.curriculum_reviewsRoute)

app.use(middleware.handleError);
app.use(middleware.notFound);

const dropDatabaseSync = false

sequelize.sync({force : dropDatabaseSync}).then(async ()=> {
    if (dropDatabaseSync) {
        console.log("Database do not drop");
    }
    app.listen(port,()=>{console.log(`Server is listening on port ${port}`)})
})

export default app