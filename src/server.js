import express from "express";
import { UserController } from "./controllers/user.controller.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const userController = new UserController();

// Essa parte chama o controller que vai salvar o usuário
app.post("/users", userController.handle);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
