---
title: Konstanta Class dalam OOP PHP - Ep. 5
date: 2017-02-12 08:06:00 +07:00
description: Konstanta Class atau Class Constants adalah konstanta yang didefinisikan di dalam sebuah class. Sebagaimana konstanta regular konstanta class juga berisi nilai tetap dan tidak bisa diubah sepanjang program berjalan.
layout: post
tags: SeriOOPPHP php
redirect_from: /object-oriented-php/konstanta-class-dalam-oop-php
---

Konstanta _Class_ atau _Class Constants_ adalah konstanta yang didefinisikan di dalam sebuah _class_. Sebagaimana [konstanta regular]({% post_url 2017-02-09-konstanta-dalam-php %}), konstanta _class_ juga berisi nilai tetap dan tidak bisa diubah sepanjang program berjalan. Nilai atau *value* dari konstanta harus berupa ekspresi *konstan* atau ekspresi tetap yaitu bukan merupakan variable_, _property_ atau _function_ dan lain-lain.

## Mendefinisikan Konstanta Class
Caa mendefinisikan Konstanta _Class_ yaitu diawali dengan menggunakan *keyword* `const`. Berikut contoh konstanta dalam sebuah _class_

{% highlight php %}
<?php
class User
{
    const JK = 'Laki-laki';
}
{% endhighlight %}

Agar lebih mudah membedakan antara _variable_ dengan konstanta, konstanta biasanya ditulis menggunakan huruf kapital.

## Cara Akses atau Menggunakan Konstanta Class
**1. Akses dari dalam Class itu sendiri**

Caranya yaitu dengan menggunakan *keyword* `self` diikuti dengan titik dua ganda *(double colon)* dan konstanta.

{% highlight php %}
<?php
class User
{
    const JK = 'Laki-laki';

    function showJK() {
        echo self::JK;
    }
}
{% endhighlight %}

**2. Akses dari luar Class**

Menggunakan nama _class_, *double colon* dan konstanta.

{% highlight php %}
<?php
class User
{
    const JK = 'Laki-laki';
}

echo User::JK;
{% endhighlight %}

**3. Akses dari object**

Caranya yaitu menggunakan _object_, _double colon_ dan konstanta.

{% highlight php %}
<?php
class User
{
    const JK = 'Laki-laki';
}

$objek = new User();
echo $objek::JK; // Mulai PHP 5.3.0
{% endhighlight %}

**3. Akses dari variable yang ber-*value* nama sebuah class**

Nama _class_ terlebih dahulu dijadikan _variable_ value. Tapi perlu diperhatikan bahwa _variable_ value tidak boleh berupa _keyword_ seperti `self`, `parent` and `static`.

{% highlight php %}
<?php
class User
{
    const JK = 'Laki-laki';
}
$classname = "User";
echo $classname::JK; // Mulai PHP 5.3.0
{% endhighlight %}

## Tambahan
Mulai PHP 5.6.0 Konstanta _Class_ juga dapat ber-*value* dari konstanta *regular*.

{% highlight php %}
<?php
const SATU = 1;

class User {
    // Mulai PHP 5.6.0
    const DUA = SATU * 2;
    const TIGA = SATU + self::DUA;
    const EMPAT = 'Nilai dari TIGA adalah '.self::TIGA;
}
{% endhighlight %}

Mulai PHP 7.1.0 _Visibility Modifier_ juga bisa ditambahkan ke Konstanta _Class_.

{% highlight php %}
<?php
class User {
    // Mulai PHP 7.1.0
    public const JK = 'Laki-laki';
    private const PENDIDIKAN = 'Strata satu (S1)';
}
echo User::JK . "<br/>";
echo User::PENDIDIKAN;
{% endhighlight %}

Jika kode diatas dijalankan pasti akan error, karena `const PENDIDIKAN` adalah _private_.

Apa sih *Visibility Modifier* ? akan kita pelajari di artikel [Visibility dalam OOP PHP]({% post_url 2017-02-12-visibility-dalam-oop-php %})
