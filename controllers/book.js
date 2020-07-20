const  { Bokk, Book } = require('../models')

exports.list = async function list(req, res) {

    const books = await Book.find({})
    res.json(books)

};

exports.add = async function add(req, res) {

    const book = await Book.create(req.body)
    res.json(book)

};

exports.remove = async function removeBook(req, res) {
    
    const { _id } = req.params;
    await Book.remove({ _id: _id})
    res.json({ _id })
}