<template>
  <form @submit.prevent="sendEmail">
    <routeurview>
    <div class="commentaire">
      <div>
        <h2 class="contact">Contact</h2>
      </div>
      <div class="comm">
        <div class="nom-prenom">
          <div class="nom">
            <label for="nom" class="title">Nom</label>
            <input type="text" id="nom" v-model="nom" required class="np" placeholder="Nom">
          </div>
          <div class="prenom">
            <label for="prénom" class="title">Prénom</label>
            <input type="text" id="prénom" v-model="prenom" required class="np" placeholder="Prénom">
          </div>
        </div>
        <div class="mail">
          <label for="mail" class="title">E-mail</label>
          <input type="text" id="mail" v-model="email" required class="imput" placeholder="E-mail">
        </div>
        <div class="objet">
          <label for="objet" class="title">Objet</label>
          <input type="text" id="objet" v-model="objet" required class="imput" placeholder="Objet">
        </div>
        <div class="message">
          <label for="message" class="title">Message</label>
          <textarea id="message" v-model="message" required class="mess" placeholder="Ecrire votre message "></textarea>
        </div>
        <div class="bouton">
        <button type="submit" class="btn">Envoyer</button>
        </div>
      </div>
    </div>
    </routeurview>
  </form>

</template>


<script>
import emailjs from 'emailjs-com';
 export default {
    data() {
      return {
        form: {
          nom: '',
          prenom: '',
          email: '',
          objet: '',
          message: '',
        }
      }
    },
    methods: {
      sendEmail() {
        
     
      emailjs.send('SERVICE_f4tvw9o', 'TEMPLATE_8hbarru', this.formData, 'USER_4lJDIJ4E7Bc33kKKC')
        .then((response) => {
          console.log('Email envoyé avec succès !', response.status, response.text);
          alert('Email envoyé avec succès');
        }, (error) => {
          console.log('Échec de l\'envoi de l\'email...', error);
          alert('Erreur lors de l\'envoi de l\'email');
     });
    }
  }


 };
</script>

<style >
.commentaire{
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 70px;
  .comm{
    width: 100%;
    
    
  }
  .contact{
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
    
    
  }
  .title-error{
    font-size: 25px;
    margin: 0;
  }
  .nom-prenom{
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    .nom{
      display: flex;
      flex-direction: column;
      width: 50%;
      padding-right: 10px;
    }
    .prenom{
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }
  .mail{
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 100%;
  }
  .objet{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 10px;
  }
  .message{
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 100%;
  }
  .bouton{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    .btn{
      background: linear-gradient(200deg,#0BD8B6, #BAA7FF);
      border-radius: 15px;
      padding: 0px 50px;
      margin-top: 10px;
      padding: 5px;
    }
  }
  .np{
    border-radius: 15px;
    padding: 0px 10px;
    background-color: #6E56CF;
    color: #0BD8B6;
    border-block-color: #0BD8B6 ;
  }
  .imput{
    border-radius: 15px;
    padding: 0px 10px;
    background-color: #6E56CF;
    color: #0BD8B6;
    border-block-color: #0BD8B6 ;
  }
  .mess{
    border-radius: 15px;
    padding: 0px 10px;
    background-color: #6E56CF;
    color: #0BD8B6;
    border-block-color: #0BD8B6 ;
    height: 150px;
  }   
}
</style>