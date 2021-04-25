# philspelman.com

This is my personal portfolio website, hosted at [philspelman.com](http://www.philspelman.com)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## DEV NOTES
###When the EC2 Memory Was Full:

* RUN:
```shell
dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+'
```
* LOOK FOR THE OLDEST KERNELS
    > run the following command on several of them to free up enough space
    ```shell
    sudo dpkg --purge linux-image-4.4.0-1066-aws linux-image-extra-4.4.0-1066-aws
    ```
```shell
EXAMPLE:
sudo dpkg --purge linux-image-4.4.0-1067-aws linux-image-extra-4.4.0-1067-aws
sudo dpkg --purge linux-image-4.4.0-1069-aws linux-image-extra-4.4.0-1069-aws
sudo dpkg --purge linux-image-4.4.0-1070-aws linux-image-extra-4.4.0-1070-aws
```

* then try running:
```shell
sudo apt --purge autoremove -f
```



# TO RESTART SERVER:
```shell
sudo reboot

## After REBOOTING - need to restart the service:
## GO TO THE /var/www/mean-portfolio directory:
cd /var/www/mean-portfolio/

## USE THE FOLLOWING COMMANDS:
sudo pm2 start app.js
sudo pm2 stop 0
sudo pm2 restart 0
sudo service nginx reload && sudo service nginx restart

```



# Portfolio Site
```shell
cd /var/www/mean-portfolio
```

# Edit Resume
```shell
cd /var/www/mean-portfolio/ang-grayport/src/app/resume/
```
OR
```shell
nano /var/www/mean-portfolio/ang-grayport/src/app/resume/resume.component.html

# Make edits & save - THEN:

cd /var/www/mean-portfolio/ang-grayport && ng build
```
## <i>IF YOU MAKE A CHANGE TO THE ANGULAR PROJECT --> go to the project dir and run `````ng build`````</i>

