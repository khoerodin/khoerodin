---
title: "Method dalam OOP PHP"
clean_title: "Method"
date: '2017-02-09 19:00:00'
description: Method adalah tindakan atau aksi dari suatu class. Ketika membuat function di luar class/object maka disebut function, namun ketika membuat function di dalam class/object maka disebut method
layout: episode
published: true
redirect_from:
  - /method-dalam-oop-php/
---

<mark><em>Method</em></mark> adalah tindakan atau aksi dari suatu *class*. Pada <a href="{{ site.url }}/object-oriented-php/class-dan-property-dalam-oop-php/" target="_blank" title="artikel sebelumnya">artikel sebelumnya</a> pernah diberikan contoh *class* `User`, maka contoh methodnya adalah tindakan dari seorang _user_ seperti <mark><em>register user</em>, <em>edit user</em>, <em>delete user</em>, <em>follow user</em></mark> dan *method-method* atau tindakan-tindakan lain yang diinginkan untuk diterapkan dalam *class* `User`.

Mudahnya *method* adalah <mark><em>function</em></mark> yang berada di dalam suatu *class*. <mark>Ketika membuat <em>function</em> di luar <em>class</em> maka disebut <em>function</em>, namun ketika membuat <em>function</em> di dalam <em>class</em> maka disebut <em>method</em>.</mark>

Semua sifat-sifat *function* bisa diterapkan ke dalam *method*, seperti parameter, mengembalikan nilai, dan lain-lain. *method* juga seperti *property* yaitu bisa memiliki salah satu *visibility keyword: public* atau *protected* atau *private*.

Berikut contoh *method*:

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

Cukup disini tentang *method*, semangat ganss... :muscle: :muscle: :muscle: dan lanjut baca episode selanjutnya ya.
