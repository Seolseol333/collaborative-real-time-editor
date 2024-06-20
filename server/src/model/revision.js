const mongoose = require('mongoose'); // singleton
const { Schema } = mongoose

const revisionSchema = new Schema({
    id: { type: 'string', index: 1 }, // id in asc order
    revision: 'string',
    text: 'string'
}, { timestamps: true })

const Revision = mongoose.model('Revision', revisionSchema)

const create = (p) => Revision(p).save()

const get = (id) => Revision.findOne({ ID: id })

const findAll = () => Revision.find()

const count = () => Revision.countDocuments()

module.exports = { Revision, create, get, findAll, count }