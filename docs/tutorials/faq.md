---
title: Frequently Asked Questions
description: Find answers to common questions about RecipeSage including importing from social media, search features, mobile compatibility, and more.
---

### How do I import recipes from Instagram, Facebook, YouTube, etc.

None of these platforms provide any sort of API that would allow RecipeSage to natively import content (and they block any type of scraper).

However, you _can import_ recipes from Instagram, Facebook, and any other text-based sources most often by either 1. taking a screenshot and importing it
via the [📖 photo import tool](./recipes/edit-recipe.md#scan-from-photo), or 2. copying the text and pasting it into the [📖 text import tool](./recipes/edit-recipe.md#autofill-from-text).

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

Check out the [📱 Discord](https://discord.gg/yCfzBft) server for more info!

### RecipeSage isn't working on my older device

It's very likely that your device is running an old browser version.

Unfortunately browser support is determined by the core framework that RecipeSage has been built on top of. There's no way for me to bring support to end-of-life browsers.

Due to this, it simply isn't possible for me to support very old version iOS (for example, original iPad devices).

If you're on an Android device, I'd recommend trying to install a newer version of Firefox, if possible. Since Firefox isn't tied to your Android version, you can usually grab the latest version of Firefox even though your Android version is very old.

### Why doesn't RecipeSage support sorting into cookbooks or folders?

Some users have mentioned the desire to categorize by cookbook. I designed RecipeSage based around the concept of labels/tags, rather than the folder/cookbook style.

A system built on labels/tags inherently support all of the features that "folders" or "cookbooks" do, with the exception that they don't allow hierarchy. This is intentional. I find that "folders" and "cookbooks" fall short for a recipe organization system, and result in so many side-effects that users don't usually consider initially but find painful later.

The label system within RecipeSage allows you to create many collections, cookbooks, styles, food groups (really, whatever you can think of!). If you're finding that your labels are growing out of control and want to organize them, I recommend using label categories to group similar types of label. You can also use symbols at the beginning of your label title (such as *) to keep specific labels at the top (labels are always sorted alphabetically). This isn't necessary except for particularly vast collections, though.

### I've lost all of my recipes!

It's very unlikely this is the case. I've received several emails like this over the years, and have never encountered a situation where someone has actually lost their recipes. It always comes down to one of the following, sorted in order of most common to least common:

1. You're logging into the wrong account. This is particularly common, particularly when using "Sign in with Google", since many people have multiple email addresses. Please use the "password reset" option on the login screen to send yourself a password reset email and try your other email addresses.
2. You mis-typed your email address when registering for your account. If you never received an automated "welcome" email, this is likely the case. Every new account receives a "welcome to recipesage" email after registering. If this is the case, and you've exhausted all of the other items on this list, please reach out to me via email.
3. You're experiencing a network connectivity issue and chose the "ignore" option on the connectivity error.
4. There's a bug or service outage for the app. This is fairly rare, but does happen. Please send me an email if you've exhausted all other items here, and are seeing errors!

### I'd love to help!

There are a few ways you can help.

1. Financially -- I always need support with the cost of hosting RecipeSage. If you're able, a [contribution](https://recipesage.com/#/contribute) would be immensly helpful, and goes directly to the cost of running & hosting RecipeSage.
2. Testing -- The [beta version of the site](https://beta.recipesage.com) has many new features that do not exist in the production version of the site. I always need help validating new functionality. Please feel free to switch to this version of the site if you're willing to deal with small bugs. Please report all bugs in the #bugs channel in [our Discord](https://discord.gg/yCfzBft).
3. Code -- If you'd like to contribute code, I always welcome pull requests. There are many issues labelled as "open for contributors" on Github. Please read the contributing guidelines in the Gtihub readme if you'd like to add code to RecipeSage.

### I have a business proposal

Thank you, but respectfully I'm not interested. I have a full-time job, and RecipeSage is a free open source personal project and will stay that way.

You're welcome to use RecipeSage under the personal licensing terms, or license RecipeSage for commercial use, but I'm not interested in making RecipeSage into a company.

