---
title: "Method dalam OOP PHP"
clear_title: "Method"
date: '2017-02-09 19:00:00'
description: Method adalah function yang berada di dalam suatu class. Ketika membuat function di luar class/object maka disebut function, namun ketika membuat function di dalam class/object maka disebut method
layout: episode
published: true
redirect_from:
  - /method-dalam-oop-php/
---

**_Method_** adalah tindakan atau aksi dari suatu *class*. Pada <a href="{{ site.url }}/object-oriented-php/class-dan-property-dalam-oop-php/" target="_blank" title="artikel sebelumnya">artikel sebelumnya</a> pernah diberikan contoh *class* `User`, maka contoh methodnya adalah **_register user_**, **_edit user_**, **_delete user_**, **_follow user_** dan *method-method* atau aksi-aksi lain yang diinginkan untuk diterapkan dalam *class* `User`.

Mudahnya *method* adalah **_function_** yang berada di dalam suatu *class*. Ketika membuat *function* di luar *class* maka disebut *function*, namun ketika membuat *function* di dalam *class maka disebut *method*.

Semua sifat-sifat *function* bisa diterapkan ke dalam *method*, seperti parameter, mengembalikan nilai, dan lain-lain. *method* juga seperti *property* yaitu bisa memiliki salah satu *visibility keyword: public* atau *protected* atau *private*.

Berikut contoh *method*:

```php
class User {
  public function showBio()
  {
  	// isi method disini
  }

  private function showAddress()
  {
  	// isi method disini
  }
}
```

Cukup disini tentang *method*, semangat ganss... :muscle: :muscle: :muscle: dan lanjut baca ya.
