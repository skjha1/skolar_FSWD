### HTML

```html


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Animation Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div id="container">

    <div id = "myElement">Move me!</div>
    
  </div>


  <script src="script.js"></script>
  
</body>
</html>
```

### CSS

----------------

```css

#container {
  position: relative;
  width: 400px;
  height: 400px;
  border: 2px solid #007bff;
  overflow: hidden;
}


#myElement {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  transition: transform 1s ease;
}
```


### JS
----------------


```javascript 


// Access the element
const element = document.getElementById("myElement");


// Function to animate position

function animatePosition() {

    // Randomly generate new cordinate for the eleme
    const newX = Math.floor(Math.random() * 300 ) // 0 to 300
    const newY = Math.floor(Math.random() * 300 ) // 0 to 300


    // Apply new positions with smooth transition
    element.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Call the animatePosition fxn in every 2 sec 

setInterval(animatePosition,2000);



```
