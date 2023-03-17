// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { username, password } = req.body;
  if (username === "test" && password === "123456") {
    const sessionId = 1309;
    res.setHeader("Set-Cookie", `session=${sessionId}; Path=/; Max-Age=600`);
    res.status(200).send({ message: "logged in successfully" });
  } else {
    res.status(401).send({ message: "invalid credentials" });
  }
}
