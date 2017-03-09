---
title: "Penjelasan Object dalam OOP PHP"
clean_title: "Object"
date: '2017-02-10 15:30:00'
description: Object adalah hasil konkrit atau hasil cetakan dari sebuah class. Sebagai contoh pada artikel sebelumnya saya telah membuat class User maka object-nya adalah para User atau account
layout: episode
published: true
redirect_from:
  - /penjelasan-object-dalam-oop-php/
---

<mark><em>Object</em></mark> adalah hasil konkrit atau *hasil cetakan* dari sebuah <mark>class</mark>. Sebagai contoh pada artikel sebelumnya saya telah membuat *class* `User` maka *object*-nya adalah para *User* atau *accounts*, misalnya *Andre*, *Andi* dan *Bagus*.

Berikut contohnya, silakan praktekkan di komputer masing-masing ya, karena akan lebih faham jika dipraktekkan :blush:

```php
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
$Khoerodin->brithdate = "01 Januari 2017";
$Khoerodin->address = "Ciamis, Indonesia";

// tampilkan property
echo "<b>Name:</b> " . $Khoerodin->name;
echo "<br />";
echo "<b>Username:</b> " .$Khoerodin->username;
echo "<br />";
echo "<b>Brithdate:</b> " .$Khoerodin->brithdate;
echo "<br /><br />";

// tampilkan method
echo $Khoerodin->showSalam();
echo "<br /><br />";

// sekarang buat object Andi
$Andi = new User();

// set property
$Andi->name = "Andi";
$Andi->username = "andi";
$Andi->brithdate = "02 Januari 2017";
$Andi->address = "Cilacap, Indonesia";

// tampilkan property
echo "<b>Name:</b> " . $Andi->name;
echo "<br />";
echo "<b>Username:</b> " .$Andi->username;
echo "<br />";
echo "<b>Brithdate:</b> " .$Andi->brithdate;
echo "<br /><br />";

// tampilkan method
echo $Andi->showSalam();
```

Mari kita bahas satu persatu.. :slight_smile:

```php
class User {
...
```

Ini adalah mendefinisikan *class* baru dengan nama `User`, diikuti pembuka kurung kurawal untuk mengawali *class* dan tentunya pada baris terakhir akan ditutup oleh penutup kurung kurawal.

```php
...
    var $name;
    var $username;
    var $brithdate;
    var $address;
...
```

Baris selanjutnya ialah mendefinisikan *property*, dengan didahului menggunakan *keyword* `var`. Selain *keyword* `var` bisa saja menggunakan *keyword* `public` atau `protected` atau `private`, tapi di sini saya menggunakan `var`. Dalam artikel ini bisa kita abaikan saja pertanyaan *Apa sih fungsi var, public, protected dan private* Karena bahasan mengenai keyword `public`, `protected` dan `private` akan dibahas dalam artikel tersendiri yaitu tentang <mark><em>visibility</em></mark>.

```php
...
    function showSalam()
    {
        echo "<b>Salam...</b><br />Semoga sehat selalu... :)";
    }
...
```

Ini adalah *method*, seperti yang sudah saya jelaskan pada artikel sebelum ini.

```php
...
$Khoerodin = new User();
...
```

Nah ini adalah <mark>instansiasi <em>object</em></mark> yaitu cara membuat *object* dari sebuah *class* yang dalam hal ini yaitu class `User`.

```php
...
$Khoerodin->name = "Khoerodin";
$Khoerodin->username = "khoerodin";
$Khoerodin->brithdate = "01 Januari 2017";
$Khoerodin->address = "Ciamis, Indonesia";
...
```

Baris berikutnya yaitu memberikan nilai kepada *property* yang berada dalam *obejct* `$Khoerodin`. Perhatikan baik-baik, _property_ `name`, `username`, `brithdate` dan `address` itu berada dalam _class_ `User` yang selanjunya di _instansiasi_ menjadi _object_ `$Khoerodin`.

```php
...
echo "<b>Name:</b> " . $Khoerodin->name;
echo "<br />";
echo "<b>Username:</b> " .$Khoerodin->username;
echo "<br />";
echo "<b>Brithdate:</b> " .$Khoerodin->brithdate;
echo "<br /><br />";
...
```

Selanjutnya yaitu memanggil dan menampilkan *property* yang isinya berupa nilai yang telah diberikan kepada *property* dalam *object* `$Khoerodin`.

```php
...
echo $Khoerodin->showSalam();
...
```

Ini untuk memanggil method `showSalam()` dengan *object* `$Khoerodin`.

### Objek Sebagai Entitas Terpisah
```php
// sekarang buat object Andi
$Andi = new User();

// set property
$Andi->name = "Andi";
$Andi->username = "andi";
$Andi->brithdate = "02 Januari 2017";
$Andi->address = "Cilacap, Indonesia";

// tampilkan property
echo "<b>Name:</b> " . $Andi->name;
echo "<br />";
echo "<b>Username:</b> " .$Andi->username;
echo "<br />";
echo "<b>Brithdate:</b> " .$Andi->brithdate;
echo "<br /><br />";

// tampilkan method
echo $Andi->showSalam();
```

Setiap objek merupakan bagian terpisah, pada contoh baris kode di atas kita membuat *object* baru yaitu *obejct* `$Andi`. Sama seperti *object* `$Khoerodin` object `$Andi` ini juga berasal dari satu *class* yang sama yaitu class `User`. Semua *method* dan *property* dalam *obejct* `$Andi` akan sama persis dengan *method* dan *property* dalam object `$Khoerodin`. Tapi *object* `$Khoerodin` dan *object* `$Andi` merupakan entitas berbeda atau terpisah, sehingga kita bisa memberikan nilai yang berbeda pada masing-masing *object* sebagaimana contoh diatas. Coba deh jalankan contoh kode program paling atas biar lebih gamblang dan nanti hasilnya harusnya begini:

**Name:** Khoerodin  
**Username:** khoerodin  
**Brithdate:** 01 Januari 2017  

**Salam..**  
Semoga sehat selalu... :)  

**Name:** Andi  
**Username:** andi  
**Brithdate:** 02 Januari 2017  

**Salam..**  
Semoga sehat selalu... :)