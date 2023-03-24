import { v4 } from 'uuid'

export class Car {
  public readonly id: string;

  public placa: string;
  public chassi: string;
  public renavam: number;
  public modelo: string;
  public marca: string;
  public ano: number;

  constructor(props: Omit<Car, 'id'>, id?: string) {
    for (const [key, prop] of Object.entries(props)) {
      if (prop === "" || prop === null) {
        throw new Error("Não é permitido a criação de um veículo com campos vazios.")
      }
    }

    if (props.ano > 9999) 
      throw new Error("Ano do veículo inválido.")

    if (props.renavam.toString().length !== 9)
      throw new Error("Tamanho do renavam inválido. (9 caracteres)")

    if (props.chassi.length < 17) 
      throw new Error("Tamanho do chassi inválido. (17 caracteres)")
    
    if (!id) {
      this.id = v4()
    }
    
    Object.assign(this, props)
  }  
}