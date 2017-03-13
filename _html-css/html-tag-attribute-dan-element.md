---
title: "HTML Tag, Attribute dan Element"
clean_title: "HTML Tag, Attribute dan Element"
date: '2017-03-11 21:50:00'
description: Menggunakan HTML, HyperText Markup Language kita jadi lebih mudah mendeskripsikan struktur halaman website, seperti kepala halaman, paragraf, gambar dan lain-lain. Sedangkan menggunakan CSS, Cascading Style Sheets kita bisa memberikan style atau mendekorasi sebuah halaman website seperti pemilihan warna, jenis font dan lain-lain.
layout: episode
published: true
---

Menggunakan HTML, <mark><em>HyperText Markup Language</em></mark> kita jadi lebih mudah mendeskripsikan struktur halaman _website_, seperti kepala halaman, paragraf, gambar dan lain-lain. Sedangkan menggunakan CSS, <mark><em>Cascading Style Sheets</em></mark> kita bisa memberikan *style* atau mendekorasi sebuah halaman _website_ seperti pemilihan warna, jenis font dan lain-lain.

Sebelum melangkah jauh tentang HTML, hal pertama yang harus difahami ialah tentang Tag, Attribute dan Element. 

### 1. Tag
Tag berfungsi untuk memberitahu browser apa fungsi sebuah konten, apakah sebagai paragraf, apakah sebagai gambar atau sebagai yang lain. Pembuatan tag didahului oleh tanda kurang dari (`<`) dan diakhiri tanda lebih dari (`>`). Tag juga biasanya diiringi oleh tag penutup. Seperti ini contoh tag : `<tag_pembuka> Ini adalah konten </tag_penutup>`. Pada tag penutup setelah `<` diiringi oleh _slash_ (`/`).

Sebagai contoh ketika akan membuat tautan _(link)_ maka akan menggunakan tag `<a>` dan diikuti oleh tag penutup `</a>`. Perhatikan pen di bawah ini, sebelah kiri adalah tag HTML dan sebelah kanan adalah hasilnya.

<iframe height='300' scrolling='no' title='Tautan' src='//codepen.io/khoerodin/embed/KWmzEL/?height=300&theme-id=28312&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/khoerodin/pen/KWmzEL/'>Tautan</a> by Khoerodin (<a href='http://codepen.io/khoerodin'>@khoerodin</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Silakan mempraktekkannya di komputer masing-masing, buka _text editor_ yang sudah saya perintahkan untuk didownload pada episode pertama, buat _file_ baru dan isi dengan `<a href="https://khoerodin.id/">Ini tautan ke website saya</a>` dan simpan dengan ekstensi <mark>.html</mark>. Misal tautan.html. Jika sudah tersimpan _double click_ file tersebut untuk membukanya menggunakan browser. Hasilnya akan sama dengan pen yang saya buat di atas.

Tidak semua tag memiliki tag penutup, dalam contoh di atas tag `<a>` memiliki tag penutup `</a>`. Beberapa tag yang tidak memiliki penutup adalah `<hr>` untuk pembuatan garis horizontal, `<br>` untuk pembuatan _break_ atau garis baru atau sama saja dengan _enter_, `<img>` untuk menyisipkan gambar. 

Sebelum HTML versi 5 tag yang tidak memiliki penutup ditulis `<hr/>` `<br/>` `<img/>`, terdapat penambahan _slash_ (`/`)sebelum tanda lebih dari (`>`).

### 2. Attribute
_Attribute_ adalah informasi tambahan yang diletakkan pada tag pembuka. Beberapa attribute yang sering dipakai adalah `id` yang digunakan sebagai identifikasi tag, `class` yang digunakan untuk mengklasifikasikan tag, `src` yang digunakan untuk meletakkan _source_ dari sebuah konten yang disipkan dan `href` yang digunakan untuk meletakan referensi tautan _(hyperlink reference)_.

Attribute biasanya terdiri dari <mark>nama attribute dan isi attribute</mark>. Perhatikan contoh pembuatan tautan yang sudah saya berikan dalam pen di atas. Perhatikan `<a href="https://khoerodin.id/">Ini tautan ke website saya</a>`, dalam tag `<a>` terdapat attribute `href="https://khoerodin.id/"`. `href` adalah nama attribute, sedangkan `https://khoerodin.id/` adalah isi attribute yang di tandai dengan apitan tanda petik dan didahului oleh tanda sama dengan (`=`).

Tidak semua attribute terdiri dari nama dan isi, seperti attribute `disabled` yang biasanya diletakkan pada tag input: `<input type="text" disabled />` hanya `disabled` saja tanpa ada isi.

### 3. Element
Element adalah blok terkecil dari HTML yang tersusun dari isi tag dan tag itu sendiri. Dalam contoh di atas `<a href="https://khoerodin.id/">Ini tautan ke website saya</a>` adalah element.

Berikut gambarannya agar mudah difahami: 

```html
<a href="https://khoerodin.id/">Ini tautan ke website saya</a>
 | \__________________________/ \_________________________/ |
tag pembuka     |                              |       tag penutup
            attribute                        isi tag    

\___________________________________________________________/
                              |
                           element
```

Ada masalah? silakan berkomentar...