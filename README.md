# Text Ellipses Jquery plugin

A Simple Jquery plugin for dom element text shortening 

## Usage 

Include text-ellipses.jquery.js into your html file
```html
<script src="src/text-elipses.js"></script>

```

```javascript
$('.heading').textEllipses("Lorem ipsum dolor sit amet",5, options)
```

### Options

```javascript
    {
        showTitle: true,
        className: 'text-ellipsis-element',
        dataValueName: 'real-value',
    }
```