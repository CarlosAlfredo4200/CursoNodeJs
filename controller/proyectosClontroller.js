exports.proyectosHome = (req,res) => {
    res.render('index')
}

exports.nosotros = (req,res) => {
    res.send('Desde nosotros')
} 

exports.contactos = (req,res) => {
    res.send('Desde contactos')
} 