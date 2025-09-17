using Domain.Entities;

namespace Application.DTOs
{
    public class UsuarioDto
    {
        public decimal UsuID { get; set; }
        public string? Nombre { get; set; }
        public string? Apellido { get; set; }
        public string NombreCompleto => $"{Nombre} {Apellido}";
    }
}