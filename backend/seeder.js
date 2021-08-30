import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { readFileSync } from "fs";
import products from "./data/products.js";
import categories from "./data/categories.js";
import subCategories from "./data/subCategories.js";
import users from "./data/users.js";
import Category from "./models/categoryModel.js";
import SubCategory from "./models/subCategoryModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const updateCategory = async (categoryId, subCategoryId, subCategoryName) => {
  try {
    await Category.findByIdAndUpdate(categoryId, {
      $addToSet: {
        subCategories: { _id: subCategoryId, name: subCategoryName },
      },
    });

    console.log("succseeded".blue.inverse);
  } catch (err) {
    console.error(
      `Error accoured while trying to update the category, the error is: ${err}`
        .red.inverse
    );
  }
};

const importData = async () => {
  try {
    await Category.deleteMany();
    await SubCategory.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const imageCategory = () => {
      const updateCategoryImage = async (categoryId, image) => {
        try {
          console.log(`this is categoryId: ${categoryId}`.green.inverse);
          await Category.findByIdAndUpdate(categoryId, {
            image: image,
          });
        } catch (error) {
          console.error(
            `Error accoured while trying to update the category1, the error is: ${err}`
              .red.inverse
          );
        }
      };

      createdCategories.map(async (category) => {
        let imageData = null;

        categories.map(async (sample) => {
          if (sample.category === category.category) {
            console.log(`got here`.green.inverse);
            imageData = readFileSync(new URL(sample.image, import.meta.url));
            await updateCategoryImage(category._id, imageData);
          }
        });
        try {
        } catch (err) {
          console.error(
            `Error accoured while trying to update the category2, the error is: ${err}`
              .red.inverse
          );
        }
        // console.log(
        //   `this is image Data: ${imageData.toString("base64")}`.green.inverse
        // );
      });
    };

    const createdCategories = await Category.insertMany(categories);

    const sampleSubCategories = subCategories.map((subCategory) => {
      const mainCategory = createdCategories.find(
        (category) => subCategory.category === category.category
      );

      mainCategory
        ? (subCategory = { ...subCategory, category: mainCategory._id })
        : null;
      return subCategory;
    });

    const createdSubCategories = await SubCategory.insertMany(
      sampleSubCategories
    );

    const updateCategories = async () => {
      createdCategories.forEach(async (category) => {
        const categoryId = category._id.toString();

        createdSubCategories.forEach(async (subCategory) => {
          const subCategoryId = subCategory._id;
          const subCategoryName = subCategory.name;
          category._id.toString() === subCategory.category.toString()
            ? await updateCategory(categoryId, subCategoryId, subCategoryName)
            : null;
        });
      });
    };

    await updateCategories();

    // ******************* Users ***********************
    const uploadedUsers = await User.insertMany(users);
    const adminUserId = uploadedUsers[0]._id;
    console.log(`the admin user is: ${uploadedUsers[0]}`);

    // ******************* Items ***********************
    const imageProduct = () => {
      uploadedItems.map(async (product) => {
        sampleProducts.map(async (sample) => {
          if (
            sample.category === product.category &&
            sample.subCategory === product.subCategory &&
            sample.name === product.name &&
            sample.image.split("")[0] == "."
          ) {
            try {
              const imageData = readFileSync(
                new URL(sample.image, import.meta.url)
              );
              await Product.findByIdAndUpdate(product._id, {
                image: imageData,
              });
            } catch (error) {
              console.error(
                `An error occured while trying to update the Product: ${error.message}`
                  .red.inverse
              );
            }
          }
        });
      });
    };
    const sampleProducts = products.map((product) => {
      const productCategory = createdCategories.find(
        (category) => category.category === product.category
      );
      const subCategory = createdSubCategories.find(
        (subCategory) => subCategory.name === product.subCategory
      );

      const updatedProduct = {
        ...product,
        user: adminUserId,
        category: productCategory._id,
        subCategory: subCategory._id,
      };

      return updatedProduct;
    });

    console.log(
      `this is sample Products: ${sampleProducts.length}`.yellow.inverse
    );
    const uploadedItems = await Product.insertMany(sampleProducts);

    const itemsLoop = (id) => {
      const matchItems = [];

      uploadedItems.forEach((item) =>
        item.subCategory === id ? matchItems.push(item._id) : null
      );
      return matchItems;
    };

    const updateSubCategory = async (subCategoryId, items) => {
      try {
        await SubCategory.findByIdAndUpdate(subCategoryId, {
          $addToSet: { items: items },
        });
      } catch (err) {
        console.error(`${err.message}`.red.inverse);
      }
    };

    createdSubCategories.forEach((subCategory) => {
      const subCategoryId = subCategory._id;
      const items = itemsLoop(subCategoryId);
      if (items) {
        updateSubCategory(subCategoryId, items);
      }
    });
    imageCategory();
    imageProduct();
    Order.createCollection();

    console.log("The Import Completed me lord".blue.bold);
  } catch (error) {
    console.error(
      `Some Error accoured, The error is: ${error.message}`.red.bold
    );
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Category.deleteMany();
    await SubCategory.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    process.exit();
  } catch (error) {
    console.error(
      `Some Error accoured, The error is: ${error.message}`.red.bold
    );
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

// importData();
