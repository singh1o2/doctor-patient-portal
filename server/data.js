const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const admin = require('firebase-admin');
const key = require('../key.json');
admin.initializeApp({
    credential:admin.credential.cert(key)
});

const db = admin.firestore();
db.settings({ignoreUndefinedProperties:true});
app.use(express.json());


app.post('/doctor/create',async(req,res)=>{
    const id  = req.body.email;
    const userJson = {
        email: req.body.email,
        firstName:req.body.name,
        speciality:req.body.speciality,
        password: req.body.password,
        status:'N'
    }
    await db.collection('doctors').doc(id).set(userJson);
    res.send({msg:'User Added'})
});

app.get('/doctor/all',async(req,res)=>{
    const doctors = await db.collection('doctors').get();
    let response = []
    doctors.forEach(doctor=>{
        response.push(doctor.data());
    });
    res.send(response);
});

app.get('/doctor/:id',async(req,res)=>{
    const doctor = await db.collection('doctors').doc(req.params.id).get();
    res.send(doctor.data());
});

app.put('/doctor/update/:id',async(req,res)=>{
    const doctor = db.collection('doctors').doc(req.params.id)
    doctor.update({
        status: req.body.status
    })
    res.send({msg:'Status updated'})
});


app.post('/customer/create',async(req,res)=>{
    const id  = req.body.email;
    const userJson = {
        email: req.body.email,
        name:req.body.name,
        location:req.body.location,
    }
    await db.collection('customers').doc(id).set(userJson);
    res.send({msg:'User Added'})
});

app.get('/customer/get',async(req,res)=>{
    const customers = db.collection('customers').get();
    let response = []
    (await customers).forEach(doctor=>{
        response.push(doctor.data());
    });
    res.send(customers);
});

app.get('/customer/:id',async(req,res)=>{
    res.send(db.collection('customers').doc(req.params.id).data());
});

app.listen(8080,()=>console.log('running'));
