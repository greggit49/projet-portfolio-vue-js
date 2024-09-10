<template>
      <div class="pages404">
        <div class="image"><img src="../img/pages 404.jpeg" class="ima" alt=""></div>
        <div class="alt">
            <div class="ohoh">ohoh!!!</div>
            <div class="alert">la page que vous recherchez n'esite pas!</div>
            <router-link to="/">Retour à l'accueil</router-link>
        </div>
        <a href="App.vue" class="but"><button class="button">revenir a la pages d'accueil</button></a>
    </div>

</template>


<script>

export default {
    name: 'pages404',
}

</script>

<style>

.image{
    display: flex;
    justify-content: center;
    align-items: center;
}
.ima{
    padding-top: 50px;
width: 30%;
height: 30%;
}
.alt{
display: flex;
flex-direction: row; 
padding-top: 50px;
}
.ohoh{
    font-size: 70px;
    color: #0BD8B6 ;
    
}
.alert{
font-size: 50px;
color: #0BD8B6 ;
padding-top: 50px;
padding-left: 10px;
}
.but{
    padding-top: 50px;
}
.button{
    border-radius: 15px;
    background: linear-gradient(200deg,#0BD8B6, #BAA7FF);
    color: #291F43;
    font-size: 30px;
}
</style>