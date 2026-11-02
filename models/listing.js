const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
       type: String,
       default:"https://www.istockphoto.com/photos/landscape-scenery",
       set:(v) => v==="" ? "https://www.istockphoto.com/photos/landscape-scenery"
       :v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;