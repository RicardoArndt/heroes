namespace Heroes.Global.Entities.Interfaces
{
    public interface IEntity<T> where T : IEntity<T> {}
}
