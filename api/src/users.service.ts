import { Router } from "express";
import { ObjectId } from "mongodb";
import { db } from './db';

export const router = Router();
const usersColl = "users";

router.get("/", (req, res) => {
    db.collection(usersColl).find({}).toArray().then(documents => {
        res.status(200).send(documents);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.get("/:id", (req, res) => {
    db.collection(usersColl).findOne({ _id: new ObjectId(req.params.id) }).then(documents => {
        res.status(200).send(documents);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.post("/", (req, res) => {
    db.collection(usersColl).insertOne(req.body).then(({ insertedId }) => {
        res.status(200).send(insertedId);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
    db.collection(usersColl).updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    ).then(document => {
        res.status(200).send(document);
    }).catch(err => {
        res.status(500).send(err);
    });
});