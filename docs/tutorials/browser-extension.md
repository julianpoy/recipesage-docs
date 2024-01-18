---
title: Clip Tool Browser Extension
---

The RecipeSage clip tool browser extension provides a very quick way to import recipes from the web.

Although it's possible to import recipes using the [📖 import by url](./recipes/edit-recipe.md#import-by-url) feature, there are a number of known limitations, but also requires more interaction. The clip tool browser extension is convenient and makes it really quick and easy to clip a recipe from the web directly into your RecipeSage account.

## Installation

<img className="screenshot" src="/img/webextension-on-rs.png"></img>

Adding the RecipeSage browser extension allows you to quickly select text from a webpage and save recipes directly to your account via the handy clip tool. You can trigger the clip tool on most websites to grab text and import recipes into your collection.

To install the RecipeSage browser extension, you'll need to be using a browser that supports WebExtensions.
At the time of writing, this includes Firefox and Google Chrome.

If you're using Google Chrome, [📱 click here](https://chrome.google.com/webstore/detail/oepplnnfceidfaaacjpdpobnjkcpgcpo).
If you're using Firefox, [📱 click here](https://addons.mozilla.org/en-US/firefox/addon/recipesage/).

## Signing In and Getting Started

<img className="screenshot" src="/img/webextension-login.png"></img>

After installing the extension, you'll notice a new icon next to your navbar as pictured above. The first time you click that icon, you'll be prompted to sign in to your RecipeSage account with your RecipeSage credentials.
You'll then be shown a short tutorial, and the clip tool will open on the current page. After this, clicking the RecipeSage icon will launch the clip tool immediately.

Note: If you don't have a RecipeSage account, you'll need to create one (see "Register" in the sidebar).
Note: The clip tool cannot be activated on certain websites, such as browser settings pages and websites with certain security policies.

## Using the Clip Tool

<img className="screenshot" src="/img/webextension-body.png"></img>

This is the clip tool. It allows you to quickly select text from a webpage and save recipes directly to your account.

To use it, highlight some text on the page using your mouse cursor, then press the button next to the desired field.
The text you've selected will be copied into that field, where you can edit or refine the text.

To snip an image from the page, the process is slightly different - right click an image on the page, and select the "Snip Image" option. The image source URL will be copied to the image URL field.

After you're done filling in the desired fields, press the "Save" button. A popup notification will let you know if the recipe saved successfully or not. If the recipe saved successfully, you'll receive a popup with a link to open the recipe in the full view.

Note: Only the title field is required.
Note: Not all images will be snippable. If you're having trouble with an image, try creating your recipe first, then edit the recipe on RecipeSage.com and add the image afterwards.
Note: The clip tool is draggable. Click and hold on the icon in the upper left corner to move it anywhere within the page.

## Auto Field Detection (AutoClipping)

<img className="screenshot" src="/img/webextension-body-autoclipped.png"></img>

This is what the clip tool looks like when automatic field detection is enabled. To enable automatic field detection, check the box at the top of the click tool and reload the page. Then re-open the clip tool.

When auto field detection is enabled, the clip tool will do it's best to find recognized fields within the page content. When it detects corresponding content, it will automatically fill in the associated field.

This isn't perfect, unfortunately. Since every website is different, there is no "standard" way to recognize recipe content. The clip tool does it's best to find common fields and naming conventions, but will sometimes get it wrong.

If the clip tool gets a field wrong, you can always select a different block of text on the page and hit the snip button next to that field. The field will then be overwritten with your selection.

