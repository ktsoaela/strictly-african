# FAQ

## 1. **PostgreSQL Container Fails to Start: Port 5432 Already in Use**

If your PostgreSQL container (`strictly-african-db-1`) fails to start with the error:

```
Error response from daemon: driver failed programming external connectivity on endpoint strictly-african-db-1
```

This typically occurs because **port 5432 is already in use** by another PostgreSQL instance on your host machine.

### **Solution**

#### **Step 1: Identify What’s Using Port 5432**
Run the following command to check which process is using port 5432:

```bash
sudo lsof -i :5432
```

You’ll see output like this:

```
COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
postgres  1234  postgres  7u  IPv4  12345  0t0  TCP 127.0.0.1:5432 (LISTEN)
```

If PostgreSQL is already running, you have two options:

---

#### **Option 1: Stop the Local PostgreSQL Service**
If you don’t need the system-wide PostgreSQL service, stop it:

```bash
sudo systemctl stop postgresql
```

To prevent it from starting on reboot:

```bash
sudo systemctl disable postgresql
```

Then restart your Docker containers:

```bash
docker compose up
```

---

#### **Option 2: Change the Port in `docker-compose.yml`**
If you need both the system PostgreSQL **and** the Docker container running, change the exposed port in your `docker-compose.yml` file.

Find this section:

```yaml
ports:
  - "5432:5432"
```

Change it to another port, like `5433`:

```yaml
ports:
  - "5433:5432"
```

Then restart Docker:

```bash
docker compose down
docker compose up -d
```

---

#### **Step 2: Verify the Containers Are Running**
After fixing the issue, verify if the containers are up:

```bash
docker ps
```

This should now show your database container running properly.

---

## 2. **Next.js App Successfully Built**

If your Next.js app has been successfully built, you can start the production server using:

```bash
npm run start
```

Or, if you're using Docker, restart the container:

```bash
docker compose up -d nextjs-1
```

Then, visit **http://localhost:3000** to check if everything is running smoothly. 🚀

---

## 3. **Apache "Forbidden" Error**

The "Forbidden" error indicates that Apache is running but doesn’t have permission to access the resources it’s supposed to serve, or there might be a configuration issue.

### **Troubleshooting Steps**

#### **Step 1: Check File Permissions**
Ensure the files in your Laravel application have the correct permissions so Apache can read and serve them.

Run the following commands inside the container:

```bash
docker exec -it strictly-african-laravel-1 bash
chown -R www-data:www-data /var/www/html
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache
```

This ensures proper permissions for the `storage` and `bootstrap/cache` directories.

---

#### **Step 2: Check Apache Configuration**
The error could be due to a misconfiguration in Apache. Check the Apache logs for more details:

```bash
docker exec -it strictly-african-laravel-1 bash
tail -f /var/log/apache2/error.log
```

Look for specific error messages related to permissions or misconfigurations.

---

#### **Step 3: Verify Laravel `.env` Configuration**
Ensure the `APP_URL` in your `.env` file matches the URL you’re accessing (e.g., `http://localhost:8000`):

```plaintext
APP_URL=http://localhost:8000
```

---

#### **Step 4: Check Apache Virtual Host**
Ensure the Apache virtual host configuration is correct. Verify the `DocumentRoot` in the default configuration:

```bash
docker exec -it strictly-african-laravel-1 bash
cat /etc/apache2/sites-available/000-default.conf
```

Ensure the `DocumentRoot` points to `/var/www/html/public` (the default Laravel public directory).

---

#### **Step 5: Clear Laravel Cache**
Clear Laravel’s cache to resolve potential issues with cached routes or configurations:

```bash
docker exec -it strictly-african-laravel-1 bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

---

#### **Step 6: Restart Apache**
After making changes, restart Apache inside the container:

```bash
docker exec -it strictly-african-laravel-1 bash
service apache2 restart
```

---

#### **Step 7: Check Apache Access Logs**
Check the Apache access logs for further clues:

```bash
docker exec -it strictly-african-laravel-1 bash
tail -f /var/log/apache2/access.log
```

---

### **Conclusion**
- Ensure proper file permissions for Laravel’s directories, especially `storage` and `bootstrap/cache`.
- Verify Apache and Laravel configurations.
- Restart Apache and clear Laravel’s cache.

-----

