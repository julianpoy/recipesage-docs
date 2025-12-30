---
title: Importing From CSV Files
description: Import recipes from CSV files. Supports PlanToEat, MyRecipeBox, and custom CSV files. Learn about supported column formats.
---

You can import recipes from a CSV (comma-separated values) file. This format is commonly used by recipe management applications like PlanToEat, MyRecipeBox, and others, as well as spreadsheet programs.

**To import from a CSV file:**
1. Export your recipes from your recipe management application as a CSV file
2. Upload the CSV file via this page

The importer will automatically detect and map the column names from your export.

[https://recipesage.com/#/settings/import/csv](https://recipesage.com/#/settings/import/csv)

## Creating Your Own CSV File

If you want to create your own CSV file from scratch, you can use the following column names. The importer will recognize these columns regardless of capitalization (e.g., "Title", "TITLE", "Active Time", "activeTime", and "ActiveTime" will all work).

**Recipe Information:**
- **title** or **name** - The recipe title (required)
- **description** - A brief description of the recipe
- **yield**, **serves**, **servings**, or **quantity** - How many servings the recipe makes
- **active time**, **prep time**, or **preparation time** - Preparation time
- **total time** or **time** - Total cooking time
- **ingredients** - List of ingredients
- **instructions**, **directions**, or **steps** - Cooking instructions
- **url** - Source URL for the recipe
- **source** - Where the recipe came from
- **notes** - Additional notes
- **nutrition** - Nutritional information
- **video** or **videos** - Video URLs
- **rating** - Recipe rating (numeric)

**Images:**
- **image url**, **image urls**, **image**, **images**, **photos**, **photo url**, **photo urls**, or **original picture** - Image URLs (can include multiple URLs)

**Labels/Tags:**
- **labels** or **label** - Recipe labels
- **tags** or **tag** - Recipe tags
- **categories** or **category** - Recipe categories
- **course** or **courses** - Course type (appetizer, main, dessert, etc.)
- **cuisine** or **cuisines** - Cuisine type

At minimum, your CSV file must include a column for the recipe title or name. All other fields are optional.
