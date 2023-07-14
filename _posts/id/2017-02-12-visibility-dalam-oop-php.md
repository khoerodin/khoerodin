---
title: Visibility dalam OOP PHP - Ep. 6
date: 2017-02-12 15:25:00 +07:00
description: Property, Method dan Konstanta dapat dikontrol aksesnya menggunakan visibility keyword. Terdapat tiga keyword yaitu public, protected dan private. Dalam literatur lain ini umum juga disebut dengan istilah enkapsulasi atau encapsulation.
layout: post
tags: serioopphp php
redirect_from:
  - /object-oriented-php/visibility-dalam-oop-php
  - /visibility-dalam-oop-php
---

Property_, _Method_ dan _Constant_ (khusus konstanta mulai PHP 7.1.0) dapat dikontrol aksesnya menggunakan _visibility keyword_. Terdapat tiga _keyword_ yaitu `public`, `protected` dan `private`. Dalam literatur lain ini umum juga disebut dengan istilah enkapsulasi atau _encapsulation_. Cara menggunakannya yaitu dengan memberikan _prefix_ berupa salah satu dari tiga _visibility keyword_ pada _property_, _method_ dan _constant_.

Berikut penjelasan untuk masing-masing dari ketiga _visibility keyword_:

## 1. Public
Artinya _property_, _method_ atau _constant_ dapat diakses dari dalam maupun luar _class_.

## 2. Protected
Artinya _property_, _method_ atau _constant_ hanya dapat diakses dari dalam _class_ dan _extended/inherited class_ (akan dijelaskan pada episode tentang pewarisan).

## 3. Private
Artinya _property_, _method_ atau _constant_ hanya dapat diakses dari dalam _class_ itu sendiri.

Mari kita praktekkan penggunaan _visibility keyword_

## 1. Property Visibility
_Property_ harus didefinisikan sebagai `public`, `protected` atau `private`, jika dideklarasikan menggunakan `var` maka otomatis didefinisikan sebagai `public`.

{% highlight php %}
<?php
class User {

    var $name = 'Khoerodin';
    public $username = 'khoerodin';
    protected $birthdate = '01 Januari 2017';
    private $address = 'Ciamis, Indonesia';

    function showBio()
    {
        echo $this->name;
        echo $this->username;
        echo $this->birthdate;
        echo $this->address;
    }

}

// buat object $UserGanteng :D dari class User
$UserGanteng = new User();

// Menampilkan name
echo $UserGanteng->name;
{% endhighlight %}

Jika kode di atas dijalankan maka akan keluar `Khoerodin`, coba sekarang ganti dengan `echo $UserGanteng->birthdate;`, apa yang terjadi? maka akan `Fatal Error`, karena _property_ `$birthdate` itu `protected`.

Begitu juga jika diganti dengan `echo $UserGanteng->address` akan `Fatal Error`, karena _property_ `$address` itu `private`.

Sekarang ganti lagi dengan `$UserGanteng->showBio();`, ini tidak akan error karena memanggil `public` `method` walaupun berisi `protected` dan `private` _property_.

## 2. Method Visibility
_Method_ bisa didefinisikan sebagai `public`, `protected` atau `private`, jika dideklarasikan **tanpa** menggunakan salah satu dari tiga _visibility keyword_ tersebut maka otomatis didefinisikan sebagai `public`.

{% highlight php %}
<?php
class User {

    // mendeklarasikan public method
    public function publicMethod(){
    	echo 'Ini Public Method';
    }

    // mendeklarasikan protected method
    protected function protectedMethod(){
    	echo 'Ini Protected Method';
    }

    // mendeklarasikan private method
    private function privateMethod(){
    	echo 'Ini Private Method';
    }

    // tanpa visibility keyword
    // otomatis public
    function showAll()
    {
        echo $this->publicMethod() . '<br/>';
        echo $this->protectedMethod() . '<br/>';
        echo $this->privateMethod();
    }

}

// buat object $Khoerodin dari class User
$Khoerodin = new User();

// kode di bawah jalankan satu per satu ya

// output 'Ini Public Method'
$Khoerodin->publicMethod();

// Fatal Error, karena protected
$Khoerodin->protectedMethod();

// Fatal Error, karena private
$Khoerodin->privateMethod();

// Sedangkan ini tidak error karena memanggil method
// yang dideklarasikan tidak menggunakan visibility keyword
// otomatis public
$Khoerodin->showAll();
{% endhighlight %}

## 3. Constant Visibility
**Mulai PHP 7.1.0** konstanta atau lebih tepatnya konstanta _class_ dapat didefinisikan sebagai `public`, `protected` atau `private`. Jika konstanta dideklarasikan **tanpa** menggunakan salah satu dari tiga _visibility keyword_ tersebut maka otomatis didefinisikan sebagai `public`.

{% highlight php %}
<?php
class User {

    // mendeklarasikan public konstanta
    public const PUBLIC_CONSTANT = 'Ini Public Constant';

    // mendeklarasikan protected konstanta
    protected const PROTECTED_CONSTANT = 'Ini Protected Constant';

    // mendeklarasikan private konstanta
    private const PRIVATE_CONSTANT = 'Ini Private Constant';

    function showAll()
    {
        echo self::PUBLIC_CONSTANT . '<br/>';
        echo self::PROTECTED_CONSTANT . '<br/>';
        echo self::PRIVATE_CONSTANT;
    }

}

// buat object $Khoerodin dari class User
$Khoerodin = new User();

// kode di bawah jalankan satu per satu ya
// agar lebih gampang jika ada errornya ;)

// output 'Ini Public Constant'
$Khoerodin::PUBLIC_CONSTANT;

// Fatal Error, karena protected
$Khoerodin::PROTECTED_CONSTANT;

// Fatal Error, karena private
$Khoerodin::PRIVATE_CONSTANT;

// tampil semua karena berada dalam
// public method
$Khoerodin->showAll();
{% endhighlight %}

Demikian pembahasan tentang _visibility_ dalam <a href="/tag/serioopphp">Object-Oriented PHP</a> atau yang biasa disebut dengan <em>encapsulation</em>.
