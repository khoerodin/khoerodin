---
title: "Pewarisan (Obejct Inheritance) dalam OOP PHP"
clean_title: "Pewarisan (Obejct Inheritance)"
date: '2017-02-13 10:08:00'
description: Pewarisan atau inheritance dalam Object-Oriented PHP adalah mewariskan property dan method baik public maupun protected kepada class lain. Ingat ya, hanya public dan protected.
layout: episode
published: true
redirect_from:
  - /pewarisan-object-inheritance-dalam-oop-php/
---

Pewarisan atau _inheritance_ dalam _Object-Oriented PHP_ adalah mewariskan _property_ dan _method_ baik `public` maupun `protected` kepada _class_ lain. Ingat ya, hanya `public` dan `protected`.

Konsep pewarisan ini sangat berguna jika kita ingin membuat _class_ lagi yang memiliki fungsi mirip dengan _class_ yang sudah ada, sehingga tidak usah membuat lagi _method_ atau _property_ yang memiliki fungsi mirip atau sama. Dengan _inheritance_ kita bisa menghindari duplikasi kode program, atau disebut juga _code reuse_.

Lebih jelasnya mari perhatikan dan praktekkan kode program di bawah ini, keterangan langsung saya sematkan pada baris kode agar memudahkan. :blush:

{% highlight php %}
<?php
class User
{
    public $name;
    public $username;
    protected $brithdate = '03 Juni 2016';
    private $address = 'Yogyakarta';
    protected $gender = 'Male';

    public function showSalam(){
        echo "Salam... nama saya $this->name <br/>";
    }
}

// membuat lagi class baru
// dengan extends class User
// artinya mewarisi property dan method
// dari class User
class Bio extends User
{
    // mengubah visibility keyword menjadi piblic
    // juga mengubah nilai menjadi 01 Januari 2017
    public $brithdate = '01 Januari 2017';

    public function showBio(){
        // menggunakan property dari class User
        echo "Username : $this->username <br/>";
        echo "Brithdate : $this->brithdate <br/>";
        echo "Gender : $this->gender <br/>";
    }

    public function showAddress(){
        echo "Address : $this->address";
    }
}

// membuat object Bagus
$Bagus = new Bio();

// memberikan nilai kepada property
$Bagus->name = 'Bagus';
$Bagus->username = 'tubagus';

// tidak bisa memberikan nilai:
// Cannot access protected property
// karena property gender adalah protected
// hanya boleh diakses dari dalam class itu sendiri
// dan dari dalam extended class
$Bagus->gender = 'Female';

// memanggil property
// kode ini tidak error
echo $Bagus->username . '<br/>';

// Undefined property.
// karena property gender adalah protected
echo $Bagus->gender;

// dalam class User property brithdate adalah protected
// tapi setelah di extends di class Bio
// diubah public dan di ganti nilainya
// jadi 01 Januari 2017
echo $Bagus->brithdate . '<br/>';

// memanggil method
// kode ini tidak error
$Bagus->showSalam();
$Bagus->showBio();

// PHP Notice:  Undefined property.
// Karena address adalah private
$Bagus->showAddress();
{% endhighlight %}

Kita bisa lihat bahwa _class_ `Bio` mewarisi (dapat mengkases) _property_ dan _method_ yang bersifat `public` dan `protected` dari _class_ `User`. Ada yang ditanyakan? jangan sungkan untuk berkomentar sambil ngopi-ngopi.. :smiley: :coffee:
