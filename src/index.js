import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialUsers } from "./database/initUsers.js";
import { loadInitialArticles } from "./database/initArticles.js";
import { setupRelations } from "./models/relations.js";
import "./models/User.js";
import "./models/Article.js";
//import ".models/Follower.js";

async function init(){
    try{
         await sequelize
                .authenticate()
                .then(() => {
                    console.log("Connection has been established successfully.");
                })
                .catch((err) => {
                    console.error("Unable to connect to the database:", err);
                });

         await sequelize.sync({ force: true});
            
         setupRelations();

         await loadInitialUsers();
         await loadInitialArticles();

         app.listen(3000, () => {
                console.log("Server on port 3000");
            });
    } catch (error) {
        console.log(error);
    }
   
}

init();