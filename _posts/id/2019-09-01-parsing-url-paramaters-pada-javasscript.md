---
title: Parsing URL parameter pada JavaScript
date: 2019-09-01 15:50:00 +07:00
description: Cara mudah parsing URL parameters pada JavaScript menggunakan URLSearchParams.
layout: post
tags: javascript
---

Berikut cara mudah mengambil URL parameter jika menggunakan JavaScript:

```javascript
// Misal dari "?id=1234&others=hi"

let urlParams = new URLSearchParams(window.location.search)

console.log(urlParams.has('id')) // true
console.log(urlParams.get('others')) // "hi"
console.log(urlParams.getAll('others')) // ["hi"]
console.log(urlParams.toString()); // "?id=1234&others=hi"
console.log(urlParams.append('active', '1')); // "?id=1234&others=hi&active=1"
```

Oh ya, ini tidak bisa berjalan <a href="https://caniuse.com/#search=URLSearchParams">jika menggunakan IE</a>.
