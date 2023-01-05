const express = require('express');
const { User } = require('../models/model');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post("/register", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            return res.json({ error: "Email on ulanylyp dur" })
        }
        await User.create({
            username: username,
            email: email,
            password: hashedPassword,
            name: name

        });
        res.json("Giris kabul edildi");
    }
    catch (err) {
        console.log(err);
    }
});



router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await User.findOne({ where: { username: username } });
        console.log(user)
        if (!user) {
            return res.json({ error: "Ulanyjy tapylmady" });
        }

        const match = await bcrypt.compare(password, user.password)

        if (match) {

            const token = jwt.sign({ id: user.id }, "secretkey");
            const other = user;
            res.cookie("accessToken", token, {
                httpOnly: true,
            }).json({ other: other });
        } else {

            return res.json({ error: "password invald" })

        }
    }
    catch (err) {
        console.log(err);
    }
})


router.post("/logout", (res,req) => {
    res.clearCookie("accessToken",{ 
        sameSite:"none",
        secure:true
    }).json({ success: "user logged out"});
})

module.exports = router;