---
title: Class dan Property dalam OOP PHP - Ep. 2
date: 2017-02-02 17:30:00 +07:00
description: Class adalah blueprint dari object. Class digunakan sebagai kerangka dasar atau cetakan yang menyimpan property dan method, dan yang akan kita pakai adalah hasil cetakan tersebut yaitu object
layout: post
tags: SeriOOPPHP php
redirect_from: /object-oriented-php/class-dan-property-dalam-oop-php
---

Setelah dalam [artikel sebelumnya]({% post_url 2017-02-09-apa-itu-oop-object-oriented-programming %}) membahas apa itu OOP, kali ini akan coba saya jelaskan apa itu *Class* dan *Property*.

## 1. Class
Simplenya *class* adalah *blueprint* dari *object*. *Class* digunakan sebagai kerangka dasar atau cetakan yang menyimpan *property* dan *method*, dan yang akan kita pakai adalah hasil cetakan tersebut yaitu *object*.

Aturan penamaan *class* diawali dengan huruf atau <em>underscore</em> untuk karakter pertama, kemudian boleh diikuti dengan huruf, <em>underscore</em> atau angka untuk karakter kedua dan selanjutnya.

Masih bingung ya? Berikut contoh cara penulisan *class* dalam PHP, dalam contoh di bawah saya buat *class* `User`

{% highlight php %}
<?php
// diawali dengan kata class diikuti dengan nama class
// setelah nama class diikuti kurung kurawal buka
// dan diakhiri kurung kurawal tutup

class User {
  // isi class nanti di sini
  // isi dari class bisa property dan method
  // property dan method akan dijelaskan kok
  // jangan khawatir...
}
{% endhighlight %}

## 2. Property
*Property* sebenarnya hanyalah sebuah *variable* yang terletak dalam sebuah *class*. Dalam literatur yang lain *property* disebut juga dengan *attribute*.

Cara penulisan *property* ialah dengan didahului oleh `var` atau <em>visibility keyword</em> yaitu `public` atau `protected` atau `private` dan diikuti dengan penulisan nama *variable* sebagaimana biasanya dalam PHP yaitu diawali dengan huruf atau *underscore* untuk karakter pertama, kemudian boleh diikuti dengan huruf, *underscore* atau angka untuk karakter kedua dan selanjutnya.

Perhatikan contoh di bawah:

{% highlight php %}
<?php
class User {
    var $name;
    public $username;
    protected $brithdate;
    private $address;
}
{% endhighlight %}
terus itu *visibility keyword* dalam property untuk apa? sabar..... akan dibahas dalam artikel tersendiri kok, pokoknya baca saja artikel <a href="/tag/SeriOOPPHP">#SeriOOPPHP ini</a> urut sesuai episodenya ya 😄
