const router = require('express').Router();
const users = [{id : '1',name:'naga',age:'30'},
       {id : '2',name:'abhishek',age:'30'}]


router.use((req,res,next) => {
    console.log(`getting request`);
    next();    
},(req,res,next) => {
    if(req.get('token')=== 'jwttoken'){
        next();
    }else{
      //  res.sendStatus(404);
      next(401);
    }
});
router.get('/',(req,res) => {
    res.status(200).send(users);
})
router.post('/',(req,res) => {
    const user = users.find((user)=>{
      return user.id === req.body.id;  
    });
    if(user){
        res.status(200).send('User is alrady exist')
    }
    else{
        users.push(req.body);
        res.status(201).send('User is created Successfully')
    }

})

 module.exports = router;
