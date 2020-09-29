<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# Prettier Dynamic Config for [WebDevStudios Coding Standards](https://github.com/WebDevStudios/php-coding-standards)

This package gets installed automatically when you install any of the WebDevStudios coding standard packages and will automatically configure prettier for you if you set `package.json`'s `prettier` setting to:

```js
"prettier": "@webdevstudios/prettier-config-coding-standards"
```

## How to Install

Install [`webdevstudios/css-coding-standards`](https://github.com/WebDevStudios/css-coding-standards), [`webdevstudios/js-coding-standards`](https://github.com/WebDevStudios/js-coding-standards), or [`webdevstudios/php-coding-standards`](https://github.com/WebDevStudios/php-coding-standards) and this package will be included automatically.

## Changelog

### 1.0.0

This version simply loads prettier configurations for [css](https://github.com/WebDevStudios/prettier-config-css-coding-standards), [js](https://github.com/WebDevStudios/prettier-config-js-coding-standards), and/or [php](https://github.com/WebDevStudios/prettier-config-php-coding-standards) if they are installed.
