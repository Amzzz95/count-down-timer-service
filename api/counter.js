const counterController = require("../controller/counter");

export default function handler(req, res) {
  if (req.method === "GET") {
    counterController.read(req, res);
  } else if (req.method === "POST") {
    // Handle POST request for /api/posts
    // Create a new post
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
