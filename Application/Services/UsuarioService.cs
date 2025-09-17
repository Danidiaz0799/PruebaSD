using Application.DTOs;
using Domain.Entities;
using Domain.Repositories;

namespace Application.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public async Task<IEnumerable<UsuarioDto>> GetAllUsuariosAsync()
        {
            var usuarios = await _usuarioRepository.GetAllAsync();
            return usuarios.Select(MapToDto);
        }

        public async Task<IEnumerable<UsuarioDto>> SearchUsuariosAsync(string searchTerm)
        {
            if (string.IsNullOrWhiteSpace(searchTerm))
            {
                return await GetAllUsuariosAsync();
            }

            var usuarios = await _usuarioRepository.SearchAsync(searchTerm);
            return usuarios.Select(MapToDto);
        }

        public async Task<UsuarioDto?> GetUsuarioByIdAsync(decimal id)
        {
            var usuario = await _usuarioRepository.GetByIdAsync(id);
            return usuario != null ? MapToDto(usuario) : null;
        }

        private static UsuarioDto MapToDto(Usuario usuario)
        {
            return new UsuarioDto
            {
                UsuID = usuario.UsuID,
                Nombre = usuario.Nombre,
                Apellido = usuario.Apellido
            };
        }
    }
}