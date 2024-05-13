### HTML

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Navigation Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div id = "container">
    <div id = "parentElement" class="box">
      <p>This is the parent element </p>

      <div id = "childElement" class="box">
        <p>This is the child element </p>

        <div id = "grandchildElement" class="box">
          <p>This is the grand child element </p>
        </div>
      </div>
      <div id = "siblingElement" class="box">
        <p>This is the sibling element </p>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
  
</body>
</html>

```

### CSS

----------------

```css


#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  border: 1px solid #000;
  padding: 20px;
  margin: 10px;
  background-color: #f0f0f0;
}

```


### JS
----------------


```javascript 

// Acceessing child element of the parent element
const parentElemet = document.getElementById("parentElement");
const childElement = parentElemet.querySelector("#childElement");


// Change child elemet background color

childElement.style.backgroundColor = "lightblue";

// Acceessing grand child element of the parent element
const grandchildElemet = parentElemet.querySelector("#grandchildElement")


// Change grandchild element's text context

grandchildElemet.querySelector("p").textContent = "This is updated grand child element";





```
