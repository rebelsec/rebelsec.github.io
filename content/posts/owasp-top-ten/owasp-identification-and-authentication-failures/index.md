---
title: "Owasp Top 10 Series — A7 (Identification and Authentication Failures)"
date: 2022-05-10T18:45:34+07:00
tags: ["security"]
categories: ["Owasp Top Ten"]
thumbnail: "/icon/owasp.svg"
---

## Pengantar

Artikel kali ini kita akan membahas owasp top 10 yang ada di urutan ke tujuh untuk tahun 2021 (owasp tiap 4 tahun sekali), ialah **Identification and Authentication Failures**.

OWASP merupakan singkatan dari _Open Web Application Security Project_, yang merupakan sebuah project _Security Web Application_ open source yang diperkasai oleh para penggiat teknologi atau pengembang aplikasi, OWASP sering mengadakan seminar, forum diskusi serta pendidikan untuk para Developer.

jadi yang dimaksud **OWASP TOP 10**? owasp top 10 merupakan sebuah cara untuk mengkategorikan resiko kerentanan yang sering terjadi pada sebuah aplikasi berbasis website, dari yang paling atas (resiko tertinggi) hingga yang paling bawah (tingkat resiko rendah), Tujuannya apa ?, tentu saja ini sangat berguna bagi para developer aplikasi supaya mereka jadi lebih aware terhadap kerentanan di aplikasi mereka.

## Identification and Authentication Failures

### apa itu Identification and Authentication Failures ?

