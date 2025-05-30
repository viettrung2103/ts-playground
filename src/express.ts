import express ,{Request, Response} from "express";

const app = express();

const port = 3030

app.get("/", (request: Request, response: Response) => {
  response.send("Hello,Typescript with Express");
})

app.listen(port, () => console.log(`Server is running on port ${port}`))