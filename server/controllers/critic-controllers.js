const { Critic, Movie, Review } = require('../models');

module.exports = {
    //Get all critics
    getCritics(req, res) {
        Critic.find()
        .then((critics) => res.json(critics))
        .catch((err) => res.status(500).json(err));
    },
    //get a single a critic
    getSingleCritic(req, res) {
        Critic.findOne({_id: req.params.criticId})
        .select('-__v')
        .then((critic) =>
        !critic
        ? res.status(404).json({ message: 'No critic with that ID'})
        : res.json(critic)
        )
        .catch((err) => res.status(500).json(err));
    },
    //Create a critic
    createCritic(req,res) {
        Critic.create(req.body)
        .then((critic) => res.json(critic))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
            });
    },
    //Delete a critic
    deleteCritic(req,res) {
        Critic.findOneAndDelete({ _id: req.params.criticId })
        .then((critic) => res.json(critic))
        .catch((err) => res.status(500).json(err));
    },
    //Update a critic
    updateCritic(req, res) {
        Critic.findOneAndUpdate({ _id: req.params.criticId }, req.body, {
            runValidators: true,
            new: true,
        }).then((critic) => {
            if (!critic) {
                res.status(404).json({ message: 'Unable to find critic.'});
                return;
            }
            res.json(critic)
        });


    },
};