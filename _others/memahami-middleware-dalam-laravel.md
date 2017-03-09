---
title: Memahami Middleware dalam Laravel
date: 2016-08-18
description: >-
  Middleware Laravel adalah penengah antara request yang masuk dengan Controller yang dituju yang berpengaruh pada request dan respons. Misalnya kita ingin memverifikasi setiap request yang masuk seperti melakukan pengecekan status login, privillage, CSRF (Cross-Site Request Forgery) atau yang lainnya.
published: true
layout: post
redirect_from:
  - /memahami-middleware-dalam-laravel/
---

*Middleware* Laravel adalah penengah antara *request* yang masuk dengan *controller* yang dituju yang berpengaruh pada *request* dan *respons*. Misalnya kita ingin memverifikasi setiap *request* yang masuk seperti melakukan pengecekan status *login, privillage, CSRF (Cross-Site Request Forgery)* atau yang lainnya.

![Laravel]({{ site.url }}/assets/images/laravel-5.png "Laravel")

## Pemanggilan Middleware
Cara menggunakan atau memanggil *middleware*, berikut contoh-contohnya:

### Individual Route
Memanggil *middleware* dalam *individual route*

```php
Route::get('admin', [
    'uses' => 'MyController@index',
    'middleware' => 'new-middleware'
]);
```

### Route Groups
Memanggil *middleware* dalam *route groups*

```php
Route::group(['middleware' => 'new-middleware'], function () {
    Route::get('/', function ()    {
        // Uses new-middleware Middleware
    });

    Route::get('admin/profile', function () {
        // Uses new-middleware Middleware
    });
});
```

### Controller
Memanggil *middleware* dalam *controller*. Jika ingin berlaku pada semua *method* dalam *controller*:

```php
class MyController extends Controller
{
    function __construct()
    {
        $this->middleware('new-middleware');
    }
    ...
}  
```

Jika hanya ingin pada *method* tertentu saja kita bisa menggunakan `only` dan `except`.

```php
class MyController extends Controller
{
    function __construct()
    {
        $this->middleware('new-middleware', ['only' => ['foo', 'bar']]); //selected method
        $this->middleware('other-middleware', ['except' => ['baz']]) ; //exclude method
    }
}
```

## Membuat Middleware
Untuk membuat *middleware* baru kita dapat membuat file class baru dalam direktori `/app/Http/Middleware/` misal dengan isi seperti ini

```php
namespace App\Http\Middleware;

use Closure;

class NewMiddleware
{
    public function handle($request, Closure $next)
    {
        // Letakkan kode disini...
    }
}
```
Middleware memiliki *method* khusus bernama `handle()` yang memiliki dua parameter yaitu `$request` dan `Closure $next`. Kita lihat contoh sederhana dibawah ini

```php
public function handle($request, Closure $next)
{
    $user = Auth::user();
    if($user->role === User::ROLE_ADMIN) {
        return $next($request);
    }

    return redirect('home');
}
```
Method `handle()` diatas memfilter setiap *request* yang masuk harus berupa `User` dengan *role* sebagai `ROLE_ADMIN`. Jika *request* yang masuk adalah `User::ROLE_ADMIN` maka *request* akan diteruskan  kepada *controller* dengan memanggil *method* `$next($request)`. Tapi apabila bukan `User::ROLE_ADMIN` maka akan di redirect ke `home`.

## Parameter Middleware
*Middleware* juga bisa menerima parameter tambahan, seperti contoh dibawah ini, misal untuk memverifikasi bahwa `$request->user()` harus memiliki `$role` tertentu.

```php
namespace App\Http\Middleware;

use Closure;

class RoleMiddleware
{
    public function handle($request, Closure $next, $role)
    {
        if (! $request->user()->hasRole($role)) {
            // Redirect...
        }

        return $next($request);
    }
}
```
Parameter *middleware* dapat dispesifikan ketika pemanggilannya dalam *route* yaitu dengan memisahkan antara nama *middleware* dan parameter menggunakan `:`, contoh:

```php
Route::put('post/{id}', ['middleware' => 'role:editor', function ($id) {
    //
}]);
```

## Before dan After Middleware
*Middleware* dalam Laravel dibagi menjadi dua macam; *After Middleware* dan *Before Middleware*. 

> Before Middleware adalah Middleware yang diproses sebelum request masuk kedalam Controller dan After Middleware adalah Middleware yang diproses setelah request masuk kedalam Controller. 

