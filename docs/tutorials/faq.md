---
title: Frequently Asked Questions
---

### How do I import recipes from Instagram, Facebook, YouTube, etc.

None of these platforms provide any sort of API that would allow RecipeSage to natively import content (and they block any type of scraper).

However, you _can import_ recipes from Instagram, Facebook, and any other text-based sources most often by either 1. taking a screenshot and importing it
via the [📖 image import tool](../recipes/edit-recipe.md#autofill-from-image), or 2. copying the text and pasting it into the [📖 text import tool](../recipes/edit-recipe.md#autofill-from-text).

There's really no way for me to write an importer for video-based content, unfortunately.

### My search results include results that don't match the search

The RecipeSage search tool returns results that are as "close" to your match as possible, but also includes misspellings and similar words.
Searches will return matches with the exact search text further up in the results list.


### Is RecipeSage compatible with IOS and Android?

Yep! You can use RecipeSage in the browser on your mobile device, or install it to your device.
See our install instructions here: [📱 Download & Install](https://recipesage.com/#/install).


### Is RecipeSage a business?

No - it's an open source project that I develop in my free time. You can read more about what I do at work on the [📱 about page](https://recipesage.com/#/about/details).
My wife also helps with some of the social media outreach and tutorials. She's awesome!
All contributions go into hosting costs, as well as making RecipeSage a better platform.


### What happens if you decide to just "stop hosting RecipeSage"? I'm worried about my data.

Although I have no plans to stop hosting RecipeSage, this is an understandable fear with any web-based platform.
First, you can always export your data at any time in a number of different formats.
Second, you can always transition to your own self-hosted instance if you're technically savvy (see the selfhost question below)
Third, RecipeSage is open source which means that in reality RecipeSage won't "stop existing", even if I were to get hit by a bus.


### Can I selfhost my own instance of RecipeSage?

Yes, for personal, private, non-commercial use only. You can find all of the resources to do that here:
[📱 RecipeSage Self Host Repository](https://github.com/julianpoy/recipesage-selfhost)


### Is RecipeSage Open Source?

Yes! Here are some of the repositories that host the components that power RecipeSage:

- [📱 The main RecipeSage repository](https://github.com/julianpoy/recipesage)
- [📱 A collection of docker files for running your own personal/private copy of RecipeSage](https://github.com/julianpoy/recipesage-selfhost)
- [📱 The recipe clipper for the automatic recipe clipping function](https://github.com/julianpoy/recipeclipper)
- [📱 The ingredient/instruction classifier that improves automatic recipe import results](https://github.com/julianpoy/ingredient-instruction-classifier)

Check out the [📱 Discord](https://recipesage.com/#/about/contact) server for more info!

### RecipeSage isn't working on my older device

It's very likely that your device is running an old browser version.

Unfortunately browser support is determined by the core framework that RecipeSage has been built on top of. There's no way for me to bring support to end-of-life browsers.

I'd recommend trying to install a newer version of Firefox or Chrome, if possible.

