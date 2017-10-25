# Text Ellipses Jquery plugin

A Simple Jquery plugin for dom element text shortening 

## Usage 

Include text-ellipses.jquery.js into your html file
```html
<script src="src/text-ellipses.jquery.js"></script>

```

```javascript
$('.heading').textEllipses("Lorem ipsum dolor sit amet",5, options)
```

### Options

```javascript
    {
        hoverExpand: true // Default false
        showTitle: false, // Default true
        className: 'some-class-name', // Default text-ellipsis-element
        dataValueName: 'some-data-field-name', // Default real-value
    }
```