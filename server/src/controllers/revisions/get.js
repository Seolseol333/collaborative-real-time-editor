const { get } = require("../../model/revision")

const getRevision = (req, res) => {
    get(req.params.id).then(rev => {
        if (rev === null) {
            res.sendStatus(404)
            res.end()
        } else {
            res.status(200).json(rev)
            res.end()
        }
    }).catch(err => {
        console.error(err)
        res.sendStatus(500)
        res.end()
    })
}

module.exports = { getRevision }