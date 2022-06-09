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

- Start Android Studio
```shell
   cd  /home/madhu/prgms/android-studio/bin ; \
    ./studio.sh
```

- check Bonakula IP
```shell
## get  IP configure in domain
curl --location --request GET 'https://api.godaddy.com/v1/domains/bonakula.in/records/A/b2b' \
--header 'Authorization: sso-key xxxx:xxxxx'

## update IP

curl --location --request PUT 'https://api.godaddy.com/v1/domains/bonakula.in/records/A/b2b' \
--header 'Authorization: sso-key xxxxx:xxxx' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "data": "122.176.220.122",
        "name": "b2b",
        "ttl": 600,
        "type": "A"
    }
]'


```

