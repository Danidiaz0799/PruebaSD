using Domain.Entities;

namespace Domain.Repositories
{
    public interface IUsuarioRepository
    {
        Task<IEnumerable<Usuario>> GetAllAsync();
        Task<IEnumerable<Usuario>> SearchAsync(string searchTerm);
        Task<Usuario?> GetByIdAsync(decimal id);
    }
}