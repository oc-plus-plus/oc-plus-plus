# Changelog 

All notable changes to this project will be documented in this file.    
Detailed changes can see in the [repository log].

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).


## [Unreleased]

#### Added
- Emulation of GLOB_BRACE for Alpine/musl environments:  
  introduced a custom oc_glob() helper function to emulate native glob functionality.

#### Changed
- Refactored the codebase to replace all glob() calls using the GLOB_BRACE flag with oc_glob() emulator to ensure compatibility with Alpine Linux and other musl-based environments where GLOB_BRACE is unavailable.

#### Deprecated
- Nothing

#### Removed
- aws/aws-sdk-php package as unused

#### Fixed
- Nothing

#### Security
- Nothing


[repository log]: https://github.com/batumibiz/oc4/commits/
