using server.Models;

namespace server.Repository;

public class AnimalRepository
{
    private readonly List<Animal> _animals = new List<Animal>();

    public IEnumerable<Animal> GetAll() => _animals;

    public Animal GetByName(string name)
    {
        return _animals.FirstOrDefault(animal => animal.Name == name);
    }

    public void Add(Animal animal)
    {
        animal.Id = _animals.Count + 1;
        _animals.Add(animal);
    }

    public void Delete(int id)
    {
        var animalToRemove = _animals.FirstOrDefault(animal => animal.Id.Equals(id));
        if (animalToRemove != null)
        {
            _animals.Remove(animalToRemove);
        }
    }
}