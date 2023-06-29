---
title: Class Autoloader dalam OOP PHP - Ep. 7
date: 2017-02-12 21:00:00 +07:00
description: Apa itu Autoloader Class dalam OOP PHP ? Suatu hal yang tidak efisien ialah ketika akan akan menggunakan banyak class programmer membuat setiap _class_ dalam satu file tersendiri dan jika akan menggunakannya programmer meng-include-kan satu per satu file class pada permulaan baris kode. Ini bukan masalah jika hanya melakukan include satu, dua atau lima file, tapi jika puluhan? ratusan bahkan lebih?
layout: post
tags: serioopphp php
redirect_from: /object-oriented-php/class-autoloader-dalam-oop-php
---

Suatu hal yang tidak efisien ialah jika kita akan akan menggunakan banyak _class_, kita membuat setiap _class_ dalam satu _file_ tersendiri dan jika akan menggunakannya _kita_ meng-*include*-kan satu per satu _file class_ pada permulaan baris kode. Ini bukan masalah jika hanya melakukan _include_ satu, dua atau lima _file_, tapi jika puluhan? ratusan bahkan lebih?

Mulai PHP 5 masalah itu sudah bisa diatasi dengan mudah. Misal kita membuat sebuah _class_ `Name` dan disimpan dalam _file_ `Name.php`:

```php
<?php
class Name {

    function showName($name)
    {
    	echo 'Nama saya ' . $name . ' ';
    }

}
```

Buat lagi _class_ yaitu _class_ `Address` dan disimpan dalam _file_ `Address.php`.

```php
<?php
class Address {

    function showAddress($address)
    {
    	echo 'Alamat saya ' . $address;
    }

}
```

Selanjutnya kita panggil dua buah _class_ tersebut dalam satu _file_ `index.php`

```php
<?php
include 'Name.php';
$name = new Name();
$name->showName('Khoerodin');

include 'Address.php';
$address = new Address();
$address->showAddress('Ciamis');
```

Jika kode diatas dijalankan maka akan menghasilkan output `Nama saya Khoerodin Alamat saya Ciamis`. Kode tersebut benar alias tidak ada yang salah, namun seperti yang saya tulis di awal, bagaimana jika *class*nya puluhan bahkan ratusan? tentu akan merepotkan. Kita ubah `index.php` jadi seperti ini:

```php
<?php
spl_autoload_register(function ($class) {
    include $class . '.php';
});

$name = new Name();
$name->showName('Khoerodin');

$address = new Address();
$address->showAddress('Ciamis');
```

Coba jalankan kode tersebut. Ya inilah solusinya, kita tidak usah repot-repot meng-*include* satu per satu _file class_ yang dibutuhkan karena akan repot jika _class_ yang dibutuhkan tidak sedikit. Dengan ini PHP otomatis akan memanggil/melakukan `include` ketika `new Class()` dideklarasikan.

`spl_autoload_register()` fungsinya untuk me*register* _function_ atau *static method* yang berisi _class_,  selanjutnya apabila ada _class_ yang diinstansiasi menggunakan `new Class()` PHP akan melakukan antrian (queue/stack) dan memanggilnya secara berurutan.

Mudah bukan? 🤩 ayo tetap semangaaat 💪💪💪.
