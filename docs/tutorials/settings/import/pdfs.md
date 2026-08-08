---
title: Importing From PDFs
description: Import recipes from PDF files using text extraction. Upload a .zip archive of PDF files to transfer your recipes.
---

You can import recipes from PDF files. Each PDF file should contain one recipe.

**To import PDFs:**
1. Add all your PDF files to a `.zip` archive (one recipe per PDF)
2. Upload the `.zip` file via this page

The importer will extract text from each PDF and attempt to parse it as a recipe.

## Limits

- A single zip can contain up to **100 PDFs per import**. If you have more than 100 recipes, split them across multiple zip files and run the import multiple times.
- Files inside the zip that are not `.pdf` will be ignored (image side-cars excepted, see below).

## Optional images

You can include an image alongside a recipe by giving it the same filename as the PDF plus an image extension. For example, alongside `lasagna.pdf`, place `lasagna.pdf.png`, `lasagna.pdf.jpg`, or `lasagna.pdf.jpeg` in the same zip and it will be attached to the imported recipe.

## PDFs that cannot be read automatically

Occasionally a PDF cannot be parsed into a recipe. Those PDFs are skipped rather than imported as empty recipes. The import job on the [Background Jobs](https://recipesage.com/app/settings/jobs) page reports how many were skipped, and a single unreadable PDF never prevents the rest of the batch from importing.

[https://recipesage.com/app/settings/import/pdfs](https://recipesage.com/app/settings/import/pdfs)

**Note:** The quality of the import depends on how well the text can be extracted from the PDF. Scanned PDFs or PDFs with complex layouts may not import as cleanly.

## Related Pages

- [Import Overview](./index.md) - See all available import options
- [Exporting Your Recipes](../export.md) - Learn how to backup and export your recipes
- [Organizing with Labels](../../labels/create.md) - Organize your imported recipes with labels
