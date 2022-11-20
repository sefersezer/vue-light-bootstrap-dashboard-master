import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import OverviewOld from 'src/pages/OverviewOld.vue'
import Overview from 'src/pages/Overview.vue'
import Words from 'src/pages/Words.vue'
import TimeDefinitions from 'src/pages/TimeDefinitions.vue'
import WhoAmI from 'src/pages/WhoAmI.vue'
import TechnicalBackground from 'src/pages/TechnicalBackground.vue'
import Experiences from 'src/pages/Experiences.vue'
import SearchResult from 'src/pages/SearchResult.vue'

import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'

import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'words',
        name: 'Words',
        component: Words
      },
      {
        path: 'time-definitions',
        name: 'Time Definitions',
        component: TimeDefinitions
      },
      {
        path: 'who-am-i',
        name: 'Who am I?',
        component: WhoAmI
      },
      {
        path: 'technical-background',
        name: 'Technical Background',
        component: TechnicalBackground
      },
      {
        path: 'experiences',
        name: 'Experiences',
        component: Experiences
      },
      {
        path: 'search-result',
        name: 'SearchResult',
        component: SearchResult
      }

    ]
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview-old',
    children: [
      {
        path: 'overview-old',
        name: 'Overview Old',
        component: OverviewOld
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
