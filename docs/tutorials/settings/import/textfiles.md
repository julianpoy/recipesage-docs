---
title: Importing From Notes Apps & Documents
description: Import recipes from notes apps such as Apple Notes, Google Keep, Obsidian, Notion, Joplin, Bear, Logseq and Simplenote, or from documents such as Word and Google Docs. Upload a .zip archive containing .txt, .rtf, .odt, .docx, .md, .markdown, .html, .htm, or .org files.
---

You can import recipes from documents in any of the following formats:

- `.txt` (plain text)
- `.rtf` (Rich Text Format)
- `.odt` (OpenDocument Text)
- `.docx` (Microsoft Word)
- `.md` / `.markdown` (Markdown)
- `.html` / `.htm` (HTML)
- `.org` (Emacs Org-mode)

Most notes apps and word processors can export to one of these formats, so this importer also works for recipes you keep in a notes app. See [Exporting from notes apps](#exporting-from-notes-apps) below for steps for popular apps.

**Each document must contain exactly one recipe.** Every supported document in the zip is imported as a recipe, so only include notes that are recipes. A single zip archive can contain a mix of these formats, and documents can be inside folders.

**To import documents:**
1. Add all your documents to a `.zip` archive (any combination of the supported formats above)
2. Upload the `.zip` file via this page

The importer will process each document in the archive as a separate recipe and attempt to parse the ingredients and instructions.

## Creating a zip archive

- **Windows:** Select your files or folder, right-click, then choose Send to → Compressed (zipped) folder
- **Mac:** Select your files or folder, right-click, then choose Compress

## Exporting from notes apps

### Apple Notes

Markdown export requires iOS 26, iPadOS 26, or macOS Tahoe (26) or later. The Mac is the easiest way to export many notes at once.

1. On your Mac, open Notes and select the recipe notes you want to export
2. Choose File → Export as → Markdown and pick a folder to save them to
3. Zip that folder and upload it

On iPhone or iPad, you can export one note at a time via the Share button → Export as Markdown.

### Google Keep

1. Go to [Google Takeout](https://takeout.google.com)
2. Click "Deselect all", then select only Keep
3. Create the export and download the `.zip` file when it is ready
4. Upload the `.zip` file as-is

Takeout includes all of your Keep notes, so any notes that are not recipes will be imported too. You can remove those from the zip before uploading.

### Google Docs

1. In Google Drive, select the recipe documents (or the folder containing them)
2. Right-click and choose Download. Google Drive converts them to `.docx` and downloads a `.zip` file
3. Upload the `.zip` file as-is

### Microsoft Word

Zip your `.docx` files and upload the zip. If you have older `.doc` files, save them as `.docx` first.

### Obsidian

Your Obsidian vault is a regular folder on your computer. Zip the folder in your vault that contains your recipes and upload it. Obsidian's settings folder (`.obsidian`) and trash folder (`.trash`) are ignored automatically.

### Notion

1. Open the page or database that contains your recipes
2. Click the `•••` menu at the top right and choose Export
3. Choose "Markdown & CSV" and turn on "Include subpages"
4. Upload the downloaded `.zip` file as-is

If the downloaded `.zip` file contains another `.zip` file, unzip it first and upload the inner `.zip` file.

### Joplin

1. Right-click the notebook that contains your recipes and choose Export → MD - Markdown
2. Pick a folder to export to
3. Zip that folder and upload it

### Bear

1. Select your recipe notes, or right-click a tag in the sidebar
2. Choose Export and pick Markdown as the format
3. Zip the exported notes and upload them

### Logseq

1. Click the `•••` menu at the top right and choose Export graph → Export as standard Markdown
2. Unzip the export and remove the `journals` folder along with any pages that are not recipes
3. Zip the remaining pages and upload them

### Simplenote

1. In the Simplenote desktop app choose File → Export Notes, or in the web app go to Settings → Tools → Export notes
2. Upload the downloaded `.zip` file as-is

## Limits

- A single zip can contain up to **500 documents per import**. If you have more than 500 recipes, split them across multiple zip files and run the import multiple times.
- Files inside the zip with extensions other than those listed above will be ignored (image side-cars excepted, see below).
- Hidden files and folders (names starting with `.`) are ignored.

## Optional images

You can include an image alongside a recipe by giving it the same name as the document with an image extension, in the same folder. For example, alongside `lasagna.docx`, place `lasagna.png`, `lasagna.jpg`, or `lasagna.jpeg` in the same folder and it will be attached to the imported recipe.

## Documents that cannot be read automatically

Occasionally a document cannot be split into ingredients and instructions automatically. When that happens the document is still imported, with its full text kept in the recipe's notes field, its filename as the title, and any side-car image attached. These recipes are given the label `automatic import unformatted` so you can find them and tidy them up afterwards. The import job on the [Background Jobs](https://recipesage.com/app/settings/jobs) page reports how many recipes were imported this way.

[https://recipesage.com/app/settings/import/textfiles](https://recipesage.com/app/settings/import/textfiles)

## Related Pages

- [Import Overview](./index.md) - See all available import options
- [Exporting Your Recipes](../export.md) - Learn how to backup and export your recipes
- [Organizing with Labels](../../labels/create.md) - Organize your imported recipes with labels
