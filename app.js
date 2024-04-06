// require('sequelize/types/utils');
const {sequelize, user,company}= require('./models');
const express = require('express');
const cors = require('cors');
const { where } = require('sequelize');
const App = express();

App.use(cors());
App.use(express.json());


App.post('/user', async(req,res)=>{  // user/login
    console.log(req.body);
    const {name, email, phone,role,age,description,password,companyName}= req.body;
    
try {
    const users= await user.create({name, email, phone,role,age,description,password,companyName});
    return res.json(users);
    
} catch (err) {
 console.error(err);
 return res.status(400).json(err.message);    
}
});

App.get('/user', async(req,res)=>{
    try {
        const users= await user.findAll();
        return res.json(users);
        
    } catch (err) {
      console.error(err.message); 
      return res.status(400).json(err.message);       
    }
});
App.get('/user/:id', async(req,res)=>{
    const id= req.params.id;
    try {
        const users= await user.findOne({where:{id},
        });
        return res.json(users);
        
    } catch (err) {
      console.error(err.message); 
      return res.status(400).json(err.message);       
    }
});

App.put('/user/:id', async(req,res)=>{
    const id= req.params.id;
    const {name,email, phone, role,age,description,password,companyName}= req.body;
    try {
        
        const users= await user.findOne({where:{id},});
        users.name = name;
        users.email= email;
        users.phone= phone;
        users.role= role;
        users.age= age;
        users.description= description;
        users.password= password;
        users.companyName= companyName;

        await users.save();
        console.log(users); 
        return res.json(users);
        
    } catch (err) {
        console.error(err);
        return res.status(400).json(err.message);  
    }
})

App.delete('/user/:id', async(req,res)=>{
    const id = req.params.id;
    try {
        const users= await user.findOne({where :{id}});
        await users.destroy();
        return res.json({message:`${users.name} was deleted`});
        
    } catch (err) {
           console.error(err);
           return res.status(400).json(err);        
    }
});         
                                 // copmany 
App.post('/company', async(req,res)=>{
    const {compName}= req.body;
    
    
try {
    const users= await company.create({compName});
    return res.json(users);
    
} catch (err) {
 console.error(err);
 return res.status(400).json(err.message);    
}
});                                 

App.get('/company', async(req,res)=>{
    try {
       const users= await company.findAll();
       return res.json(users);

    } catch (err) {
       console.error(err);
       return res.status(400).json(err);  
    }
});

App.put('/company/:id', async(req, res)=>{
    const id= req.params.id;
    const compName= req.body.compName;

    try {
     const users = await company.findOne({where :{id}});
      
     users.compName= compName;
     await users.save();
     console.log(users); 
     return res.json(users);

    } catch (err) {
        console.error(err.message);
        return res.status(400).json(err);        
    }
});

App.delete('/company/:id', async(req, res)=>{
    const id = req.params.id;

    try {
        const users= await company.findOne({where :{id}});
        await users.destroy();
        return res.json({message:`${users.compName} was deleted`});
        
    } catch (err) {
           console.error(err);
           return res.status(400).json(err);        
    }
});

// App.delete('/users/:name', async(req,res)=>{

//     const name= 
//     try {
        
//     } catch (err) {
//         console.error.message;
//         res.status(400).json(err);
        
//     }

// });
const port = process.env.PORT|| 3002;

sequelize.authenticate().then(()=>{ 
    console.log('Database connected');
    App.listen(port, async()=>{
        console.log('server running on port 3002...');
       // await sequelize.sync({force: true});    
    });
    
})
