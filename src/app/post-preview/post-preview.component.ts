import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Post } from './../post';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~                                                                                                 |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~                                                                                               |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

   @Output() alSeleccionarPost: EventEmitter<Post>;
   @Output() alSeleccionarUsuario: EventEmitter<Post>;

   constructor() { 
      // Instanciamos el 'EventEmitter'.
      this.alSeleccionarPost = new EventEmitter<Post>();
      this.alSeleccionarUsuario = new EventEmitter<Post>();
    }

   notificarSeleccionPost(post: Post): void{
      // Para notificar, basta con ejecutar la función 'emit' del atributo 'EventEmitter'.
      this.alSeleccionarPost.emit(post);
    } 

   notificarSeleccionUsuario(post: Post): void{
      // Para notificar, basta con ejecutar la función 'emit' del atributo 'EventEmitter'.
      this.alSeleccionarUsuario.emit(post);
    }  

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

}
