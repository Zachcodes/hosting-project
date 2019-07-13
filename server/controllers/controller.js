const people = [{ id: 1, name: 'John' }];

module.exports = {
  getPeople(req, res) {
    res.send(people);
  }
};
