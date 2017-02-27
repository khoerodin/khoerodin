---
title: "Constructor dan Destructor dalam OOP PHP"
clear_title: "Constructor dan Destructor"
date: '2017-02-13 07:40:00'
description: Apa itu Constructor dan Destructor dalam OOP PHP ? PHP menyediakan method khusus yang berjalan ketika sebuah object mulai dibuat dan dimatikan, yaitu method __construct() yang disebut constructor dan method __destruct() yang disebut destructor
layout: episode
published: true
redirect_from:
  - /constructor-dan-destructor-dalam-oop-php/
---

PHP menyediakan _method_ khusus yang berjalan ketika sebuah _object_ mulai dibuat dan dimatikan, yaitu _method_ `__construct()` yang disebut _constructor_ dan _method_ `__destruct()` yang disebut _destructor_.

**1. _Constructor_**  
_Method_ `__construct()` akan dieksekusi ketika suatu _object_ mulai dibuat atau diinstansiasi, yaitu ketika `new` jalankan.

**2. _Destructor_**  
_Method_ `__destruct()` akan dieksekusi ketika _object_ dihapus atau berhenti dijalankan.

Perhatikan kode berikut:

```php
class User {
    private $name = 'Bagus';
    private $address = 'Yogyakarta';

    // constructor
    public function __construct()
    {
    	echo 'Ini dari konstruktor. ';
    }

    public function showBio()
    {
    	echo "Nama saya $this->name dan saya berasal dari $this->address";
    }

    // destructor
    public function __destruct()
    {
    	echo ' Ini dari destruktor.';
    }
}

// membuat object $bagus
$bagus = new User();

// panggil method dari object $bagus
echo $bagus->showBio();
```

Jika kode di atas dijalankan maka _outputnya_ `Ini dari konstruktor. Nama saya Bagus dan saya berasal dari Yogyakarta Ini dari destruktor.`

Contoh lain yang **_lebih gamblang_** mengenai _constructor_ dan _destructor_ saya sertakan dalam **_ebook_** saya.
