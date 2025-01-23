# Use the official PHP image as the base image
FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libzip-dev \
    zip \
    default-mysql-client \
    && docker-php-ext-install pdo pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing application directory contents
COPY . .

# Install PHP dependencies
RUN composer install --no-scripts --no-autoloader --ignore-platform-reqs

# Generate optimized autoload files
RUN composer dump-autoload --optimize

# Expose port 8000 for Symfony
EXPOSE 8000

# Set default command
CMD ["php-fpm"]
