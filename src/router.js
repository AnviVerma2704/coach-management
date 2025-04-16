import { createRouter, createWebHistory } from 'vue-router';

import CoachList from './pages/coaches/coachList.vue';
import CoachDetail from './pages/coaches/coachDetails.vue';
import CoachRegistration from './pages/coaches/coachRegister.vue';
import ContactCoach from './pages/requests/contactCoach.vue';
import RequestsReceived from './pages/requests/requestRecived.vue';
import NotFound from './pages/notFound.vue';

const Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        {
            path: '/coaches/:id', props: true, component: CoachDetail, children: [
                { path: 'contact', component: ContactCoach },
            ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', redirect: '/coaches', component: NotFound },
    ]
});

export default Router;