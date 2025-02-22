---
title: "Owasp Top 10 Series — A8 (Software and Data Integrity Failures)"
date: 2022-05-13T18:45:34+07:00
tags: ["security"]
categories: ["Owasp Top Ten"]
description: "OWASP Top 10 — A8: Software and Data Integrity Failures adalah kerentanan yang terjadi akibat kurangnya validasi integritas dalam pembaruan perangkat lunak, dependensi, atau data penting, memungkinkan serangan seperti supply chain attacks dan manipulasi data. Pencegahan meliputi penggunaan digital signature, verifikasi sumber dependensi, serta implementasi mekanisme keamanan berbasis checksum."
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
![Owasp Top 10 Series — A8 (Software and Data Integrity Failures)](cover.png)


## Pengantar

Artikel kali ini kita akan membahas owasp top 10 yang ada di urutan ke delapan untuk tahun 2021 (owasp tiap 4 tahun sekali), ialah **Software and Data Integrity Failures**.

OWASP merupakan singkatan dari _Open Web Application Security Project_, yang merupakan sebuah project _Security Web Application_ open source yang diperkasai oleh para penggiat teknologi atau pengembang aplikasi, OWASP sering mengadakan seminar, forum diskusi serta pendidikan untuk para Developer.

jadi yang dimaksud **OWASP TOP 10**? owasp top 10 merupakan sebuah cara untuk mengkategorikan resiko kerentanan yang sering terjadi pada sebuah aplikasi berbasis website, dari yang paling atas (resiko tertinggi) hingga yang paling bawah (tingkat resiko rendah), Tujuannya apa ?, tentu saja ini sangat berguna bagi para developer aplikasi supaya mereka jadi lebih aware terhadap kerentanan di aplikasi mereka.

## Software and Data Integrity Failures

### Apa itu Software and Data Integrity Failures ?

**Software and Data Integrity Failures** merupakan sebuah kegagalan software atau aplikasi yang bekerja untuk memeriksa aplikasi integritas sebuah aplikasi.

- CWE-829: Inclusion of Functionality from Untrusted Control Sphere
- CWE-494: Download of Code Without Integrity Check
- CWE-502: Deserialization of Untrusted Data.

Gagalnya Menjaga Integritas Data dan Perangkat Lunak disebabkan oleh kode dan infrastruktur yang tidak mencegah terjadinya pelanggaran integritas. Contohnya sebuah objek/data yang telah di enkoding/diserialisasi di dalam struktur yang dapat dilihat dan dimodifikasi oleh penyerang rentan terhadap deserialisasi yang tidak aman.

Contoh lainnya adalah aplikasi yang bergantung pada plugins, libraries, atau modules yang asalnya dari sumber yang tidak dipercaya, repositori - repositori, Content Delivery Network (CDNs). CI/CD Pipeline yang tidak aman dapat menyebabkan munculnya akses illegal/tidak sah, kode yang berbahaya, atau kerusakan sistem.

Terakhir, aplikasi sekarang banyak yang memiliki fitur pembaharuan otomatis, yang dimana pembaharuan - pembaharuan yang ada diunduh tanpa adanya verifikasi integritas dan diterapkan/digunakan terhadap aplikasi yang sebelumnya terpercaya. Penyerang memiliki kemungkinan besar untuk mengunggah pembaharuan milik mereka sendiri untuk di distribusikan dan dijalankan/diterapkan pada semua instalasi/pembaharuan.

## Praktikal

### A08:2021 – Software and Data Integrity Failures- Explained

{{< youtube D4iQg4V7GmY >}}

## Mitigasi

- menggunakan _signature_ atau _mechanism_ untuk memverifikasi
- menggunakan _libaries_ dan _depedencies_ yang terpercaya

## Referensi

[OWASP Cheat Sheet: Infrastructure as Code](https://cheatsheetseries.owasp.org/cheatsheets/Infrastructure_as_Code_Security_Cheat_Sheet.html)

[OWASP Cheat Sheet: Deserialization](https://www.owasp.org/index.php/Deserialization_Cheat_Sheet)

[SAFECode Software Integrity Controls](https://safecode.org/publication/SAFECode_Software_Integrity_Controls0610.pdf)

[A 'Worst Nightmare' Cyberattack: The Untold Story Of The SolarWinds Hack](https://www.npr.org/2021/04/16/985439655/a-worst-nightmare-cyberattack-the-untold-story-of-the-solarwinds-hack)

[CodeCov Bash Uploader Compromise](https://about.codecov.io/security-update)

[Securing DevOps by Julien Vehent](https://www.manning.com/books/securing-devops)

# Beberapa Kerentanan lain di list CWE

[CWE-345 Insufficient Verification of Data Authenticity](https://cwe.mitre.org/data/definitions/345.html)

[CWE-353 Missing Support for Integrity Check](https://cwe.mitre.org/data/definitions/353.html)

[CWE-426 Untrusted Search Path](https://cwe.mitre.org/data/definitions/426.html)

[CWE-494 Download of Code Without Integrity Check](https://cwe.mitre.org/data/definitions/494.html)

[CWE-502 Deserialization of Untrusted Data](https://cwe.mitre.org/data/definitions/502.html)

[CWE-565 Reliance on Cookies without Validation and Integrity Checking](https://cwe.mitre.org/data/definitions/565.html)

[CWE-784 Reliance on Cookies without Validation and Integrity Checking in a Security Decision](https://cwe.mitre.org/data/definitions/784.html)

[CWE-829 Inclusion of Functionality from Untrusted Control Sphere](https://cwe.mitre.org/data/definitions/829.html)

[CWE-830 Inclusion of Web Functionality from an Untrusted Source](https://cwe.mitre.org/data/definitions/830.html)

[CWE-915 Improperly Controlled Modification of Dynamically-Determined Object Attributes](https://cwe.mitre.org/data/definitions/915.html)
