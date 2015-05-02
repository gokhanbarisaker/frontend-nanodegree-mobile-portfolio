## Website Performance Optimization portfolio project

### Optimizations

#### General

  - Added grunt tasks for obfuscating and minimizing the code
  - Optimized image sizes and formats
  - Added media queries to external styles, that are not required for creating
  initial render tree in most cases, to delay loading of them.
  - Moved media query specific styles to external files
  - Inlined first render tree generation releted styles
  - Removed custom font for faster page load times
  - Changed analytics script loading to be asynchronous
  - Changed non-rendertree-creation related script loading to be asynchronous
  - Added missing viewport attributes for better mobile support

#### Cameron's awesome performing pizzeria website

##### style.css

  - Moved moving elements to their own layer to decrease paint calls


##### main.js

###### changePizzaSizes

  - Moved repeating calculations with non-dynamic results to outside of for loop.
  Also prevented layout trashing with pre-calculating layout properties.
  - Changed querySelectorAll(".randomPizzaContainer") with a faster alternative
  getElementByClassName(".randomPizzaContainer"). Also moved the api call to outside of for loop, because it is reusable within for-loop.


###### updatePositions

  - Moved repeating calculations to outside of for-loop, in order to decrease
  calculations. Also prevented layout trashing by performing these changes,
  before invalidating styles.
