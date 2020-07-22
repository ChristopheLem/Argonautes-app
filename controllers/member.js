const Member = require('../models/Members')

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).send(members);
  } catch (e) {
    res.status(500).send();
  }
}

exports.addMember = async (req, res) => {

    const member = new Member({
      ...req.body
    })

    try {
      await member.save();
      res.status(201).send({ message: `Nouveau membre de l'équipage ajouté !`})
    } catch (e) {
      res.status(500).send({ error: `Une erreur m'empêche d'ajoupe ce membre à l'équipage`})
    }
}