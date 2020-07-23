const Member = require('../models/Members')

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    if (!members) {
      return res.status(400).send({ message: `L'équipage est vide` });
    }

    res.status(200).send(members);
  } catch (e) {
    res.status(500).send(e);
  }
}

exports.addMember = async (req, res) => {
    try {
      const member = new Member({
        ...req.body
      })      
      await member.save();
      res.status(201).send({ message: `Nouveau membre de l'équipage ajouté !`})
    } catch (e) {
      res.status(500).send({ error: `Une erreur m'empêche d'ajouté ce membre à l'équipage`})
    }
}