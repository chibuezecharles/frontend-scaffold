const fs = require('fs');
const path = require('path');

const scaffoldDirectory = 'frontend-scaffold';

// To Create frontend-scaffold directory
fs.mkdirSync(scaffoldDirectory);

//  To Create index.html file
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Welcome</h1>
    <script src="./js/script.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(scaffoldDirectory, 'index.html'), indexHtml);

// To Create css directory and style.css file
fs.mkdirSync(path.join(scaffoldDirectory, 'css'));
const styleCss = `h1 {
    text-align: center;
}`;

fs.writeFileSync(path.join(scaffoldDirectory, 'css', 'style.css'), styleCss);

// To Create js directory and script.js file
fs.mkdirSync(path.join(scaffoldDirectory, 'js'));
const scriptJs = `alert("Welcome");`;

fs.writeFileSync(path.join(scaffoldDirectory, 'js', 'script.js'), scriptJs);

// To Create images directory
fs.mkdirSync(path.join(scaffoldDirectory, 'images'));

console.log('Frontend scaffold created successfully!');
