import posts from "./tuits.js";
import * as tuitsDao from "../tuits/tuits-dao.js";
//let tuits = posts;

const createTuit = async (req, res) => {
  const newTuit = req.body;
  //newTuit._id = new Date().getTime() + "";
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  newTuit.retuits = 0;
  newTuit.replies = 0;
  //tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const findTuits = async (req, res) => {
  const newTuits = await tuitsDao.findTuits();
  res.json(newTuits);
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  //const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
  //tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
  //res.sendStatus(200);
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  //tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  //res.sendStatus(200);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
