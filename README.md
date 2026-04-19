# OC++

[![GitHub License](https://img.shields.io/github/license/oc-plus-plus/oc-plus-plus?color=green)](https://github.com/oc-plus-plus/oc-plus-plus/blob/main/LICENSE)
[![coding standards](https://github.com/oc-plus-plus/oc-plus-plus/actions/workflows/coding-standards.yml/badge.svg)](https://github.com/oc-plus-plus/oc-plus-plus/actions/workflows/coding-standards.yml)
[![static analysis](https://github.com/oc-plus-plus/oc-plus-plus/actions/workflows/static-analysis.yml/badge.svg)](https://github.com/oc-plus-plus/oc-plus-plus/actions/workflows/static-analysis.yml)
[![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/oc-plus-plus/oc-plus-plus)](https://github.com/oc-plus-plus/oc-plus-plus/issues)


## Contents
- [About](#about)
- [Compatibility Guarantee](#compatibility-guarantee)
- [Installation](#installation)
  - [New installation](#new-installation)
  - [Upgrading OpenCart 4.1.0.3](#upgrading-opencart-4103) 
- [Local Development with Docker](#local-development-with-docker)
  - [Using Make](#using-make)
  - [Using Docker CLI](#or-using-docker-cli)
  - [Docker Environment](#docker-environment)
  - [SSL Configuration](#ssl-configuration)
  - [Disabling SSL](#disabling-ssl)
  - [Profiling with XDebug](#profiling-with-xdebug)
- [Code Quality](#code-quality)
- [Credits & Sources](#credits--sources)
- [License](#license)


## About
This project is a collection of improvements and fixes, based on [OpenCart 4.1.0.3].  
The [CHANGELOG] file contains a comprehensive list of all modifications, including direct links to original sources, pull requests, and issue reports.

### Why this repository exists
To provide a stable, production-ready environment by backporting essential fixes while strictly avoiding the breaking changes found in the official development branches.

### Why the "++" in the name?
The OC++ designation signifies that this repository is a "plus-plus" edition of the original OpenCart 4.1.0.3 release:
- The first + represents fixes for bugs and issues identified after the official 4.1.0.3 release.
- The second + stands for additional enhancements and optimizations that strictly maintain full backward compatibility.

This ensures a robust, production-ready core that remains a drop-in replacement for any 4.1.0.3-compatible environment.

## Compatibility Guarantee
This project are strictly developed to maintain **full backward compatibility with [OpenCart 4.1.0.3]**.
All included fixes and improvements have been extensively tested on live production sites.
They are fully compatible with major frameworks and heavy-duty extensions,
including **[Journal 3.2.8.7](https://themeforest.net/item/journal-advanced-opencart-theme/4260361)**
and **[MazaEngine 1.13.10](https://themeforest.net/item/poco-advanced-opencart-theme/29855890)**.

Most importantly, the `error.log` on these production environments has remained clean for a long period, confirming the stability and reliability of this build.

> Of course, if errors appear, they will be fixed if possible :)

### Production Example
For a real-world example in action, you can visit small multilanguage website: https://isoap.ge
- Core: **OC++** from this repository.
- Framework: Running flawlessly on Journal v.3.2.8.7.
- Stability: Zero errors in the logs.


## Installation

### New installation

### Upgrading OpenCart 4.1.0.3


## Local Development with Docker

> [!IMPORTANT]
>
> **For Windows Users:**
> It is **strongly recommended** to use the WSL 2 (Windows Subsystem for Linux) backend for Docker Desktop.
> **You should clone this project _inside_ your WSL distribution (e.g., Ubuntu 24.04) for best performance.**
> Access your project via `\\wsl$\Ubuntu-24.04\home\youruser\opencart` from Windows Explorer if needed.
> Without WSL 2, file system performance will be extremely slow, making the application nearly unusable.
> Docker Desktop will typically prompt you to enable WSL 2 during installation.

### Using Make
- Start all services
    ```bash
    make up
    ```
- Stop all services
    ```bash
    make down
    ```
- Dump database: the dump will be saved to `.docker/db-import/dump.sql`
    ```bash
    make db-dump
    ```
- Restore a saved database dump
    ```bash
    make db-restore
    ```

### Or using Docker CLI
- Start all services
    ```bash
    docker-compose up -d
    ```

### Docker Environment

The project environment will be available at the following addresses:
- **Storefront**: https://localhost
  - Login: `user@example.com`
  - Password: `testuser`
- **Administration**: https://localhost/admin
  - Login: `admin`
  - Password: `admin`
  - Email: `test@example.com`
- **Mailpit** (Email Testing): http://localhost:8025
- **Logs**: all service logs (Web server, PHP, etc.) are accessible in the `.docker/log` directory for easy debugging.

> [!NOTE]
>
> **No Installation Required**  
> Once the Docker services are up and running, you get a fully functional OpenCart instance immediately.

> [!IMPORTANT]
>
> **Environment Compatibility**  
> The main Docker container is based on Alpine Linux.
> Please note that GLOB_BRACE is not supported in the Alpine/musl environment.
> Avoid using this flag in your extensions. As a built-in workaround, you can use the oc_glob() emulator provided in this repository.

### SSL Configuration
The project is configured to use **SSL (HTTPS)** by default. To prevent browser connection errors, please choose one of the following options:
- **Install CA Certificate**: Import the CA certificate located at `.docker/web/ssl/ca.crt` into your operating system's trusted store.
- **Or use Custom Certificates**: Replace the existing `.docker/web/ssl/localhost.crt` and `.docker/web/ssl/localhost.key` with your own generated certificates for `localhost`.

### Disabling SSL
If you prefer to use standard HTTP, you can disable SSL by modifying the following configuration files:
- `www/config.php`: change `https` to `http` on line 6.
- `www/admin/config.php`: change `https` to `http` on lines 6 and 7.

After these changes, the store will be accessible via http://localhost and http://localhost/admin.

### Profiling with XDebug
You can perform detailed profiling using XDebug to analyze the performance of all subsystems and identify bottlenecks. To enable this, follow these steps:

1. **Enable XDebug Settings**: uncomment lines 2-6 in the configuration file `.docker/web/config/xdebug.ini`.
2. **Rebuild Container**: run the following command:
   ```bash
   make down && make build && make up
   ```
3. **Browser Extension**: you will need a browser extension to trigger profiling (e.g., [Xdebug Helper](https://chromewebstore.google.com/detail/xdebug-helper-by-jetbrain/aoelhdemabeimdhedkidlnbkfhnhgnhm) or similar).
4. **Log Location**: detailed profiling logs will be saved in the `.docker/log/xdebug` folder
5. **Analysis Tools**: To analyze the generated logs, use specialized software such as:  
   [PhpStorm](https://www.jetbrains.com/phpstorm/), [PHP Profiler for VS Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.profiler-php-vscode), [KCachegrind](https://kcachegrind.github.io/html/Home.html), [WinCacheGrind](https://sourceforge.net/projects/wincachegrind/), or similar tools.

#### Step-by-Step Example
Assuming the preparation steps above are completed...
1. Open the desired page in your browser (e.g., Homepage: https://localhost).
2. Refresh the page 2–3 times to "warm up" the cache.
3. In your **Xdebug Helper** extension, select the "**Profile**" mode.
4. **Profiling**: refresh the page **only once**.
5. In the extension, switch back to "**Disable**".
6. The detailed profiling log will be available at:  
   `.docker/log/xdebug/cachegrind.out.XX.gz`

You can now open this file in your preferred analysis tool to inspect the performance data.

## Code Quality
To maintain high code quality and prevent hidden regressions, we use **PHPStan** for static analysis
and **PHP-CS-Fixer** for coding standards enforcement.
It is highly recommended to run these **Full Check** before submitting any changes.

### Prerequisites:
- PHP 8.1 – 8.5
- Composer

### Run the analysis
You can run the full suite or individual checks using the following commands:
- **Full Check** (Runs both CS and Static Analysis):
    ```bash
    composer check
    ```
- **Coding Standards Check**:
    ```bash
    composer cs-check
    ```
- **Coding Standards Fix** (Automatically fixes formatting issues):
    ```bash
    composer cs-fix
    ```
- **Static Analysis** (Runs PHPStan):
    ```bash
    composer static-analysis
    ```

## Credits & Sources
To ensure transparency and acknowledge the work of the community, direct links to original sources or discussions
are provided in the [CHANGELOG] for any borrowed or ported code.

Modifications without a specific link were developed within this repository.


## License
[GNU General Public License v.3]


[OpenCart 4.1.0.3]: https://github.com/opencart/opencart/releases/tag/4.1.0.3
[CHANGELOG]: https://github.com/oc-plus-plus/oc-plus-plus/blob/main/CHANGELOG.md
[GNU General Public License v.3]: https://github.com/opencart-lts/oc4/blob/main/LICENSE