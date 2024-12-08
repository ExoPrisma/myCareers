const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');
const router = express.Router();


router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Check if the user already exists
    UserModel.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(409).json({ message: "User already exists" });
            }

            // Hash the password before storing it in the database
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    console.error('Error hashing password:', err);
                    return res.status(500).json({ message: "Internal server error" });
                }

                // Create the new user with the hashed password
                UserModel.create({ email, password: hashedPassword })
                    .then(newUser => {
                        res.status(201).json({ message: "User created successfully", user: newUser });
                    })
                    .catch(err => {
                        console.error('Error during user creation:', err);
                        res.status(500).json({ message: "Error creating user" });
                    });
            });
        })
        .catch(err => {
            console.error('Error during signin:', err);
            res.status(500).json({ message: "Internal server error" });
        });
});

module.exports = router;
