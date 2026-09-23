import { Service } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Service()
export class PersonaService {
    private listaPersonas: Persona [] = []

    guardar(persona: Persona){
        this.listaPersonas.push(persona)
    }

    mostrar(){
        return this.listaPersonas
    }
}
