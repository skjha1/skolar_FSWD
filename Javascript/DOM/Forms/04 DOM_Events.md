```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Events Example</title>
  <style>
    p {
      padding: 20px;
      background-color: #f0f0f0;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <p id="myParagraph">Hover over me</p>

  <script>
    // Add event listeners to a paragraph element
    document.getElementById("myParagraph").addEventListener("mouseover", function() {
      this.style.backgroundColor = "lightblue";
    });

    document.getElementById("myParagraph").addEventListener("mouseout", function() {
      // Revert back to original background color when mouse leaves the paragraph
      this.style.backgroundColor = "#f0f0f0";
    });  
  </script>
  
</body>
</html>



```
