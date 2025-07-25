const passport = require("passport");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");




const login = async (req, res, next) => {
  response.status(200).json({
    success: { message: "User logged in." },
  });
};

const localLogin = async (req, res , next) => {

   passport.authenticate("local",(err,user,info) => {
    if(err){
        return next(err);
    }

    if (!user){
        return res.status(401).json({
            error:{message:"No user detected try again."},
        });
    }
    req.login(user, (err) =>{
        if (err){
            return next(err)
        }
 const userCopy ={...req.user._doc};
 userCopy.password = undefined;

 console.log(userCopy);

 res.status(200).json({
    success: {message: "Success...withing local authentication"},
    data:{user: userCopy},
    statusCode: 200,
 });
})
})
};

const register = async (req, res, next) => {
    const {firstName, lastName, userName, password} = req.body;
    console.log(req.body);
    
try{
    const newUser= new User ({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        googleId: "",
     
    });
await newUser.save();

req.login(newUser, (err) =>{
  if (err){
    return next(err);
  }
  newUser.password = undefined;

  return res.status(201).json({
    success:{message: "New User is created"},
    data:{newUser},
    sttusCode: 201,

});
})
} catch(error) {
    return res.status(500).json({
        error: {message: "Internal Server error"},
        statusCode:500,
    });
}
};
const logout = async(req, res,next) => {
 req.logout((err) => {
    if (err){
        return next(err);
    }
    req.session.destroy((err) =>{
        if (err){
            return next(err);
        }
    })
    res.clearCookie("connect.sid");
    return res.status(200).json({
        success: {message: "User is logged out."},
        statusCode: 200,
    });
})
};     
module.exports = {register, login , logout, localLogin}; 