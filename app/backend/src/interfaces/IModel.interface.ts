export interface Entity {
  id?: string,
}

export interface IModel<T extends Entity> {
  findByPk(id: string): Promise<T>
  findAll(): Promise<T[]>
  findOne(props: any): Promise<T>
  create(obj: T): Promise<T>
  update(obj: T): Promise<void>
  delete(id: number): Promise<void>
}