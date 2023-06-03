import { Component, HostListener,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  public scrolliando:boolean=false

  constructor(private render:Renderer2){}

  @HostListener('window:scroll')
  onWindowScroll(){
    let elemento=document.getElementById("menu")
    if(window.pageYOffset>0){
      this.scrolliando=true
      this.render.addClass(elemento,'menu2')
      this.render.removeClass(elemento,'menu')
    }else{
      this.scrolliando=false
      this.render.removeClass(elemento,'menu2')
      this.render.addClass(elemento,'menu')
    }
  }

}