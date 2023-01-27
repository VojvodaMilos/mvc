function LinkData(req, res) {
    console.log(req.query);
    res.redirect("/")
}

module.exports = LinkData;