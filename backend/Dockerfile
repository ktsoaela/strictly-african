# Backend (LARAVEL)
# Use the official PHP image with Apache
FROM php:8.3-apache

# Set the working directory
WORKDIR /var/www/html

# Install dependencies required by Laravel and PHP extensions
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    libpq-dev \
    git \
    && docker-php-ext-install zip pdo pdo_pgsql

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy the composer.json and composer.lock files to the container
COPY composer.* ./

# Install PHP dependencies using Composer
RUN composer install --no-dev --optimize-autoloader

# Copy the rest of the Laravel application code into the container
COPY . .

# Copy the custom Apache configuration file into the container (adjust based on your needs)
COPY docker-000-default.conf /etc/apache2/sites-available/000-default.conf

# Enable mod_rewrite and other necessary Apache modules
RUN a2enmod rewrite

# Set the correct permissions for storage and cache directories
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 80 to access the app
EXPOSE 80

# Command to start Apache in the foreground
CMD ["apache2-foreground"]
