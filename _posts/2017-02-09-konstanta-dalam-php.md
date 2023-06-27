---
title: Konstanta dalam PHP
date: 2017-02-09 14:12:00 +07:00
description: Konstanta adalah suatu lokasi penyimpanan (dalam memory) yang berisikan nilai yang sifatnya tetap dan tidak bisa diubah sepanjang program berjalan.
layout: post
tags: php
redirect_from: /others/konstanta-dalam-php
---

Dalam artikel ini kita akan belajar tentang konstanta. Dalam <a href="https://en.wikipedia.org/wiki/Constant_(computer_programming)" target="_blank">Wikipedia</a> dijelaskan Konstanta *(constant)* adalah suatu lokasi penyimpanan (dalam *memory*) yang berisikan nilai yang sifatnya tetap dan tidak bisa diubah sepanjang program berjalan.

Cara penamaan konstanta sama seperti *variable* yaitu diawali dengan huruf atau *underscore* untuk karakter pertama, kemudian boleh diikuti dengan huruf, *underscore* atau angka untuk karakter kedua dan selanjutnya.

### Cara Pendifinisian
Cara mendefinisikan konstanta ada dua macam dalam PHP, yaitu

**1. Menggunakan keyword `const`**

Pendefinisian konstanta menggunakan *keyword* `const` hanya dapat digunakan pada *top-level scope*, yakni harus dalam lingkungan *global* PHP. Sehingga kita tidak bisa menggunakan `const` di dalam *function*, *loop*, atau kondisi if.

{% highlight php %}
<?php
const blog = "khoerodin.id";
echo blog;  // khoerodin.id
{% endhighlight %}

**2. Menggunakan fungsi `define()`**

Jika ingin mendefinisikan konstanta menggunakan fungsi `define()` maka membutuhkan dua nilai yaitu nama konstanta dan nilainya.

{% highlight php %}
<?php
define("blog", "khoerodin.id");
echo blog;  // khoerodin.id
{% endhighlight %}

### Bersifat Case Sensitif
Konstanta dalam PHP sama seperti *variable* yaitu bersifat *case sensitif*, jadi konstanta `User`, `user` dan `USER` akan dianggap sebagai tiga konstanta yang berbeda.

Namun para *programmer* PHP **menganjurkan** menggunakan **huruf kapital semua** dalam penulisan konstanta, ini bertujuan agar lebih mudah membedakan konstanta dan *variable*.

### Nilai Tidak Dapat Diubah

Sebagaimana dijelaskan di atas, konstanta sifatnya tetap dan tidak bisa diubah sepanjang program berjalan. contoh:

{% highlight php %}
<?php
define("USER", "Khoerodin");
echo USER . "<br />";
define("USER", "MUKIDI");
{% endhighlight %}

jika kode di atas tetap dijalankan maka akan keluar *error*.

### Predefined Constants
PHP sendiri juga telah membawa konstanta bawaaan atau *Predefined Constants* atau *Reserved Constants*, artinya terdapat konstanta yang bawaan yang tidak boleh didefinisikan kembali oleh *programmer*. Contoh beberapa *Predefined Constants*:

`PHP_VERSION`, `PHP_MAJOR_VERSION`, `PHP_MINOR_VERSION`, `PHP_RELEASE_VERSION`, `PHP_VERSION_ID`, `PHP_EXTRA_VERSION`, `PHP_ZTS`, `PHP_DEBUG`, `PHP_MAXPATHLEN`, `PHP_OS`, `PHP_SAPI`, `PHP_EOL`, `PHP_INT_MAX`, `PHP_INT_SIZE`, `DEFAULT_INCLUDE_PATH`, `PEAR_INSTALL_DIR`, `PEAR_EXTENSION_DIR`, `PHP_EXTENSION_DIR`, `PHP_PREFIX`, `PHP_BINDIR`, `PHP_BINARY`, `PHP_MANDIR`, `PHP_LIBDIR`, `PHP_DATADIR`, `__LINE__` , `__FILE__` , `__DIR__` , `__FUNCTION__` , `__CLASS__` , `__TRAIT__` , `__METHOD__`, `__NAMESPACE__`

Lebih lengkapnya bisa dibuka di *website* resmi PHP <a href="http://php.net/manual/en/reserved.constants.php" target="_blank">disini</a>.

Sampai disini dulu ya... :grin:
