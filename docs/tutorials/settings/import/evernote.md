---
title: Importing From Evernote
description: Import recipes from Evernote notes using .enex export files. Transfer your saved recipes to RecipeSage.
---

You can import recipes from an Evernote export file (`.enex` format).

**To export from Evernote:**
1. In Evernote, select the notes containing your recipes
2. Choose File → Export Notes
3. Save as `.enex` format

**To import into RecipeSage:**
1. Upload the `.enex` file via this page

The importer will process each note in the Evernote export as a separate recipe.

## Notes that cannot be read automatically

Evernote notes vary a lot in how they are structured, and occasionally a note cannot be split into ingredients and instructions automatically. When that happens the note is still imported, with its original text kept in the recipe's notes field along with any images, title, tags and source URL. These recipes are given the label `automatic import unformatted` so you can find them and tidy them up afterwards.

The import job on the [Background Jobs](https://recipesage.com/app/settings/jobs) page reports how many recipes were imported this way.

[https://recipesage.com/app/settings/import/enex](https://recipesage.com/app/settings/import/enex)

## Related Pages

- [Import Overview](./index.md) - See all available import options
- [Exporting Your Recipes](../export.md) - Learn how to backup and export your recipes
- [Organizing with Labels](../../labels/create.md) - Organize your imported recipes with labels
