import Fastify, { fastify } from 'fastify'

const fastify = Fastify({
    logger: true,
});

fastify.get('/' , async function(request , response){
    return {"hello" : "fastify"}
})

fastify.get('/user/:id' ,  async function(req, res){
    return {
       id : req.params.id
    };
})

let users = [];
fastify.get('/user/:id/:name' , async function handler(req, res){
    return {
        id : req.params.id,
        name : req.params.name
    }
})

// create
fastify.post('/add-user/:name' , async function handler(request , response){
    let username = req.params.name;
    users.push(username);
    return {"message": "Added user successfully to the list" , users}
})

// read
fastify.get('/show-user' , async function handler(request , response){
    return users;
})

// update 
fastify.put('/update/:oldUser/:newUser' , async function handler(request , response){
    let { oldUser , newUser} = req.params;
    let userIndex = users.findIndex( user => user === oldUser);

    if( userIndex == -1){
        return {"message" : "user not found"}
    }

     users[userIndex] = newUser;
     return {"message" : `the name has changed successfully ${newUser}`};

})

// delete 
fastify.delete('/delete/:username' , async function handler(request , response){
    let deleteUser = req.params.username;
   let indexToDelete = users.findIndex(user => user === deleteUser)

    if(indexToDelete == -1){
         return {"message":"user not found"}
    }

    users.splice(indexToDelete , 1);
    return {"message" : "user deleted successfully"}
})

try{
    await fastify.listen({port : 3000})
}catch(err){
    fastify.log.error(err)
    process.exit(1)
}
