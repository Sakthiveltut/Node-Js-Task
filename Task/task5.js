const mongoose = require('mongoose');
const prompt = require('prompt');

function task5(){
  mongoose.connect("mongodb://127.0.0.1:27017/user-data", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB Connected");
      getUserData();
    })
    .catch(() => {
      console.log("Error connecting to MongoDB");
    });
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true,
    validate: {
      validator: function (dob) {
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        return age >= 16;
      },
      message: 'User must be at least 16 years old.'
    }
  }
});

const collection = mongoose.model('user', userSchema);

async function getUserData() {
  prompt.start();

  const properties = [
    {
      name: 'name',
      description: 'Enter your name',
      required: true
    },
    {
      name: 'email',
      description: 'Enter your email',
      required: true
    },
    {
      name: 'password',
      description: 'Enter your password',
      hidden: true,
      replace: '*',
      required: true
    },
    {
      name: 'dob',
      description: 'Enter your date of birth (YYYY-MM-DD)',
      required: true
    }
  ];

  prompt.get(properties, async (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    const userData = {
      name: result.name,
      email: result.email,
      password: result.password,
      dob: new Date(result.dob)
    };

    try {
      const existingUser = await collection.findOne({ email: userData.email });
      if (existingUser) {
        console.log('Email already exists. Please use a different email.');
        return;
      }

      await collection.create(userData);
      console.log('User registered successfully.');
    } catch (error) {
      console.error('Error during user registration:', error.message);
    } finally {
      mongoose.connection.close();
    }
  });
}

module.exports = task5;