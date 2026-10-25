---
title: Importing From JSON-LD
description: Import recipes from JSON-LD files into RecipeSage, including exports from Tandoor Recipes. JSON-LD is a standardized format supported by many recipe management applications.
---

If your recipe program supports exporting to JSON-LD format, you can import those files directly into RecipeSage by uploading them via the import page.

[https://recipesage.com/app/settings/import/json-ld](https://recipesage.com/app/settings/import/json-ld)

**Please note** that not all files ending in `.json` are JSON-LD files, since `.json` is a very generic file format that comes in many shapes. Your file must be specifically a JSON-LD export from a recipe application.

## Exporting from Tandoor

Tandoor Recipes can export your recipes in a format this importer reads.

1. In Tandoor, open Settings and choose Export
2. Set the type to "Recipesage"
3. Choose All Recipes, or pick the recipes you want to export
4. Click Export, then download the `.json` file when it is ready
5. Upload the `.json` file via this page

Tandoor does not include images, keywords, or source URLs in this export, so those will not come across.

## Related Pages

- [Import Overview](./index.md) - See all available import options
- [Exporting Your Recipes](../export.md) - Learn how to backup and export your recipes
- [Organizing with Labels](../../labels/create.md) - Organize your imported recipes with labels
