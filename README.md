# AdonisJS (TypeScript Framework) + Bootstrap 5 + Vite 3 Setup Guide

## Installation

### 1. Install AdonisJS

```bash
npm init adonisjs@latest -- -K=web #inisiasi AdonisJS dengan API kit dan FrontEnd native Kit
cd weather-app
```

### 2. Install Bootsrap 5.3

```bash
npm install -D vite bootstrap bootstrap-icons @popperjs/core sass #install bootstrap css framework
```

- edit vite.config.ts jadi seperti ini

```bash
import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        verbose: false,
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
  assetsInclude: [
    'node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff',
    'node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2',
  ],
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/css/app.scss', 'resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
```

- tambahkan

```bash
@import 'bootstrap/scss/bootstrap';
$bootstrap-icons-font-dir: 'bootstrap-icons/font/fonts/';
@import 'bootstrap-icons/font/bootstrap-icons.scss';
```

di resources/css/app.scss

- tambahkan

```bash
import bootstrap from 'bootstrap'
```

di resources/css/app.js

### 3. Recheck Pre-requisites

```bash
npm install #recheck installation
```

### 4. Create Routes

```bash
node ace list:routes
---
- edit start/routes.ts
#tambahkan
import WeathersController from '#controllers/weathers_controller'
router.get('/weather', [WeathersController, 'renderPage'])
router.get('/api/weather', [WeathersController, 'getApiData'])
```

### 5. Create Controller & Configure

- node ace make:controller WeatherController
- edit file controller

### 6. Create Pages

- buat weather.edge di resources -> views/pages
