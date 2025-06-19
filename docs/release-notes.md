---
title: Release Notes
---

Here you'll find a summary of the changes made in each version.

This list is kept mostly up-to-date but _may_ be missing the latest few versions. It also does not include beta releases. You can find a complete, more technical list [📱 here](https://github.com/julianpoy/RecipeSage/releases/), though this list is more suited for a read-through and is summarized.

## Version History

**v3.0.1 - v3.0.8** - June 2025
- Greatly improved recipe clipper functionality
- Fixed compatibility with older browsers such as iOS 15 and Android 12
- Added MyRecipeBox support to the CSV import

**v3.0.0** - June 2025
- Browser tab title is now updated when viewing a recipe to assist with keeping track when multiple tabs open at the same time
- Completely reworked the import/export system.
  - Larger file sizes are now supported for import
  - Large recipe collections no longer have issues while exporting, particularly to PDF format
  - Error handling is much improved
  - Users can now leave the website while an import/export takes place
  - Import progress is now displayed on the import/export page
  - Imports are now categorized under a label so that it's easy to find what was imported when, or delete/clean up an import
  - New file formats are supported
    - Added support for importing from a CSV file (PlanToEat & others)
    - Added support for importing from a Recipe Keeper export
    - Added support for importing from a zip file filled with images
    - Added support for importing from a zip file filled with text files
    - Added support for importing from a zip file filled with PDF files
    - Added support for importing from an Evernote export
    - Added support for importing from a list of URLs
- Offline functionality
  - All content is now stored in a local database in-browser, and kept up to date every time you edit a recipe
  - When offline, your recipe catalogue now remains searchable via a local search engine
  - Both network and server errors will fall back to offline cache, so that in the rare occurrance of server downtime your recipe collection remains available in a read-only state
- Pinned recipes and recipe completion (marking steps as complete) status will be remembered across app restarts
  - Recipe completion (marking steps as complete) will be erased after 3 days of inactivity for convenience
- Improved the tile view on small screens
- Fixed an issue where saving a recipe on the inbox page did not update the recipe view or the inbox page
- Improved all collaborator selection UIs within the app to make it easier to select friends
- Improved assistant message text box input experience
- Updated social info and contact information
- Added new languages
  - Basque
  - Japanese
  - Lithuanian
  - Polish
- Improved app performance all-around. All network calls take less time

**v2.15.1 - v2.15.12** - July 2024 to June 2025
- Improvements to URL import
- Improvements and fixes for cooking assistant
- Translations updates
- Fixed an issue where sign-in wouldn't work if user had both an email account and was using Google sign-in
- Fixed an issue where users would see the edit option on a meal plan even if they weren't the owner (it wouldn't save, just would be displayed)
- Contributors now get unlimited assistant messages
- Fixed an issue where the "unlabeled" filter didn't work
- Fixed an issue where the "my recipes" page scroll position would be lost after editing a recipe
- Fixed several issues with the webextension
- Small updates to shopping list categories
- Improved RTL support
- Improved OCR (scan from photo) support
- Fixed an issue with editing meal plan/shopping list collaborators when the user has no message threads

**v2.15.0** - July 17th 2024
- Introduced a cooking assistant
- Improved PDF scanning/import capabilities
- Compact view for recipe list page
- Added the ability to rename & edit collaborators for shopping lists
- Added the ability to rename & edit collaborators for meal plans
- Added Portugese language support (partial)
- Added Dutch language support (partial)
- Fixed an issue when looking at shared recipes, where the options menu would not show share/save prompts based on ownership

**v2.14.1 - v2.14.9** - March 2024 to July 2024
- Fix some issues with browser extensions not functioning correctly
- Fixed an issue causing meal plan bulk actions not to work correctly
- Improved MyCookBook/CookMate import compatibility

**v2.14.0** - March 10th, 2024
- Added the ability to import recipes from a text block, and from a PDF
- Added the option to sign in with a Google account
- A more disruptive error message will be displayed when a critical error occurs informing the user that the app may no longer work correctly
- Added Recipe Keeper as a supported import format
- Fixed a bug where the "eye" icons on the login fields would move to a separate line
- Added support for filtering by label when viewing other user's recipe collections via the profile page
- Added additional description and a warning for label categories
- Improved matching where users may not be linked to a Stripe payment if they weren't signed in at the time of payment, but did enter a matching email address
- Updated translations

**v2.13.6** - January 28th, 2024
- Updated translations

