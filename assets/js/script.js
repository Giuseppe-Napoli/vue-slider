const app = new Vue({

  el:'#app',
  data:{

    counter:0,
    clock: null,

    galleria:[
      'assets/img/foto1.jpg',
      'assets/img/foto2.jpg',
      "assets/img/foto3.jpeg",
      "assets/img/foto4.jpg",
      "assets/img/foto6.jpg",
    ],

  },
  
  methods:{
    nextPhoto(){
      this.counter++;
      if(this.counter === this.galleria.length) this.counter =0;
    },

    prevPhoto(){
      this.counter--;
      if(this.counter < 0) this.counter =  this.galleria.length - 1;
    },
    
    
    cambioFoto(){
      clock =setInterval(this.nextPhoto, 1000);
    },

    stopSequenza (){
      clearInterval(clock)
    },

  }


})