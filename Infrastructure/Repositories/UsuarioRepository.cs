using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ApplicationDbContext _context;

        public UsuarioRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Usuario>> GetAllAsync()
        {
            return await _context.Usuarios
                .OrderBy(u => u.UsuID)
                .ToListAsync();
        }

        public async Task<IEnumerable<Usuario>> SearchAsync(string searchTerm)
        {
            return await _context.Usuarios
                .Where(u => u.Nombre!.Contains(searchTerm) || u.Apellido!.Contains(searchTerm))
                .OrderBy(u => u.UsuID)
                .ToListAsync();
        }

        public async Task<Usuario?> GetByIdAsync(decimal id)
        {
            return await _context.Usuarios
                .FirstOrDefaultAsync(u => u.UsuID == id);
        }
    }
}