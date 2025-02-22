---
title: "Mengenal Sql Injection dan cara mengatasinya"
date: 2024-01-29T22:30:15+07:00
<<<<<<< HEAD
tags: ["security"]
categories: ["PWA"]
thumbnail: "/icon/portswigger.svg"
=======
disableHLJS: true 
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
>>>>>>> fd99555 (Update rebelsec.id Site)
---

Pada Artikel kali ini, kita akan masuk ke seri **PWA** atau **PortSwigger Web Security Academy**, dan memasuki kategori **SQL injection** tapi sebelum itu alangkah baiknya kalau kita mengetahui dan mengenal apa itu **SQL injection** ?

**SQL Injection** adalah sebuah kerentanan keamanan web yang membuat attacker dapat memanipuasi server korban dengan kueri yang telah dibuat oleh attacker. Jenis kerentanan ini termasuk kedalam Broken Access Control, untuk **Praktikal** dapat baca artikel sebelumnya [Owasp Top 10 Series — A1 (Broken Access Control)](/posts/owasp-top-ten/owasp-broken-access-control/). Biasanya serangan SQL Injection dilakukan oleh attacker untuk mengambil isi database dari sebuah aplikasi.

**SQL Injection** secara illegal tentu saja termasuk kedalam ancaman cybercrime, ancaman ini sering kali terjadi dikarenakan developer tidak melakukan filter dengan benar, sehingga attacker dapat menyalahgunakan celah tersebut untuk mengambil database aplikasi tersebut.

![Sql Injection](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9PP9lED0qoI2N4t87rowN5y17vmNEcQ3Gcgfz-vPJxQi5sPhozF4zpxTkmvzfMm2TbTEp8qEUYpMjlHmdVoG1xJ9t2uWAeo-QUXhpYn8NDkD54WXb-APOrv2g4M_W6SV7hWhub7XtN7g49fBYWPzUm7zPISK7YrmtycsyMndOP4GIrmRwZCVtBa9xG_E/s1280/sql-injection.webp)

## Cara Kerja SQL Injection

SQL injection masih masuk ke dalam Bug Jenis Critical dan masih menjadi Bug Favorit bagi attacker untuk melakukan testing ke Website atau Aplikasi. Ini dikarenakan teknik SQL Injection cukup sederhana namun dampaknya luarbiasa.

Seperti yang saja jelaskan diatas SQL Injection terjadi karena developer tidak memfilter aplikasi dengan benar, sehingga attacker dapat menyalahgunakan celah tersebut untuk mengambil database aplikasi tersebut.

untuk lebih jelasnya bisa memahami vidio dibawah ini :

{{< youtube wX6tszfgYp4 >}}

## Jenis-Jenis SQL Injection

Berikut ini jenis-jenis Sql Injection menurut akses ke server dan potensi kerusakan yang terjadi :

### in-band SQL Injection

Jenis Serangan ini merupakan jenis serangan yang mudah dilakukan dan dipahami oleh attacker, karena hasil atau nilainya nampak, jenis serangan ini ada 2 cara yaitu :

**Error-based Sql Injection** : Serangan ini memanfaat kesalahan pesan atau respon dari server, attacker memakai informasi yang didapatkan dari pesan itu untuk mempelajari informasi-informasi database server untuk mekekspoitasi lebih lanjut.

**Union-based Sql Injection** : Serangan ini memanfaatkan operator UNION SQL untuk mendapatkan respon yang digunakan.

### Inferential SQL Injection

Jenis serangan Sql Injection ini dilakukan dengan cara attacker memanfaatkan respon server dengan mengirimkan payload (tidak tampil di UI) biasanya serangan ini dinamakan Blind SQLI, Blind SQLI terkategori menjadi:

**Time-based Sql Injection**: Attacker mengirimkan payload SQL dan menunggu respon sesuai waktu yang ditetapkan di dalam payload.

**Boolean Sql Injection**: Attacker mengirimkan Payload lalu menunggu respon server, biasanya hasilnya berupa _True_ dan _False_.

### Out-of-band Sql Injection:

Jenis Serangan ini memanfaatkan respon Server melalui saluran keluar, seperti DNS atau protokol HTTP.

## Mencegah Serangan SQL Injection

Berikut beberapa cara yang diterapkan untuk mencegah serangan SQL Injection

- Mengatur validasi input
- Menggunakan parameterized queries
- Memasang WAF dan IPS
- Memasang filter untuk karakter khusus
- Nonaktifkan fitur SQL standar
- Mengatur privilege
- Menggunakan SQL Escape String
- Mematikan notifikasi error
