db = new Mongo().getDB("items")

db.createUser({
  user: "items",
  pwd: "peepee",
  roles: [
    {
      role: "readWrite",
      db: "items",
    },
  ],
})
