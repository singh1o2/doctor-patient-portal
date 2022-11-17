const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const admin = require('firebase-admin');
const key = require('./key.json');
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
        firstName:req.body.firstName,
        lastName:req.body.lastName,
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
    const doctor = db.collection('doctors').doc(req.params.id)
    res.send(await doctor.get().data());
});

app.post('/doctor/create',async(req,res)=>{
    const id  = req.body.email;
    const userJson = {
        email: req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        speciality:req.body.speciality,
        password: req.body.password,
        status:'N'
    }
    await db.collection('doctors').doc(id).set(userJson);
    res.send({msg:'User Added'})
});

app.get('/doctor/get',async(req,res)=>{
    const doctors = db.collection('doctors').get();
    let response = []
    (await doctors).forEach(doctor=>{
        response.push(doctor.data());
    });
    res.send(response);
});

app.get('/doctor/:id',async(req,res)=>{
    res.send(db.collection('doctors').doc(req.params.id).data());
});

app.listen(8080,()=>console.log('running'));
