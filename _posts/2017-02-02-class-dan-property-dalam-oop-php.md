---
title: "#2. Class dan Property dalam OOP PHP"
date: '2017-02-02 17:30:00'
description: >-
  Artikel Seri Belajar Mudah OOP PHP, Apa itu Class dan Property dalam
  OOP PHP ? Di sini akan saya jelaskan...
tags:
- BelajarOOPPHP
published: true
---

Setelah dalam [artikel sebelumnya](http://khoerodin.id/apa-itu-oop-object-oriented-programming/) membahas apa itu OOP, kali ini akan coba saya jelaskan apa itu *Class* dan *Property*.

## Class
Simplenya *class* adalah *blueprint* dari *object*. *Class* digunakan sebagai kerangka dasar atau cetakan yang menyimpan *property* dan *method*, dan yang akan kita pakai adalah hasil cetakan tersebut yaitu *object*. Aturan penamaan *class* diawali dengan huruf atau *underscore* untuk karakter pertama, kemudian boleh diikuti dengan huruf, *underscore* atau angka untuk karakter kedua dan selanjutnya. Masih bingung ya? Berikut contoh cara penulisan *class* dalam PHP, dalam contoh di bawah saya buat *class* `User`

```php
// diawali dengan kata class diikuti dengan nama class
// setelah nama class diikuti kurung kurawal buka 
// dan diakhiri kurung kurawal tutup

class User {
	// isi class nanti di sini
	// isi dari class bisa property dan method
	// property dan method akan dijelaskan kok
	// jangan khawatir...
}
```

## Property
*Property* sebenarnya hanyalah sebuah *variable* yang terletak dalam sebuah *class*. Dalam literatur yang lain *property* disebut juga dengan *attribute*. Cara penulisan *property* ialah dengan didahului oleh **var** atau **visibility keyword** yaitu **public** atau **protected** atau **private** dan diikuti dengan penulisan nama *variable* sebagaimana biasanya dalam PHP yaitu diawali dengan huruf atau *underscore* untuk karakter pertama, kemudian boleh diikuti dengan huruf, *underscore* atau angka untuk karakter kedua dan selanjutnya. Perhatikan contoh di bawah:

```php
class User {
    var $name;
    public $username;
    protected $brithdate;
    private $address;
}
```
terus itu *visibility keyword* dalam property untuk apa? sabar..... akan dibahas dalam artikel tersendiri kok :smiley: