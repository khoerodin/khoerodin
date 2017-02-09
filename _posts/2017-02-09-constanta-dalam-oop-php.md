---
title: "#3. Constanta dalam OOP PHP"
date: '2017-02-09 14:12:00'
description: Artikel Seri Belajar Mudah OOP PHP, Apa itu Constanta dan Method dalam
  OOP PHP ? Di sini akan saya jelaskan...
tags:
- Belajar Mudah OOP PHP (Series)
published: true
---

Dalam artikel ini kita akan belajar tentang *Constanta* dan *Method*. *Constanta* dan *Method* sama seperti *Property* yaitu merupakan bagian dari *Class*, maksudnya letaknya berada di dalam *Class*.

## Constanta
Dalam <a href="https://en.wikipedia.org/wiki/Constant_(computer_programming)" target="_blank">Wikipedia</a> dijelaskan Konstanta (constant) adalah suatu lokasi penyimpanan (dalam memory) yang berisikan nilai yang sifatnya tetap dan tidak bisa diubah sepanjang program berjalan. 

Cara penamaan *Constanta* sama seperti *variable* yaitu diawali dengan huruf atau underscore untuk karakter pertama, kemudian boleh diikuti dengan huruf, underscore atau angka untuk karakter kedua dan selanjutnya.

### Cara Pendifinisian
Cara mendefinisikan *Constanta* ada dua macam dalam PHP, yaitu

1. Menggunakan keyword **const**

Pendefinisian *Constanta* menggunakan keyword **const** hanya dapat digunakan pada top-level scope, yakni harus dalam lingkungan global PHP. Sehingga kita tidak bisa menggunakan **const** di dalam function, loop, atau kondisi if.

```
const blog = "khoerodin.id";
echo blog;  // khoerodin.id
```

2. Menggunakan fungsi **define**

Jika ingin mendefinisikan *Constanta* di dalam fungsi maka harus menggunakan **define**.

```
define("blog", "khoerodin.id");
echo blog;  // khoerodin.id
```

### Bersifat Case Sensitif
*Constanta* dalam PHP sama seperti variable yaitu bersifat Case Sensitif, jadi *Constanta* User, user dan USER akan dianggap sebagai tiga *Constanta* yang berbeda.

Namun para programmer PHP **menganjurkan** menggunakan **huruf kapital semua** dalam penulisan *Constanta*, ini bertujuan agar lebih mudah membedakan *Constanta* dan *Variable*.

### Nilai Tidak Dapat Diubah

Sebagaimana dijelaskan di atas, *Constanta* sifatnya tetap dan tidak bisa diubah sepanjang program berjalan. contoh:

```
define("USER", "Khoerodin");
echo USER . "<br />"; 
define("USER", "MUKIDI");
```

jika code di atas tetap dijalankan maka akan keluar error.

### Predefined Constants
PHP sendiri juga telah membawa *Constanta* bawaaan atau *Predefined Constants* atau *Reserved Constants*, artinya terdapat *Constanta* yang bawaan yang tidak boleh didefinisikan kembali oleh programmer. Contoh beberapa *Predefined Constants* adalah 

```
PHP_VERSION, PHP_MAJOR_VERSION, PHP_MINOR_VERSION, PHP_RELEASE_VERSION, PHP_VERSION_ID, PHP_EXTRA_VERSION, PHP_ZTS, PHP_DEBUG, PHP_MAXPATHLEN, PHP_OS, PHP_SAPI, PHP_EOL, PHP_INT_MAX, PHP_INT_SIZE, DEFAULT_INCLUDE_PATH, PEAR_INSTALL_DIR, PEAR_EXTENSION_DIR, PHP_EXTENSION_DIR, PHP_PREFIX, PHP_BINDIR, PHP_BINARY, PHP_MANDIR, PHP_LIBDIR, PHP_DATADIR, __LINE__ , __FILE__ , __DIR__ , __FUNCTION__ , __CLASS__ , __TRAIT__ , __METHOD__, __NAMESPACE__
```

Lebih lengkapnya bisa dibuka di website resmi PHP <a href="http://php.net/manual/en/reserved.constants.php" target="_blank">disini</a>.

Sampai disini dulu ya... ikuti terus <a href="https://khoerodin.id/tag#Belajar Mudah OOP PHP (Series)">#Belajar Mudah OOP PHP (Series)</a> :grin: