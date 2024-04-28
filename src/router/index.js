// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import Home from "../viajes/components/home.component.vue";
import Argentina from "../viajes/components/argentina.component.vue";
import Ecuador from "../viajes/components/ecuador.component.vue";
//import Peru from "../viajes/components/peru.component.vue";
import Ciudades from "../viajes/components/ciudades.component.vue";
import NotFound from "../viajes/components/notfound.component.vue";


//import lugaranidado from "../paises/lugaranidado.vue";

//Ejemplo de param (Route Dinamic)
//import destinationShow from "../paises/destinationShow.vue";

//const TutorialCatalogueComponent = () => import("../learning/pages/tutorial-catalogue.component.vue");

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',           component: Home,       alias: '/home'},
        { path: '/home',       component: Home,       alias: '/home'},
        { path: '/argentina',  component: Argentina,  name:'argentina'},
        { path: '/ecuador',    component: Ecuador,    name:'ecuador'},
        //{ path: '/peru',       component: Peru,       name:'peru'},

        //Aqui le podemos asignar un nombre a la ruta
        //{ path: '/brazil',      name:'brazil_name', component: Brazil,            meta: { title: 'Brazil' },  },
        //{ path: '/destination',        component: destinationShow,               meta: { title: 'Destination' }, },
        //Aqui realizamos la invocacion del componente en tiempo de ejecucion (late binding)
        { path: '/peru',  name:'peru', component: ()=>import('../viajes/components/peru.component.vue'),            meta: { title: 'peru' },  props: true,
            children: [
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /users/:id/profile is matched
                    path: ':ciudades',
                    component: Ciudades
                }
            ]
        },
        //Aqui redireccionamos por Ruta
        { path: '/c', redirect: "/home" },
        //Aqui redireccionamos por Nombre
        { path: '/e', redirect: {name: "ecuador"} },
        { path: '/:pathMatch(.*)*', component: NotFound},

        //Aqui veremos lo de Named Views
        { path: '/login', name:"login", components:{
                default: ()=> import('../viajes/components/login.component.vue'),
                LeftSideBar: ()=> import('../public/pages/leftsidebar.component.vue'),
            }},
        { path: '/logout', name:"logout", components:{
            default: ()=> import('../views/logout.component.vue'),
                LeftSideBar: ()=> import('../public/pages/leftsidebar.component.vue'),
            }},
        { path: '/invoice', name:"invoice", components:{
                default: ()=> import('../views/invoice.component.vue'),
                LeftSideBar: ()=> import('../public/pages/leftsidebar.component.vue'),
            }}
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});
export default router;