**v2.13.5** - January 23rd, 2024
- Fixed a bug where app was not working while offline

**v2.13.4** - January 20th, 2024
- Improved experience when selecting multiple labels throughout the app
- URL field will now be auto-focused when autofilling recipe from URL
- Fixed a bug where iCal links were not working
- Language options are now displayed in their native languages
- Updated translations

**v2.13.3** - January 16th, 2024
- Added refund policy
- Updated translations
- Added Danish locale

**v2.13.2** - January 18th, 2024
- Fixed a bug where some bonus feature expiry dates were not being extended properly and retroactively renewed any that had expired in the last 3 days since the v2.13.0 release.
- Updated translations

**v2.13.1** - January 16th, 2024
- Fixed a bug where newly created recipes would not show up in search results
- Fixed a bug where one-time contributions were broken
- Updated translations

**v2.13.0** - January 15th, 2024
- Added the ability to import recipes from a photo, either by uploading a photo of a recipe or by taking a photo with the app on your smartphone
- Revamped the behavior of the labelling system
    - Users can now assign labels to categories, and optionally require that certain label categories be filled out during recipe edit
    - Adding/removing labels now occurs within the recipe edit flow
    - Categories are shown separately from general "uncategorized" labels
- Moved the logout button to the settings page to free up more space in the sidemenu
- Added show/hide password button to logout and register fields
- Added the ability to specify common "household" shopping list items that should be excluded by default when adding a recipe to a shopping list
- Added settings sync. Application settings are synced between all devices
- Updated the behavior when a title conflict arises. Rather than renaming the recipe with an appended "(number)" at the end of the title, the app will now prompt the user
- Improved the accuracy and stability of the automatic recipe import tool, which should appear to users as better site support
- Added European Spanish translation
- Added French translation
- Added Russian translation
- Added Hungarian translation
- Fixed an issue where the rotation of the app was locked to portrait
- Fixed an issue where animations would appear jumpy/glitchy in Firefox

**v2.12.12** - December 30th, 2023
- Improves compatibility of the JSON-LD importer

**v2.12.11** - December 29th, 2023
- Fixes a bug where the "unlabeled" filter did not work

**v2.12.8 - v2.12.10** - December, 2023
- Fixes a bug where the embed code would not show up in the share dialogue for a recipe
- Fixes a bug where Greek characters would be displayed incorrectly on the print page
- More fixes for self-hosting the app on a subpath

**v2.12.5 - v2.12.7** - November, 2023
- Fixes for self-hosting the app on a subpath

**v2.12.4** - November 18th, 2023
- Fixes an issue where bottom of app would be covered if using the "pin recipe open" feature while the "enable split pane view" option was enabled.
- Improves visual clarity by only displaying recipe details once recipe data is ready to reduce pop-in

**v2.12.3** - November 16th, 2023
- Added a welcome video to the landing page so that users can preview what the app looks like

**v2.12.2** - November 12th, 2023
- Fixes a visual issue with the sharing visibility selector

**v2.12.1** - November 1st, 2023
- Added Hebrew translation
- Added support for RTL
- Fixes an issue where selecting multiple days would not work and/or cause a crash

**v2.12.0** - September 10th, 2023
- App will now respect browser/system font size selection
- Users can override the font size for the entire app on the settings page
- Added Ukrainian localization

**v2.11.1 - v2.11.5** - July - September, 2023
- Adds support for importing Cookmate files
- Fixes an issue where users could not browse friend's recipes
- Fixes an issue where search results would not return more than 10 results, and did not filter by label during search properly
- Fixes an issue with the contribute page

**v2.11.0** - July 17th, 2023
- Add a button to the account details page to delete your entire account, along with all associated data.
- Improvements to the share recipe modal
- Add ability to include friend's recipes in your My Recipes page. There are 4 possible states for this setting:
    - Never display friend's recipes in the My Recipes page
    - Display friend's recipes in the My Recipes page only while searching
    - Display friend's recipes in the My Recipes page only while browsing (not searching)
    - Always display friends recipes, both for searching and for browsing
- Large improvements to the search functionality. It's more accurate, and much faster.
- Add ability to export recipes as PDF in bulk (all of your recipes at once)
- Performance improvements

