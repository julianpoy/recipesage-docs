---
title: Creating & Editing
---

Creating a recipe and editing a recipe both happen using the same interface and generally act very similarly to each other.

## Creating a new recipe

<img className="screenshot" src="/img/edit-recipe.png"></img>

The create recipe page can be reached from the [📖 my recipes](./my-recipes.md) page by clicking the blue + button in the bottom right corner, as well as via the sidemenu.

Fill in the corresponding fields as you wish - only the title is required. After you're done, click the save button and it will be added to your collection.

To add an image to your recipe, click the image holder at the top. Your browser will prompt you to select a file.

For special formatting in the ingredients, instructions, or notes fields please see the [📖 formatting](./edit-recipe.md#formatting) section below.

You can add or remove labels from the recipe on this page. The documentation for creating labels is [📖 here](../labels/create.md).

### Import by URL

Importing by URL makes it easy to import almost any site into your recipe edit flow automatically.

When creating a new recipe (not available while editing an existing recipe), click the "autofill from URL" button and paste in a URL to a recipe.

Known limitations:

1. The target URL must contain only a single recipe. If it contains more than one, you'll get one of the recipes on the page or a combination of multiple.
2. Most sites will work, but some sites block the importer purposefully. Because of this, some sites will not work. You can get around sites with this limitation using the [📖 browser extension](../browser-extension.md).

### Import by Photo

You can take a photo of a recipe either in print form, or handwritten. RecipeSage will recognize any text it can see in the photo, and try to fill in the associated fields on your recipe.

To use this, open the new recipe page (not available while editing an existing recipe) and click the "scan from photo" button. On mobile devices, you'll be prompted to choose whether to take a photo, or whether to select an existing one. On desktop, you'll just see a file dialogue where you can select.

If taking a photo with your camera, it's recommended to have good lighting, and have the text in the photo be as square as possible. Screenshots also work great.

This feature is particularly useful for importing from other apps on your phone, such as Facebook or Instagram. Take a screenshot of the recipe as seen in the other app, and use this feature to scan the photo.

Known limitations:

1. Good lighting is really important to get a good quality output
2. This is intended to speed up the process of entering a recipe, but _will never_ be flawless. Please check the result, since the result can often contain inaccuracies.

## Editing a recipe

<img className="screenshot" src="/img/edit-recipe.png"></img>

The edit recipe page can be reached from the [📖 recipe details](./recipe-details.md) page by clicking the edit button at the bottom of the page, or by clicking the edit button in the top right options menu.

## Formatting

<img className="screenshot" src="/img/recipe-details-ingredients.png"></img>

Ingredients are divided by linebreaks, so have one per carriage return. Ingredient measurements will be automatically parsed, but as a general rule, use the format: `1 1/2 cup`. For a range, use the format: `1 to 2 cups`. This will help the scaling feature recognize your quantities as best as possible

Instructions are divided by linebreaks as well, so put each step on a different carriage return. Make sure not to have extra carriage returns in-between!

To add a header to your instructions or ingredients, put an open and close bracket at the ends of the line like this:

```
[The dough:]
1/2 cup water
[The sauce:]
1/8 cup sugar
```

