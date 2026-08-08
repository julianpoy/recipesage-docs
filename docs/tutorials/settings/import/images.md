---
title: Importing From Images
description: Import recipes from images using OCR technology. Upload photos of recipe cards, cookbook pages, or handwritten recipes.
---

You can import recipes from image files (such as photos of recipe cards or cookbook pages).

**To import images:**
1. Add all your image files to a `.zip` archive (one recipe per image)
2. Upload the `.zip` file via this page

The importer will use optical character recognition (OCR) to extract text from each image and attempt to parse it as a recipe.

**Supported image formats:**
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`
- `.heic` / `.heif` (photos taken directly from newer iPhones)
- `.avif`

## Limits

- A single zip can contain up to **100 images per import**. If you have more than 100 recipes, split them across multiple zip files and run the import multiple times.
- Files inside the zip that are not in one of the supported image formats above will be ignored.

## Images that cannot be read automatically

Occasionally the text in an image cannot be parsed into a recipe. Those images are skipped rather than imported as empty recipes. The import job on the [Background Jobs](https://recipesage.com/app/settings/jobs) page reports how many were skipped, and a single unreadable image never prevents the rest of the batch from importing.

[https://recipesage.com/app/settings/import/images](https://recipesage.com/app/settings/import/images)

**Tip:** For best results, ensure images are clear, well-lit, and the text is legible. Blurry or low-quality images may not import accurately.

## Related Pages

- [Import Overview](./index.md) - See all available import options
- [Exporting Your Recipes](../export.md) - Learn how to backup and export your recipes
- [Organizing with Labels](../../labels/create.md) - Organize your imported recipes with labels
