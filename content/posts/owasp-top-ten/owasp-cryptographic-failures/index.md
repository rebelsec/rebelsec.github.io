---
title: "Owasp Top 10 Series — A2 (Cryptographic Failures)"
date: 2022-04-29T07:40:46+07:00
<<<<<<< HEAD
tags: ["security"]
categories: ["Owasp Top Ten"]
thumbnail: "/icon/owasp.svg"
---

![Owaps top ten](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiBvA85_BZ2tdH_9QCYHUgFw4V5J0mfoGbDjn1MzrRK3SV9vk3CUUxb5hRWcmVWPAAqzswwWfZop_WqEnmKQsOEqhhB1jl-ON6yiZmuSVkuXZ0TlxS4zZezTTpXXy0v_Sm9lS9Otsg9n9jsy8GTM3-O6IrEN0oceam8fthmCHlIs65XJccHz_pvp0eQN0/s1280/OWAPS.webp)
=======
categories: ["Owasp Top Ten"]
tags: ["security"]
description: "OWASP Top 10 — A2: Cryptographic Failures adalah kerentanan yang terjadi akibat penggunaan algoritma lemah, manajemen kunci yang buruk, atau data sensitif yang tidak dienkripsi dengan benar. Pencegahan meliputi penggunaan enkripsi kuat (AES-256, TLS 1.2+), pengelolaan kunci yang aman, dan menghindari protokol usang."
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
---

![Owasp Top 10 Series — A2 (Cryptographic Failures)](cover.png)
>>>>>>> fd99555 (Update rebelsec.id Site)

## Pengantar

OWASP merupakan singkatan dari _Open Web Application Security Project_, yang merupakan sebuah project _Security Web Application_ open source yang diperkasai oleh para penggiat teknologi atau pengembang aplikasi, OWASP sering mengadakan seminar, forum diskusi serta pendidikan untuk para Developer.

jadi yang dimaksud **OWASP TOP 10**? owasp top 10 merupakan sebuah cara untuk mengkategorikan resiko kerentanan yang sering terjadi pada sebuah aplikasi berbasis website, dari yang paling atas (resiko tertinggi) hingga yang paling bawah (tingkat resiko rendah), Tujuannya apa ?, tentu saja ini sangat berguna bagi para developer aplikasi supaya mereka jadi lebih aware terhadap kerentanan di aplikasi mereka.

di artikel ini kita akan membahas owasp top 10 yang paling teratas untuk tahun 2021 (owasp tiap 4 tahun sekali), ialah **Cryptographic Failures**.

## Cryptographic Failures

### Apa itu Cryptographic Failures

**Cryptographic Failures** adalah sebuah kondisi dimana pengimplementasian kriptografi atau pengenkripsian yang kurang baik di sebuah aplikasi sehingga menyebabkan data sensitive **terekspos** dengan mudah.

Developer yang menerapkan **konsep buruk** kriptografi sering menyebabkan **data Breach**, karna ya tadi... data tidak di enkripsi (sembunyikan) dari attacker dengan baik, yang mana dimanfaatkan oleh attacker untuk mengakses data yang lebih sensitive lagi.

Beberapa hal yang sering terjadi pada Cryptographic Failures ialah:

1. Transmit / Menyimpan sebuah data sensitif tidak dalam keadaan terenkripsi (Cleartext)
2. Menggunakan enkripsi / encoding yang sudah lawas, atau sudah mudah ditemukan pemecahnya.
3. Menggunakan default key untuk sebuah enkripsi, tidak menerapkan management key dan key rotation
4. Tidak memvalidasi sertifikat server dan trust chain
5. Melakukan Transmit / Menyimpan data sensitif dengan protocol yang tidak aman.

## Praktikal

Berikut saya cantumkan beberapa contoh report dari orang lain di celah keamanan **Cryptographic Failures** :

### #1066410 Google API key leaks and security misconfiguration leads Open Redirect Vulnerability

Sumber : https://hackerone.com/reports/1066410

ednpoint :

https://account.clario.co/js/main.044af6485f6b0cd90809.js

```
'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyAw-SpLHVTIP3IFEIkckCuEmIhnUrY9OrQ';
```

