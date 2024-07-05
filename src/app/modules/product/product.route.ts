import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/products", ProductControllers.createProduct);
router.get("/products", ProductControllers.getAllProducts);
router.get("/products/:productId", ProductControllers.getSingleProduct);
router.put("/products/:productId", ProductControllers.updeteProduct);
router.delete("/products/:productId", ProductControllers.deletedProduct);

export const ProductRoutes = router;
