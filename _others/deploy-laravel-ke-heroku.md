---
title: Deploy Laravel Ke Heroku
date: 2017-01-13
description: >-
  Langkah mudah deploy/install Laravel ke Heroku. Heroku merupakan layanan cloud computing bertype PaaS (Platform as a Service). Bagi para web developer lumayan lah versi gratisnya kalau hanya untuk sekedar demo aplikasi/website yang sedang dibangun.
published: true
layout: post
---

**Heroku** merupakan _layanan cloud computing_ bertype <a href="https://rizkimufrizal.github.io/heroku-sebagai-komputasi-modern/" target="_blank">PaaS</a> _(Platform as a Service)_. Bagi para *web developer* lumayan lah versi gratisnya kalau hanya untuk sekedar *demo* aplikasi/*website* yang sedang dibangun.

![Laravel with Heroku]({{ site.url }}/assets/images/laravel_heroku.jpg "Laravel with Heroku")

Berikut *environment* yang saya pakai ketika membuat tulisan ini:

1. Ubuntu 16.04 64-bit
2. PHP 7.0.8
3. Composer 1.3.1
4. Git 2.7.4
3. Laravel 5.3.*

Sebelum dimulai, pastikan Anda telah memahami:

1. Composser
2. Cara install Laravel, konfigurasi .env variables dan migrasi database
3. Git
4. Punya akun Heroku

#### Siap? Ayo kita mulai...

Buat *project* Laravel seperti biasa

```shell_session
$ laravel new herovel
...
$ cd herovel
```

#### Initialize Git

```shell_session
$ git init
$ git add .
$ git commit -m "initial commit laravel to heroku"
```

#### Membuat Procfile

```shell_session
$ echo web: vendor/bin/heroku-php-apache2 public/ > Procfile
$ git add .
$ git commit -m "procfile for heroku"
```

#### Create Heroku Apps

```shell_session
$ heroku create
```

#### Install Database Addons

```shell_session
// Jika menggunakan PostgreSQL
$ heroku addons:create heroku-postgresql:hobby-dev

// Ambil informasi koneksi
$ heroku config:get DATABASE_URL

// Maka akan muncul URL database dengan format:
// postgres://username:password@host:port/database_name
```

```shell_session
// Jika menggunakan MySQL
$ heroku addons:create cleardb:ignite

// Ambil informasi koneksi
$ heroku config:get CLEARDB_DATABASE_URL

// Maka akan muncul URL database dengan format:
// mysql://username:password@host/database_name?reconnect=true
````

#### Set ENV variables

Set *.env variables* sesuai kebutuhan Anda:

```shell_session
// DB_CONNECTION ganti sesuai dengan yang Anda pakai
// DB_HOST, DB_PORT, DB_DATABASE,
// DB_USERNAME dan DB_PASSWORD
// diambil dari URL database yang didapatkan ketika install database addons
// APP_LOG= errorlog : disarankan Heroku agar logging tidak ke laravel storage
// tapi ke Heroku
// Heroku juga merekomendasikan Trusting the Load Balancer :
// https://devcenter.heroku.com/articles/getting-started-with-laravel#trusting-the-load-balancer

$ heroku config:set \
APP_ENV=production \
APP_KEY=$(php artisan --no-ansi key:generate --show) \
APP_DEBUG=false \
APP_LOG=errorlog \
DB_CONNECTION=pgsql \
DB_HOST=host \
DB_PORT=port \
DB_DATABASE=database_name \
DB_USERNAME=username \
DB_PASSWORD=password
```

#### Push to Heroku and Migrate

```shell_session
$ git push heroku master
$ heroku run php artisan migrate
```

#### Open Apps
```shell_session
$ heroku open
```
Otomatis `browser` akan membuka aplikasi Heroku,
Tadaaaaa...... Laravel sudah di Heroku :smiley: :smiley: :smiley:

Mudah-mudahan bisa segera menyusul tutorial <a href="https://www.docker.com/" target="_blank">Docker</a> dan <a href="http://dokku.viewdocs.io/dokku/" target="_blank">Dokku</a>
