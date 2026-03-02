# Changelog 

All notable changes to this project will be documented in this file.    
Detailed changes can see in the [repository log].

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).


## [Unreleased]

### Added
- Emulation of GLOB_BRACE for Alpine/musl environments:  
  introduced a custom oc_glob() helper function to emulate native glob functionality.

### Changed
- Refactored the codebase to replace all glob() calls using the GLOB_BRACE flag with oc_glob() emulator to ensure compatibility with Alpine Linux and other musl-based environments where GLOB_BRACE is unavailable.

### Deprecated
- Nothing

### Removed
- aws/aws-sdk-php package as unused

### Fixed
- [#14746](https://github.com/opencart/opencart/issues/14746) Various bugs with sku, upc, ean, jan, isbn, mpn.
- [#15185](https://github.com/opencart/opencart/pull/15185) Fix viewing embedded Youtube video.
- [#14740](https://github.com/opencart/opencart/pull/14740) Renamed total function as they had an incorrect name.
- [#14736](https://github.com/opencart/opencart/pull/14736) Fix disabled products design same as other table lists.

### Security
- Nothing


[repository log]: https://github.com/batumibiz/oc4/commits/
