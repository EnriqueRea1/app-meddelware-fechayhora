var mensaje=(req,res,next)=>{
    console.log(`Hola en el servidor`);
    next();
}

module.exports=mensaje;