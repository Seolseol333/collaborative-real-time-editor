const { create } = require("../../model/revision")

const addRevision = (req, res) => {
    create(req.body).then((rev) => {
        res.status(201).json(rev)
        res.end()
    }).catch(err => {
        console.error(err.name)
        switch (err.name) {
            case 'MongoServerError':
                res.sendStatus(500); // Internal Server Error
                break
            case 'ValidationError':
                res.sendStatus(400); // Bad Request
                break
            default:
                res.sendStatus(500); // Internal Server Error
        }
        res.end()
    })
}

module.exports = { addRevision }