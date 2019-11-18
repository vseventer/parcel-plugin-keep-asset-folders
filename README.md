# parcel-plugin-keep-asset-folders
> Keep assets original directory structure in Parcel's output.

All static assets referenced by [Parcel][parcel] will be outputted in the root directory. This may be what you want, but for many people it is not - see [this](https://github.com/parcel-bundler/parcel/issues/872) collection of GitHub issues. This plugin patches Parcel so that assets keep their original directory structure.

**WARNING** This plugin modifies Parcel internals through an undocumented API. Therefore, your website may break if you are not careful when selecting which version of Parcel you are using.

## Examples
Take the project structure as outlined below.

```
- uploads
-- 2019
---  my-amazing-landscape.jpg
-- logo.png
- index.html
```

Typically, the build will produce:

```
- index.html
- my-amazing-landscape.<hash>.jpg
- logo.<hash>.png
```

With this plugin, the structure is as follows:
```
- uploads
-- 2019
--- my-amazing-landscape.<hash>.jpg
-- logo.<hash>.png
- index.html
```

## Installation
Depending on which package manager you use, either:
* `$ npm install --save-dev parcel-plugin-keep-asset-folders`
* `$ yarn add --dev parcel-plugin-keep-asset-folders`

## Usage
Parcel automatically picks up on this plugin, and no further action is required on your part.

You can see what assets are updated by enabling debug mode: `$ DEBUG=parcel:keep-asset-folders parcel ...`.

## Changelog
See the [Changelog](./CHANGELOG.md) for a list of changes.

## License
    The MIT License (MIT)

    Copyright (c) 2019 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[parcel]: https://parceljs.org/
