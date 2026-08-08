---
title: Importing Data
description: Learn how to import your recipes into RecipeSage from various sources including Paprika, Recipe Keeper, CSV files, PDFs, images, and more.
---

The options documented here apply to the `Side Menu -> Settings -> Import Recipe Data` page and the subpages within.

## Supported Import Data Sources

RecipeSage supports importing the following import sources:

- [📖 JSON-LD](json-ld.md)
- [📖 Documents (.txt, .rtf, .odt, .docx, .md, .html)](textfiles.md)
- [📖 List of URLs](urls.md)
- [📖 PDFs](pdfs.md)
- [📖 Images](images.md)
- [📖 CSV Files](csv.md)
- [📖 Paprika](paprika.md)
- [📖 Mela](mela.md)
- [📖 Crouton](crouton.md)
- [📖 Recipe Keeper](recipe-keeper.md)
- [📖 Evernote](evernote.md)
- [📖 CopyMeThat](copymethat.md)
- [📖 Cookmate](cookmate.md)
- [📖 Pepperplate](pepperplate.md)
- [📖 Living Cookbook](livingcookbook.md)

If you have a file in a format not listed here, you're welcome to contact me and I can likely create an importer to support the format _as long as it's not listed in the unsupported import sources section below_.

### Unsupported Import Sources

RecipeSage does not support the following formats because they don't have a uniform internal structure, which means there's no way to predict the internal layout of the file and write an associated importer.

- Microsoft Word (`.doc`)
  - You can save your `.doc` files as `.docx` (or export to `.txt`) and use the documents importer
- Arbitrary JSON (`.json`) or XML (`.xml`) that did not come from a specific program
  - You will need to convert your content to JSON-LD (highly technical, not easy to do)
- Arbitrary CSV (`.csv`) that did not come from a specific program
  - You will need to adjust the column headers in your CSV file to adhere to the columns that RecipeSage recognizes

## Import Tracking and Management

All imports create a background job that allows you to track the progress of your import. You can view the status of your imports on the import page.

Each import automatically creates a new label in your account (named similarly to "import on 2025-01-15 16:39:13") that is applied to all recipes from that import. This allows you to easily:

- Identify which recipes came from a particular import
- Undo an import by going to the label management page and deleting the label along with all associated recipes

Please do not attempt any import more than once, or you'll end up with duplicate recipes. If an import does not work or results in an error, please contact me.

