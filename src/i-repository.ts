export interface IRepository<Entity> {
    save(entity: Entity): Promise<Entity>
}