# Typography CSS library
**Author:** [Tadeáš Balda](https://github.com/tadeasbalda)
## Demo site
Link to **[demo](https://pslib-cz.github.io/2022l4web-css-typographic-library-tadeasbalda/)** site for preview.
## Parts of the documentation
1. [Implementation](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Implementation)
2. [Usage](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Usage)
3. [Typography](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Typography)
4. [Headings](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Headings)
5. [Text](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Text)
6. [Colors](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Colors)
7. [Gallery](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Gallery)
8. [Sections](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Sections)
9. [Buttons](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Buttons)
10. [Alerts](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Alerts)
11. [Tables](https://github.com/pslib-cz/2022l4web-css-typographic-library-tadeasbalda#Tables)

## Implementation
1) Download all files from the GitHub.
2) Unzip 
3) Connect all  files to your project

* ```<link href="./layout.css rel="stylesheet">```
* ```<link href="./typography.css rel="stylesheet">```
* ```<link href="./normalize.css rel="stylesheet">```
* ```<link href="./mobile.css rel="stylesheet">```

## Usage
It's ideal solution when you need easy responsive layout. Especialy for one page website.
## Typography
The main font is Source Sans Pro. For headings I used Oswald.
## Headings
* ```<h1>``` font size is 36.8px
* ```<h2>``` font size is 27.6px
* ```<h3>``` font size is 21.5333px
* ```<h4>``` font size is 18.4px
* ```<h5>``` font size is 15.2667px
* ```<h6>``` font size is 12.3333px
## Text
### Normal text
Size of normal text  is 18.4px.
### Styled text
* ```<small>``` for <sub>small</sub> text
* ```<b>``` or ```<strong>``` for **bold** text 
* ```<u>``` for Underlined text
* ```<mark>``` for (yellow) highlited text
* ```<s>``` for ~~striked~~ text
* ```<i>``` or ```<em>``` for *italic text*
* ```<sub>``` for <sub>subscript</sub> text
* ```<sup>``` for <sup>superscript</sup> text
You can even use predefined classes:
* ```<class="colored-text>``` for colored text
## Colors
A colour palette was created for this project. You can find these color in section color palete. 
* ```<div class="color color--5"></div>```

## Gallery
You can easily set up your own gallery using flexbox, which is great tool for responsive design.
## Sections
Inside 
 ```<body> ```
 create  ```<main> ```tag where you put sections  ```<section> ```. Every ```<section> ``` should have ```<h> ```tag inside. 
## Buttons
```<button class="button">Your Text</button>```
There are 3 predefined button classes:
* ```class="button button--correct"``` for correct button
* ```class="button button--wrong"``` for wrong button
* ```class="button button--normal"``` for normal button
## Alerts
```<div class="alert alert--save">```
There are 3 predefined alert classes:
* ```class="alert alert--save"``` for save
* ```class="alert alert--sign"``` for sign up
* ```class="alert alert--critical"``` for warging
## Tables

You can use predefined table with standart ```<table>``` tag.
