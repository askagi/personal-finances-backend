const fs = require('fs/promises');

const getFinances = (req,res) => {
    return res.status(200).json({message: "Tudo ok"})
}

module.exports = {
    getFinances
}