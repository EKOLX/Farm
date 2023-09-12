using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Repository;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnimalController: ControllerBase
{
    private readonly AnimalRepository _repository;

    public AnimalController(AnimalRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Animal>> GetAll()
    {
        var animals = _repository.GetAll();
        return Ok(animals);
    }

    [HttpPost]
    public ActionResult Create(Animal animal)
    {
        var existingAnimal = _repository.GetByName(animal.Name);
        if (existingAnimal != null)
        {
            return Conflict("Animal with the same name already exists.");
        }
        
        _repository.Add(animal);
        return CreatedAtAction(nameof(Create), new {id = animal.Id }, animal);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _repository.Delete(id);
        return NoContent();
    }
}