const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r= await axios.put(
       'https://api.chatengine.io/users/',
       {username : usernamae, secret :username, first_name: username},
       {headers:{"private-key" :"c8c7c9bf-3546-4912-b29c-9aceb5ebaebd"}}
    )

  } catch (e) {
    
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);