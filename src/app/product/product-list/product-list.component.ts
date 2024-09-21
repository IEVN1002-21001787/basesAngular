import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

//*ngIf=true, false
imageWidth:number=60;
imageMargin:number=2
muestraImg:boolean=true;
listFilter:string=''

muestImg():void{
  this.muestraImg=!this.muestraImg;
}

    productos:IProductos[]=[
      {
        "productoId":1,
        "Modelo":"Sentra",
        "Descripcion":"4 puertas",
        "Precio": 20000,
        "Year":"febrero 18 2021",
        "Marca":"NISSAN",
        "Color":"Azul",
        "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KfvfUkrlw1UlJ51boOgoN2OwyB1I5KE9iw&s"
      },
      {
        "productoId":2,
        "Modelo":"Rio",
        "Descripcion":"4 puertas",
        "Precio": 15000,
        "Year":"marzo 3 2023",
        "Marca":"audi",
        "Color":"Blanco",
        "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDiPXCdqQnlszeX5PDpWgzBvOgpuJ-3myghA&s"
      },
      {
        "productoId":3,
        "Modelo":"A4",
        "Descripcion":"4 puertas",
        "Precio": 20000,
        "Year":"febrero 23 2023",
        "Marca":"Kia",
        "Color":"Azul",
        "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9YuqIBtn4BiZmKqmVY5FASBSLCO2cx9N1w&s"
      }
    ]
}
