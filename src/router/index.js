import ContactGT from '@/components/contactGT.vue';
import HeaderGT from '@/components/headerGT.vue';
import Experiences from '@/components/Experiences.vue';
import Projets from '@/components/projets.vue';
import PresentationGT from '@/components/presentationGT.vue';
import Pages404 from '@/components/pages404.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    
   
    { path: '/:pathMatch(.*)*', component: Pages404 },  // Route 404 pour gérer les routes non trouvées
  
        {
            name:'HeaderGT',
            path : ''/'',
            component: HeaderGT
        },
        {
            name:'presentation',
            path : '/presentation',
            component: PresentationGT
        },
        {
            name:'Projets',
            path : '/Projets',
            component: Projets
        },
        {
            name:'Experiences',
            path : '/Experiences',
            component: Experiences
        },
        {
            name:'Contact',
            path : '/Contact',
            component: ContactGT
        },
       
     ] 
    



  
  const router = createRouter({
    history: createWebHistory(),
    routes  // Associez les routes définies ci-dessus
  });
  
  export default router;  // Exportez `router`
