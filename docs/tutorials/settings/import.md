---
title: Importing Data
---

The options documented here apply to the `Side Menu -> Settings -> Import Recipe Data` page and the subpages within.

## Supported Import Data Sources

RecipeSage supports importing the following import sources:

- [📖 JSON-LD](#importing-from-a-json-ld-file)
- [📖 Pepperplate](#importing-from-pepperplate)
- [📖 Living Cookbook](#importing-from-a-living-cookbook-export)
- [📖 Paprika](#importing-from-a-paprika-export)
- [📖 Cookmate](#importing-from-a-cookmate-export)
- [📖 CopyMeThat](#importing-from-a-copymethat-export)
- [📖 Recipe Keeper](#importing-from-a-recipe-keeper-export)
- [📖 CSV Files](#importing-from-a-csv-file)
- [📖 Text Files](#importing-from-text-files)
- [📖 List of URLs](#importing-from-a-list-of-urls)
- [📖 PDFs](#importing-from-pdfs)
- [📖 Images](#importing-from-images)
- [📖 Evernote](#importing-from-an-evernote-export)

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

## Importing From a JSON-LD File

JSON-LD files are a specific file format that several different recipe softwares export.

If your recipe program supports exporting to JSON-LD format, you can import that via this page.

**Please note** that not all files ending in `.json` are JSON-LD, since `.json` is a very generic file format that comes in many shapes.

[https://recipesage.com/#/settings/import/json-ld](https://recipesage.com/#/settings/import/json-ld)

## Importing From Pepperplate

You can import recipes directly from Pepperplate by entering your account details. You don't need to have an active Pepperplate subscription to perform the import, only your account email and password.

Please note that uploading files from a Pepperplate export is not supported, since they do not include structured metadata.

[https://recipesage.com/#/settings/import/pepperplate](https://recipesage.com/#/settings/import/pepperplate)

## Importing From a Living Cookbook Export

You can import recipes exported by Living Cookbook as long as you have one of the following file formats:

- LCB (`.lcb`)
- FDX (`.fdx`)
- FDXZ (`.fdxz`)

The options listed on the import page are best left as default.

Please note that importing from Living Cookbook can take a long time. Please do not attempt the import more than once, otherwise you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me.

[https://recipesage.com/#/settings/import/livingcookbook](https://recipesage.com/#/settings/import/livingcookbook)

## Importing From a Paprika Export

You can import recipes exported by Paprika (valid export files end in `.paprikarecipes`) by uploading them via this page.

[https://recipesage.com/#/settings/import/paprika](https://recipesage.com/#/settings/import/paprika)

## Importing From a Cookmate Export

You can import recipes exported by Cookmate (valid export files end in `.mcb`) by uploading them via this page.

[https://recipesage.com/#/settings/import/cookmate](https://recipesage.com/#/settings/import/cookmate)

## Importing From a CopyMeThat Export

You can import recipes exported by CopyMeThat by uploading a `.zip` file exported from CopyMeThat via the "HTML" option.

**Please note** that not all `.zip` files are CopyMeThat exports. Only `.zip` files that were specifically exported from CopyMeThat are compatible with this importer.

[https://recipesage.com/#/settings/import/copymethat](https://recipesage.com/#/settings/import/copymethat)

## Importing From a Recipe Keeper Export

You can import recipes exported by Recipe Keeper by uploading a `.zip` file exported from the Recipe Keeper app.

**Please note** that not all `.zip` files are Recipe Keeper exports. Only `.zip` files that were specifically exported from Recipe Keeper are compatible with this importer.

[https://recipesage.com/#/settings/import/recipe-keeper](https://recipesage.com/#/settings/import/recipe-keeper)

## Importing From a CSV File

You can import recipes from a CSV (comma-separated values) file. This format is commonly used by recipe management applications like PlanToEat, MyRecipeBox, and others.

**To import from a CSV file:**
1. Export your recipes from your recipe management application as a CSV file
2. Upload the CSV file via this page

The importer will automatically detect and map the column names from your export.

[https://recipesage.com/#/settings/import/csv](https://recipesage.com/#/settings/import/csv)

### Creating Your Own CSV File

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

## Importing From Text Files

You can import recipes from plain text (`.txt`) files. Each text file should contain one recipe.

**To import text files:**
1. Add all your text files to a `.zip` archive
2. Upload the `.zip` file via this page

The importer will process each text file in the archive as a separate recipe.

[https://recipesage.com/#/settings/import/textfiles](https://recipesage.com/#/settings/import/textfiles)

## Importing From a List of URLs

You can import recipes by providing a list of recipe URLs. RecipeSage will attempt to fetch and parse each URL using the autoclip functionality.

**To import from URLs:**
1. Enter each recipe URL on its own separate line
2. Only URLs starting with `http://` or `https://` are supported

**Important notes:**
- Some URLs may be unreachable or unparseable and will not be imported
- The quality of imported recipes depends on how well the source website is structured
- Consider contributing if your file contains a large number of recipes or images

[https://recipesage.com/#/settings/import/urls](https://recipesage.com/#/settings/import/urls)

## Importing From PDFs

You can import recipes from PDF files. Each PDF file should contain one recipe.

**To import PDFs:**
1. Add all your PDF files to a `.zip` archive (one recipe per PDF)
2. Upload the `.zip` file via this page

The importer will extract text from each PDF and attempt to parse it as a recipe.

[https://recipesage.com/#/settings/import/pdfs](https://recipesage.com/#/settings/import/pdfs)

## Importing From Images

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

[https://recipesage.com/#/settings/import/images](https://recipesage.com/#/settings/import/images)

## Importing From an Evernote Export

You can import recipes from an Evernote export file (`.enex` format).

**To export from Evernote:**
1. In Evernote, select the notes containing your recipes
2. Choose File → Export Notes
3. Save as `.enex` format

**To import into RecipeSage:**
1. Upload the `.enex` file via this page

The importer will process each note in the Evernote export as a separate recipe.

[https://recipesage.com/#/settings/import/enex](https://recipesage.com/#/settings/import/enex)

