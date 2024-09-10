<template>
     <div class="experiences" id="experiences">
    <h2 class="title-exp" id="[Expérience](index.html)">Expérience</h2>
    <div class="mesexperience">
      <div class="border">
        <h3 class="soustitle">front-end</h3>
        <div class="exp">
          <div class="front-end">
            <img src="../img/icons8-html-5-64.png" class="img-forme" alt="HTML5" />
          </div>
          <div class="front-end">
            <img src="../img/bxl-css3.svg" class="img-forme" alt="CSS3" />
          </div>
          <div class="front-end">
            <img src="../img/icons8-javascript-48.png" class="img-forme" alt="JavaScript"/>
          </div>
        </div>
      </div>
        <div class="border">
          <h3 class="soustitle">back-end</h3>
          <div class="exp">
            <div class="back-end">
              <img src="../img/icons8-node-js-48.png" class="img-forme" alt="Node.js" />
            </div>
            <div class="back-end">
              <img src="../img/icons8-vue-js-48.png" class="img-forme" alt="Vue.js" />
            </div>
          </div>
        </div>
        
          <h3 class="soustitle">Autre</h3>
          <div class="autre">
            <img src="../img/github-logo-24.png" class="img-forme" alt="GitHub" />
          </div>
        </div>
    </div>
  



</template>


<script>
export default { 
}


</script>

<style >
  .experiences{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    .title-exp{
      display: flex;
      justify-content: center;
      font-size: 25px;
      padding-bottom: 20px;
    }
    .mesexperience{
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding-top: 50px;
      padding-bottom: 100px;
    }
    .exp{
      display: flex;
      justify-content: space-around;
    }
    .front-end{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
      display: flex;
      align-items: center; 
      justify-content: center;
      margin: 5px;
    }
   .back-end{
      width: 100px;
      height: 100px;
      text-align: center;
      display: flex;
      align-items: center; 
      justify-content: center;
      margin: 5px;
    }
    .img-lang:hover{
      width: 80px;
      height:80px;
    }
    
   .autre{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
      display: flex;
      align-items:center;
      justify-content: center;
      margin:5px;
    }
    .img-forme{
      width: 60px;
      height: 60px;
    }
    .soustitle{
      display: flex;
      justify-content:center;
    }
  }
</style>