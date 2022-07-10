const { Router } = require("express");

const router = Router();

const People = require("../model/People.js");

router.get("/", async (req, res) => {
  res.send("hola");
});

router.get("/people", async (req, res) => {
  const people = await People.find();
  return res.json(people);
});

router.post("/people", async (req, res) => {
  const { name, age } = req.body;
  await People.create({ name, age });
  return res.json({ status: 201 });
});

router.delete("/people/:id", async (req, res) => {
  const { id } = req.params;
  const died = await People.findByIdAndDelete(id);
  if (!died) return res.json({ status: 404 });
  return res.json({ status: 201 });
});

router.put("/people/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const modify = await People.findByIdAndUpdate(id, body, { new: true });
  if (!modify) return res.json({ status: 404 });
  return res.json({ status: 201 });
});

module.exports = router;
