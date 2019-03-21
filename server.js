const express = require("express");

const app = express();

app.get("/", (res, req) => res.send("Goodbye"));

app.get("/dont", (res, req) => res.send("Dont do this "));
