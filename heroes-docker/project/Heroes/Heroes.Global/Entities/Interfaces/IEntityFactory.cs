namespace Heroes.Global.Entities.Interfaces
{
    public interface IEntityFactory<T, K> : IFactory<T> 
        where T : IEntity<T> 
        where K : IEntityFactory<T, K>
    {
        string Id { get; set; }
    }
}
