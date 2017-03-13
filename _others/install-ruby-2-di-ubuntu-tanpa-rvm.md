---
title: Install Ruby 2 di Ubuntu Tanpa RVM
date: 2016-08-14
description: Langkah mudah dan cepat install Ruby versi 2 di Ubuntu tanpa ribet mengggunakan Ruby Version Manager. Ada banyak cara install Ruby versi 2.* di Ubuntu, salah satunya ialah menggunakan RVM.
published: true
layout: post
redirect_from:
  - /install-ruby-2-di-ubuntu-tanpa-rvm/
---

Ada banyak cara install Ruby versi 2.* di Ubuntu, salah satunya ialah menggunakan [RVM](https://rvm.io/ "RVM"), namun jika merasa ribet dengan RVM kita bisa mencoba menggunakan *Ruby Packages* dari [Brightbox](https://www.brightbox.com/docs/ruby/ubuntu/ "Brightbox").

Pada saat tulisan ini dibuat Brightbox menyediakan Ruby 1.8.7 sampai Ruby 2.3.

![Ruby Sticker from unixstickers.com]({{ site.url }}/assets/images/ruby-sticker.jpg "Ruby Sticker from unixstickers.com")

## Menambahkan Repository
Jika menggunakan **Ubuntu 14.04 atau yang terbaru**, gunakan perintah

{% highlight shell_session %}
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:brightbox/ruby-ng
$ sudo apt-get update
{% endhighlight %}

jika **Ubuntu 12.04 atau sebelumnya**, gunakan perintah

{% highlight shell_session %}
$ sudo apt-get install python-software-properties
$ sudo apt-add-repository ppa:brightbox/ruby-ng
$ sudo apt-get update
{% endhighlight %}

## Menginstall Package
*Install* Ruby sesuai versi yang diinginkan

{% highlight shell_session %}
$ sudo apt-get install ruby1.8 ruby1.9.3 ruby2.2
{% endhighlight %}

jika menginginkan **dev package**

{% highlight shell_session %}
$ sudo apt-get install ruby1.8-dev ruby1.9.3-dev ruby2.2-dev
{% endhighlight %}

## Gonta-ganti Versi Ruby
Kita bisa dengan mudah gonta-ganti versi Ruby menggunakan `ruby-switch`

{% highlight shell_session %}
$ sudo apt-get install ruby-switch
{% endhighlight %}
untuk melihat *list* Ruby ter*install*

{% highlight shell_session %}
$ ruby-switch --list

// output:
ruby1.8
ruby1.9.1
ruby2.0
ruby2.1
ruby2.2
{% endhighlight %}
untuk beralih ke Ruby versi tertentu, misal ke versi 1.91

{% highlight shell_session %}
$ sudo ruby-switch --set ruby1.9.1

// output:
update-alternatives: using /usr/bin/ruby1.9.1 to provide /usr/bin/ruby (ruby) in manual mode.
update-alternatives: using /usr/bin/gem1.9.1 to provide /usr/bin/gem (gem) in manual mode.
{% endhighlight %}

bisa di cek versi terpilih

{% highlight shell_session %}
$ ruby -v

// output
ruby 1.9.3p551 (2014-11-13) [x86_64-linux] Brightbox
{% endhighlight %}

Demikian, lebih lengkapnya ada di [Brightbox](https://www.brightbox.com/docs/ruby/ubuntu/ "Brightbox"). Semoga berkah manfaat dan *Happy Coding* :blush: :coffee:
