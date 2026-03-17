# OpenCart 4.1.0.3++
This project is a collection of improvements and fixes for [OpenCart 4.1.0.3].  
The [CHANGELOG.md](https://github.com/batumibiz/oc4/blob/main/CHANGELOG.md) file contains a comprehensive list of all modifications, including direct links to original sources, pull requests, and issue reports.

### Why this repository exists
To provide a stable, production-ready environment by backporting essential fixes while strictly avoiding the breaking changes found in the official development branches.

### Compatibility Guarantee
All modifications and enhancements are strictly developed to maintain full backward compatibility with [OpenCart 4.1.0.3].

### Why the "++" in the name?
The OpenCart 4.1.0.3++ designation signifies that this repository is a "plus-plus" edition of the original 4.1.0.3 release:
- The first + represents fixes for bugs and issues identified after the official 4.1.0.3 release.
- The second + stands for additional enhancements and optimizations that strictly maintain full backward compatibility.

This ensures a robust, production-ready core that remains a drop-in replacement for any 4.1.0.3-compatible environment.


## Versioning & Branching Strategy
To maintain clarity and project stability, OpenCart 4.1.0.3++ follows an absolute versioning system ($v1$, $v2$, etc.).
All code changes in this project originate from the official [OpenCart 4.1.0.3] release.

### Branch Workflow:
- `release` (Stable): contains production-ready, stable code.
    Release tags are applied here, making it easy to track changes and diffs between project versions.
- `main` (Development): The primary branch where verified improvements and fixes are accumulated.
  While generally stable, this branch may contain bugs that require further refinement.
  **Core functionality must remain operational at all times**.
- `develop` (Feature/Testing): A temporary branch for unverified or experimental code.
  General stability is not guaranteed. Once the code is stabilized, it is moved to `main` via **squash merge**,
  and the `develop` branch is deleted.
- Other temporary branches may be created as needed for specific tasks or features.


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

### Important: SSL Configuration
The project is configured to use **SSL (HTTPS)** by default. To prevent browser connection errors, please choose one of the following options:
- **Install CA Certificate**: Import the CA certificate located at `.docker/web/ssl/ca.crt` into your operating system's trusted store.
- **Or use Custom Certificates**: Replace the existing `.docker/web/ssl/localhost.crt` and `.docker/web/ssl/localhost.key` with your own generated certificates for `localhost`.

### Disabling SSL
If you prefer to use standard HTTP, you can disable SSL by modifying the following configuration files:
- `www/config.php`: change `https` to `http` on line 6.
- `www/admin/config.php`: change `https` to `http` on lines 6 and 7.

After these changes, the store will be accessible via http://localhost

### Profiling with XDebug
You can perform detailed profiling using XDebug to analyze the performance of all subsystems and identify bottlenecks. To enable this, follow these steps:

#### Preparation:
1. **Enable XDebug Settings**: uncomment lines 2-6 in the configuration file `.docker/web/config/xdebug.ini`.
2. **Rebuild Containers**: run the following command:
   ```bash
   make down && make build && make up
   ```
3. **Browser Extension**: you will need a browser extension to trigger profiling (e.g., [Xdebug Helper](https://chromewebstore.google.com/detail/xdebug-helper-by-jetbrain/aoelhdemabeimdhedkidlnbkfhnhgnhm) or similar).
4. L**og Location**: detailed profiling logs will be saved in the `.docker/log/xdebug` folder
5. **Analysis Tools**: To analyze the generated logs, use specialized software such as:  
   [PhpStorm](https://www.jetbrains.com/phpstorm/), [PHP Profiler for VS Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.profiler-php-vscode), [KCachegrind](https://kcachegrind.github.io/html/Home.html), [WinCacheGrind](https://sourceforge.net/projects/wincachegrind/), or similar tools.

#### Step-by-Step Example
Assuming the preparation steps above are completed...
1. Open the desired page in your browser (e.g., Homepage: https://localhost).
2. Refresh the page 2–3 times to "warm up" the cache.
3. In your **Xdebug Helper** extension, select the "Profile" mode.
4. **Profiling**: refresh the page **only once**.
5. In the extension, switch back to "Disable".
6. The detailed profiling log will be available at:  
   `.docker/log/xdebug/cachegrind.out.XX.gz`

You can now open this file in your preferred analysis tool to inspect the performance data.

## Credits & Sources
To ensure transparency and acknowledge the work of the community, direct links to original sources or discussions
are provided in the [CHANGELOG](https://github.com/batumibiz/oc4/blob/main/CHANGELOG.md) for any borrowed or ported code.

Modifications without a specific link were developed within this repository.


## License
GNU General Public License version 3 ([GPLv3](https://github.com/batumibiz/oc4/blob/main/LICENSE))


## Links

- [OpenCart sources](https://github.com/opencart/opencart)
- [OpenCart forums](https://forum.opencart.com/)
- [Discussions](https://github.com/opencart/opencart/discussions)


[OpenCart 4.1.0.3]: https://github.com/opencart/opencart/releases/tag/4.1.0.3