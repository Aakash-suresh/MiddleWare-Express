const express = require('express')
const router = express.Router();

router.get('/',(request,response)=>{
    response.send("This is User Page...")
})

router.get('/:id',(request,response) =>{
    // response.write(`S.No : ${request.user.S_NO}\n`)
    response.write(`Service : ${request.user.Service}\n`)
    response.end(`Description : ${request.user.Service}`)
})

router.param('id', (request,response, next, id) =>{
     request.user = listOfService[id-1]
     next()
})

const listOfService = [
    { Service: "Web Development", description: "Build high-quality web applications using modern technologies" },
    { Service: "Mobile App Development", description: "Develop mobile applications for iOS and Android platforms" },
    { Service: "Backend Development", description: "Design and implement scalable and secure backend systems" },
    { Service: "Frontend Development", description: "Create dynamic and responsive user interfaces using popular frameworks" },
    { Service: "Data Engineering", description: "Extract, transform, and load large datasets to support business operations" },
    { Service: "AI Development", description: "Build intelligent systems using machine learning and other AI techniques" },
    { Service: "Research and Development", description: "Explore emerging technologies and innovate new solutions" },
    { Service: "Cloud Architecture", description: "Design and deploy scalable and reliable cloud infrastructure" }
];

router.route('/:id')
    .get((request,response)=>{  
        if(!getService)
        {
            response.status(404).send("Service not Found...")
        }
        else
        {
            request.user = getService
            response.send(`id is ${request.params.id}\n \nService : ${request.user.Service}\nDescription : ${request.user.description}`)
        }
    })
    .put((request,response) =>{
      response.send(`id is ${request.params.id}`)
    })
    .delete((request,response)=>{
        response.send(`Delete method on user page with id ${request.params.id}`)
    })

module.exports=router
