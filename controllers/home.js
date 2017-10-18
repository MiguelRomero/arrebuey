//Controlador home
module.exports = {
    //action methods
    index : (req,resp)=>{
        resp.send("Se ejecuto el home");
    }
};