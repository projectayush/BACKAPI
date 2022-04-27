const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});



//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(req.body.password, user.password)
 
     
if(user && validPassword){
  res.status(200).json(user)
}

else{
  res.status(404).json("invalid email or password");
}
  
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;













// 1 //LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     !user && res.status(404).json("user not found");

//     const validPassword = await bcrypt.compare(req.body.password, user.password)
//     !validPassword && res.status(400).json("wrong password")

//     res.status(200).json(user)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// module.exports = router;



















// 2 LOGIN
// router.post("/log", async (req, res) => {
//   try {

//     const user = await User.findOne({ email: req.body.email });
//     const password = await User.findOne({ email: req.body.password });
//     const validPassword = await bcrypt.compare(password);



//     if (!user && !validPassword) {
//         res.status(200);
//         console.log("Email Id Pass Matched.")
//     } else
//         res.status(401).send("-- Invalid password --");

//   } catch (error) {
//     res.status(400).send("-- Invalid login detail --");
//   }
// });









// code 1   outer.post("/login", async (req, res) => {


//   try {


//       const user = await User.findOne({ email: req.body.email });
//       const isMatch = await bcrypt.compare(req.body.password, user.password)



//       if (isMatch) {
//           const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, jwtKey, { expiresIn: "1d" });
//           res.status(200).send({ user, token });
//           console.log("Email Id Pass Matched.")
//       } else
//           res.status(401).send("-- Invalid password --");
//   } catch (error) {
//       res.status(400).send("-- Invalid login detail --");
//   }


// })







    // const user = await User.findOne({ email: req.body.email });
    // const password = await User.findOne({ email: req.body.password });
    // const validPassword = await bcrypt.compare(password)
    // if(!user && !validPassword){
    //   res.status(404).json("user not found");
    // }

    // //  && res.status(400).json("wrong password")
   

    // res.status(200).json(user)








    // const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// //REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     //generate new password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     //create new user
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPassword,
//     });
// if(newUser){
//  //save user and respond
//   const user = await newUser.save();
//   res.status(200).json(user);
// }
// else{
//   res.status(400).json("error")
// }
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });










// //LOGIN 3 
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     !user && res.status(404).json("user not found");
    
//     const validPassword = await bcrypt.compare(req.body.password, user.password)
//     !validPassword && res.status(400).json("wrong password")
    
//     res.status(200).json(user)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// module.exports = router;