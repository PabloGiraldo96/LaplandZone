import { Component,HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 public scroll: boolean = false 

constructor(private render: Renderer2){ }

@HostListener('window: scroll')
onwindowscroll(){

  let elemento = document.getElementById("menu")
  if(window.pageYOffset > 0){
    this.scroll = true
    this.render.addClass(elemento, 'menu2')
    this.render.removeClass(elemento, 'menu')
  }
 else {
  this.scroll = false
  this.render.removeClass(elemento, 'menu2')
  this.render.addClass(elemento, 'menu')
    }

  }
}
