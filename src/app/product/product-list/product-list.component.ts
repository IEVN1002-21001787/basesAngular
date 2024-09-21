import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

//*ngIf=true, false

    productos:any[]=[
      {
        "productoId":1,
        "Modelo":"Sentra",
        "Descripcion":"4 puertas",
        "Precio": 20000,
        "Year":2023,
        "Marca":"NISSAN",
        "Color":"Azul",
        "ImagenUrl":"https://www.google.com/imgres?q=audi%20r8&imgurl=https%3A%2F%2Fcdn.motor1.com%2Fimages%2Fmgl%2FJOBB2g%2Fs3%2Faudi-r8-v-10-vegas-yellow.jpg&imgrefurl=https%3A%2F%2Fes.motor1.com%2Fnews%2F713798%2Faudi-r8-final-produccion-desaparicion%2F&docid=-uD_iHeEQLYzWM&tbnid=G1ZFzaTplbxuzM&vet=12ahUKEwjag5nG_NKIAxWSJEQIHbLnOl0QM3oECFEQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjag5nG_NKIAxWSJEQIHbLnOl0QM3oECFEQAA"
      },
      {
        "productoId":2,
        "Modelo":"Rio",
        "Descripcion":"4 puertas",
        "Precio": 15000,
        "Year":2023,
        "Marca":"audi",
        "Color":"Blanco",
        "ImagenUrl":"https://www.google.com/imgres?q=audi%20r8&imgurl=https%3A%2F%2Fimg.remediosdigitales.com%2Fc0d1d0%2Fa218765_large%2F1366_521.jpg&imgrefurl=https%3A%2F%2Fwww.motorpasion.com.mx%2Findustria%2Faudi-r8-v10-performance-rwd-caracteristicas-fotos-e-informacion-mexico&docid=tYD8U3Mm1P3vCM&tbnid=4l8o3RfmXWaBAM&vet=12ahUKEwjag5nG_NKIAxWSJEQIHbLnOl0QM3oECCsQAA..i&w=1366&h=521&hcb=2&ved=2ahUKEwjag5nG_NKIAxWSJEQIHbLnOl0QM3oECCsQAA"
      },
      {
        "productoId":3,
        "Modelo":"A4",
        "Descripcion":"4 puertas",
        "Precio": 20000,
        "Year":2023,
        "Marca":"Kia",
        "Color":"Azul",
        "ImagenUrl":"https://www.google.com/imgres?q=audi%20r8&imgurl=https%3A%2F%2Fwww.diariomotor.com%2Fimagenes%2F2022%2F04%2Faudi-r8-performance-parts-10-625fe2ecb171e.jpg&imgrefurl=https%3A%2F%2Fwww.diariomotor.com%2Fnoticia%2Faudi-r8-version-final-primeros-detalles%2F&docid=hhHVT-b2v_4LVM&tbnid=IyBQKS4T7qayvM&vet=12ahUKEwjag5nG_NKIAxWSJEQIHbLnOl0QM3oECGQQAA..i&w=1920&h=1193&hcb=2&ved=2ahUKEwjag5nG_NKIAxWSJEQIHbLnOl0QM3oECGQQAA"
      }
    ]
}
