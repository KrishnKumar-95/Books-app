const express = require("express")
const app = express();
const port = process.env.PORT || 3000;

require("./db/connection")
const User = require("./model/User");

app.get("/", (req, res) => {
    res.send("BooksApp")
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/:id", async(req, res) => {
    try {

        let id = req.params.id;
        const _ispaymentmade = true;
        const user_a = await User.findByIdAndUpdate( id, {ispaymentmade: _ispaymentmade} );

        let _id = user_a.referreduser;
        const user_b = await User.findById(_id)
        
        if (!user_a) {
            return res.status(404).send(`Data not found...`)
        } else {
            const earning_b = JSON.stringify(user_b.totalearnings);
            const earn_b = parseInt(earning_b) + 10;
            const update_b = await User.findByIdAndUpdate(_id,{totalearnings: earn_b})
            return res.send(user_b)
            await user_a.save();
            await update_b.save();
        }
    } catch (err) {
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
})