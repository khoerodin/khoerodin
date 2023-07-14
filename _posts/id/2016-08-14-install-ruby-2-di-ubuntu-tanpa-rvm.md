---
title: Install Ruby 2 di Ubuntu Tanpa RVM
date: 2016-08-14
description: Langkah mudah dan cepat install Ruby versi 2 di Ubuntu tanpa ribet mengggunakan Ruby Version Manager. Ada banyak cara install Ruby versi 2.* di Ubuntu, salah satunya ialah menggunakan RVM.
layout: post
tags: ruby ubuntu rvm
redirect_from:
  - /others/install-ruby-2-di-ubuntu-tanpa-rvm
  - /install-ruby-2-di-ubuntu-tanpa-rvm
---

Ada banyak cara install Ruby versi 2.* di Ubuntu, salah satunya ialah menggunakan [RVM](https://rvm.io/ "RVM"), namun jika merasa ribet dengan RVM kita bisa mencoba menggunakan *Ruby Packages* dari [Brightbox](https://www.brightbox.com/docs/ruby/ubuntu/ "Brightbox").

Pada saat tulisan ini dibuat Brightbox menyediakan Ruby 1.8.7 sampai Ruby 2.3.

![Ruby Sticker from unixstickers.com](/assets/images/posts/ruby-sticker.jpg "Ruby Sticker from unixstickers.com")

## Menambahkan Repository
Jika menggunakan **Ubuntu 14.04 atau yang terbaru**, gunakan perintah

```shell_session
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:brightbox/ruby-ng
$ sudo apt-get update
```

jika **Ubuntu 12.04 atau sebelumnya**, gunakan perintah

```shell_session
$ sudo apt-get install python-software-properties
$ sudo apt-add-repository ppa:brightbox/ruby-ng
$ sudo apt-get update
```

## Menginstall Package
*Install* Ruby sesuai versi yang diinginkan

```shell_session
$ sudo apt-get install ruby1.8 ruby1.9.3 ruby2.2
```

jika menginginkan **dev package**

```shell_session
$ sudo apt-get install ruby1.8-dev ruby1.9.3-dev ruby2.2-dev
```

## Gonta-ganti Versi Ruby
Kita bisa dengan mudah gonta-ganti versi Ruby menggunakan `ruby-switch`

```shell_session
$ sudo apt-get install ruby-switch
```
untuk melihat *list* Ruby ter*install*

```shell_session
$ ruby-switch --list

// output:
ruby1.8
ruby1.9.1
ruby2.0
ruby2.1
ruby2.2
```
untuk beralih ke Ruby versi tertentu, misal ke versi 1.91

```shell_session
$ sudo ruby-switch --set ruby1.9.1

// output:
update-alternatives: using /usr/bin/ruby1.9.1 to provide /usr/bin/ruby (ruby) in manual mode.
update-alternatives: using /usr/bin/gem1.9.1 to provide /usr/bin/gem (gem) in manual mode.
```

bisa di cek versi terpilih

```shell_session
$ ruby -v

// output
ruby 1.9.3p551 (2014-11-13) [x86_64-linux] Brightbox
```

Demikian, lebih lengkapnya ada di [Brightbox](https://www.brightbox.com/docs/ruby/ubuntu/ "Brightbox"). Semoga berkah manfaat dan *Happy Coding*
