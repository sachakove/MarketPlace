import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import SubCategory from "../models/subCategoryModel.js";

// @desc Fetch all Products
// @route GET /api/products
// @access Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    res.send(`An error occurred 1: ${error.message}`);
  }
};

// @desc Fetch one Product by ID
// @route GET /api/products/search/:keyword
// @access Public
export const getSearchProducts = async (req, res) => {
  const keyword = { name: { $regex: req.params.keywords, $options: "i" } };
  try {
    console.log(`here`);
    const products = await Product.find({ ...keyword });
    console.log(products);
    res.send(products);
  } catch (error) {
    res.send(`An error occurred: ${error.message}`);
  }
};

// @desc Fetch one Product by ID
// @route GET /api/products/:id
// @access Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.send(`An error occurred: ${error.message}`);
  }
};

// @desc Fetch many Products by ID
// @route GET /api/products/many
// @access Public
export const getProductsById = async (req, res) => {
  console.log(`this is req.body: ${req.body.ids}`);
  try {
    const items = await Product.find({ _id: req.body.ids });
    res.json(items);
  } catch (error) {
    console.log(`the error is : ${error.message}`);
  }
};

// @desc Fetch all items under same category id
// @route GET /api/products/bycategory/:categoryId
// @access Public
export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.categoryId });
    res.send(products);
  } catch (error) {
    res.send(
      `An error occurred while tried getProductsByCategory: ${error.message}`
    );
  }
};

// @desc Fetch all items under same subcategory id
// @route GET /api/products/bysubcategory/:subcategoryId
// @access Public
export const getProductsBySubCategory = async (req, res) => {
  try {
    const products = await Product.find({
      subCategory: req.params.subcategoryId,
    });
    res.send(products);
  } catch (error) {
    res.send(
      `An error occurred while tried getProductsBySubCategory: ${error.message}`
    );
  }
};

// @desc Fetch all Categories
// @route GET /api/products/categories/
// @access Public
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    // console.log(`categories: ${categories}`);
    return res.json(categories);
  } catch (error) {
    res.send(`An error occurred: ${error.message}`);
  }
};

export const getMainProducts = async (req, res) => {
  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  try {
    const mainProductsArray = [];
    const categories = await Category.find({});

    for (let i = 0; i < 3; i++) {
      const randomCategory = categories[getRandom(categories.length)];
      const subLengthNumber = getRandom(randomCategory.subCategories.length);
      const randomSubCategory = await SubCategory.findById(
        randomCategory.subCategories[subLengthNumber]._id
      );
      let chosenItems = [];

      for (let f = 0; f < 6; f++) {
        const itemId = randomSubCategory.items[f];
        const item = await Product.findById(itemId);
        chosenItems.push(item);
      }
      const mainProduct = {
        _id: i,
        category: randomCategory.category,
        subCategory: randomSubCategory.name,
        items: chosenItems,
      };
      mainProductsArray.push(mainProduct);
    }
    return res.json(mainProductsArray);
  } catch (error) {
    res.send(
      `An error occurred while tried getMainProducts : ${error.message}`
    );
  }
};

// @desc Fetch All subCategories
// @route GET /api/products/subcategories
// @access Public
export const getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({});
    res.json(subCategories);
  } catch (error) {
    res.send(
      `An error occurred while tried getSubCategories : ${error.message}`
    );
  }
};

export const getSubCategoriesById = async (req, res) => {
  try {
    const ids = req.body.ids;
    const subCategories = await SubCategory.find({ _id: ids });
    res.json(subCategories);
  } catch (error) {
    res.send(
      `An error occurred while tried getSubCategoriesById : ${error.message}`
    );
  }
};
