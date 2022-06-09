
---
slug: First start 
title: Greetings!
authors:
  - name: Madhu
    title: creator Start today
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

- start B2B
```shell
cd /home/madhu/m2105/hybris/bin/platform ; \
./setantenv.sh ; \
./hybrisserver.sh debug
```
- Start B2C
```shell
  cd /home/madhu/b2c2105/hybris/bin/platform ; \
  ./setantenv.sh ; \
  ./hybrisserver.sh debug
``` 
- Start Idea
```shell
   cd  /home/madhu/prgms/idea-IC-213.5744.223/bin ; \
    ./idea.sh
```
- check Bonakula IP
```shell
curl ipinfo.io/ip 

curl --location --request PUT 'https://api.godaddy.com/v1/domains/bonakula.in/records/A/b2b' \
--header 'Authorization: sso-key xxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "data": "136.185.229.159",
        "name": "b2b",
        "ttl": 600,
        "type": "A"
    }
]'

curl ipinfo.io/ip | echo ' "data": "$(</dev/stdin)", '
```