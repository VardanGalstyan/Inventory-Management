import { Router } from "express";
import { createProduct, getProducts } from "../controllers/products";

const router = Router();

router.get("/", getProducts);
router.get("/", createProduct);

export default router;
