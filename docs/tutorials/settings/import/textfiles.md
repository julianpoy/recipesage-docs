---
title: Importing From Documents
description: Import recipes from documents. Upload a .zip archive containing .txt, .rtf, .odt, .docx, .md, .markdown, .html, .htm, or .org files to transfer multiple recipes at once.
---

You can import recipes from documents in any of the following formats:

- `.txt` (plain text)
- `.rtf` (Rich Text Format)
- `.odt` (OpenDocument Text)
- `.docx` (Microsoft Word)
- `.md` / `.markdown` (Markdown)
- `.html` / `.htm` (HTML)
- `.org` (Emacs Org-mode)

**Each document must contain exactly one recipe.** A single zip archive can contain a mix of these formats.

**To import documents:**
1. Add all your documents to a `.zip` archive (any combination of the supported formats above)
2. Upload the `.zip` file via this page

The importer will process each document in the archive as a separate recipe and attempt to parse the ingredients and instructions.

## Limits

- A single zip can contain up to **500 documents per import**. If you have more than 500 recipes, split them across multiple zip files and run the import multiple times.
- Files inside the zip with extensions other than those listed above will be ignored (image side-cars excepted, see below).

## Optional images

You can include an image alongside a recipe by giving it the same filename as the document plus an image extension. For example, alongside `lasagna.docx`, place `lasagna.docx.png`, `lasagna.docx.jpg`, or `lasagna.docx.jpeg` in the same zip and it will be attached to the imported recipe.

## Documents that cannot be read automatically

Occasionally a document cannot be split into ingredients and instructions automatically. When that happens the document is still imported, with its full text kept in the recipe's notes field, its filename as the title, and any side-car image attached. These recipes are given the label `automatic import unformatted` so you can find them and tidy them up afterwards. The import job on the [Background Jobs](https://recipesage.com/app/settings/jobs) page reports how many recipes were imported this way.

[https://recipesage.com/app/settings/import/textfiles](https://recipesage.com/app/settings/import/textfiles)

## Related Pages

- [Import Overview](./index.md) - See all available import options
- [Exporting Your Recipes](../export.md) - Learn how to backup and export your recipes
- [Organizing with Labels](../../labels/create.md) - Organize your imported recipes with labels
