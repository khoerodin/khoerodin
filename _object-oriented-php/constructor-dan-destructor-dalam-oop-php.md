---
title: "Constructor dan Destructor dalam OOP PHP"
clean_title: "Constructor dan Destructor"
date: '2017-02-13 07:40:00'
description: Apa itu Constructor dan Destructor dalam OOP PHP ? PHP menyediakan method khusus yang berjalan ketika sebuah object mulai dibuat dan dimatikan, yaitu method __construct() yang disebut constructor dan method __destruct() yang disebut destructor
layout: episode
published: true
---

PHP menyediakan _method_ khusus yang berjalan ketika sebuah _object_ mulai dibuat dan dimatikan, yaitu _method_ `__construct()` yang disebut _constructor_ dan _method_ `__destruct()` yang disebut _destructor_.

### 1. Constructor  
_Method_ `__construct()` akan dieksekusi ketika suatu _object_ mulai dibuat atau diinstansiasi, yaitu ketika `new` jalankan.

### 2. Destructor  
_Method_ `__destruct()` akan dieksekusi ketika _object_ dihapus atau berhenti dijalankan.

Perhatikan kode berikut:

{% highlight php %}
<?php
class User {

    private $name = 'Bagus';
    private $address = 'Yogyakarta';
    
    public function showBio()
    {
        echo "Nama saya $this->name dan saya berasal dari $this->address";
    }

    // destructor
    public function __destruct()
    {
        echo ' Ini dari destruktor.';
    }

    // constructor
    public function __construct()
    {
    	echo 'Ini dari konstruktor. ';
    }

}

// membuat object $bagus
$bagus = new User();

// panggil method dari object $bagus
echo $bagus->showBio();
{% endhighlight %}

Jika kode di atas dijalankan maka _outputnya_ `Ini dari konstruktor. Nama saya Bagus dan saya berasal dari Yogyakarta Ini dari destruktor.`

Contoh lain yang lebih gamblang mengenai _constructor_ dan _destructor_ akan saya lengkapi dalam artikel ini, tunggu saja ya...
