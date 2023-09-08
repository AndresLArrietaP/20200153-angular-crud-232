import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from './modelos/contacto';
import { Contactoservicio } from './servicios/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-crud-232';
  contactoArray: Contacto[] = [];
  contactoForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private contactoService: Contactoservicio) {
    this.contactoForm = formbuilder.group({
      fullname: [''],
      phone: [''],
      email: [''],
    })
  }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.contactoService.getContactos().subscribe(
      (result: any) => {
        this.contactoArray = result?.contactos;
        console.log(this.contactoArray);
      }, (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia...',
          text: 'Ha ocurrido un error!',
        });
      }
    );
  }

  registrarContacto(): void {
    this.contactoService.registrarContacto(this.contactoForm.value).subscribe(
      (result: any) => {
        //SIMILAR AL FINALLY EN JAVA
        console.log('Llamando a los getcontactos');
        this.getContactos();
        //LLAMA  A LOS CONTACTOS POR CADA VEZ QUE SE USE EL REGISTRO
      }, 
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia...',
          text: 'Ha ocurrido un error!',
        });
      }
    );
    //console.log('Llamando a los getcontactos');
    //this.getContactos();
  }
}
