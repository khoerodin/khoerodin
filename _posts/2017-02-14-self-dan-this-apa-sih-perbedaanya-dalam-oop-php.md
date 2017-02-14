---
title: "Self dan $this, Apa Perbedaanya dalam OOP PHP?"
date: '2017-02-14 09:38:00'
description: 
tags:
- BelajarOOPPHP
published: true
---

Dalam bahasa yang sangat sederhana `$this` digunakan untuk mereferensikan _property_ atau _method_ yang berada dalam _current object_. Sedangkan `self` digunakan untuk mereferensikan _property_ atau _method_ yang berada dalam _current class_.

Jika sudah faham artikel saya tentang <a href="{{ site.url }}/pewarisan-object-inheritance-dalam-oop-php/" target="_blank">pewarisan</a>, mari kita perhatikan dan praktekkan kode dibawah ini:

**1. Penggunaan `$this`**

```php
class Penulis {

    public function saya() {
        echo "Saya penulis :)";
    }

    public function sayaAdalah() {
       $this->saya();
    }
}

class Programmer extends Penulis {

    public function saya() {
        echo "Saya programmer :)";
    }

}

$TukangKode = new Programmer();
$TukangKode->sayaAdalah();
```

Jika kode di atas dijalankan maka outputnya `Saya programmer :)`. 

Jika kita perhatikan, baik _class_ `Penulis` maupun _class_ `Programmer` sama-sama memiliki _method_ `saya()`. Kemudian _class_ `Programmer` adalah _class_ turunan dari _class_ `Penulis` yaitu dengan melakukan `extends Penulis`. 

Pada baris bawah terdapat instansiai _object_ `$TukangKode` dari _class_ `Programmer`. Selanjutnya _object_ `$TukangKode` memanggil method `sayaAdalah()` yang berasal dari _class_ induk atau _parent class_. _Method_ `sayaAdalah()` memanggil method `saya()` menggunakan `$this` diikuti `->`.

Karena menggunakan `$this` ini berarti yang dimaksud `saya()` **bukanlah** `saya()` yang berada dalam _parent class_ atau _class_ `Penulis` melainkan `saya()` yang berada dalam **_object_-nya sendiri** atau dalam _object_ `$TukangKode`, yaitu `saya()` yang berisi `echo "Saya programmer :)";`.

**2. Penggunaan `self`**

```php
class Penulis {

    public function saya() {
        echo "Saya penulis :)";
    }

    public function sayaAdalah() {
       self::saya();
    }
}

class Programmer extends Penulis {

    public function saya() {
        echo "Saya programmer :)";
    }

}

$TukangKode = new Programmer();
$TukangKode->sayaAdalah();
```

Jika kode di atas dijalankan maka outputnya `Saya penulis :)`.

Perbedaan kode program ke dua dengan kode program pertama hanyalah pada method `sayaAdalah()`, dalam _method_ tersebut tidak lagi menggunakan `$this` ketika memanggil _method_ `saya()` melainkan menggunakan `self`.

Karena menggunakan `self` ini berarti yang dimaksud `saya()` **bukanlah** `saya()` yang berada dalam **_object_-nya sendiri** atau dalam _object_ `$TukangKode` melainkan `saya()` yang berada dalam **_class_-nya sendiri** atau _class_ `Penulis` yang berisi `echo "Saya penulis :)";`.

Mudah di fahami kan? jika belum faham silakan berikan komentar :blush:. Kode program di atas hanyalah contoh sederhana, lain lagi jika kita dihadapkan dengan kasus-kasus yang lebih kompleks yang saya tulis dalam **ebook** saya.