<<<<<<< HEAD
![Gambar_1](https://drive.google.com/uc?id=1fnNfthzjzD7eQ1z3tAUySyXZ-7jQVVz_)
=======
![Gambar_1](1.png)
>>>>>>> fd99555 (Update rebelsec.id Site)

Kemudian attacker memanfaatkan kebocoran dari **API Key**

        Ref Link1 => https://support.google.com/firebase/answer/9021429
        Ref Link2 =>https://firebase.google.com/docs/dynamic-links/rest

Saat Attacker mau mengetes **Regex**, ia menemukan bahwa terdapat kerentanan **OpenRedirect** pada sistem yang dimana ia bisa memasukkan **URL** (yang sudah di pendekkan (bisa dengan **Postman**)) yang akan mengarahkan ke situs manapun.

https://lnk.clario.co/?link=[URLHERE]

Berikut dilampirkan **Proof of Concept** :

https://drive.google.com/uc?id=1PtFwYSFwMyNFz796o9vvFUGfpJXOiOW0

### #396467 Github Token Leaked publicly for https://github.sc-corp.net

Sumber : https://hackerone.com/reports/396467

endpoint :

```
https://github.com/█████/leetcode/blob/0eec6434940a01e490d5eecea9baf4778836c54e/TopicMatch.py
```

```py
import os
import requests
import sys
pull_number = 76793
pull_url = "https://github.sc-corp.net/api/v3/repos/Snapchat/android/pulls/" + str(pull_number)
payload = {}
payload["Authorization"] = "token " + "9db9ca3440e535d90408a32a9c03d415979da910"
print payload
r = requests.get(pull_url,

## I didn't try anything with the token, and dont know what access it has, and i know that in order to login to https://github.sc-corp.net you need to have an email @snap but still i though it would be a good idea to share this finding with you in case it can be used in a way that i dont know.
```

### #173268 Login credentials transmitted in cleartext on index.rubygems.org

sumber : https://hackerone.com/reports/173268

Pertama pergi ke https://hackerone.com/reports/1066410

lalu attacker intercept ke endpoit di atas, melakukan Method **POST**

```
POST /session HTTP/1.1
Host: index.rubygems.org
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://index.rubygems.org/sign_in
Cookie: _gauges_unique_hour=1; _gauges_unique_day=1; _gauges_unique_month=1; _gauges_unique_year=1; _gauges_unique=1; _ga=GA1.2.406017651.1475277378
DNT: 1
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Pragma: no-cache
Cache-Control: no-cache
```

Hasil :

```
utf8=✓authenticity_token=9dML75aXwXcw4rqJlOeKDK2/SdRK78+5ciMEtrMbDgEf160r9v1TX0/pXynzDC+pYSp5M1oGLsmtvkixo+MfdA==
session[who]=Eterm1
session[password]=5[redacted]W
commit=Sign+in
```

dari hasil di atas kita mendapati bahwa **authenticity_token**, **session**, **commit** tidak dilakukan enkripsi dengan baik

## Mitigasi

- Enkripsi semua data dengan menggunakan algoritma yang terpercaya
- Enkripsi semua data yang ada di transit dengan menggunakan protokol terbaru seperti **TLS**
- Melakukan Identifikasi dan pengontrolan semua sensitive data yang ada
- Jangan mengambil dan menyimpan data yang dirasa tidak penting
- Simpan password dengan baik, Pakai Hash.

## Beberapa kerentanan lain di list CWE:

[CWE-261 Weak Encoding for Password](https://cwe.mitre.org/data/definitions/261.html)

[CWE-296 Improper Following of a Certificate’s Chain of Trust](https://cwe.mitre.org/data/definitions/296.html)

[CWE-310 Cryptographic Issues](https://cwe.mitre.org/data/definitions/310.html)

[CWE-319 Cleartext Transmission of Sensitive Information](https://cwe.mitre.org/data/definitions/319.html)

[CWE-321 Use of Hard-coded Cryptographic Key](https://cwe.mitre.org/data/definitions/321.html)

[CWE-322 Key Exchange without Entity Authentication](https://cwe.mitre.org/data/definitions/322.html)

[CWE-323 Reusing a Nonce, Key Pair in Encryption](https://cwe.mitre.org/data/definitions/323.html)

[CWE-324 Use of a Key Past its Expiration Date](https://cwe.mitre.org/data/definitions/324.html)

[CWE-325 Missing Required Cryptographic Step](https://cwe.mitre.org/data/definitions/325.html)

[CWE-326 Inadequate Encryption Strength](https://cwe.mitre.org/data/definitions/326.html)

[CWE-327 Use of a Broken or Risky Cryptographic Algorithm](https://cwe.mitre.org/data/definitions/327.html)

[CWE-328 Reversible One-Way Hash](https://cwe.mitre.org/data/definitions/328.html)

[CWE-329 Not Using a Random IV with CBC Mode](https://cwe.mitre.org/data/definitions/329.html)

[CWE-330 Use of Insufficiently Random Values](https://cwe.mitre.org/data/definitions/330.html)

[CWE-331 Insufficient Entropy](https://cwe.mitre.org/data/definitions/331.html)

[CWE-335 Incorrect Usage of Seeds in Pseudo-Random Number Generator(PRNG)](https://cwe.mitre.org/data/definitions/335.html)

[CWE-336 Same Seed in Pseudo-Random Number Generator (PRNG)](https://cwe.mitre.org/data/definitions/336.html)

[CWE-337 Predictable Seed in Pseudo-Random Number Generator (PRNG)](https://cwe.mitre.org/data/definitions/337.html)

[CWE-338 Use of Cryptographically Weak Pseudo-Random Number Generator(PRNG)](https://cwe.mitre.org/data/definitions/338.html)

[CWE-340 Generation of Predictable Numbers or Identifiers](https://cwe.mitre.org/data/definitions/340.html)

[CWE-347 Improper Verification of Cryptographic Signature](https://cwe.mitre.org/data/definitions/347.html)

[CWE-523 Unprotected Transport of Credentials](https://cwe.mitre.org/data/definitions/523.html)

[CWE-720 OWASP Top Ten 2007 Category A9 — Insecure Communications](https://cwe.mitre.org/data/definitions/720.html)

[CWE-757 Selection of Less-Secure Algorithm During Negotiation(‘Algorithm Downgrade’)](https://cwe.mitre.org/data/definitions/757.html)

[CWE-759 Use of a One-Way Hash without a Salt](https://cwe.mitre.org/data/definitions/759.html)

[CWE-760 Use of a One-Way Hash with a Predictable Salt](https://cwe.mitre.org/data/definitions/760.html)

[CWE-780 Use of RSA Algorithm without OAEP](https://cwe.mitre.org/data/definitions/780.html)

[CWE-818 Insufficient Transport Layer Protection](https://cwe.mitre.org/data/definitions/818.html)

[CWE-916 Use of Password Hash With Insufficient Computational Effort](https://cwe.mitre.org/data/definitions/916.html)
