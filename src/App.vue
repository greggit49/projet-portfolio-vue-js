<template class="template">
  <RouterView>
  <div ref="parentElement">
    <HeaderGT @scrollToParent="scrollToElement"/>
    <div ref="presentation">
      <presentationGT />
    </div>
    <div ref="projets">
      <Projets />
    </div>
    <div ref="experiences">
      <Experiences />
    </div>
    <div ref="contact">
      <ContactGT />
    </div>
  </div>
  <FooterGT />
  </RouterView>
</template>
  
<script>
  import HeaderGT from './components/headerGT.vue';
  import presentationGT from './components/presentationGT.vue';
  import Projets from './components/projets.vue';
  import Experiences from './components/Experiences.vue';
  import ContactGT from './components/contactGT.vue';
  import FooterGT from './components/footerGT.vue';
 

  export default {
    name: 'App',
  
    components:{
      HeaderGT,
      presentationGT,
      Projets,
      Experiences,
      ContactGT,
      FooterGT,
    },

    methods:{
      scrollToElement(elementId) {
      this.$refs[elementId].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
</script>
  
<style   >
  body{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: 100%;
   font-family: "mina" ;
   background-color: aqua;
   
   

  
   
   
}
.header{
    background-color: rgb(46, 16, 152);
   }
   .footer{
    background-color:  rgb(46, 16, 152);
    flex-direction: column-reverse;
    justify-content: center; 
    align-items: center;
    width: 100%;
  
   }
  </style>