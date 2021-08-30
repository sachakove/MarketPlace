import express from "express";

import {
  getProducts,
  getProductById,
  getCategories,
  getMainProducts,
  getSubCategories,
  getSubCategoriesById,
  getProductsByCategory,
  getProductsById,
  getProductsBySubCategory,
  getSearchProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/bycategory/:categoryId", getProductsByCategory);

router.get("/bysubcategory/:subcategoryId", getProductsBySubCategory);

router.get("/categories", getCategories);

router.get("/subcategories", getSubCategories);

router.get("/mainproducts", getMainProducts);

router.get("/search/:keywords", getSearchProducts);

router.get("/subcategories/id", getSubCategoriesById);

router.get("/many", getProductsById);

router.get("/:id", getProductById);

export default router;
