---
title: Jangan Gunakan Rails Schema! Gunakan Ini Sebagai Gantinya
date: 2023-07-18 17:23:00 +07:00
description: Ada kekurangan jika kamu tetap menggunakan Rails Schema, salah satunya database bisa saja tidak konsisten. Akan saya jelaskan dengan detail disini
layout: post
tags: rails ruby sql
uid: dont-use-rails-schema
---

Ada dua hal yang perlu dicatat dari `schema.rb`

- Ini adalah cerminan struktur database dalam bentuk Ruby
- Bersifat *database-agnostic* yang artinya apapun database yang digunakan *syntax* dan strukturnya sebagian besar akan sama
- Fitur-fitur database *advance* tidak ter-*capture*

`schama.rb` akan sangat berguna ketika kita dihadapkan oleh skenario:

- Aplikasi kita memiliki ribuan *file* migrasi, ini menyebabkan banyak waktu terbuang karena memerlukan waktu lama ketika menyiapkan *environment* baru
- File migrasi mungkin mengandung kode yang hanya compatible pada database versi lama sehingga akan *fail* jika dijalankan

Solusi tercepat dari kedua (atau lebih) problem di atas adalah dengan menjalankan `rails db:setup`. Perintah ini akan meng-generate database dari `schema.rb`.

Tapi bagaimana jika database memiliki *logic* yang kompleks yang tidak ter-*capture* di `schama.rb`? Solusinya yaitu menggunakan `structure.sql`

## Kelebihan `structure.sql`

Kelebihan `structure.sql` ialah akan meng-*copy* struktur database dengan sama persis termasuk *function*, *views*, *constraint,* *store procedure* dan lain-lain dimana hal ini tidak bisa didapatkan jika menggunakan `schema.rb`

## Beralih dari `schema.rb` ke `structure.sql`

Buka file `config/application.rb`

```ruby
module YourApp
  class Application < Rails::Application
    config.load_defaults x.x

    # Tambahkan baris ini:
    config.active_record.schema_format = :sql
  end
end
```

Kemudian jalankan `rails db:migrate` maka akan tergenerate file `db/structure.sql`. Ketika kita menjalankan perintah `rails db:setup` tidak lagi menggunakan `schema.rb` tapi menggunakan `structure.sql`
