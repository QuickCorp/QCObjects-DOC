## Step 5: To use into the HTML5 code you only need to do some settings between script tags:

```html
<script>
CONFIG.set('relativeImportPath','js/packages/');
CONFIG.set('componentsBasePath','templates/components/');
CONFIG.set('delayForReady',1); // delay to wait before executing the first ready event, it includes imports
CONFIG.set('preserveComponentBodyTag',false); // don't use <componentBody></componentBody> tag

Import('cl.quickcorp'); # this will import your main file: cl.quickcorp.js into js/packages/ file path

/* NOTE: if you use modules, you probably may want to use import() function or import native statement from JavaScript rather than Import() function from QCObjects, that is intended to cover the feature in older versions of JavaScript. */
</script>
```
