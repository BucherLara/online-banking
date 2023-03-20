import { csrf } from "../../../lib/csrf";

const handler = (req, res) => {
  const { username, password } = req.body;
  
  if (username === "test" && password === "123456") {
    const sessionId = 1309;
    res.setHeader("Set-Cookie", `session=${sessionId}; Path=/; Max-Age=600`);
    res.status(200).send({ message: "logged in successfully" });
  } else {
    res.status(401).send({ message: "invalid credentials" });
  }
};

export default csrf(handler);
