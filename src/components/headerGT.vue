<template>
    <div class="header">
      
      <div class="top-barre">
        <div class="nom">
          <h1 class="np">portfolio</h1>
        </div>

        <div class ="navbar">
          
          <div class= "barre">
            
            
            <button   @click="scrollToParent('presentation')"  class ="color-groupe" > A propos</button>
          
          </div>
          
          
          <div class="barre">
            <button  @click="scrollToParent('presentation')" class="color-groupe">Social</button>
          </div>
          <div class="barre">
            <button   @click="scrollToParent('projets')" class="color-groupe" >Projets</button>
          </div>
          <div class="barre">
            <button  @click="scrollToParent('experiences')" class="color-groupe">Expérience</button>
          </div>
          <div class="barre">
            <button  @click="scrollToParent('contact')" class="color-groupe" >contact</button>
          </div>
          <div class="barre">
          <button @click="scrollToTop" class="btn" id="btn"><img src="../img/fleche du haut.png" class="img" alt="flèche du haut "/></button>
        </div>
          
        
          </div>
        
      </div>
    </div>
    

    <div class="divtitle">
      <h1 class="title">Développeur web <br /> et web mobile </h1>
     </div>

    
      <section class="name" id="myname">
        <div class="name-content">
        
            <h1>Greg Tessier</h1>
            
            </div>
           
    
           
            
        
    
    
      
        </section>


  </template>
    
  <script>
  export default {
  
    methods: {
      scrollToParent(elementId) {
        this.$emit('scrollToParent',elementId);
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  </script>
    
  <style >
    .header{ 
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
      .btn{
        position: fixed;
        bottom: 20px;
        right: 30px;
        border: none;
        padding: 20px,7%;
        border-radius: 40%;
        background-color: #1f2043;
      }
      .btn:hover{
        background-color:  #BAA7FF;
      }
      .img{
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 0;
        width: 30px ;
        height: 30px;
      }
      .top-barre{
        display: flex;
        .np{
          color:#0BD8B6;
          padding-left: 24px;
          
        }
        .navbar{
          display: flex;
          position: absolute;
          right: 0;
          font-size: 1.7rem;
          .barre{
            padding: 20px;
            font-size: 15px;
            padding-top: 20px; 
              .color-groupe{
                border: none;
                background-color: rgba(0, 0, 0,0);
                color: #0BD8B6;
                text-decoration: none;
                font-size: 25px;
              }
              .color-groupe:hover{
                background-color: rgba(0, 0, 0,0);
                border: none;
                color: #BAA7FF;
                text-decoration: underline;
              }
          }
       }
      }
    }
   





    .divtitle{
      position: absolute;
      width: 100%;
      height: 150px;
      .title{
        position: absolute;
        display: inline-flex;
        justify-content: flex-start;
        text-align: right;
        font-size: 40px;
        margin-top: 150px;
        padding-right: 150px;
        animation: textColor 7s ease infinite;
        color: rgb(9, 30, 93);
        
      }
      @keyframes textColor {
        0% { transform: scale(1);; color: #BAA7FF;}
        50% { transform:  scale(1.5);; color: #0BD8B6;}
        100% { transform:  scale(1);; color: #BAA7FF; }
        
    
      
      
    }}
 
      
      .texte{
        font-family: "Anek+Odia";
        color:BLUE;
        font-size: 20px;
      }
    
    
  .name{

font-size: 1.6rem;

  }
 
  .name-content h1{
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
    

  }
  span{
    color:var(--main-color);
  }
  
    
  </style>