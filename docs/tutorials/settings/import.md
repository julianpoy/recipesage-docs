---
title: Importing Data
---

The options documented here apply to the `Side Menu -> Settings -> Import Recipe Data` page and the subpages withit.

# Supported Import Data Sources

RecipeSage supports importing the following import sources:

- [📖 JSON-LD](#importing-from-a-json-ld-file)
- [📖 Pepperplate](#importing-from-pepperplate)
- [📖 Living Cookbook](#importing-from-a-living-cookbook-export)
- [📖 Paprika](#importing-from-a-paprika-export)
- [📖 Cookmate](#importing-from-a-cookmate-export)

If you have a file in a format not listed here, you're welcome to contact me and I can likely create an importer to support the format _as long as it's not listed in the unsupported import sources section below_.

## Unsupported Import Sources

RecipeSage does not support the following formats because they don't have any structural metadata, which means there's no way to tell what parts of the file are ingredients, instructions, yield, total time, title, etc. or do not have a standard format.

- Plain Text (`.txt`)
- PDF (`.pdf`)
- Microsoft Word (`.doc` or `.docx`)
- Arbitrary JSON (`.json`) that did not come from a specific program
- Arbitrary XML (`.xml`) that did not come from a specific program

# Importing From a JSON-LD File

JSON-LD files are a specific file format that several different recipe softwares export.

If your recipe program supports exporting to JSON-LD format, you can import that via this page.

**Please note** that not all files ending in `.json` are JSON-LD, since `.json` is a very generic file format that comes in many shapes.

Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me.

# Importing From Pepperplate

You can import recipes directly from Pepperplate by entering your account details. You don't need to have an active Pepperplate subscription to perform the import, only your account email and password.

Please note that uploading files from a Pepperplate export is not supported, since they do not include structured metadata.

Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me.

# Importing From a Living Cookbook Export

You can import recipes exported by Living Cookbook as long as you have one of the following file formats:

- LCB (`.lcb`)
- FDX (`.fdx`)
- FDXZ (`.fdxz`)

The options listed on the import page are best left as default.

Please note that importing from Living Cookbook can take a long time. Please do not attempt the import more than once, otherwise you'll end up with duplicate recipes.

If the import does not work, or results in an error, please contact me.

# Importing From a Paprika Export

You can import recipes exported by Paprika by uploading them via this page.

Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me.

# Importing From a Cookmate Export

You can import recipes exported by Cookmate by uploading them via this page.

Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me.