![Identification and Authentication Failures](https://techdocs.f5.com/content/dam/f5/kb/global/solutions/k14998322_images/IDandAuthFailures.png)

**Identification and Authentication Failures** Merupakan sebuah celah keamanan yang terjadi karena autentikasi pada aplikasi tidak aman.

Kerentanan ini biasanya terjadi karena sistem tidak dapat mengidentifikasi / memverifikasi keaslian/autentikasi pengguna yang dapat menyebabkan pengguna terautentikasi sebagai victim (pengguna lain).

Beberapa Kerentanan yang sering terjadi :

- pengguna dari aplikasi masih menggunakan password default seperti admin:admin admin:123456 dsb
- Aplikasi tidak menggunakan Enkripsi (Cleartext), atau mungkin masih menggunakan jenis kriptografi yang sudah lawas / usang.
- Developer tidak menerapkan standarisasi autentikasi (NIST 800–63b), mulai dari jumlah character, jenis character dsb
- Developer menggunakan _Recovery system_ yang tidak efektif, seperti informasi pribadi milik pengguna.
- Tidak Melakukan filtering pada session, dikarenakan sistem logout / session destroy tidak diterapkan dengan baik.
- Aplikasi tidak menggunakan Enkripsi (Cleartext), atau mungkin masih menggunakan jenis kriptografi yang sudah lawas / usang.
- Tidak menerapkan limitasi request yang nanti nya akan menyebabkan user / attacker dapat melakukan bruteforcing.

## Praktikal

### #838572 No Rate Limit On Reset Password

sumber : https://hackerone.com/reports/838572

Attacker pergi ke halaman staging.every.org/resetPassword, enter email -> click reset password

```
POST /dbconnections/change_password HTTP/1.1
Host: login.every.org
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0
Accept: /
Accept-Language: id,en-US;q=0.7,en;q=0.§3§
Accept-Encoding: gzip, deflate
Content-Type: application/json
Auth0-Client: eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMS4xIn0=
Content-Length: 130
Origin: https://every.org
Connection: close
Referer: https://every.org/resetPassword
{"client_id":"1bT892TGga38o0GFw5EusmGnV9b3kjCq","email":"YOUREMAILADDRESS@gmail.com","connection":"Username-Password-Authentication"}
```

Kirim ke intruder (Burpsuite) lalu ulangi request

dampak dari serangan di atas dapat mengganggu kinerja dan bahkan dapat membuat server down.

### #1195325 Default Admin Username and Password on █████ Server at █████████mil

sumber : https://hackerone.com/reports/1195325

attaker pergi ke https://███mil lalu login, kemudian memasukkan pasword default seperti admin;admin.

dampaknya attacker dapat login dengan akun default di atas

## Mitigasi

- Jangan menerima session id dari _GET / POST_ request parameter user.
- Selalu Ubah / Generate baru Session ID seatau mengunakan waktu untuk menganti Session ID kembali.
- Block Ip yang usernya mengunakan X-Forwarded-For

## Referensi

[OWASP Proactive Controls: Implement Digital Identity](https://owasp.org/www-project-proactive-controls/v3/en/c6-digital-identity)

[OWASP Application Security Verification Standard: V2 authentication](https://owasp.org/www-project-application-security-verification-standard)

[OWASP Application Security Verification Standard: V3 Session Management](https://owasp.org/www-project-application-security-verification-standard)

[OWASP Cheat Sheet: Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

[OWASP Cheat Sheet: Credential Stuffing](https://cheatsheetseries.owasp.org/cheatsheets/Credential_Stuffing_Prevention_Cheat_Sheet.html)

[OWASP Cheat Sheet: Forgot Password](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)

[OWASP Cheat Sheet: Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)

[OWASP Automated Threats Handbook](https://owasp.org/www-project-automated-threats-to-web-applications/)

## Beberapa kerentanan lain di list CWE

[CWE-255 Credentials Management Errors](https://cwe.mitre.org/data/definitions/255.html)

[CWE-259 Use of Hard-coded Password](https://cwe.mitre.org/data/definitions/259.html)

[CWE-287 Improper Authentication](https://cwe.mitre.org/data/definitions/287.html)

[CWE-288 Authentication Bypass Using an Alternate Path or Channel](https://cwe.mitre.org/data/definitions/288.html)

[CWE-290 Authentication Bypass by Spoofing](https://cwe.mitre.org/data/definitions/290.html)

[CWE-294 Authentication Bypass by Capture-replay](https://cwe.mitre.org/data/definitions/294.html)

[CWE-295 Improper Certificate Validation](https://cwe.mitre.org/data/definitions/295.html)

[CWE-297 Improper Validation of Certificate with Host Mismatch](https://cwe.mitre.org/data/definitions/297.html)

[CWE-300 Channel Accessible by Non-Endpoint](https://cwe.mitre.org/data/definitions/300.html)

[CWE-302 Authentication Bypass by Assumed-Immutable Data](https://cwe.mitre.org/data/definitions/302.html)

[CWE-304 Missing Critical Step in Authentication](https://cwe.mitre.org/data/definitions/304.html)

[CWE-306 Missing Authentication for Critical Function](https://cwe.mitre.org/data/definitions/306.html)

[CWE-307 Improper Restriction of Excessive Authentication Attempts](https://cwe.mitre.org/data/definitions/307.html)

[CWE-346 Origin Validation Error](https://cwe.mitre.org/data/definitions/346.html)

[CWE-384 Session Fixation](https://cwe.mitre.org/data/definitions/384.html)

[CWE-521 Weak Password Requirements](https://cwe.mitre.org/data/definitions/521.html)

[CWE-613 Insufficient Session Expiration](https://cwe.mitre.org/data/definitions/613.html)

[CWE-620 Unverified Password Change](https://cwe.mitre.org/data/definitions/620.html)

[CWE-640 Weak Password Recovery Mechanism for Forgotten Password](https://cwe.mitre.org/data/definitions/640.html)

[CWE-798 Use of Hard-coded Credentials](https://cwe.mitre.org/data/definitions/798.html)

[CWE-940 Improper Verification of Source of a Communication Channel](https://cwe.mitre.org/data/definitions/940.html)

[CWE-1216 Lockout Mechanism Errors](https://cwe.mitre.org/data/definitions/1216.html)
