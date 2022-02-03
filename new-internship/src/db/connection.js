const mongoose = require("mongoose")

const uri = `mongodb://localhost:27017/booksApp`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connected Successfully Krishn :)`);
}).catch((err) => {
    console.log(err);
})