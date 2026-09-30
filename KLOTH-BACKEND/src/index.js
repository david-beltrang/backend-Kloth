import app from "./app.js";

function init(){

    app.listen(3000, () =>{
        console.log("Server on port 3001");
    });
}

init();