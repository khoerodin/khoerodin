---
title: "Konstanta Class dalam OOP PHP"
clear_title: "Konstanta Class"
date: '2017-02-12 08:06:00'
description: Konstanta Class atau Class Constants adalah konstanta yang didefinisikan di dalam sebuah class. Sebagaimana konstanta regular konstanta class juga berisi nilai tetap dan tidak bisa diubah sepanjang program berjalan.
layout: episode
published: true
---

Konstanta Class atau **_Class Constants_** adalah konstanta yang didefinisikan di dalam sebuah *class*. Sebagaimana <a href="{{ site.url }}/konstanta-dalam-php/" target="_blank" title="konstanta regular">konstanta *regular*</a> konstanta *class* juga berisi nilai tetap dan tidak bisa diubah sepanjang program berjalan. Nilai atau *value* dari konstanta harus berupa ekspresi *konstan* atau ekspresi tetap yaitu bukan merupakan *variable*, *property* atau *function* dan lain-lain.

### Mendefinisikan Konstanta Class
Mendefinisikan Konstanta *Class* yaitu diawali dengan menggunakan *keyword* `const`. Berikut contoh konstanta dalam sebuah *class*

```php
class User
{
    const JK = 'Laki-laki';
}
```

Agar lebih mudah membedakan antara *variable* dengan konstanta, konstanta biasanya ditulis menggunakan huruf kapital.

### Cara Akses atau Menggunakan Konstanta Class
**1. Akses dari dalam Class itu sendiri**

Caranya yaitu dengan menggunakan *keyword* `self` diikuti dengan titik dua ganda *(double colon)* dan konstanta.

```php
class User
{
    const JK = 'Laki-laki';

    function showJK() {
        echo self::JK;
    }
}
```

**2. Akses dari luar Class**

Menggunakan nama *class*, *double colon* dan konstanta.

```php
class User
{
    const JK = 'Laki-laki';
}

echo User::JK;
```

**3. Akses dari object**

Caranya yaitu menggunakan *object*, *double colon* dan konstanta.  

```php
class User
{
    const JK = 'Laki-laki';
}

$objek = new User();
echo $objek::JK; // Mulai PHP 5.3.0
```

**3. Akses dari variable yang ber-value nama sebuah class**

Nama *class* terlebih dahulu dijadikan *variable value*. Tapi perlu diperhatikan bahwa *variable value* tidak boleh berupa *keyword* seperti `self`, `parent` and `static`.

```php
class User
{
    const JK = 'Laki-laki';
}
$classname = "User";
echo $classname::JK; // Mulai PHP 5.3.0
```

### Tambahan
Mulai PHP 5.6.0 Konstanta *Class* juga dapat ber-*value* dari konstanta *regular*.

```php
const SATU = 1;

class User {
    // Mulai PHP 5.6.0
    const DUA = SATU * 2;
    const TIGA = SATU + self::DUA;
    const EMPAT = 'Nilai dari TIGA adalah '.self::TIGA;
}
```

Mulai PHP 7.1.0 **_Visibility Modifier_** juga bisa ditambahkan ke Konstanta *Class*.

```php
class User {
    // Mulai PHP 7.1.0
    public const JK = 'Laki-laki';
    private const PENDIDIKAN = 'Strata satu (S1)';
}
echo User::JK . "<br/>";
echo User::PENDIDIKAN;
```

Jika kode diatas dijalankan pasti akan error, karena `const PENDIDIKAN` adalah `private`.

Apa sih *Visibility Modifier* ? akan dijelaskan kok dalam artikel tersendiri tentang **_encapsulation_** atau **_visibility_**, mungkin kali ini bisa diabaikan tentang *Visibility Modifier*.
