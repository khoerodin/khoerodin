---
title: Penjelasan Object dalam OOP PHP - Ep. 4
date: 2017-02-10 15:30:00 +07:00
description: Object adalah hasil konkrit atau hasil cetakan dari sebuah class. Sebagai contoh pada artikel sebelumnya saya telah membuat class User maka object-nya adalah para User atau account
layout: post
tags: SeriOOPPHP php
redirect_from: /object-oriented-php/penjelasan-object-dalam-oop-php
---

_Object_ adalah hasil konkrit atau hasil cetakan dari sebuah _class_. Sebagai contoh pada artikel sebelumnya saya telah membuat _class_ `User` maka _object_-nya adalah *para User* atau *accounts*, misalnya *Andre*, *Andi* dan *Bagus*.

Berikut contohnya, silakan praktekkan di komputer masing-masing ya, karena akan lebih faham jika dipraktekkan 😊

{% highlight php %}
<?php
class User {
    var $name;
    var $username;
    var $brithdate;
    var $address;

    function showSalam()
    {
        echo "<b>Salam...</b><br />Semoga sehat selalu... :)";
    }
}

// buat objek dari class User (instansiasi)
$Khoerodin = new User();

// set property
$Khoerodin->name = "Khoerodin";
$Khoerodin->username = "khoerodin";
$Khoerodin->birthdate = "01 Januari 2017";
$Khoerodin->address = "Ciamis, Indonesia";

// tampilkan property
echo "<b>Name:</b> " . $Khoerodin->name;
echo "<br />";
echo "<b>Username:</b> " .$Khoerodin->username;
echo "<br />";
echo "<b>Birthdate:</b> " .$Khoerodin->birthdate;
echo "<br /><br />";

// tampilkan method
echo $Khoerodin->showSalam();
echo "<br /><br />";

// sekarang buat object Andi
$Andi = new User();

// set property
$Andi->name = "Andi";
$Andi->username = "andi";
$Andi->birthdate = "02 Januari 2017";
$Andi->address = "Cilacap, Indonesia";

// tampilkan property
echo "<b>Name:</b> " . $Andi->name;
echo "<br />";
echo "<b>Username:</b> " .$Andi->username;
echo "<br />";
echo "<b>Birthdate:</b> " .$Andi->birthdate;
echo "<br /><br />";

// tampilkan method
echo $Andi->showSalam();
{% endhighlight %}

Mari kita bahas satu persatu.. 💪

{% highlight php %}
<?php
class User {
...
{% endhighlight %}

Ini adalah mendefinisikan `class` baru dengan nama `User`, diikuti pembuka kurung kurawal untuk mengawali `class` dan tentunya pada baris terakhir akan ditutup oleh penutup kurung kurawal.

{% highlight php %}
<?php
...
    var $name;
    var $username;
    var $brithdate;
    var $address;
...
{% endhighlight %}

Baris selanjutnya ialah mendefinisikan _property_, dengan didahului menggunakan *keyword* `var`. Selain *keyword* `var` bisa saja menggunakan *keyword* `public` atau `protected` atau `private`, tapi di sini saya menggunakan `var`.

Dalam artikel ini bisa kita abaikan saja pertanyaan *Apa sih fungsi var, `public`, `protected` dan `private`* Karena bahasan mengenai keyword `public`, `protected` dan `private` akan dibahas dalam artikel tersendiri yaitu tentang _visibility_.

{% highlight php %}
<?php
...
    function showSalam()
    {
        echo "<b>Salam...</b><br />Semoga sehat selalu... :)";
    }
...
{% endhighlight %}

Ini adalah `method`, seperti yang sudah saya jelaskan pada artikel sebelum ini.

{% highlight php %}
<?php
...
$Khoerodin = new User();
...
{% endhighlight %}

Nah ini adalah instansiasi _object_ yaitu cara membuat _object_ dari sebuah _class_ yang dalam hal ini yaitu _class_ `User`.

{% highlight php %}
<?php
...
$Khoerodin->name = "Khoerodin";
$Khoerodin->username = "khoerodin";
$Khoerodin->birthdate = "01 Januari 2017";
$Khoerodin->address = "Ciamis, Indonesia";
...
{% endhighlight %}

Baris berikutnya yaitu memberikan nilai kepada _property_ yang berada dalam _obejct_ `$Khoerodin`. Perhatikan baik-baik, `property` `name`, `username`, `birthdate` dan `address` itu berada dalam _class_ `User` yang selanjunya di _instansiasi_ menjadi _object_ `$Khoerodin`.

{% highlight php %}
<?php
...
echo "<b>Name:</b> " . $Khoerodin->name;
echo "<br />";
echo "<b>Username:</b> " .$Khoerodin->username;
echo "<br />";
echo "<b>Birthdate:</b> " .$Khoerodin->birthdate;
echo "<br /><br />";
...
{% endhighlight %}

Selanjutnya yaitu memanggil dan menampilkan _property_ yang isinya berupa nilai yang telah diberikan kepada _property_ dalam _object_ `$Khoerodin`.

{% highlight php %}
<?php
...
echo $Khoerodin->showSalam();
...
{% endhighlight %}

Ini untuk memanggil method `showSalam()` dengan _object_ `$Khoerodin`.

## Objek Sebagai Entitas Terpisah
{% highlight php %}
<?php
// sekarang buat object Andi
$Andi = new User();

// set property
$Andi->name = "Andi";
$Andi->username = "andi";
$Andi->birthdate = "02 Januari 2017";
$Andi->address = "Cilacap, Indonesia";

// tampilkan property
echo "<b>Name:</b> " . $Andi->name;
echo "<br />";
echo "<b>Username:</b> " .$Andi->username;
echo "<br />";
echo "<b>Birthdate:</b> " .$Andi->birthdate;
echo "<br /><br />";

// tampilkan method
echo $Andi->showSalam();
{% endhighlight %}

Setiap _objek_ merupakan bagian terpisah, pada contoh baris kode di atas kita membuat _object_ baru yaitu _object_ `$Andi`. Sama seperti _object_ `$Khoerodin` _object_ `$Andi` ini juga berasal dari satu `class` yang sama yaitu class `User`.

Semua _method_ dan _property_ dalam _obejct_ `$Andi` akan sama persis dengan _method_ dan _property_ dalam _object_ `$Khoerodin`. Tapi _object_ `$Khoerodin` dan _object_ `$Andi` merupakan entitas berbeda atau terpisah, sehingga kita bisa memberikan nilai yang berbeda pada masing-masing _object_ sebagaimana contoh diatas.

Coba deh jalankan contoh kode program paling atas biar lebih gamblang dan nanti hasilnya harusnya begini:

**Name:** Khoerodin<br>
**Username:** khoerodin<br>
**Birthdate:** 01 Januari 2017
{: .message }

**Salam..**<br>
Semoga sehat selalu... :)
{: .message }

**Name:** Andi<br>
**Username:** andi<br>
**Birthdate:** 02 Januari 2017
{: .message }

**Salam..**<br>
Semoga sehat selalu... :)
{: .message }

