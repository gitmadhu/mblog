# run commands
```shell
cd ../m2105
wget https://gist.github.com/gitmadhu/966d89f76cbe582160f554cbde684529/raw/wrapperScript.sh 
wget https://gist.github.com/gitmadhu/966d89f76cbe582160f554cbde684529/raw/Dockerfile

wget https://gist.github.com/gitmadhu/3f0a44c2b29865f2150751b66934d17c/raw/docker-compose.yml
````

# setup java home in ubuntu
```
sudo nano /etc/profile

export JAVA_HOME="/home/madhu/prgms/dcevm"
export PATH=$JAVA_HOME/bin:$PATH

source /etc/profile


https://gist.github.com/gitmadhu/3f0a44c2b29865f2150751b66934d17c

```
#setup java machine from SAP
```shell
wget https://github.com/SAP/SapMachine/releases/download/sapmachine-11.0.14.1/sapmachine-jdk-11.0.14.1_linux-x64_bin.tar.gz

sudo tar -xvf sapmachine-jdk-11.0.14.1_linux-x64_bin.tar.gz

sudo nano /etc/profile

export JAVA_HOME="/opt/sapmachine-jdk-11.0.14.1"
export PATH=$JAVA_HOME/bin:$PATH

source /etc/profile

```

# add time stamp to the command history 

```shell
HISTTIMEFORMAT="%d/%m/%y %T "
```

# get command history for the date

```shell
history | grep '2021-01-25'
```

# install and configure apache2
```shell
## check the apache2 folder
cd /etc/apache2
## check config
less apache2.conf
## go to available sites and ls
cd sites-available
ls
## check the mobes available
cd ..
ls modes-available

## Change the domain names in 000 and ssl 
cd /etc/apache2/sites-available/
sudo nano 000-default.conf  
sudo nano default-ssl.conf


## enable sites in apache 2
sudo a2ensite default-ssl.conf

## disable sites in apache 2
sudo a2dissite default-ssl.conf

##restart apache2

sudo systemctl restart apache2


## check the status of apache2
sudo apache2ctl configtest

## create new site and configure ssl in apache2
cd /etc/apache2/sites-available/
sudo cp default-ssl.conf site-b2b.bonakula.in.conf
sudo nano site-b2b.bonakula.in.conf

## change certs in site conf file
SSLCertificateFile /etc/ssl/certs/apache-selfsigned.crt
SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key

## proxymatch
ProxyPassMatch "^/(.*\.gif)$" "http://backend.example.com:8000/$1"
```

# check apache logs

#add scheduled shutdown

#b2b accelerator, #working #minimal

#run install apache since we are using nginx


# jrebel local.properties config.

```json
tomcat.javaoptions=-agentpath:/home/madhu/.local/share/JetBrains/IdeaIC2021.3/jr-ide-idea/lib/jrebel6/lib/libjrebel64.so
tomcat.debugjavaoptions= -Xdebug -Xnoagent -Xrunjdwp:transport=dt_socket,server=y,address=*:5500,suspend=n -agentpath:/home/madhu/.local/share/JetBrains/IdeaIC2021.3/jr-ide-idea/lib/jrebel6/lib/libjrebel64.so
```

# audacity
1. play audio slowly.


# add tax in hybris
- de-vat-full

# setup melco

# unzip to suite 

mkdir 2105 ; \
unzip /mnt/d/mEra/hybris/CXCOMM210500P_0-70005661.ZIP -d 2105 ; \

# or Use existing hyb path
  cd /mnt/f/b2b2105

## unzip integration pack
unzip /mnt/d/mEra/hybris/CXCOMINTPK210200P_1-80005851.ZIP "hybris/bin/modules/*" -d CXINTPACK ; \
mv -r CXINTPACK/hybris/bin/modules /mnt/f/b2b2105/hybris/bin/modules
# OR mv r ....... 

## add cloud hotfolders
unzip /mnt/d/mEra/hybris/cloudhotfolders_2105.zip -d cloudhotfolders_2105  ; \
mv -r cloudhotfolders_2105 /mnt/f/b2b2105/hybris/bin/modules
ls /mnt/f/b2b2105/hybris/bin/modules/cloudhotfolders_2105

## custom code
unzip  melco-ec-feature-2105-setup_sync.zip "melco-ec-feature-2105-setup_sync/*" -d "/mnt/f/b2b2105/hybris" ; 
rsync -r /mnt/f/b2b2105/hybris/melco-ec-feature-2105-setup_sync/bin /mnt/f/b2b2105/hybris/ ; \
rsync -r  /mnt/f/b2b2105/hybris/melco-ec-feature-2105-setup_sync/config /mnt/f/b2b2105/hybris ; \
rm -r /mnt/f/b2b2105/hybris/melco-ec-feature-2105-setup_sync ; \
ls 2105/hybris/config ; \
ls 2105/hybris/bin/custom/

cd /mnt/f/b2b2105/hybris/config
mv local-local.properties  local.properties ; cd ~ \

#initialpassword.admin
echo 'initialpassword.admin=nimda' >> 2105/hybris/config/local.properties ; \


ant addonuninstall -Daddonnames="melcob2baddon,paidaddon" -DaddonStorefront.yacceleratorstorefront="melcostorefront"
ant reinstall_addons -Dtarget.storefront=melcostorefront

cd /mnt/f/b2b2105/hybris/bin/platform ; . ./setantenv.sh ; ant all


#uplad sample b2b user


#cleanup
rm -r CXINTPACK
rm -r cloudhotfolders_2011

rm -r /mnt/f/b2b2105/hybris/bin/modules/cloudhotfolders_2011

#solrserver path
# /mnt/f/b2b2105/hybris/bin/modules/search-and-navigation/solrserver
