export class Alumno {
  constructor(
    public id: string,
    public nombre: string,
    public descripcion: string,
    public anoingreso: number,
    public fechanacimiento: Date,
    public miniatura: string,
  ) {}
}
