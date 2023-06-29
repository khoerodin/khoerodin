---
title: Method dalam OOP PHP - Ep. 3
date: 2017-02-09 19:00:00 +07:00
description: Method adalah tindakan atau aksi dari suatu class. Ketika membuat function di luar class/object maka disebut function, namun ketika membuat function di dalam class/object maka disebut method
layout: post
tags: serioopphp php
redirect_from: /object-oriented-php/method-dalam-oop-php
---

_Method_ adalah tindakan atau aksi dari suatu _class_. [Pada artikel sebelumnya]({% post_url 2017-02-02-class-dan-property-dalam-oop-php %}) pernah diberikan contoh _class_ `User`, maka contoh methodnya adalah tindakan dari seorang _user_ seperti register user, edit user, delete user, follow user dan *method-method* atau tindakan-tindakan lain yang diinginkan untuk diterapkan dalam _class_ `User`.

Mudahnya *method* adalah _function_ yang berada di dalam suatu _class_. Ketika membuat _function_ di luar class maka disebut _function_, namun ketika membuat _function_ di dalam _class_ maka disebut _method_.

Semua sifat-sifat _function_ bisa diterapkan ke dalam _method_, seperti parameter, mengembalikan nilai, dan lain-lain. _method_ juga seperti _property_ yaitu bisa memiliki salah satu *visibility keyword:* `public`, `protected` atau `private`.

Berikut contoh _method_:

{% highlight php %}
<?php
class User {

  // ini method showBio()
  public function showBio()
  {
    // disini isi method
  }

  // ini method showAddress()
  private function showAddress()
  {
    // disini isi method
  }

}
{% endhighlight %}

Cukup disini tentang _method_, semangat gaess... 💪💪💪 dan lanjut baca [episode selanjutnya]({% post_url 2017-02-10-penjelasan-object-dalam-oop-php %}) ya.
