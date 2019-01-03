import {auth} from '@/fire';
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Login from '@/views/Login';
import SignUp from '@/views/SignUp';
import chatpriv from '@/views/chatpriv';
import chat from '@/views/chat'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login  
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/chatpriv',
            name: 'chatpriv',
            component: chatpriv,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/chat',
            name: 'chat',
            component: chat,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        }       
    ]
});

router.beforeEach((to, from, next) => {
    //return next()
    const currentUser = auth.currentUser;
    const requiresAuth= to.matched.some(record => record.meta.requiresAuth);
    
    if(requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
});

export default router;