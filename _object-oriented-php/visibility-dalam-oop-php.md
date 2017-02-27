---
title: "Visibility dalam OOP PHP"
clear_title: "Visibility"
date: '2017-02-12 15:25:00'
description: Property, Method dan Konstanta (khusus konstanta mulai PHP 7.1.0) dapat dikontrol aksesnya menggunakan visibility keyword. Terdapat tiga keyword_ yaitu public, protected dan private. Dalam literatur lain ini umum juga disebut dengan istilah enkapsulasi atau encapsulation.
layout: episode
published: true
redirect_from:
  - /visibility-dalam-oop-php/
---

**_Property_**, **_Method_** dan **Konstanta** (khusus konstanta mulai PHP 7.1.0) dapat dikontrol aksesnya menggunakan _visibility keyword_. Terdapat tiga _keyword_ yaitu `public`, `protected` dan `private`. Dalam literatur lain ini umum juga disebut dengan istilah enkapsulasi atau **_encapsulation_**. Cara menggunakannya yaitu dengan memberikan _prefix_ berupa salah satu dari tiga _visibility keyword_ pada **_Property_**, **_Method_** dan **Konstanta**.

Berikut penjelasan untuk masing-masing dari ketiga _visibility keyword_:

**1. `Public`**  
Artinya _Property_, _Method_ atau Konstanta dapat diakses dari dalam maupun luar _class_.

**2. `Protected`**  
Artinya _Property_, _Method_ atau Konstanta hanya dapat diakses dari dalam _class_ dan _extended/inherited class_ (akan dijelaskan pada artikel tentang **pewarisan**).

**3. `Private`**  
Artinya _Property_, _Method_ atau Konstanta hanya dapat diakses dari dalam _class_ itu sendiri.

Mari kita praktekkan penggunaan **_visibility keyword_**

### Property Visibility
_Property_ harus didefinisikan sebagai `public`, `protected` atau `private`, jika dideklarasikan menggunakan `var` maka otomatis didefinisikan sebagai `public`. Mari kita praktekkan.

```php
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
```

Jika kode di atas dijalankan maka akan keluar **Khoerodin**, coba sekarang ganti dengan `echo $UserGanteng->brithdate;`, apa yang terjadi? maka akan `Fatal Error`, karena _property_ `$brithdate` itu `protected`. 

Begitu juga jika diganti dengan `echo $UserGanteng->address` akan `Fatal Error`, karena _property_ `$address` itu `private`. 

Sekarang ganti lagi dengan `$UserGanteng->showBio();`, ini tidak akan error karena memanggil _public method_ walaupun berisi `protected` dan `private` _property_.

### Method Visibility
**_Method_** bisa didefinisikan sebagai `public`, `protected` atau `private`, jika dideklarasikan **tanpa** menggunakan salah satu dari tiga _visibility keyword_ tersebut maka otomatis didefinisikan sebagai `public`.

```php
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
```

### Constant Visibility
Mulai PHP 7.1.0 konstanta atau lebih tepatnya konstanta _class_ dapat didefinisikan sebagai `public`, `protected` atau `private`, jika konstanta dideklarasikan **tanpa** menggunakan salah satu dari tiga _visibility keyword_ tersebut maka otomatis didefinisikan sebagai `public`.

```php
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

// output 'Ini Public Constant'
$Khoerodin::PUBLIC_CONSTANT;

// Fatal Error, karena protected
$Khoerodin::PROTECTED_CONSTANT;

// Fatal Error, karena private
$Khoerodin::PRIVATE_CONSTANT;

// tampil semua karena berada dalam
// public method
$Khoerodin->showAll();
```

Demikian pembahasan tentang _visibility_ dalam OOP PHP atau yang biasa disebut dengan _encapsulation_.
