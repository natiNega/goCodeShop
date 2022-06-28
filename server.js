import express from "express";
import * as fsp from "fs/promises";
import mongoose from "mongoose";
// import dotenv from "dotenv";
// import http from "http";
// import translations from "./translations.json";
// const Products = mongoose.model("Products", {
//   title: String,
//   completed: Boolean,
// });
const Products = mongoose.model("Product", {
  title: String,
  price: Number,
  description: String,
  category: String,
  Image: String,
  rating: { rate: Number, count: Number },
});

const app = express();
app.use(express.json());

// const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// const Cat = mongoose.model("Cat", { name: String });

// mongoose
//   .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`)
//   .then(() => {
//     app.listen(8000);
//   });

// function readMyFile(readMyFile) {
//   //read the name form fild "en.txt" array and insert to data
//   fsp.readFile(`./${readMyFile}`, "utf-8").then((data) => {
//     fsp
//       .readFile("./translations.json")

//       //read all the array and insert to "array"
//       .then((array) => {
//         //converter the string array to json
//         const json = JSON.parse(array);

//         //we Compare between
//         const findItem = json.find((item) => item.en === data);
//         if (findItem) {
//           fsp.writeFile("./he.txt", findItem.he);
//         }
//       });
//   });
// }

app.get("/products", (req, res) => {
  const { title } = req.query;
  Products.find().then((product) => {
    const filteredproducts = title
      ? product.filter((data) =>
          data.title.toLowerCase().includes(title.toLowerCase())
        )
      : product;

    res.send(filteredproducts);
  });
});

// creat function express and return listen to 8000

// bring all the data from the serves
// app.get("/products", (req, res) => {
//   fsp.readFile(`./products.json`, "utf-8").then((data) => {
//     const array = JSON.parse(data);
//     res.send(array);
//   });
// });

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  Products.findById(id)
    .then((product) => {
      res.send(product);
    })
    .catch((e) => res.send("ERROR!!!!!!!!!!!!!!!"));
});

// function getMaxId(arr) {
//   const ids = arr.map((item) => {
//     return item.id;
//   });
//   const max = Math.max(...ids);
//   return max;
// }

app.post("/products", (req, res) => {
  const { title, price, category } = req.body;

  Products.insertMany([
    {
      title,
      price,
      category,
      completed: false,
    },
  ]).then((data) => {
    res.send(data);
  });
});

app.patch("/products/:id", (req, res) => {
  const { id } = req.params;

  Products.findByIdAndUpdate(id, req.body)
    .then((products) => res.send(products))
    .catch((e) => res.send("ERRORRRRR!!!!!!"));
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  Products.findByIdAndRemove(id)
    .then((product) => res.send(product))
    .catch((e) => res.send("ERRRORRRR!"));
});

// creat HTTP server and listen on port 8000 for reqests
// http
//   .createServer((request, response) => {
//     //
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     readMyFile("en.txt");

//     response.end("Hello World\n");
//   })
//   .listen(8000);

// //print URL for accessing
// console.log("Server running at http://127.0.0.1:8000/");

// writeMyFile("./he.txt");
mongoose.connect("mongodb://localhost:27017/goCodeShop").then(() => {
  app.listen(8000);
});
