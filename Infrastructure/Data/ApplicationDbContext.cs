using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.UsuID);
                entity.Property(e => e.UsuID)
                    .HasColumnType("numeric(18,0)")
                    .ValueGeneratedNever()
                    .HasColumnName("usuID");
                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnType("varchar(100)")
                    .HasColumnName("nombre");
                entity.Property(e => e.Apellido)
                    .HasMaxLength(100)
                    .HasColumnType("varchar(100)")
                    .HasColumnName("apellido");
                entity.ToTable("usuario");
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}