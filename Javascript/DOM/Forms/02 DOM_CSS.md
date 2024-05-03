### HTML

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div id="myElement">Click me to change my color!</div>

  <script src="script.js"></script>
  
</body>
</html>

```

### CSS

----------------

```css
#myElement {
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  border: 1px solid #ccc; 
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  transition: background-color 0.3 ease;
}

```


### JS
----------------


```javascript 

// Access the element
const element = document.getElementById("myElement");




element.addEventListener("click", function() {
    

    // Generate a radom color
    const randomColor = "#" +  Math.floor(Math.random()*16777215).toString(16); // [0,1) 

    // Chnage the background color element 
    element.style.backgroundColor = randomColor;
});



```
