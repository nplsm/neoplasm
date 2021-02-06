db = new Mongo().getDB("neoplasm")

db.createUser({
  user: "neoplasm",
  pwd: "peepee",
  roles: [
    { role: "readWrite", db: "neoplasm" },
    { role: "dbAdmin", db: "neoplasm" },
  ],
})
