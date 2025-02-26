import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jsPDF } from 'jspdf';
import { EmailComponent } from "../../components/email/email.component";

@Component({
  selector: 'app-product',
  imports: [RouterLink, EmailComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {

  @Input() price: string | number = ""
  @Input() img: string = ""
  @Input() title: string = ""
  @Input() description: string = ""
  @Input() idProduct: string = ""

  @Input() isAuth: boolean | undefined

  downloadPDF(imageURL: string, nombre: string, precio: string | number, descripcion: string) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(`Ficha Técnica: ${nombre}`, 15, 15);

    doc.addImage(imageURL, 'WEBP', 15, 30, 120, 140);  

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Descripción: ${descripcion}`, 15, 200);

    doc.text(`Precio: S/.${precio}`, 15, 210);

    doc.setDrawColor(0);
    doc.line(15, 220, 195, 220);

    doc.save(`${nombre}-ficha-tecnica.pdf`);
  }

  clickAuth: boolean = false;

  openModal(){
    this.clickAuth = !this.clickAuth;
    document.body.style.overflow = "hidden";
  }

  closeModal(){
    this.clickAuth = false;
  }

  sendEmailAndDownload(){
    this.downloadPDF(this.img, this.title, this.price, this.description);
    this.clickAuth = false;
    document.body.style.overflow = "auto";
    console.log("se envió email...");
  }

}
