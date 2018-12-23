import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Services from './pages/Services.vue'
import Legal from './pages/Legal.vue'
import Contact from './pages/Contact.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/legal',
        name: 'legal',
        component: Legal
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
];