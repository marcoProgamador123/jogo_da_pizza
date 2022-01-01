class Form{
   constructor(){
       this.input = createInput("Name");
       this.button = createButton("play");
       this.greeting = createElement("h2");
       this.title = createElement("h2");

   }
   hide(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
       this.title.hide();
   }
   display(){
       this.title.html("JOGO DA PIZZA");
       this.title.position(width/2,0);
       this.input.position(width/2,height/2);
       this.button.position(width/2,height/2+50);
       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           player.name = this.input.value();
           playerCount +=1;
           player.index = playerCount;
           player.uptade();
           player.uptadeCount(playerCount);
           this.greeting.html("Olá bem vindo"+ player.name);
           this.greeting.position(width/2,height/2)

       })
   }
}
    