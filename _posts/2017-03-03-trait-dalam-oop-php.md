---
title: Trait dalam OOP PHP - Ep. 15
date: 2017-03-03 10:50:00 +07:00
description: Trait adalah suatu mekanisme dimana suatu class diizinkan untuk menggunakan kembali kode program (code reuse) yang berasal dari hirarki yang berbeda. Mari kita perhatikan contoh di bawah ini, saya buat tiga buah class agar lebih mudah untuk difahami.
layout: post
tags: SeriOOPPHP php
redirect_from: /object-oriented-php/trait-dalam-oop-php
---

_Trait_ adalah suatu mekanisme dimana suatu _class_ diizinkan untuk menggunakan kembali kode program _(code reuse)_ yang berasal dari hirarki yang berbeda.

- toc
{: toc }

Mari kita perhatikan contoh di bawah ini, saya buat tiga buah class:

```php
class ApaKabar
{
    public function apaKabar() {
        return "Apa kabar?";
    }
}

class SelamatPagi
{
    public function selamatPagi() {
        return "Selamat pagi?";
    }
}

class Pesan
{
  //
}
```

Jika kita menghendaki `class Pesan` bisa menggunakan _method_ `apaKabar()` maka kita tinggal melakukan `extends` ke _class_ `ApaKabar` seperti:

```php
class ApaKabar
{
    public function apaKabar() {
        return "Apa kabar?";
    }
}

class Pesan extends ApaKabar
{
  //
}

$obj = new Pesan();
echo $obj->apaKabar();
```

Terus bagaimana jika kita ingin `class Pesan` dapat menggunakan _method_ `apaKabar()` dan `selamatPagi()`? _class_ `Pesan` meng-*extends* _class_ `ApaKabar` dan _class_ `SelamatPagi`? tentu ini tidak diperbolehkan oleh PHP, PHP hanya memperbolehkan satu _parent class_ . Untuk itulah adanya **`Trait`**

## 1. Cara membuat trait
Sama seperti pembuatan _class_, hanya saja `class` diganti dengan `trait`

```php
// dengan keyword trait
trait ApaKabar
{
    public function apaKabar() {
        return "Apa kabar?";
    }
}
```

## 2. Cara memakai trait
Cara memakai _trait_ yaitu dengan menggunakan _keyword_ `use` dalam sebuah _class_ dan diiringi nama _trait_

```php
trait ApaKabar
{
    public function apaKabar() {
        return "Apa kabar?";
    }
}

class Pesan
{
  // menggunakan use
  use ApaKabar;
}

$obj = new Pesan();
echo $obj->apaKabar();
```

## 3. Multiple trait
Satu _class_ boleh memakai lebih dari satu _trait_, cara memanggilnya dipisahkan oleh koma

```php
trait ApaKabar
{
    public function apaKabar() {
        return "Apa kabar?" . PHP_EOL;
    }
}

trait SelamatPagi
{
    public function selamatPagi() {
        return "Selamat pagi?";
    }
}

class Pesan
{
  // menggunakan trait lebih dari satu
  use ApaKabar, SelamatPagi;
}

$obj = new Pesan();
echo $obj->apaKabar();
echo $obj->selamatPagi();
```

## 4. Sebuah trait tersusun dari banyak trait
Sebuah _trait_ boleh tersusun dari _trait_ yang telah ada

```php
// trait pertama
trait ApaKabar
{
    public function apaKabar() {
        // PHP_EOL adalah
        // garis baru (enter) lintas platform
        return "Apa kabar?" . PHP_EOL;
    }
}

// trait kedua
trait SelamatPagi
{
    public function selamatPagi() {
        return "Selamat pagi?";
    }
}

// trait ketiga,
trait KabarSelamat
{
    // tersusun dari kedua trait di atas
    use ApaKabar, SelamatPagi;
}

class Pesan
{
  // memakai trait yang
  // tersusun dari trait
  use KabarSelamat;
}

$obj = new Pesan();
echo $obj->apaKabar();
echo $obj->selamatPagi();
```

