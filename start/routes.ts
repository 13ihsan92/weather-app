/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

//import WeathersController from '#controllers/weathers_controller' //controller yang akan kita buat (normal load)
const WeathersController = () => import('#controllers/weathers_controller') // versi Lazy-Load

router.get('/weather', [WeathersController, 'renderPage']) // frontend
router.get('/api/weather', [WeathersController, 'getApiData']) //backend
