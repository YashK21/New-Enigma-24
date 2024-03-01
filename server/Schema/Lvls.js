const mongoose = require("mongoose")
const Lvls = new mongoose.Schema({
    Lvl:String
},
{
    collection:"LvlDetails"
})
mongoose.model("LvlDetails",Lvls)