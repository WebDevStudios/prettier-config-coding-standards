<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# Dynamic Prettier Configuration Loader for WebDevStudios [CSS](https://github.com/WebDevStudios/css-coding-standards), [JavaScript](https://github.com/WebDevStudios/js-coding-standards), and/or [PHP](https://github.com/WebDevStudios/PHP-coding-standards) Coding Standards

This package gets installed automatically when you install any of the WebDevStudios coding standard packages and will automatically configure prettier for you if you set `package.json`'s `prettier` setting to:

```js
"prettier": "@webdevstudios/prettier-config-coding-standards"
```

## How to Install

Install [`@webdevstudios/css-coding-standards`](https://github.com/WebDevStudios/css-coding-standards), [`@webdevstudios/js-coding-standards`](https://github.com/WebDevStudios/js-coding-standards), or [`webdevstudios/php-coding-standards`](https://github.com/WebDevStudios/php-coding-standards) and this package will be included automatically.

## Changelog

### 1.0.1

- Patch to fix issue where the final config for `prettier` set to `@webdevstudios/prettier-config-coding-standards` combines JS, CSS, and PHP properly

In the previous version these were not getting combined properly, instead the last config to load (via `npm`) would take the cake, and be the final config. This worked fine when JS was the only config, but if you installed PHP or CSS configs, they could likely end up being the final config breaking auto-formatting.

This new method takes the `@webdevstudios/prettier-config-(php|js|css)-coding-standards` modules and, depending on if they are installed, takes the `overrides` setting in each and merges them into `modules.exports` for `@webdevstudios/prettier-config-coding-standards`.

### 1.0.0

This version simply loads prettier configurations for [css](https://github.com/WebDevStudios/prettier-config-css-coding-standards), [js](https://github.com/WebDevStudios/prettier-config-js-coding-standards), and/or [php](https://github.com/WebDevStudios/prettier-config-php-coding-standards) if they are installed.
