---
title: Importing Data
---

The options documented here apply to the `Side Menu -> Settings -> Import Recipe Data` page and the subpages within.

## Supported Import Data Sources

RecipeSage supports importing the following import sources:

- [📖 JSON-LD](json-ld.md)
- [📖 Pepperplate](pepperplate.md)
- [📖 Living Cookbook](livingcookbook.md)
- [📖 Paprika](paprika.md)
- [📖 Cookmate](cookmate.md)
- [📖 CopyMeThat](copymethat.md)
- [📖 Recipe Keeper](recipe-keeper.md)
- [📖 CSV Files](csv.md)
- [📖 Text Files](textfiles.md)
- [📖 List of URLs](urls.md)
- [📖 PDFs](pdfs.md)
- [📖 Images](images.md)
- [📖 Evernote](evernote.md)

If you have a file in a format not listed here, you're welcome to contact me and I can likely create an importer to support the format _as long as it's not listed in the unsupported import sources section below_.

### Unsupported Import Sources

RecipeSage does not support the following formats because they don't have a uniform internal structure, which means there's no way to predict the internal layout of the file and write an associated importer.

- Microsoft Word (`.doc` or `.docx`)
  - You can export your documents to .txt or .html files and use the associated import format
- Arbitrary JSON (`.json`) or XML (`.xml`) that did not come from a specific program
  - You will need to convert your content to JSON-LD (highly technical, not easy to do)

## Import Tracking and Management

All imports create a background job that allows you to track the progress of your import. You can view the status of your imports on the import page.

Each import automatically creates a new label in your account (named similarly to "import on 2025-01-15 16:39:13") that is applied to all recipes from that import. This allows you to easily:

- Identify which recipes came from a particular import
- Undo an import by going to the label management page and deleting the label along with all associated recipes

Please do not attempt any import more than once, or you'll end up with duplicate recipes. If an import does not work or results in an error, please contact me.