Bagaimana mendefinisikannya, kita lihat perbedaan kode berikut:

### Before Middleware

```php
namespace App\Http\Middleware;

use Closure;

class BeforeMiddleware
{
    public function handle($request, Closure $next)
    {
        // Hadang request yang masuk

        return $next($request)
    }
}
```
Contoh penggunaannya

```php
public function handle($request, Closure $next)
{
    $user = Auth::user();
    if($user->role === User::ROLE_ADMIN) {
        return $next($request);
    }

    return redirect('home');
}
```
Jika bukan `ROLE_ADMIN` maka tidak boleh mengaksesnya dan dikembalikan ke `home`.

### After Middleware

```php
namespace App\Http\Middleware;

use Closure;

class AfterMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Lakukan sesuatu terhadap response yang diperoleh

        return $response
    }
}
```
Contoh penggunaannya

```php
public function handle($request, Closure $next)
{
    $response = $next($request);

    // menyimpan IP dan path yang telah diakses ke database
    DB::table('access_logs')->insert([
    	'path' => $request->path(),
        'ip' => $request->getClientIp(),
        'created_at' => new DateTime,
        'updated_at' => new DateTime
    ]);

    return $response
}
```

## Meregistrasikan Middleware
*Middleware* belum bisa digunakan sebelum diregistrasikan terlebih dahulu dengan cara-cara sebagai berikut:

### Secara Global
Meregistrasikan secara *global* berarti *middleware* akan selalu dipanggil pada setiap *request* yang masuk, caranya ialah dengan menambahkan kode kedalam array `$middleware` di `app/Http/Kernel.php`. Pahami kode dibawah ini

```php
protected $middleware = [
    ...
    \App\Http\Middleware\NewMiddleware::class, //New middleware
];
```

### Pada Routes
Memasang *middleware* pada *route* tertentu bisa juga dilakukan dengan terlebih dahulu meregistrasikannya kedalam array `$routeMiddleware` di `app/Http/Kernel.php`.

```php
protected $routeMiddleware = [
    ...
    'new-middlware' => \App\Http\Middleware\NewMiddleware::class, //New middleware
];
```

### Dengan Mengelompokkan (Middleware Groups)
Bagaimana jika satu *route* membutuhkan banyak *middleware*? kan repot memanggil banyak *middleware* sekaligus. Solusinya ialah diregistrasikan menggunakan *Middleware Groups*. Menggunakan *Middleware Groups* kita bisa mengelompokkan beberapa *middleware* menjadi satu sehingga memudahkan dalam penggunaanya sebagaimana *individual middleware*. Kita buka `app/Http/Kernel.php` lihat pada array `$middlewareGroups`

```php
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
    ],

    'api' => [
        'throttle:60,1',
    ],
];
```
Berdasarkan kode diatas, secara default Laravel memiliki dua buah middleware group yaitu `web` dan `api`. 

Middleware group `web` didalamnya mengandung beberapa middleware sekaligus yaitu `EncryptCookies`, `AddQueuedCookiesToResponse`, `StartSession`, `ShareErrorsFromSession` dan `VerifyCsrfToken` sehingga kita tidak usah repot-repot memanggil middleware tersebut satu persatu tetapi cukup dengan menggunakan *key* dari middleware group yaitu `web`.

*Key* dari *middleware group* seperti `web` dan `api` bisa kita panggil baik pada *individual route*, `route groups` maupun *controller*. 

_Perlu dicatat, bahwa middleware group `web` oleh Laravel otomatis telah diterapkan pada route sebagai middleware default._

## Terminable Middleware
Adakalanya kita tetap butuh sebuah aksi ketika *response* telah diberikan kepada `User`, baik menggunakan *Before Middleware* maupun *After Middleware*. 

*Terminable middleware* menggunakan *method* bernama `terminate()` dan akan tetap dieksekusi meskipun terdapat *Before Midleware* yang gagal. Misalnya untuk pencatatan *log* seperti contoh sederhana dibawah ini

```php
public function handle($request, Closure $next)
{
    $user = Auth::user();
    if($user->role === User::ROLE_ADMIN) {
        return $next($request);
    }

    return redirect('home');
}

public function terminate($request, $response)
{
    //Tulis kode untuk aksi pencatatan log disini
}
```
Method `terminate()` akan tetap dieksekusi meskipun `User` bukan `ROLE_ADMIN`