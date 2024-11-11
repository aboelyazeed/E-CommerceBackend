const express = require("express");

const {
  createSubCategory,
  getSubCategories,
  getSubCategory,
} = require("../services/subCategoryService");
const {
  createSubCategoryValidator,
} = require("../utils/validators/subCategoryValidator");

const router = express.Router();

router
  .route("/")
  .post(createSubCategoryValidator, createSubCategory)
  .get(getSubCategories);
router.route("/:id").get(getSubCategory);

module.exports = router;
