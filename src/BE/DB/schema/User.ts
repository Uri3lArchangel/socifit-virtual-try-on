import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type:String,
        lowercase:true
    },

    isEmailVerified:{
        type:Boolean,
        default:false
    },
    token:{
       type:{
        value:String,
        expires:Number,
        nextRequestable:Number
       } 
    },
    subscription:{
        type:{
            subscriptionStart:{
                type:Number,
                default:Date.now(),
                required:true
            },
            plan:{
                type:String,
                required:true,
                default:"free"
            },
            expireAt:{
                type:Number,
                required:true,
                default:(Date.now() + (31 * 24 * 3600 *1000))
            },
            isActive:{
                type:Boolean,
                required:true,
                default:true
            }
        },
        required:true
        
    },
    
   
})


let User = models.Users || model('Users',UserSchema)

export default User