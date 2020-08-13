const router = require('express').Router();

router.use('/user',require('./modules/users'));
// router.use('/user',(req,res) => {
//     console.log("inside the api");
    
// })
module.exports = router;