**v2.10.0** - February 22nd, 2023
- Add the ability to rate recipes on a 1-5 star scale, as well as filter by rating on the my recipes page
- Improve multi-language behavior when offline
- Add the ability to view all associated recipes for a label via the manage labels page
- Add the ability to delete a label including any attached recipes via the manage labels page
- Fixed an issue where you could not remove a meal plan from your meal plans list if you were a collaborator
- Improve the compatibility of the automatic import by URL feature
- Fixed some issues with drag/drop of meal plan items
- Fixed an issue where the split pane mode border was invisible
- Improve references to documentation
- Fixed some incorrect links pointing to the old documentation location

**v2.9.10** - December 10th, 2022
- Fixed an issue where images would be distorted on the "My Recipes" page if they were not square

**v2.9.9** - December 3rd, 2022
- Fixed an issue where adding a recipe from a meal plan shows "no ingredients"
- Fixed an issue where the share button on the My Profile page did not work

**v2.9.8** - November 30th, 2022
- Fixed an issue where public profiles would not load when logged out

**v2.9.7** - November 29th, 2022
- Fixed an issue where homescreen icon would be cut off on Android phones with some icon shapes
- Improved offline behavior when language setting is non-English

**v2.9.6** - November 25th, 2022
- Add ability to filter by "unlabeled" recipes
- Fixed issues with interface default language (English) not loading when offline
- Update application framework
- Fixed an issue where print previews were blank
- Fixed an issue where print did not respect current scale
- Increased font size in prints by default
- Fixed an issue where shared recipes required a login
- Fixed an issue where LCB/FDXZ/Pepperplate imports were not working
- Improved messaging on auth page when submitting a password reset request
- Fixed an issue where "match all labels" was always enabled regardless of interface setting
- Fixed an issue where searching for people would always result in "error"

**v2.9.5** - November 14th, 2022
- Move release notes to docs.recipesage.com
- Move tips, trips & tutorials to docs.recipesage.com
- Fix display issues when images are disabled

**v2.9.4** - November 11th, 2022
- Support for German thanks to @chschr on GitHub

**v2.9.3** - November 10th, 2022
- A fix for lag when entering the messages list page

**v2.9.2** - November 10th, 2022
- A fix for some issues with notifications

**v2.9.1** - November 8th, 2022
- Fix an issue where the recipe share modal would not show a link
- Fix an issue where tile spacing was incorrect when split-pane view was enabled
- Fix a typo in the language selection dialogue
- Trim source URL preview in cases where URL is very long

**v2.9.0** - September 6, 2022
- Multi-language support (languages themselves pending community support)
- Native support for Italian (credit to Martina, a member of the RecipeSage Discord)
- Improvements to recipe clipping, widened site support
- Add iCal/ICS sharing for meal plans
- Empty lines in instructions no longer cause empty instruction numbered bullets
- Update to app's underlying framework
- Countless bug fixes
- Better app-wide error handling
- Shopping list items are now marked as "completed" instead of deleted immediately

**v2.8.0** - October 25, 2021
- Support groups and categories in shopping list printout
- Add share target support (Web Share API), which will automatically trigger an autofill for that URL. Currently Android-only due to browser limitations.
- Fix shopping list item group collapse button color in dark mode
- Coming soon: Multi-language support

**v2.7.4** - October 24, 2021
- Framework & dependency updates
- Compatibility fixes for IOS 15
- Homepage tile display now uses a flexbox to display items centered rather than a grid

**v2.7.3** - April 25, 2021
- Fix release note dates for 2021
- Several fixes and improvements for the selfhosted version of RecipeSage

**v2.7.2** - February 28, 2021
- Swap JSON output format option out for JSON-LD as a standard
- Fix XML export, now adheres to XML standards
- Add new option to import JSON-LD files (you can now re-import your recipes after an export)

**v2.7.1** - February 23, 2021
- Small tweaks & bug fixes

