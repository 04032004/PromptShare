
import { Schema , model , models } from "mongoose";

const userSchema = new Schema ({
       email: {
          type: String ,
          unique: [true , 'Email is already exists! '],
          required: [true  , 'Email is required! '],
         // match: [ /\S+@\S+\.\S+/, "Email is invalid" ]
       },
       username: {
        type: String,
        required: [true, 'Username is required!'],
    //   match: [/^(?=.{8,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
      image: {
          type : String,
         
      }

});

const User = models.User || model("User" , userSchema);   //look into to current model if its not ther then only create the new one

export default User;
