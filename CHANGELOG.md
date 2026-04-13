# Changelog 

All notable changes to this project will be documented in this file.    
Detailed changes can see in the [repository log].

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0).

### Note regarding sources
Entries accompanied by a reference link indicate code borrowed or adapted from external sources.  
Entries without a reference link were developed exclusively within the [batumibiz/oc4](https://github.com/batumibiz/oc4) repository.


## [Unreleased]

### Added
- [#14857](https://github.com/opencart/opencart/pull/14857), [#14858](https://github.com/opencart/opencart/pull/14858), [#14859](https://github.com/opencart/opencart/pull/14859) - Add manufacturer filter
- Emulation of `GLOB_BRACE` for Alpine/musl environments:  
  introduced a custom `oc_glob()` helper function to emulate native glob functionality.
- The `date_added` field has been added to the product form.
- CSS minification, minified versions of CSS are used.
- Modern `Chart.js` library for Dashboard sales and analytics visualization.

### Changed
- [#14753](https://github.com/opencart/opencart/pull/14753) - Retrieve more in depth files from extension directory for permission.
- [#14780](https://github.com/opencart/opencart/pull/14780) - Admin Filter Improvements.
- [#14790](https://github.com/opencart/opencart/pull/14790) - Updated `catalog/language/en-gb/default.php`, added `text_all`.
- [#14818](https://github.com/opencart/opencart/pull/14818) - Safest one just in case the product options are empty.
- [#14820](https://github.com/opencart/opencart/pull/14820) - Event list: always allow for viewing event details.
- [#14891](https://github.com/opencart/opencart/pull/14891) - To collect cache files, do it only if the random has fallen to the cleanup.
- [#14915](https://github.com/opencart/opencart/pull/14915) - Add `OPTIMIZE TABLE` to `db.php`.
- [#15326](https://github.com/opencart/opencart/pull/15326) - Use the composer-generated autoload for the 3rd-party packages
- [0a8b25a](https://github.com/opencart/opencart/commit/0a8b25aaedae97e1b21784263527941448724693) - Added some additional form text.
- [8996eb3](https://github.com/opencart/opencart/commit/8996eb371620c3c7a453872d39a3a815562690f3) - `partially used` - Improved `admin/controller/marketplace/installer.php`.
- [062ba0e](https://github.com/opencart/opencart/commit/062ba0ee243cc707b51b95e56b69b7f07cda5f7f), [85e8ddb](https://github.com/opencart/opencart/commit/85e8ddb82916cc48a4dcb30fcfcd4a1a9ea9add0) - `partially used` - Updated language methods.
- Refactored the codebase to replace all `glob()` calls using the `GLOB_BRACE` flag with `oc_glob()` emulator to ensure compatibility with Alpine Linux and other musl-based environments where `GLOB_BRACE` is unavailable.
- Improved Category and Product search for the Admin panel.
- Reduced the size of the "Delete" buttons on the 'Links' tab of the product form.
- Improved session handler
- Improved cache cleanup
- Improved .css refresh
- Bootstrap CSS and JS libraries updated to version `5.3.8`
- `scssphp/scssphp` package updated to version `2.1`
- `twig/twig` package updated to version `3.24`


### Removed
- [d342547](https://github.com/opencart/opencart/commit/d34254714d6d08995851f8fec2ea58987ff2e0ae) - `upload/system/helper/filter.php` as unused.
- `aws/aws-sdk-php` package as unused.
- `bootstrap-icons` as unused.
- `nunjucks-slim.js` library as unused.
- Obsolete `Flot` library (_replaced with Chart.js_).
- Vendor-related functionality and references from the developer tools as unused

### Fixed
- [#14438](https://github.com/opencart/opencart/issues/14438) - WYSIWYG misconfiguration in ADMIN page for product edit.
- [#14498](https://github.com/opencart/opencart/issues/14498) - Sales order Store - wrong in the order list.
- [#14731](https://github.com/opencart/opencart/issues/14731) - In additional Stores Cookie Policy is not selectable.
- [#14736](https://github.com/opencart/opencart/pull/14736) - Fix disabled products design same as other table lists.
- [#14739](https://github.com/opencart/opencart/issues/14739) - After creating multiple folders, the root directory images are not displayed.
- [#14740](https://github.com/opencart/opencart/pull/14740) - Renamed total function as they had an incorrect name.
- [#14744](https://github.com/opencart/opencart/issues/14744) - BUG in product settlement.
- [#14746](https://github.com/opencart/opencart/issues/14746) - Various bugs with `sku`, `upc`, `ean`, `jan`, `isbn`, `mpn`.
- [#14755](https://github.com/opencart/opencart/issues/14755) - Wrong total on cart page
- [#14756](https://github.com/opencart/opencart/pull/14756) - Order files are not displaying in the admin order details page.
- [#14758](https://github.com/opencart/opencart/issues/14758) - Unnecessary parameter
- [#14759](https://github.com/opencart/opencart/pull/14759) - Checkout cart page lists wrong item totals.
- [#14764](https://github.com/opencart/opencart/issues/14764) - Admin login as customer not working.
- [#14770](https://github.com/opencart/opencart/issues/14770) - Incorrect glob path used in `admin/controller/common/developer.php`.
- [#14791](https://github.com/opencart/opencart/pull/14791) - Fix wrong search result pagination.
- [#14803](https://github.com/opencart/opencart/issues/14803) - Admin order notes are visible to the customer
- [#14822](https://github.com/opencart/opencart/pull/14822) - In Admin, while creating new order, Product is not being added.
- [#14843](https://github.com/opencart/opencart/pull/14843) - Fix autoloader in storeInstance to ensure proper class loading.
- [#14845](https://github.com/opencart/opencart/issues/14845) - Missing language definition in `account/forgotten.php`.
- [#14867](https://github.com/opencart/opencart/pull/14867) - Fix autoloader: one namespace can contain classes from different folders.
- [#14878](https://github.com/opencart/opencart/issues/14878) - Wrong column used in topic layout methods (`article_id` instead of `topic_id`)
- [#14882](https://github.com/opencart/opencart/issues/14882) - Undefined array key "payment_zones".
- [#14886](https://github.com/opencart/opencart/pull/14886) - Fix Admin Filter Submit logout.
- [#14887](https://github.com/opencart/opencart/issues/14887) - `Product::addReport()`: Argument #1 must be of type `int`, `string` given.
- [#14895](https://github.com/opencart/opencart/issues/14895) - Should use array_merge.
- [#14903](https://github.com/opencart/opencart/pull/14903) - Fixed `getTotals()`.
- [#14988](https://github.com/opencart/opencart/pull/14988) - Correct method names for bulk delete operations
- [#15046](https://github.com/opencart/opencart/pull/15046), [6999e3e](https://github.com/opencart/opencart/commit/6999e3e6c091aafa958eefa2af1a2deff10524a3#diff-6ec7893dd58bb90a8bb72684d687095fb309087e63063d59d90b64e53f6ed3ec), [6dd838b](https://github.com/opencart/opencart/commit/6dd838bf7b469e7da80df22dd0439d25037a412f) - Various bugs in `system/library/curl.php`.
- [#15185](https://github.com/opencart/opencart/pull/15185) - Fix viewing embedded Youtube video.
- [#forum](https://forum.opencart.com/viewtopic.php?t=235946#p880856) - Error when deleting a product from Wishlist.
- Deprecation warning on PHP 8.4.
- The zone name was not displayed in the list
- The password recovery link in the email was visible as plain text
- Undefined array key "author" in catalog/controller/product/review.php on line 161
- getProduct(): Argument #1 ($product_id) must be of type int
- PHP Warning:  Undefined array key "en-gb'nvOpzp;..." in catalog/controller/common/language.php
- Error: Opencart\Admin\Model\Catalog\Product::getDiscounts(): Argument #1 ($product_id) must be of type int
- [#15319](https://github.com/opencart/opencart/issues/15319) - getReviewsByProductId(): Argument 2 ($start) must be of type int
- Error: Invalid session ID
- Undefined variable `$price_status` in `catalog/controller/api/cart.php`.
- Undefined variable `$thid` in `catalog/controller/api/order.php`.
- Variable `$file` in `isset()` always exists and is not nullable in `system/engine/autoloader.php` (90)
- Administrator password recovery
- PHP Warning: unlink(): No such file or directory in /system/library/cache/file.php on line 37
- Display of sales statistics on the Dashboard Map
- **Green Build** - Fixed various static analysis errors and comments

### Security
- Nothing


[repository log]: https://github.com/batumibiz/oc4/commits/