## 5. Trait tidak bisa dijadikan object (diinstansiasi)
Jika ini tetap dijalankan maka akan keluar error: `PHP Fatal error:  Uncaught Error: Cannot instantiate trait ApaKabar ...`

```php
trait ApaKabar
{
    public function apaKabar() {
        return "Apa kabar?" . PHP_EOL;
    }
}

$obj = new ApaKabar();
```

## 6. Urutan prioritas method
Urutan prioritas _method_ dalam _trait_ memiliki dua aturan:

1. **Method turunan akan ditimpa** oleh method yang berasal dari _trait_
2. _**Current class method akan menimpa**_ method yang berasal dari _trait_

Ini contoh untuk aturan pertama

```php
class ApaKabar
{
    // ini akan diturunkan
    public function apaKabar() {
        return "Apa kabar?" . PHP_EOL;
    }
}

trait SelamatPagi
{
    public function selamatPagi() {
        return "Selamat pagi?";
    }

    // apaKabar() dari trait
    public function apaKabar() {
        return "Apa kabar pagi ini?" . PHP_EOL;
    }
}

class Pesan extends ApaKabar
{
    use SelamatPagi;
}

$pesan = new Pesan();
// yang dipakai adalah apaKabar() dari trait
echo $pesan->apaKabar();
// jika dijalankan akan keluar
// Apa kabar pagi ini?
```

_Class_ `Pesan` adalah turunan dari _class_ `ApaKabar` yaitu dengan meng-*extends* `ApaKabar` dan class `Pesan` juga menggunakan _trait_ `SelamatPagi` yaitu dengan `use SelamatPagi`.

Baik `class ApaKabar` maupun `trait SelamatPagi` sama-sama memiliki _method_ `apaKabar()` tetapi isinya berbeda, yaitu `Apa kabar?` dan `Apa kabar pagi ini?`.

Dengan kondisi seperti ini ketika _object_ `$pesan` memanggil method `apaKabar()` maka `apaKabar()` yang didahulukan adalah `apaKabar()` dalam _trait_ yang berisi `Apa kabar pagi ini?`

Ini contoh untuk aturan kedua:

```php
trait ApaKabar
{
    // apaKabar() dari trait
    public function apaKabar() {
        return "Apa kabar?";
    }
}

class Pesan
{
    use ApaKabar;
    // apaKabar() dari current class
    public function apaKabar() {
      return "Apa kabarnya sekarang?";
    }
}

$pesan = new Pesan();
// yang dipakai adalah apaKabar() dari class Pesan
// bukan apaKabar() dari trait ApaKabar
echo $pesan->apaKabar();
// coba jalankan maka akan keluar
// Apa kabarnya sekarang?
```

## 7. Menangani konflik
Ketika sebuah _class_ menggunakan _trait_ lebih dari satu, kita bisa saja menemukan kondisi dimana _trait_ yang berbeda menggunakan nama method yang sama, seperti contoh ini

```php
trait Selamat
{
    public function salam() {
        return "Selamat pagi?";
    }
}

trait Sapaan
{
    public function salam() {
        return "Assalamu'alaikum?";
    }
}

class Pesan
{
    use Selamat, Sapaan;
}

$pesan = new Pesan();
echo $pesan->salam();
```

Ketika kode program di atas tetap dijalankan maka akan keluar fatal error. Lalu bagaimana agar tetap bisa dijalankan?

Terdapat dua cara:

1. Menyingkirkan _method_ yang tidak dibutuhkan diantara method-method yang sama menggunakan mengggunakan _keyword_ `insteadof`.

2. Tetap membawa _method_ yang sama ke dalam class dengan diberikan alias untuk membedakannya yaitu menggunakan keyword `as`

Contoh untuk cara pertama:

```php
trait Ucapan
{
    public function salam() {
        return "Pagi....?";
    }
}

trait Selamat
{
    public function salam() {
        return "Assalamu'alaikum?";
    }
}

trait Sapaan
{
    public function salam() {
        return "Selamat pagi?";
    }
}

class Pesan
{
    // mengeliminasi method salam()
    // dari trait Ucapan dan Sapaan
    // mengguanakan insteadof
    use Ucapan, Selamat, Sapaan {
        Selamat::salam insteadof Ucapan, Sapaan;
    }
}

$pesan = new Pesan();
echo $pesan->salam();
```

