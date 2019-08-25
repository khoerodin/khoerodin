---
title: "Visibility dalam OOP PHP"
clean_title: "Visibility"
date: '2017-02-12 15:25:00'
description: Property, Method dan Konstanta dapat dikontrol aksesnya menggunakan visibility keyword. Terdapat tiga keyword yaitu public, protected dan private. Dalam literatur lain ini umum juga disebut dengan istilah enkapsulasi atau encapsulation.
layout: episode
published: true
---

<mark><em>Property</em></mark>, <mark><em>Method</em></mark> dan <mark>Konstanta</mark> (khusus konstanta mulai PHP 7.1.0) dapat dikontrol aksesnya menggunakan _visibility keyword_. Terdapat tiga _keyword_ yaitu `public`, `protected` dan `private`. Dalam literatur lain ini umum juga disebut dengan istilah enkapsulasi atau <mark>encapsulation</mark>. Cara menggunakannya yaitu dengan memberikan _prefix_ berupa salah satu dari tiga _visibility keyword_ pada _property_, _method_ dan konstanta.

Berikut penjelasan untuk masing-masing dari ketiga _visibility keyword_:

### 1. Public  
Artinya _property_, _method_ atau Konstanta dapat diakses dari dalam maupun luar _class_.

### 2. Protected  
Artinya _property_, _method_ atau konstanta hanya dapat diakses dari dalam _class_ dan _extended/inherited class_ (akan dijelaskan pada episode tentang <mark>pewarisan</mark>).

### 3. Private  
Artinya _property_, _method_ atau konstanta hanya dapat diakses dari dalam _class_ itu sendiri.

Mari kita praktekkan penggunaan _visibility keyword_

### 1. Property Visibility
_Property_ harus didefinisikan sebagai `public`, `protected` atau `private`, jika dideklarasikan menggunakan `var` maka otomatis didefinisikan sebagai `public`.

{% highlight php %}
<?php
class User {

    var $name = 'Khoerodin';
    public $username = 'khoerodin';
    protected $brithdate = '01 Januari 2017';
    private $address = 'Ciamis, Indonesia';

    function showBio()
    {
        echo $this->name;
        echo $this->username;
        echo $this->brithdate;
        echo $this->address;
    }

}

// buat object $UserGanteng :D dari class User
$UserGanteng = new User();

// Menampilkan name
echo $UserGanteng->name;
{% endhighlight %}

Jika kode di atas dijalankan maka akan keluar `Khoerodin`, coba sekarang ganti dengan `echo $UserGanteng->brithdate;`, apa yang terjadi? maka akan `Fatal Error`, karena _property_ `$brithdate` itu `protected`. 

Begitu juga jika diganti dengan `echo $UserGanteng->address` akan `Fatal Error`, karena _property_ `$address` itu `private`. 

Sekarang ganti lagi dengan `$UserGanteng->showBio();`, ini tidak akan error karena memanggil _public method_ walaupun berisi `protected` dan `private` _property_.

### 2. Method Visibility
<mark><em>Method</em></mark> bisa didefinisikan sebagai `public`, `protected` atau `private`, jika dideklarasikan <mark>tanpa</mark> menggunakan salah satu dari tiga _visibility keyword_ tersebut maka otomatis didefinisikan sebagai `public`.

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

### 3. Constant Visibility
<mark>Mulai PHP 7.1.0</mark> konstanta atau lebih tepatnya konstanta _class_ dapat didefinisikan sebagai `public`, `protected` atau `private`. Jika konstanta dideklarasikan <mark>tanpa</mark> menggunakan salah satu dari tiga _visibility keyword_ tersebut maka otomatis didefinisikan sebagai `public`.

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

Demikian pembahasan tentang _visibility_ dalam <a href="{{ site.url }}/object-oriented-php">Object-Oriented PHP</a> atau yang biasa disebut dengan <mark><em>encapsulation</em></mark>.
