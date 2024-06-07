/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ArticlesController = () => import('#controllers/articles_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [ArticlesController, 'index']).as('home')
