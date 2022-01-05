# PostCSS Tipsy

> [Postcss](https://github.com/postcss/postcss) plugin for a simple tooltip css. This is based **[tipsy.sass](https://github.com/dangvanthanh/tipsy.sass)** version.

## Usage

### Installation

```bash
$ npm i --save postcss-tipsy
```

#### Configure

```js
module.exports = {
	plugins: {
		require('postcss-tipsy')
	}
}
```

See [Postcss](https://github.com/postcss/postcss) docs for examples for your environment.

#### HTML Markup

```html
<span class="tipsy" data-tipsy="Postcss plugin for simple tooltip">Simple Tipsy</span>
```

#### Stylesheets

```css
.tipsy {
  tipsy: [graviry] [background] [size] [radius];
}
```

Usage

```css
.tipsy {
  tipsy: nw #34495e 5px 0;
}
```

## Options

| Options    | Description                 | Value                       |
| ---------- | --------------------------- | --------------------------- |
| gravity    | Position of tooltip         | nw, n , ne, e, se, s, sw, w |
| background | Background color of tooltip | HEX, RGB, RGBA, HSL         |
| size       | Arrow size of tooltip       | px, em, rem                 |
| radius     | Border radius of tooltip    | px, em, rem                 |

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
