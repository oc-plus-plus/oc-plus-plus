# Changelog 

All notable changes to this project will be documented in this file.    
Detailed changes can see in the [repository log].

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

### Note regarding sources
Entries accompanied by a reference link indicate code borrowed or adapted from external sources.  
Entries without a reference link were developed exclusively within the [batumibiz/oc4](https://github.com/batumibiz/oc4) repository.


## [Unreleased]

### Added
- Emulation of `GLOB_BRACE` for Alpine/musl environments:  
  introduced a custom `oc_glob()` helper function to emulate native glob functionality.
- [#14857](https://github.com/opencart/opencart/pull/14857), [#14858](https://github.com/opencart/opencart/pull/14858), [#14859](https://github.com/opencart/opencart/pull/14859) - Add manufacturer filter
- The `date_added` field has been added to the product form

### Changed
- Updated dependencies.
- Refactored the codebase to replace all `glob()` calls using the `GLOB_BRACE` flag with `oc_glob()` emulator to ensure compatibility with Alpine Linux and other musl-based environments where `GLOB_BRACE` is unavailable.
- [0a8b25a](https://github.com/opencart/opencart/commit/0a8b25aaedae97e1b21784263527941448724693) - Added some additional form text.
- [8996eb3](https://github.com/opencart/opencart/commit/8996eb371620c3c7a453872d39a3a815562690f3) - `partially used` - Improved `admin/controller/marketplace/installer.php`.
- [#14753](https://github.com/opencart/opencart/pull/14753) - Retrieve more in depth files from extension directory for permission.
- [062ba0e](https://github.com/opencart/opencart/commit/062ba0ee243cc707b51b95e56b69b7f07cda5f7f), [85e8ddb](https://github.com/opencart/opencart/commit/85e8ddb82916cc48a4dcb30fcfcd4a1a9ea9add0) - `partially used` - Updated language methods.
- [#14790](https://github.com/opencart/opencart/pull/14790) - Updated `catalog/language/en-gb/default.php`, added `text_all`.
- [#14820](https://github.com/opencart/opencart/pull/14820) - Event list: always allow for viewing event details.
- [#14818](https://github.com/opencart/opencart/pull/14818) - Safest one just in case the product options are empty.
- [#14780](https://github.com/opencart/opencart/pull/14780) - Admin Filter Improvements.
- [#14891](https://github.com/opencart/opencart/pull/14891) - To collect cache files, do it only if the random has fallen to the cleanup.
- Removed unnecessary dividing lines in forms.
- Improved Category and Product search for the Admin panel.
- Reduced the size of the "Delete" buttons on the 'Links' tab of the product form.

### Removed
- `aws/aws-sdk-php` package as unused.
- [d342547](https://github.com/opencart/opencart/commit/d34254714d6d08995851f8fec2ea58987ff2e0ae) - `upload/system/helper/filter.php` as unused.

### Fixed
- [#14746](https://github.com/opencart/opencart/issues/14746) - Various bugs with `sku`, `upc`, `ean`, `jan`, `isbn`, `mpn`.
- [#15185](https://github.com/opencart/opencart/pull/15185) - Fix viewing embedded Youtube video.
- [#14740](https://github.com/opencart/opencart/pull/14740) - Renamed total function as they had an incorrect name.
- [#14736](https://github.com/opencart/opencart/pull/14736) - Fix disabled products design same as other table lists.
- [#14739](https://github.com/opencart/opencart/issues/14739) - After creating multiple folders, the root directory images are not displayed.
- [#14744](https://github.com/opencart/opencart/issues/14744) - BUG in product settlement.
- [#14731](https://github.com/opencart/opencart/issues/14731) - In additional Stores Cookie Policy is not selectable.
- [#14770](https://github.com/opencart/opencart/issues/14770) - Incorrect glob path used in `admin/controller/common/developer.php`.
- [#14791](https://github.com/opencart/opencart/pull/14791) - Fix wrong search result pagination.
- [#14498](https://github.com/opencart/opencart/issues/14498) - Sales order Store - wrong in the order list.
- [#14878](https://github.com/opencart/opencart/issues/14878) - Wrong column used in topic layout methods (`article_id` instead of `topic_id`)
- Fix deprecation warning on PHP 8.4.
- [#14867](https://github.com/opencart/opencart/pull/14867) - Fix autoloader: one namespace can contain classes from different folders.
- [#14882](https://github.com/opencart/opencart/issues/14882) - Undefined array key "payment_zones".
- [#14759](https://github.com/opencart/opencart/pull/14759) - Checkout cart page lists wrong item totals.
- [#14843](https://github.com/opencart/opencart/pull/14843) - Fix autoloader in storeInstance to ensure proper class loading.
- [#14822](https://github.com/opencart/opencart/pull/14822) - In Admin, while creating new order, Product is not being added.
- [#14438](https://github.com/opencart/opencart/issues/14438) - WYSIWYG misconfiguration in ADMIN page for product edit.
- [#14758](https://github.com/opencart/opencart/issues/14758) - Unnecessary parameter
- [#14756](https://github.com/opencart/opencart/pull/14756) - Order files are not displaying in the admin order details page.
- [#14764](https://github.com/opencart/opencart/issues/14764) - Admin login as customer not working.
- [#14886](https://github.com/opencart/opencart/pull/14886) - Fix Admin Filter Submit logout.
- [#14895](https://github.com/opencart/opencart/issues/14895) - Should use array_merge.
- [#forum](https://forum.opencart.com/viewtopic.php?t=235946#p880856) - Error when deleting a product from Wishlist.
- [#14845](https://github.com/opencart/opencart/issues/14845) - Missing language definition in `account/forgotten.php`.
- [#14887](https://github.com/opencart/opencart/issues/14887) - `Product::addReport()`: Argument #1 must be of type `int`, `string` given.
- [#14852](https://github.com/opencart/opencart/issues/14852) - Wrong language in the URL should redirect to default language.
- [#14755](https://github.com/opencart/opencart/issues/14755) - Wrong total on cart page
- [#14903](https://github.com/opencart/opencart/pull/14903) - Fixed `getTotals()`.
- [#14803](https://github.com/opencart/opencart/issues/14803) - Admin order notes are visible to the customer

### Security
- Nothing


[repository log]: https://github.com/batumibiz/oc4/commits/
