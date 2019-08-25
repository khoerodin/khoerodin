---
title: ES6 String Interpolation
date: 2019-09-01 15:50:00 +07:00
description: ES6 String Interpolation 
layout: post
tags: es6 javascript
---

Jika sudah terbiasa dengan Ruby, sangat mudah sekali melakukan interpolasi string seperti ini:
```ruby
middle_name = 'Salwa'
"Hi, my name is #{middle_name}!"
``` 

Sedangkan untuk javascript seperti ini:
```javascript
middleName = 'Salwa'
"Hi, my name is " +  name + "!"
```
atau
```javascript
var myClass = "custom-class"
var markup = "<p class=\"" + myClass + "\">Paragraph</p>"
```
atau
```javascript
var welcome = "Hello " + (isWorld ? "World" : "me")
```
Jika multiline:
```javascript
var firtName = 'Aisha'
var middleName = 'Salwa'
var lastName = 'Faqeeha'

var greeting = "Hi, my name is " +  middleName + "!, and my full " +
"name is " + firstName + middleName + lastName
```

Bagaimana jika ES6? tadaaaa..... jeng jeng jeng....

```javascript
let myClass = "custom-class"
let markup = `<p class="${myClass}">Paragraph</p>`
```
atau
```javascript
let welcome = `Hello ${isWorld ? "World" : "me"}!`
```
Jika multiline:
```javascript
let firtName = 'Aisha'
let middleName = 'Salwa'
let lastName = 'Faqeeha'

let greeting = `Hi, my name is ${middleName}!, and my full
name is ${firstName} ${middleName} ${lastName}`
```

Mudah kan, mudahh kan? :grinning: