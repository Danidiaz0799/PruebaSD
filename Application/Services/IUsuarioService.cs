using Application.DTOs;

namespace Application.Services
{
    public interface IUsuarioService
    {
        Task<IEnumerable<UsuarioDto>> GetAllUsuariosAsync();
        Task<IEnumerable<UsuarioDto>> SearchUsuariosAsync(string searchTerm);
        Task<UsuarioDto?> GetUsuarioByIdAsync(decimal id);
    }
}