**v2.7.0** - February 21, 2021
- Significant improvements to the automatic recipe clipper!
- Recipe clipper now supports a significantly increased number of sites.
- New "Add Image by URL" button on edit recipe page.
- Add support for headers within notes field
- Add shortcut buttons when scaling ingredients
- Cloning a recipe will now copy recipe labels
- Maintain aspect ratio when high res images feature is enabled
- Add button to login/register to add friend when viewing a user's public profile
- New "Add selected to shopping list" option for meal plan page. Select a set of days, and add everything on those days to a shopping list.
- Fixed a bug where long instruction headers would wrap in recipe printout
- Current recipe scale will be passed through to recipe printout
- Add a JSON-LD option to recipe embed tool
- Side note: RecipeSage has recently been fully open sourced! [📱 See here](https://github.com/julianpoy/recipesage).

**v2.6.2** - December 27, 2020
- Update internal version of RecipeClipper for improved site support

**v2.6.1** - December 26, 2020
- Fixed a bug where users would see a "you are not authorized for this action" message if viewing someone's public profile when not logged in
- Update internal version of RecipeClipper for improved site support

**v2.6.0** - December 21, 2020
- The sharing update! Added a new set of sharing & profile features
- Public profiles! You can now add friends within RecipeSage as part of your profile.
- Public & friends recipe sharing! You can add recipes, labels, or even your whole library to your profile, allowing friends and family to view your recipe collection.
- Fun fact - this is the largest update to RecipeSage to date.

**v2.5.4** - September 30, 2020
- Add ability to pin recipe open from the meal plan item details modal
- Add ability to pin all recipes open on selected days from meal plan page
- Fixed a bug where meal plan bulk delete would prompt you to copy
- Fixed a bug where text inputs would not work correctly on some IOS versions

**v2.5.3** - August 16, 2020
- Fixed a bug where scrolling through recipes would jump erratically, particularly on IOS devices

**v2.5.2** - July 4, 2020
- Fixed a bug where duplicating a meal plan day copies meal item titles only
- Add support for Chrome 84+ homescreen shortcuts (quick actions from homescreen/dock)
- Add support for Chrome 84+ wakelock (keep screen on while on recipe page)

**v2.5.1** - July 3, 2020
- Improved compatibility for automatic recipe import from URL

**v2.5.0** - July 2, 2020
- Complete meal planning revamp!
- Meal plan items have colors corresponding to their schedule
- Meal plan items are editable and draggable (drag available only on desktop devices)
- Days can be duplicated, moved, or deleted as a whole
- Multiple days in a row can be selected at once for day actions
- Add support for Chrome and Safari's new color-scheme meta tag - dark mode preference will now change scrollbar and other interface elements

**v2.4.8** - May 30, 2020
- Fixed a bug preventing app from caching items for offline use. Offline mode now works once again!

**v2.4.7** - May 23, 2020
- Fix several bugs related to multipart ingredient grouping such as: "1 cup plus 1 tablespoon flour" in the shopping list page
- Fix a bug where ingredient grouping would print "undefined"

**v2.4.6** - May 17, 2020
- Fix a bug causing print preview to flicker
- Improve application performance in Europe, Asia, Austrailia, and South America

**v2.4.5** - April 30, 2020
- Fix a bug where filtering by label would not refresh label listing
- Increase session expiry to 30 days
- Increase size of ingredients and instructions columns on large displays
- Parse and linkify links within recipe notes. Links to other recipes will open the recipe directly
- Fix null state icon for manage labels page
- Add null state for label select popover on my recipes page

**v2.4.4** - April 16, 2020
- Add FAQ page to tips tricks and tutorials page
- Fix recipe tutorial icon on tips tricks and tutorials page
- Automatically select last selected meal when adding meal plan items

**v2.4.3** - April 12, 2020
- Add download and install page to help users install on all platforms

**v2.4.2** - April 6, 2020
- Fix printing on newer Chrome versions and on Android browsers. Print preview page now opens in a new window
- Fix an issue where the day numbers on the meal plan calendar would have a linebreak on some browsers

**v2.4.1** - April 5, 2020
- Meal plan calendar - allow navigation to previous months, and to years in the future

**v2.4.0** - March 8, 2020
- New! Autofill recipe fields from any website URL directly from the new recipe page (beta)
- New! Pin multiple recipes open and quickly switch between them
- New! Shopping list automatic item categorization (toggleable)
- New! Improved shopping list grouping (toggleable) - The existing "group similar items" will now combine measurements, and has a simpler, collapsable structure for grouping items
- Clicking a recipe title listed at the bottom of the shopping list now opens the recipe rather than removing the items associated
- Improved search - words in recipe titles are now stemmed for better matching
- Improved welcome page - add login button to welcome text, improve sizing on smaller device screens, update screenshot for IOS devices
- Preserve recipe progress (checking off ingredients/instructions) when moving between pages within the app
- Preserve recipe scale when moving between pages within the app
- Several under-the-hood improvements

**v2.3.6** - February 10, 2020
- Current recipe scale will now carry over to the "Add recipe to shopping list" dialogue
- Fix an issue where fraction symbols would not scale correctly if there wasn't a space between then symbol and an adjacent number

**v2.3.5** - February 9, 2020
- Fixed an issue with the download & install menu for Chrome 77+

**v2.3.4** - February 9, 2020
- Added an option to hide recipe description on the My Recipes page

**v2.3.3** - February 8, 2020
- Added a welcome email for new users
- Fixed an issue for the clip tool where bad image urls would trigger an "Unexpected error..." message. Bad image urls now trigger a more descriptive message

**v2.3.2** - February 8, 2020
- Fixed an issue where duplicate labels could be created for a recipe
- Fixed an issue where label count would be incorrect

**v2.3.1** - February 7, 2020
- Fixed an issue where the app would show an extra status bar at the top
- Fixed an issue where scaling ingredients when adding to shopping list would appear in shopping list unscaled
- Fixed an issue where exporting in text format would not include recipe images
- Fixed an issue where shopping lists and meal plans would not display collaborators in some cases
- Performance improvements

**v2.3.0** - February 3, 2020
- Added label management page
- Rename a label across all of its recipes
- Delete a label from all associated recipes
- Merge two labels together across all of their recipes
- Alphabetical sorting in the label suggestion drop-down
- Fixed a bug where the undo button wouldn't work when removing shopping list items

**v2.2.9** - January 31, 2020
- Improve image caching

**v2.2.8** - January 28, 2020
- Reduce application network usage
- Fixed a bug where password reset would send a URL with an invalid domain
- Fixed an issue where the app may not open on old browsers (Chrome 49 and below)
- Improve Pepperplate import instructions and messaging

**v2.2.7** - January 25, 2020
- Large performance improvements, especially for users with large recipe databases
- Improved search performance, especially when filtering by label while searching
- Fixed a bug on Safari where adding labels to recipes via the suggestion dropdown was broken
- Fixed a bug where the label suggestion dropdown would stop appearing after adding a label via the keyboard+enter
- Fixed an issue where the page may refresh unexpectedly on some devices

**v2.2.6** - January 23, 2020
- Fix issues with importing Pepperplate labels (Pepperplate has partially discontinued support for multiple labels - this fix should bring those labels over for new imports)

**v2.2.5** - January 22, 2020
- Improve support for Pepperplate formatting
- Improve Pepperplate import speed
- Eliminate Pepperplate duplication issues
- Fix Pepperplate missing recipes issues
- Better Pepperplate import stability when Pepperplate is running slow

**v2.2.4** - January 21, 2020
- Add instructional modal for Pepperplate import

**v2.2.3** - January 4, 2020
- Ingredient scaling notation support for "2 cups + 1 tablespoon" (support for + and plus directly between measurements)

**v2.2.2** - January 3, 2020
- Fixed an issue where ctrl+click would not work for opening recipes from the "My Recipes" page
- Fixed an issue where meal planner would show items from previous years over items from current year
- Unicode fractions are now displayed and converted properly for recipe ingredient scaling

**v2.2.1** - December 21, 2019
- Fixed an issue where recipe search would not work on IOS 13 devices

**v2.2.0** - December 7, 2019
- Tile layout is now the default layout type - layout switching is available from the dropdown menu on the my recipes page
- WebExtension automatic field detection - [📱 view tutorial](https://recipesage.com/#/tips-tricks-tutorials)
- Recipe images can now be expanded by clicking the recipe image on the recipe details page
- Add support for multiple images - ([📱 contributor bonus](https://recipesage.com/#/contribute))
- Add support for high res images ([📱 contributor bonus](https://recipesage.com/#/contribute))
- Update contribution page
- Add more to the [📱 about me page](https://recipesage.com/#/about/details)
- Add dates to release notes
- Add social link to Discord channel
- Add remove button to delete image(s) from recipe on edit recipe page
- App page title is now more descriptive - more visible in search results
- Improve readability of welcome page by darkening welcome image
- Improve spacing on recipe details page to improve readability
- Fixed an issue where adding recipe to a meal plan was broken if no meal plans existed

**v2.1.2** - November 4, 2019
- Fixed an issue where uploading images over 8MB would cause the edit recipe page to break
- Fixed an issue where realtime actions in shopping lists/meal plans would be broken on Firefox and some versions of IOS Safari

**v2.1.1** - October 30, 2019
- Improved some styling bugs for IOS devices
- Added autocompletion, autocorrection and spellcheck to most inputs throughout the app
- Fixed a bug where text areas on the edit recipe page would not resize correctly in some situtations

**v2.1.0** - October 28, 2019
- Added global split pane view option in app settings
- Added my recipes tile/list layout view option in my recipes menu options
- More images and requests are cached for longer, resulting in better performance
- Added social media links to about pages
- Add some personal profile links to the about me page
- Added contact page
- Added account stats to account & credentials page
- Added 404 (not found) page for unrecognized URLs
- Added a reset preferences option in settings
- Meal plan and shopping list selection pages are now sorted by title
- Last message date is now shown on message thread selection page
- Fixed blank page when navigating to unrecognized URL within app
- Fixed an issue where search results would duplicate when submitting an "empty" search
- Fixed print button in shopping list options popover
- Fixed colors on IOS devices

**v2.0.2** - October 7, 2019
- Pepperplate import will now still work even if Pepperplate image servers are down (they are now almost always down, unfortunately)

**v2.0.1** - October 6, 2019
- Fixed several cases where app would crash due to old cached versions
- Added warning when leaving the edit recipe page with unsaved changes
- Added handler for old urls to redirect to new url format
- Fix thumbnail sizing
- Fix push notifications

**v2.0.0** - September 29, 2019
- Performance & under-the-hood improvements, including frontend framework revamp
- New theme options available in settings (dark & black oled). Defaults to system theme on supported browsers
- Multi-recipe selection now lives in the popover menu instead of long-press
- LivingCookbook import - FDX and FDXZ file format support

**v1.8.5** - September 18, 2019
- Fixed an issue preventing filtering by labels with special characters

**v1.8.4** - July 24, 2019
- Feature - Add shopping list print functionality
- Fix an issue where LCB import cookbook tagging can cause import to fail on older databases without cookbooks

**v1.8.3** - July 4, 2019
- Improve LCB import speed

**v1.8.2** - July 2, 2019
- Fixed an issue where pepperplate import would fail even with correct credentials

**v1.8.1** - June 8, 2019
- Message threads now appear with newest on top

**v1.8.0** - June 6, 2019
- Feature - remember/autoselect last used shopping list, or select the first by default if there is only 1
- Feature - remember/autoselect last used meal plan, or select the first by default if there is only 1
- Feature - added an option to filter by label intersection (selecting more labels = fewer results)
- Feature - added an option to exclude LCB images while importing
- Feature - external recipe sharing - share a link with anybody via any platform
- Feature - embeddable recipes - share your recipes by embedding them in a webpage
- Fix for a bug where messaging/sharing notifications would not be sent

**v1.7.9** - May 18, 2019
- Added an option to include stock LCB recipes in import
- Fix for LCB formats where some fields cause importer to break
- Fix for service worker update when paused for multitasking

**v1.7.8** - May 8, 2019
- Add support for importing LCB techniques
- Increase support for larger LCB files

**v1.7.7** - May 1, 2019
- Fixed a bug where adding recipe ingredients to shopping list was broken

**v1.7.6** - April 28, 2019
- Add new Paprika importer (Settings -> Import -> Import from Paprika)
- Add ability to temporarily check-off/mark ingredients or instructions
- Updated welcome screen text
- Fixed a bug where ingredient headers would appear in "add to shopping list"

**v1.7.5** - April 21, 2019
- Add support for headers in ingredients and instructions
- Add tutorial for adding headers
- Increase image file size limit
- Images over file size limit are now pre-resized in the browser
- Image upload selector now only shows image files by default
- Fixed an issue that prevented removing fields from recipe after creation
- Browser Extension: Fixed the sourceURL field
- Browser Extension: Add warning when user is about to lose unsaved changes

**v1.7.4** - April 16, 2019
- Browser Extension: Added support for Firefox
- Browser Extension: Better error messages for bad image URLs
- Added a "Download & Install" option to the sidebar for browsers that support PWAs (includes some desktop browsers!)

**v1.7.3** - April 15, 2019
- Added help page for new browser extension
- Fixed an issue where image quality would be reduced in some browsers
- Fixed an issue where selecting image for recipe would cause lag
- Added a warning for images that are over the size limit

**v1.7.2** - April 9, 2019
- Meal plan page now displays in side-by-side split view on wide screens
- Fixed a bug where warning for old browsers (at or below IE11) would not trigger

**v1.7.1** - April 9, 2019
- Added a thank-you message for contributors - thank you!
- Fixed a bug where clicking the contribute button would not launch
- Increased the recipe pagination buffer for the my recipes page to help with fast scrolling
- Fixed a bug where LCB images would not be imported for some file formats
- Vastly improved LCB import performance

**v1.7.0** - April 4, 2019
- Improved recipe bulk actions, now is less network-heavy
- Improved homepage navigation. Homepage only reloads recipes when needed - such as when a recipe or label is changed.
- Fixed a bug where homepage would show no recipes if a label was selected, but then deleted via the recipe details page.
- Added a better error message for when a user uploads an invalid file format for LCB import.
- Improved search: Added fuzzy matching - mistyped words will now show results, but at a lower ranking in the results with exact matches
- Improved search: Re-added support for searching in source, description, instructions, ingredients, and notes.
- Improved search: A match in the title will be heavily boosted, and a match in the source or description will be slightly boosted
- Added a warning for unsupported browsers
- Added the contribute page to the sidemenu!
- Added an action button to add recipe to meal plan from the recipe details page
- Recipe authoring page (edit, create) now shows preview of recipe image
- Added a tips, tricks and tutorials page to the about and support page
- Open recipes in new tab from recipe list: control + click or command + click on a recipe
- Fixed a bug where message thread text input would be slow on longer threads

**v1.6.4** - April 2, 2019
- Fixed a bug where the Living Cookbook importer would break for specific versions/formats of LCB databases

**v1.6.3** - March 28, 2019
- Added a filter to remove all default Living Cookbook recipes (recipes that shipped with Living Cookbook)

**v1.6.2** - March 26, 2019
- Fixed a bug where recipes would not be properly sorted

**v1.6.1** - March 26, 2019
- More large performance improvements for large and small recipe collections

**v1.6.0** - March 23, 2019
- Large performance improvements for large recipe collections
- Improved recipe search engine
- Improved the welcome experience for app features
- Added label toggles to recipe page as an option
- Fixed a bug where lcb import would fail due to null fields in some lcb formats
- Fixed a bug where duplicate labels could be created when using bulk actions
- Fixed an issue where source URLs without a preceeding http:// or https:// would not open their respective website by click

**v1.5.7** - March 6, 2019
- Large performance improvements for LCB import
- LCB import page warns user when file is too large

**v1.5.6** - March 4, 2019
- Performance improvements for label filter dialogue and for recipe details page

**v1.5.5** - March 3, 2019
- Fixed a bug where importing from LCB would create duplicate labels

**v1.5.4** - March 2, 2019
- Recipe bulk actions: press and hold a recipe for actions on multiple recipes at once
- New iconography for menus
- Better client-side error handling
- Fixed a bug that caused the meal plan delete button to be broken

**v1.5.3** - March 2, 2019
- Fixed a bug where "delete all recipes" would not work on extremely large recipe collections

**v1.5.2** - February 28, 2019
- Added "delete all recipes" option in settings under "danger zone"
- Fixed a bug where changing password would not dismiss loading bar

**v1.5.1** - February 26, 2019
- Fixed a bug where Living Cookbook import would fail
- Fixed a bug where recipe url would not show if no source was present
- Fixed a bug where Living Cookbook import would not include the cooking time field

**v1.5.0** - February 14, 2019
- Added LivingCookbook import option

**v1.4.11** - February 11, 2019
- Updated "My Recipes" welcome screen

**v1.4.10** - February 5, 2019
- Fixes a bug where Pepperplate import would fail due to updates to Pepperplate
- Adds a select/deselect all option to select ingredients component
- Disabled shopping list grouping by default
- Improved messaging styling
- Fixed a bug where messaging previews would be incorrect
- Search submit now dismisses keyboard
- Disabled autofill for form fields that have custom autofill

**v1.4.9** - January 28, 2019
- Fixes a bug where new visitors would be prompted to update
- Fixes a bug where account update would not verify email address
- Updated security for password reset - now forces a login on all devices signed into the account
- Improved API performance

**v1.4.8** - December 24, 2018
- Performance improvements for slow network conditions
- Fixed a bug on IOS where a white screen would be shown on launch

**v1.4.7** - December 22, 2018
- New welcome page
- More friendly login page
- Login page messages now appear as toasts
- Added a prompt for when updates are pending in background
- Fixed a bug where recipe export would throw an error

**v1.4.6** - December 17, 2018
- Fixed a bug where the print dialogue may freeze upon opening, or trigger the print dialogue directly

**v1.4.5** - December 16, 2018
- Fixed a bug where search would not update immediately after selecting a new sort option
- My Recipes popover now closes automatically after selection is made

**v1.4.4** - December 16, 2018
- Fixed a bug where search would return only a single result
- Search worker is now loaded from the main package enabling offline search

**v1.4.3** - December 15, 2018
- Greatly improved performance on My Recipes page by switching to VirtualScroll

**v1.4.2** - December 14, 2018
- Updated lunr (search) to 2.3.5

**v1.4.1** - December 13, 2018
- Fixed a bug where message threads would not sort

**v1.4.0** - December 12, 2018
- Added meal plan feature
- Improved recipe selection modal for shopping lists
- Improved item selection modal for shopping lists
- Fixed message autocorrect
- Message timestamps can now be accessed via press-and-hold
- Many, many under the hood improvements, including API rewrite

**v1.3.1** - August 26, 2018
- Fixed label duplication issue when navigating between views

**v1.3.0** - August 25, 2018
- Added shopping lists feature
- Added password reset (forgot password) functionality
- Added message timestamps
- Instant messaging now works on IOS devices

**v1.2.1** - July 15, 2018
- Fixed compatibility issues for devices without notification support

**v1.2.0** - July 7, 2018
- Added recipe printing
- Updated recipe details page layout. On large screens, ingredients and instructions now appear side-by-side. Improved readability of recipe details
- Fixed a bug where the welcome page would appear quickly during app launch if already logged in. The app now routes straight to the 'my recipes' page
- Fixed a bug where search results would flash quickly when returning to search results page
- Improved text area sizing for recipe edit/create page. Fields now resize with text instead of displaying a scrollbar

**v1.1.3** - June 20, 2018
- Log out now disables notifications and deletes session for security
- Notification permission prompt has been moved to messaging page
- Small performance improvements
- Removed misleading scrollbar from modal messages
- Recipe scale modal now accepts fraction input
- About and Support page is now visible when logged out
- Sessions are now valid for up to 7 days of inactivity instead of 3

**v1.1.2** - June 10, 2018
- Further improved application performance
- Recipes are cached for offline use, provided they have been opened before
- Images are cached for offline use, provided they have been opened before
- Better error handling for offline errors
- Improved welcome screen buttons. Better terminology and separate buttons
- Improved welcome screen image. Now loads image at size appropriate for device resolution
- Added welcome tab to sidebar when logged out
- Log Out now takes you to welcome screen
- Added update button to settings, allowing the user to manually trigger app update

**v1.1.1** - June 5, 2018
- Greatly improved application performance
- Reduced network data usage
- Asset/application caching
- Better update management

**v1.1.0** - June 3, 2018
- Messaging functionality
- Removed Recipes by Label page. You can find parallel functionality by using the recipe filter on the My Recipes page
- Added recipe count to label filter modal
- Added Welcome, About, Contribute, Release Notes, and About Me pages (text-only)
- Added Export page and export functionality
- Added quick actions to recipe items (slide to left)
- Delete confirmations now have red button to warn user
- Duplicate recipe titles are now renamed slightly (#)
- Clicking on recipe source URL now opens in new tab
- Improved recipe scale input. Now uses a modal
- Improved titles for sort options
- Improved import process. Now notifies you during import task, and warns if the task has failed
- Fixed a bug where label autocomplete would grow too large for screen when user had a large number of labels
- Fixed a bug where labels would duplicate when trying to delete them
- Label selection can now be done via the arrow keys and enter
- Fixed a bug in update notification
- Fixed a bug where users would receive multiple notifications
- Fixed a bug where log in page would not autofill credentials in Chrome
- Log in page email field now brings up email-type keyboard for mobile devices
- Better loading bar. No longer disrupts user experience
- Notes field now holds linebreaks
- Fixed a bug where recipe inbox count does not show in sidemenu
- Fixed a bug where recipe source would not be imported from pepperplate
- Fixed a bug where imported recipes with special characters wouldn't render correctly

**v1.0.7** - May 27, 2018
- Improved label selection
- Application now notifies user when a new update is available

**v1.0.6** - April 10, 2018
- Application preloading and speed improvements

**v1.0.5** - April 8, 2018
- Improved label selection on recipe page
- Improved recipe search
- Bug fixes

**v1.0.4** - April 4, 2018
- Fixed a navbar bug on the profile page

**v1.0.3** - April 1, 2018
- Fixed some issues with edit page
- Added profile page

**v1.0.2** - March 31, 2018
- Networking improvements

**v1.0.1** - March 30, 2018
- Added version number to sidemenu

**v1.0.0** - March 30, 2018
- Initial public release

**Pre-release versions**
- All beta & alpha versions