jika kita perhatikan kode program di atas dalam _class_ `Pesan` terdapat `Selamat::salam insteadof Ucapan, Sapaan;` yang artinya yang akan digunakan adalah method `salam()` dalam trait `Selamat` bukan dari trait `Ucapan` dan `Sapaan`.

Contoh untuk cara kedua:

```php
trait Ucapan
{
    public function salam() {
        return "Pagi....?";
    }
}

trait Selamat
{
    public function salam() {
        return "Assalamu'alaikum?" . PHP_EOL;
    }
}

trait Sapaan
{
    public function salam() {
        return "Selamat pagi?";
    }
}

class Pesan
{
    // membuat alias menggunakan as
    // krn ingin tetap memakai salam()
    // dari trait Sapaan
    use Ucapan, Selamat, Sapaan {
        Selamat::salam insteadof Ucapan, Sapaan;
        Sapaan::salam as salamKedua;
    }
}

$pesan = new Pesan();
echo $pesan->salam();
echo $pesan->salamKedua();
```

jika kita perhatikan kode program di atas dalam _class_ `Pesan` terdapat `Sapaan::salam as salamKedua;` artinya method `salam()` dalam trait `Sapaan` tetap dipakai tetapi diberikan alias `salamKedua` agar beda dengan `salam()` dari trait `Selamat`.

## 8. Trait boleh memiliki property
_Trait_ boleh memiliki _property_ tetapi _class_ yang menggunakan _trait_ tersebut tidak diizinkan mendefinisikan kembali _property_ dengan nama yang sama.

Jika _class_ tetap mendefinisikan ulang _property_ dengan nama yang sama, selama tingkat visibilitas dan _value_-nya sama dengan _property_ yang berada dalam trait maka akan keluar peringatan `E_STRICT`.

Jika tingkat visibilitas dan atau _value_-nya tidak sama dengan _property_ yang berada dalam trait maka akan keluar fatal error.

```php
trait Selamat {
    public $satu = 1;
    protected $dua = 2;
}

class Pesan {
    use Selamat;
    public $satu = 1; // keluar peringatan
    public $dua = 2; // Fatal error
}
```

## 9. Method dalam trait boleh mengakses method dan property dalam class yang memakainya meskipun private

```php
trait BukaPesan
{
    protected function BukaPesan() {
      return $this->pesan;
    }
}

class PesanPrivate
{
    use BukaPesan;
    private $pesan = 'Ini pesan private';

    public function pesanPrivate() {
      return $this->BukaPesan();
    }
}

$pesan = new PesanPrivate();
echo $pesan->pesanPrivate();
// bisa akses pesan private, coba praktekkan
```

## 10. Trait boleh memiliki abstract method
Penggunaannya sama saja seperti dalam _abstrct class_

```php
trait Selamat{
    public function salam() {
        echo 'Selamat pagi '. $this->getName();
    }
    abstract public function getName();
}

class Pesan {
    private $name;
    use Selamat;
    public function getName() {
        return $this->name;
    }
    public function setName($name) {
        $this->name = $name;
    }
}

$obj = new Pesan();
$obj->setName('Andi');
echo $obj->salam(); // Selamat pagi Andi
```

## 11. Merubah visibility method
_Method_ dalam _trait_ boleh diubah *visibility*-nya oleh class menggunakan keyword `as`

```php
trait Selamat {
    public function malam() {
        echo 'Selamat malam!';
    }
}

// merubah visibility malam()
class Pesan {
    use Selamat { malam as protected; }
}

// malam() dibuat alias menjadi ucapanPrivate()
// dan diubah visibility ke private
// sementara malam() visibility-nya tidak berubah
class PesanKedua {
    use Selamat { malam as private ucapanPrivate; }
}
```

Banyak banget ya tulisannya? 😛 walaupun banyak tapi mudah difahami kan? 😊
