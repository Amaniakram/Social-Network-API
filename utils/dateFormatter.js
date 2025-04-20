// utils/seed.js
const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

const connection = 'mongodb://127.0.0.1:27017/socialnetwork';

const seedData = async () => {
  await mongoose.connect(connection);
  await User.deleteMany();
  await Thought.deleteMany();

  const user1 = await User.create({
    username: 'alice',
    email: 'alice@example.com'
  });

  const user2 = await User.create({
    username: 'bob',
    email: 'bob@example.com'
  });

  const thought = await Thought.create({
    thoughtText: 'Hello world!',
    username: 'alice'
  });

  user1.thoughts.push(thought._id);
  user1.friends.push(user2._id);
  await user1.save();

  console.log('Database seeded!');
  process.exit();
};

seedData();
