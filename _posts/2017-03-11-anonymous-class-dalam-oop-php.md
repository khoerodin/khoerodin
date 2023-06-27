---
title: Anonymous Class dalam OOP PHP - Ep. 16
date: 2017-03-11 06:25:00 +07:00
description: Seperti namanya Anonymous Class adalah class anonim alias tanpa nama. Anonymous class sangat berguna jika kita mendadak membutuhkan object sederhana tanpa ingin ribet didahului pembuatan regular class seperti biasanya. Anonymous class mulai diperkenalkan oleh PHP 7.0, kita perhatikan contoh ini, keterangan saya sisipkan dalam baris kode
layout: post
tags: SeriOOPPHP php
redirect_from: /object-oriented-php/anonymous-class-dalam-oop-php
---

Seperti namanya _Anonymous Class_ adalah class anonim alias tanpa nama. _Anonymous class_ sangat berguna jika kita mendadak membutuhkan _object_ sederhana tanpa ingin ribet didahului pembuatan _regular class_ seperti biasanya.

_Anonymous class_ mulai diperkenalkan oleh PHP 7.0, kita perhatikan contoh ini, keterangan saya sisipkan dalam baris kode

```php
class User {

  private $name;

  public function setName($givenName) {
     $this->name = $givenName;
  }

  public function getName() {
     return $this->name;
  }

}

// instansiasi
$obj = new User;

// setName() diisi oleh
// argumen yaitu
// sebuah object dari class
// tanpa nama yang dibuat
// mendadak (anonymous class)
$obj->setName(new class {

  public function show($name) {
     return "Given name: " . $name;
  }

});

// method show() berasal dari
// anonymous class dan
// jika ini dijalankan akan keluar
// Given name: Bagus
echo $obj->getName()->show("Bagus");
```

Saya kembali membuat kode program seperti di atas namun tidak menggunakan anonymous class

```php
class User {

  private $name;

  public function setName($givenName) {
     $this->name = $givenName;
  }

  public function getName() {
     return $this->name;
  }

}

// dibikin class regular
// bukan sebagai anonymous class
class ShowName {

  public function show($name) {
     return "Given name: " . $name;
  }

}

// instansiasi
$show = new ShowName();
$user = new User;

// set name dari object
$user->setName($show);

// jika ini dijalankan akan sama
// hasilnya dengan contoh pertama
echo $user->getName()->show("Bagus");
```

Jika kode program di atas dijalankan hasilnya akan tetap sama, hanya saja pada contoh yang kedua tidak lagi menggunakan anonymous class. Lebih simple contoh yang pertama kan? 😃

## Seperti class regular
_Anonymous class_ bertindak seperti _class_ regular:
### Boleh diberi argumen, meng-*extend class* lain, meng-*implement interface* dan menggunakan _trait_.

```php
class ThisClass {}
interface ThisInterface {}
trait ThisTrait {}

class User {

  private $name;

  public function setName($givenName) {
     $this->name = $givenName;
  }

  public function getName() {
     return $this->name;
  }

}

// instansiasi
$obj = new User;

// anonymous class
// diberi argumen 'Hartono', meng-extends ThisClass
// dan meng-implement ThisInterface
$obj->setName(new class('Hartono') extends ThisClass implements ThisInterface {

  // menggunakan ThisTrait
  use ThisTrait;

  private $last_name;

  public function __construct($last_name)
  {
      $this->last_name = $last_name;
  }

  public function show($name) {
     return "Given name: " . $name . " " . $this->last_name;
  }

});

// jika dijalankan akan keluar:
// Given name: Bagus Hartono
echo $obj->getName()->show("Bagus");
```

### Tidak boleh akses private dan protected
Ketika _anonymous class_ dibungkus oleh class lain, walaupun dibungkus oleh _class_ lain tetap saja _anonymous class_ tidak diperbolehkan mengakses _private_ dan _protected method_ atau _property_ yang berasal dari _class_ yang membungkusnya.

Berikut contohnya, keterangan disisipkan dalam baris kode
```php
class Bungkus
{
    private $warna = 'coklat ';

    protected $bahan = 'kertas ';

    public function untukWadah() {
      return "Nasi Padang";
    }

    public function diPakai() {

        // jika ingin menggunakan protected property
        // dari class Bungkus maka harus
        // meng-extend class Bungkus
        // walaupun anonymous class
        // dibungkus / berada dalam class Bungkus
        return new class($this->warna) extends Bungkus {

            private $warnanya;

            public function __construct($beriWarna)
            {
                $this->warnanya = $beriWarna;
            }

            public function makanan()
            {
                // $this->bahan berasal dari class Bungkus
                // boleh diakeses setelah meng-extend class Bungkus
                return "Bungkus " . $this->bahan . $this->warnanya . "dipakai untuk wadah " . $this->untukWadah();
            }
        };
    }
}

$obj = new Bungkus();

// jika dijalankan hasilnya:
// Bungkus kertas coklat dipakai untuk wadah Nasi Padang
echo $obj->diPakai()->makanan();
```

Ingat ya.. hanya seperti, bukan sama. Untuk keperluan _inheritance_ tetap saja membutuhkan _class regular_ yang memiliki nama.

Sebenarnya _anonymous class_ memiliki nama, ini bisa kita buktikan dengan menjalankan sebuah _function_ yang digunakan untuk mengambil nama _class_ dari sebuah _object_: `get_class(object)`

```php
echo get_class(new class {});
```

Ada yang ditanyakan? 😎
