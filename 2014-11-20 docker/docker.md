# [fit] Docker

![fit](docker-logo.png)

---

# Ich
![left](chris.jpg)

[@chassing](https://twitter.com/chassing)
[github.com/chassing](https://github.com/chassing)
[github.com/opendevmeet](https://github.com/opendevmeet/)

---

# Was ist docker?

docker.com

![inline 100%](vm vs docker.png) ![inline 100%](vm vs docker 2.png)

---

# Was ist es noch?

![inline](docker.com_community_no_-06.jpg)

[Hub](https://registry.hub.docker.com) Community Company

---

# Use Cases

![inline](https://d3oypxn00j2a10.cloudfront.net/assets/img/Yelp/Yelp-Logo.jpg) ![inline](https://d3oypxn00j2a10.cloudfront.net/assets/img/New%20Relic/logo_NR-fb.png) ![inline](https://d3oypxn00j2a10.cloudfront.net/0.7.0/img/logos/spotify-small.png)

![inline](slide-docker.jpg)

![inline 200%](https://d3oypxn00j2a10.cloudfront.net/0.7.0/img/homepage/ebay-logo.png) ![inline](https://d3oypxn00j2a10.cloudfront.net/assets/img/Rackspace/RackspaceLogoManagedCloudLogo.jpg)

---

# Hello World Dockerfile

```ini
FROM ubuntu
CMD echo "This is a test." | wc -
```

---

# Dockerfile

```ini
FROM php:5.6-apache

RUN a2enmod rewrite

RUN rm -rf /var/www/html && mkdir /var/www/html
VOLUME /var/www/html
WORKDIR /var/www/html

ENV WORDPRESS_VERSION 4.0.0
ENV WORDPRESS_UPSTREAM_VERSION 4.0

# upstream tarballs include ./wordpress/ so this gives us /usr/src/wordpress
RUN curl -SL http://wordpress.org/wordpress-${WORDPRESS_UPSTREAM_VERSION}.tar.gz | tar -xzC /usr/src/

COPY docker-entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 80
CMD ["apache2", "-DFOREGROUND"]
````

---

![](http://www.solvencyiinews.com/wp-content/uploads/2012/07/morepower.png)

# Did you say more power?

---

# FIG

```
db:
  image: postgres
  ports:
    - "5432:5432"
web:
  build: .
  command: python manage.py runserver 0.0.0.0:8000
  volumes:
    - .:/code
  ports:
    - "8000:8000"
  links:
    - db
```
___

# Fragen vor der Demo?

![](http://gobeyondseo.com/wp-content/uploads/2014/08/Interview-Questions-Employers-Featured.png)

---

# [fit] Demo

![](smashed-computer.gif)

---

# Moar!

![](http://static1.gamespot.com/uploads/ignore_jpg_scale_super/1425/14251903/2622920-8277373593-Famou.jpg)

[Docker Präsentation](http://de.slideshare.net/dotCloud/docker-resentation-meetupparis?qid=89013861-ae40-4611-a24d-440fffb6098e&v=default&b=&from_search=8)
[DB migrations mit docker](http://blog.mathieu-leplatre.info/use-docker-to-ease-database-schema-migrations.html)
[Running GUI apps with docker](http://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)
[Jenkins Docker Image](https://registry.hub.docker.com/_/jenkins/)

---

# Grafiken + Quellen

Alles "gestohlen" :wink: von:

[docker.com](https://www.docker.com/whatisdocker/)
[blog.docker.com](https://blog.docker.com/)
[heise.de](http://www.heise.de/newsticker/meldung/Amazon-Lambda-Anwendungen-ohne-Infrastruktur-2456963.html?wt_mc=rss.ho.beitrag.rdf)
[http://www.solvencyiinews.com](http://www.solvencyiinews.com)
[http://gobeyondseo.com](http://gobeyondseo.com)
