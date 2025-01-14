import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expneses";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;
