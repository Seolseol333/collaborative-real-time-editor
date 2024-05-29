const { findAll } = require("../../model/revision")


const findAllRevision = (_, res) => {
    findAll().then(revs => {
        if (revs === null) {
            res.sendStatus(404)
            res.end()
        } else {
            res.status(200).json(revs)
            res.end()
        }
    }).catch(err => {
        console.error(err)
        res.sendStatus(500)
        res.end()
    })
}

module.exports = { findAllRevision }