exports.index=(req, res) => {
    res.send("Student Index Page\n");
}
exports.show=(req, res) => {
    res.send(`Showing student with ID: ${req.params.id}\n`);
}
exports.store=(req, res) => {
    res.send("Storing student data\n");
}
exports.update=(req, res) => {
    res.send(`Updating student with ID: ${req.params.id}\n`);
}
exports.delete=(req, res) => {
    res.send(`Deleting student with ID: ${req.params.id}\n`);
}