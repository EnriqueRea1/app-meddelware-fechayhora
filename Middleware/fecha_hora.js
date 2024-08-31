var date=(req,res,next)=>{
    const FechaHora = new Date();
    const Actual = FechaHora.toLocaleString();
    console.log(`El usuario ingreso el: ${Actual}`);
    next();
}

module.exports= date=date;
