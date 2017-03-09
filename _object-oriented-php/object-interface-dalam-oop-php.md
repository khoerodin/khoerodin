---
title: "Object Interface dalam OOP PHP"
clean_title: "Object Interface"
date: '2017-02-28 22:00:00'
description: Object Interface adalah template untuk class dimana semua method di dalamnya harus diimplementasikan ulang oleh class yang memakainya ( mengimplementasikannya)
layout: episode
published: true
---

<mark><em>Object Interface</em></mark> adalah _template_ untuk _class_ dimana semua _method_ di dalamnya harus diimplementasikan ulang oleh _class_ yang memakainya ( mengimplementasikannya).

*Object Interface* biasanya disebut <mark>hanya <em>interface</em></mark> saja.

Langsung saja ke contoh agar lebih faham :sunglasses:

### 1. Cara membuat  
Sama seperti pembuatan _class_, hanya saja _keyword class_ ketika pembuatan sebuah _class_ diganti dengan _keyword interface_

```php
// menggunakan keyword interface
interface User
{
    // isi interface nanti disini
}
```

### 2. Method dalam interface hanya berupa signature  
Artinya _method_ hanya berupa nama dan argumennya saja jika ada, tanpa memiliki isi dari _method (body)_

```php
interface User
{
    // hanya berupa nama method dan argumen jika ada
    public function username($username);
    public function gender();
}
```

### 3. Diimplementasikan dengan keyword implements  
_Class_ yang menggunakan (mengimplementasikan) _interface_, harus menggunakan keyword `implements`

```php
interface User
{
    public function username($username);
    public function gender();
}

// menggunakan keyword implements
class Member implements User
{
    public function username($username){
        echo "My username is $username";
    }

    public function gender(){
        echo "My gender is Male";
    }
}

$john = new Member();
$john->username('john ');
$john->gender();
```

### 4. Semua method dalam interface harus diimplementasikan ulang

```php
interface User
{
    public function username($username);
    public function gender();
}

class Member implements User
{
    // hanya method username saja
    public function username($username){
        echo "My username is $username";
    }
}
```

Jika kode di atas tetap dijalankan maka akan keluar `Class Member contains 1 abstract method and must therefore be declared abstract or implement the remaining methods (User::gender)...` karena _method_ `gender()` tidak diimplementasikan dalam `class Member`.

### 5. Satu class boleh mengimplementasikan banyak interface  
Satu class boleh mengimplementasikan lebih dari satu _interface_ dengan dipisahkan koma

```php
interface User
{
    public function username($username);
    public function gender();
}

interface Address
{
    public function street($street);
    public function city($city);
}

// lebih dari satu interface dipisahkan koma
class Member implements User, Address
{
    public function username($username){
        echo "My username is $username. ";
    }

    public function gender(){
        echo "My gender is Male. ";
    }

    public function street($street){
        return $street;
    }

    public function city($city){
        return $city;
    }

    public function myAddress($street, $city){
        echo "My address: ". $this->street($street) . $this->city($city);
    }
}

$john = new Member();
$john->username('john');
$john->gender();
$john->myAddress('Jl. Pajajajaran ', 'Bandung');
```

### 6. Method dalam interface dan dalam class yang mengimplementasikannya harus public  
Jika ini dijalankan maka keluar `PHP Fatal error:  Access type for interface method User::username() must be omitted in ...` karena _method_ `User::username()` tidak di set `public`.

```php
interface User
{
    // di set protected
    protected function username($username);
    public function gender();
}

class Member implements User
{
    public function username($username){
        echo "My username is $username";
    }

    public function gender(){
        echo "My gender is Male";
    }
}
```

begitu juga dengan ini, akan keluar `PHP Fatal error:  Access level to Member::username() must be public (as in class User) in ...` karena `Member::username()` tidak di set public sebagaimana `User::username()`

```php
interface User
{
    public function username($username);
    public function gender();
}

class Member implements User
{
    // di set protected
    protected function username($username){
        echo "My username is $username";
    }

    public function gender(){
        echo "My gender is Male";
    }
}
```

### 7. Interface bisa berupa turunan interface lain

```php
interface User {
    public function username($username);
    public function gender();
}

// interface extend another interface
interface anotherUser extends User { 
    public function username($username);
    public function gender();
}

class Member implements anotherUser {
 
    public function username($username) {  
        echo "The user name is $username";  
    }
 
    public function gender() {
        echo "The gender is Male";
    } 
}

$john = new Member();
echo $john->username('john');
````

### 8. Boleh mengimplementasikan dua interface walaupun memiliki method sama  
Mulai PHP 5.3.9 _class_ diperbolehkan mengimplementasikan dua _interface_ yang memiliki nama _method_ sama, selama _method_ memiliki _signature_ sama.

Ini contoh yang <mark>diperbolehkan</mark>, karena signature sama

```php
interface UserOne
{
    // sama dengan method dalam interface UserTwo
    function username($username);
}

interface UserTwo
{
    // sama dengan method dalam interface UserOne
    function username($username);
}

class Member implements UserOne, UserTwo
{
    public function username($username) {
        echo "This is member username: $username";
    }
}

$john = new Member();
$john->username('john');
```

Ini contoh yang <mark>tidak diperbolehkan</mark>, karena signature berbeda

```php
interface UserOne
{
    // beda dengan method dalam interface UserTwo
    function username($username);
}

interface UserTwo
{
    // beda dengan method dalam interface UserOne
    function username($username, $other);
}

class Member implements UserOne, UserTwo
{
    public function username($username) {
        echo "This is member username: $username";
    }
}

$john = new Member();
$john->username('john');
```

Mudahkan? coba baca ulang pelan-pelan jika belum faham :book: