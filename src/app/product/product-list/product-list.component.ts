import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


    productos:any[]=[
      {
        "productoId":1,
        "Modelo":"Sentra",
        "Descripcion":"4 puertas",
        "Precio": 20000,
        "Year":2023,
        "Marca":"NISSAN",
        "Color":"Azul",
        "ImagenUrl":""
      },
      {
        "productoId":2,
        "Modelo":"Rio",
        "Descripcion":"4 puertas",
        "Precio": 15000,
        "Year":2023,
        "Marca":"audi",
        "Color":"Blanco",
        "ImagenUrl":""
      },
      {
        "productoId":3,
        "Modelo":"Sentra",
        "Descripcion":"4 puertas",
        "Precio": 20000,
        "Year":2023,
        "Marca":"Kia",
        "Color":"Azul",
        "ImagenUrl":""
      }
    ]
}
