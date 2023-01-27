function DataForDb(req, res) {
    console.log(req.params.data);
    res.send({ status: 200 });
}

module.exports = DataForDb;