--- 
title: "Polymorphism dalam OOP PHP" 
clean_title: "Polymorphism" 
date: '2017-03-02 09:45:00' 
description: Polymorphism adalah gambaran pola dalam object-oriented programming di mana banyak class memiliki fungsi yang berbeda ketika menggunakan interface dan atau abstract class yang sama.  
layout: episode 
published: true 
--- 
 
<mark><em>Polymorphism</em></mark> adalah gambaran pola dalam _object-oriented programming_ di mana banyak _class_ memiliki fungsi yang berbeda ketika menggunakan _interface_ dan atau _abstract class_ yang sama. 
 
Masih bingung? ketika banyak _class_ menggunakan _interface_ dan atau _abstract class_ yang sama tapi memiliki fungsi yang berbeda-beda itulah _polymorphism_. 
 
_Polymorphism_ jika diartikan secara bahasa maka <mark><em>poly</em></mark> berarti banyak dan <mark><em>morph</em></mark> berarti bentuk, jadi _polymorphism_ berarti <mark>banyak bentuk</mark>. 
 
Dalam _polymorphism_ kita bisa menggunakan _abstract class_ saja atau _interface_ saja atau menggunakan keduanya.  
 
Langsung saja kita perhatikan kode di bawah ini, ini adalah contoh _polymorphism_ yang menggunakan _abstract class_ dan _interface_. 
 
{% highlight php %}
<?php 
// membuat interface Tanah 
interface Tanah  
{ 
    public function hitungLuas(); 
} 
 
// membuat abstract class Bibit 
abstract class Bibit 
{ 
    abstract public function ditanami(); 
} 
 
// extends Bibit dan implements Tanah 
class Lingkaran extends Bibit implements Tanah  
{ 
    private $jariJari; 
    private $pi = 3.14; 
    
    public function __construct($jariJari) { 
        $this->jariJari = $jariJari; 
    } 
   
    // menghitung luas tanah berbentuk lingkaran 
    // implements method dari interface tanah 
    public function hitungLuas() { 
        return $this->jariJari * $this->jariJari * $this->pi; 
    } 
 
    // tanah ditanami Kopi 
    // extneds method dari abstract class Bibit 
    public function ditanami() { 
        return "ditanami Kopi"; 
    } 
} 
 
class PersegiPanjang extends Bibit implements Tanah { 
    private $panjang; 
    private $lebar; 
    
    public function __construct($panjang, $lebar) { 
        $this->panjang = $panjang; 
        $this->lebar = $lebar; 
    } 
   
    // menghitung luas tanah berbentuk persegi panjang 
    // implements method dari interface tanah 
    public function hitungLuas() { 
        return $this->panjang * $this->lebar; 
    } 
 
    // tanah ditanami Padi 
    // extneds method dari abstract class Bibit 
    public function ditanami() { 
        return "ditanami Padi"; 
    } 
} 
 
$tanahAgus = new Lingkaran(3); 
$tanahChandra = new PersegiPanjang(3,4); 
 
echo "Tanah Agus seluas " . $tanahAgus->hitungLuas() . " m2 \n"; 
echo $tanahAgus->ditanami() . "\n \n"; 
 
echo "Tanah Chandra seluas " . $tanahChandra->hitungLuas() . " m2 \n"; 
echo $tanahChandra->ditanami() . "\n"; 
{% endhighlight %} 
 
Kita perhatikan, dalam contoh di atas terdapat dua _class_ yaitu `class Lingkaran` dan `class PersegiPanjang`. Dua _class_ tersebut sama-sama turunan dari `abstract class Bibit` dan implementasi `interface Tanah`. Walaupun dari _abstract class_ dan _interface_ yang sama tapi `class Lingkaran` dan `class PersegiPanjang` memiliki fungsi yang berbeda. 
 
`class Lingkaran` untuk menghitung luas tanah lingkaran dan ditanami kopi, sedangkan `class PersegiPanjang` untuk menghitung luas tanah persegi panjang dan ditanami padi. 
 
Mudah kan? Bapak-ibunya sama tapi kok muka putra-putrinya berbeda-beda, mungkin bisa disebut juga _polymorphism_ :hugging: