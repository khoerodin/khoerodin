---
title: "Abstract Class dan Abstract Method dalam OOP PHP"
clean_title: "Abstract Class dan Abstract Method"
date: '2017-02-14 23:02:00'
description: Abstract class adalah class yang mengandung minimal satu buah abstract method, yaitu method yang hanya berupa nama method dan argumennya (jika ada) dan diawali dengan keyword abstract.
layout: episode
published: true
redirect_from:
  - /abstract-class-dan-abstract-method-dalam-oop-php/
---

_Abstract class_ adalah _class_ yang mengandung minimal satu buah _abstract method_, yaitu _method_ yang hanya berupa nama _method_ dan argumennya (jika ada) dan diawali dengan _keyword_ `abstract`. 

Ketika sebuah _class_ dibuat dengan cara menurunkan atau _class inheritance_ dari _abstract class_ maka semua method yang didefinisikan sebagai _abstract_ oleh _parent class_ harus diimplementasikan ulang oleh _class_ tersebut yang sebagai child class atau class turunan dari _abstract class_.

Sebagai contoh kita akan membuat banyak level akses _User_ dalam sebuah website berita, ada yang sebagai _Admin_, _Editor_ dan _Reporter_. Dalam kasus tersebut yang pertama kita buat adalah membuat _parent class_ atau _class_ induk yang diberi nama `User`. _Class_ `User` tersebut nantinya akan diturunkan kepada _class_ `Admin`, `Editor` dan `Reporter`. Pada setiap _child class_ kita tentukan harus ada _method_ yang sama yang harus dimiliki, misal _method_ `showName()`. Jadi <mark>setiap class turunan harus memiliki method <code>showName()</code></mark>. Untuk <mark>memaksakan</mark> kehendak tersebut maka dalam _parent class_ (_abstract class_) dibuatlah _abstract method_ `showName()`.

Materi mengenai _abstract class_ dan _abstract method_ ini akan sedikit susah dimengerti bagi sebagian orang ketika tidak disertai contoh.

Berikut aturan-aturan disertai contoh agar lebih mudah memahami:

### 1. Cara pembuatan abstract class dan abstract method  
Cara membuatnya yaitu harus didahului dengan _keyword_ `abstract` sebelum _class_ dan _method_.

{% highlight php %}
<?php
// diawali keyword abstract
abstract class User
{
    // diawali keyword abstract
    abstract protected function showName();
}
{% endhighlight %}

### 2. Abstract class tidak bisa dijadikan object

{% highlight php %}
<?php
abstract class User
{
    //
}

// membuat object dari abstract class
$thisUser = new User();
{% endhighlight %}

Jika kode program di atas tetap dijalankan maka akan keluar `PHP Fatal error:  Uncaught Error: Cannot instantiate abstract class ...` karena ini adalah _abstract class_ yang tujuannya sebagai _base class_ atau _class_ acuan bukan untuk digunakan sebagai _object_.

### 3. Jika dalam sebuah class terdapat abstract method maka class tersebut harus menjadi abstract class.

{% highlight php %}
<?php
// bukan abstract class
class User
{
    // tapi ini abstract method
    abstract protected function showName();
}
{% endhighlight %} 

Jika kode program di atas tetap dijalankan maka akan keluar `PHP Fatal error:  Class User contains 1 abstract method and must therefore be declared abstract or implement the remaining methods (User::showName) ...` karena _class_ `User` bukan _abstract class_ tetapi memiliki _abstract method_, ini tidak diperbolehkan.

### 4. Abstract method hanya boleh signature  
Artinya _abstract method_ <mark>tidak boleh memiliki body</mark>, yaitu hanya berupa deklarasi saja dan tidak memiliki isi.

{% highlight php %}
<?php
abstract class User
{
    // abstract method memiliki body, ditandai
    // dengan disertai {}
    // ini yang salah
    abstract protected function showName(){
        //
    }

    // ini yang benar
    abstract protected function showGreeting();
}
{% endhighlight %}

Jika kode program di atas tetap dijalankan maka akan keluar `PHP Fatal error:  Abstract function User::showName() cannot contain body ...` karena _abstract method_ tidak boleh memiliki _body_.

### 5. Semua class turunan harus mengimplementasikan semua abstract method dari parent class

{% highlight php %}
<?php
abstract class User
{
    abstract protected function showName();
    abstract protected function showGreeting($greeting);

    // regular method
    public class showBio(){
        retudn "this is a Bio";
    }
}

class Admin extends User
{
    public function showName(){
        return "Bagus";
    }

    // tidak ada showGreeting($greeting)
}
{% endhighlight %}

Jika kode program di atas tetap dijalankan maka akan keluar `PHP Fatal error:  Class Admin contains 1 abstract method and must therefore be declared abstract or implement the remaining methods (User::showGreeting) ...` karena tidak semua _abstract method_ dari _parent class_ diimplementasikan, yaitu `showGreeting($greeting)` tidak ada dalam _class_ `Admin`.

Ingat ya, hanya _abstract method_, sedangkan untuk _regular method_ tidak harus diturunkan.

### 6. Semua method turunan dari abstract method harus didefinisikan dengan tingkat visibilitas yang sama atau lebih rendah

{% highlight php %}
<?php
abstract class User
{
    // public
    abstract public function showName();
}

class Admin extends User
{
    // protected
    protected function showName(){
        return "Bagus";
    }
}
{% endhighlight %}

Jika kode program di atas tetap dijalankan maka akan keluar `PHP Fatal error:  Access level to Admin::showName() must be public (as in class User) ...` karena `showName()` dalam _child class_ memiliki akses level (tingkat visibilitas) lebih tinggi dari pada `showName()` yang berada dalam _parent class_. Urutan tingkatan akses level dari tinggi ke rendah adalah <mark>1. private, 2. protected 3. public</mark>. 

### 7. Abstract class boleh memiliki property dan method regular

{% highlight php %}
<?php
// abstract class
abstract class User
{
    // regular property
    protected $address = 'Semarang';

    // abstract method
    abstract protected function showName();
    abstract public function showGreeting($greeting);
    
    // regular method
    public function showBio(){
        return "Hi, my name is " . $this->showName() . " from " . $this->address;
    }
}
{% endhighlight %} 

### 8. Abstract class boleh memiliki static method

{% highlight php %}
<?php
// abstract class
abstract class User
{
    // abstract method
    abstract protected function showName();
    
    // static method
    public static function showHi(){
        return "Hi, this is static method";
    }
}

// panggil static method dari abstract class
echo User::showHi();
{% endhighlight %}

### 9. Semua method turunan dari abstract method harus mengikuti signature  
Misal dalam _signature_ disertai _required argument_ maka method dalam _child class_ harus memiliki _required argument_ tersebut, contoh:

{% highlight php %}
<?php
abstract class User
{
    abstract protected function showName();
    
    // memiliki argumen $greeting
    abstract public function showGreeting($greeting);
}

class Admin extends User
{
    public function showName(){
        return "Bagus";
    }

    // tidak memiliki argumen $greeting
    public function showGreeting(){
        return "My name is " . $this->showName();
    }
}
{% endhighlight %}

Jika kode program di atas tetap dijalankan maka akan keluar `PHP Fatal error:  Declaration of Admin::showGreeting() must be compatible with User::showGreeting($greeting) ...` karena `showGreeting()` dalam _child class_ tidak memiliki argument sebagaimana `showGreeting()` dalam _parent class_.

Tetapi _method_ dalam _child class_ boleh memberikan opsional argument yang tidak ada dalam _signature_, contoh:

{% highlight php %}
<?php
abstract class User
{
    abstract protected function showName();
    
    // memiliki required argument: $greeting
    abstract public function showGreeting($greeting);
}

class Admin extends User
{
    public function showName(){
        return "Bagus";
    }

    // memiliki required argument: $greeting
    // dan opsional argument: $address
    public function showGreeting($greeting, $address = 'Banjar'){
        return $greeting . ", my name is " . $this->showName() . " from " . $address;
    }
}

$class = new Admin;

// output: Good morning, my name is Bagus from Banjar
echo $class->showGreeting("Good morning");
{% endhighlight %}

Demikian aturan-aturan dalam _abstract class_ dan _abstract method_. 

Perhatikan contoh di bawah ini, setiap _class_ yang diturunkan dari _class_ `User` harus memiliki _method_ `showName()` dan `showGreeting()` karena kedua _method_ tersebut merupakan _abstract method_, sedangkan untuk _method_ `showBio()` hanya bersifat opsional artinya tidak harus dimiliki oleh _child class_ karena bukan _abstract method_.

{% highlight php %}
<?php
abstract class User
{
    abstract protected function showName();
    
    // memiliki required argument: $greeting
    abstract public function showGreeting($greeting);

    // regular method
    public function showBio(){
        echo "This is my Bio <br/>";
        echo "My name is " . $this->showName();
    }
}

class Admin extends User
{
    public function showName(){
        return "Bagus Admin";
    }

    public function showGreeting($greeting, $address = 'Banjar'){
        return $greeting . ", my name is " . $this->showName() . " from " . $address;
    }
}

class Editor extends User
{
    public function showName(){
        return "Andre Editor";
    }

    public function showGreeting($greeting, $address = 'Banjar'){
        return $greeting . ", my name is " . $this->showName() . " from " . $address;
    }

    // bukan berasal dari abstract method
    public function showBio(){
        echo "This is Bio from " . $this->showName();
    }
}

class Reporter extends User
{
    public function showName(){
        return "Bambang Reporter";
    }

    public function showGreeting($greeting, $address = 'Banjar'){
        return $greeting . ", my name is " . $this->showName() . " from " . $address;
    }
}

$admin = new Admin;
$editor = new Editor;
$reporter = new Reporter;

echo $admin->showGreeting("Good morning", "Bandung") . "<br/>";
echo $admin->showBio() . "<br/><br/>";

echo $editor->showGreeting("Good night", "Jayapura") . "<br/>";
echo $editor->showBio() . "<br/><br/>";

echo $reporter->showGreeting("Good evening", "Maluku") . "<br/>";
echo $reporter->showBio();
{% endhighlight %}

outputnya:  
<mark>Good morning, my name is Bagus Admin from Bandung</mark>  
<mark>This is my Bio</mark>  
<mark>My name is Bagus Admin</mark>  

<mark>Good night, my name is Andre Editor from Jayapura</mark>  
<mark>This is Bio from Andre Edito</mark>  

<mark>Good evening, my name is Bambang Reporter from Maluku,</mark>  
<mark>This is my Bio</mark>  
<mark>My name is Bambang Reporter</mark>  

Bagaimana, mudahkan? jika belum faham coba baca berulang-ulang atau tanyakan di komentar :blush: