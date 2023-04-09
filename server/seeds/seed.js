const db = require('../config/connection');
const { User, Critic } = require('../models');
const userSeeds = require('./userSeeds.json');
const CriticSeeds = require('./CriticSeeds.json');

db.once('open', async () => {
  try {
    await Critic.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < CriticSeeds.length; i++) {
      const { _id, ReviewAuthor } = await Critic.create(CriticSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: ReviewAuthor },
        {
          $addToSet: {
            Reviews: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
