---
title: "Static Property dan Static Method dalam OOP PHP"
clean_title: "Static Property dan Static Method"
date: '2017-02-13 19:00:00'
description: Static property dan static method adalah property dan method yang langsung dapat diakses dari class tanpa instansiasi class (pembuatan object) terlebih dahulu. Cara mendeklarasikannya yaitu property atau method diawali menggunakan keyword static.
layout: episode
published: true
redirect_from:
  - /static-property-dan-static-method-dalam-oop-php/
---

_Static property_ dan _static method_ adalah _property_ dan _method_ yang langsung dapat diakses dari _class_ tanpa _instansiasi class_ (pembuatan _object_) terlebih dahulu. Cara mendeklarasikannya yaitu _property_ atau _method_ diawali menggunakan keyword `static`.

_Static property_ dan _static method_ juga menerima _visibility keyword_ seperti `public`, `protected` atau `private`, namun jika _visibility keyword_ tidak dideklarasikan maka otomatis dideklarasikan sebagai `public`.

Untuk mengakses _static property_ dan _static method_ tidak menggunakan keyword `$this` tapi menggunakan keyword `self`.

Perhatikan dan fahami contoh-contoh berikut:  

### 1. Static Property

{% highlight php %}
<?php
class User
{
    // diawali dengan keyword static
    // setelah visibility keyword
    public static $address = 'Sumbawa';

    public function showAddress() {
        echo self::$address;
    }
}

class Bio extends User
{
    public function showBio() {
        echo "Nama saya Bagus, alamat saya " . parent::$address;
    }
}

// cara akses static property
// langsung dari class User
echo User::$address . "<br/>";

// akses static property
// yang berada dalam method
// dengan terlebih dahulu
// membuat object
$Bagus = new User();
echo $Bagus->showAddress() . "<br/>";

// Undefined "Property"
// karena static property
// tidak boleh menggunakan ->
echo $Bagus->address . "<br/>";

// cara akses static property
// dari object
echo $Bagus::$address . "<br/>";

// mulai PHP 5.3.0
// mengakses static property
// bisa dengan terlebih dahulu membuat
// variable yang ber-value nama class
$ini_variable = 'User';
echo $ini_variable::$address . "<br/>";

// akses static property
// dari class turunan (extended class)
echo Bio::$address . "<br/>";

// akses dari method yang berisi
// static property yang
// berasal dari class induk
$BioObject = new Bio();
echo $BioObject->showBio();
{% endhighlight %}

### 2. Static Method

{% highlight php %}
<?php
class User {
    // diawali dengan keyword static
    // setelah visibility keyword
    public static function showBio() {
        echo "Nama saya Bagus. ";
    }
}

// mengakses static method
// langsung menggunakan class
// tanpa instansiasi object
User::showBio();

// khusus method, bisa diakses
// menggunakan object
$UserObject = new User();
$UserObject::showBio();

// mulai PHP 5.3.0
// mengakses static method
// bisa dengan terlebih dahulu membuat
// variable yang ber-value nama class
$this_variable = 'User';
$this_variable::showBio();
{% endhighlight %}

Mudah bukan? silakan kasih komentar jika belum faham :blush:
