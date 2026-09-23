import { Component, inject, signal } from '@angular/core';
import { Persona } from '../../interfaces/persona';
import { form, min, required, FormField } from '@angular/forms/signals';
import { PersonaService } from '../../services/persona.service';

@Component({
  imports: [FormField],
  selector: 'app-persona-component',
  styleUrl: './persona-component.css',
  templateUrl: './persona-component.html',
})
export class PersonaComponent {

    private personaService = inject(PersonaService)
    listaPersonas: Persona [] = []

    personaModelo = signal<Persona>({
      nombre: '', 
      edad: 0
    })

    constructor(){
      this.mostrar()
    }

    personaFormulario = form(this.personaModelo, (esquema)=>{
      required(esquema.nombre, {message: 'Debes digitar un nombre'})
      min(esquema.edad, 18, {message: 'Debes ser mayor de edad'})
    })

    guardar(evento: Event){
    evento.preventDefault()
    let persona = {
      'nombre': this.personaModelo().nombre,
      'edad': this.personaModelo().edad
    }
    this.personaService.guardar(persona)
    this.limpiar()
  }

  mostrar(){
    this.listaPersonas = this.personaService.mostrar()
  }

  limpiar(){
    this.personaModelo.set({nombre: '', edad:0})
  }
}
