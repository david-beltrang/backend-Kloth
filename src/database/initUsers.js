import { User } from '../models/user.js';

// Datos ficticios. Las imagenes son placeholders de picsum.photos.
const initialUsers = [
  {
    fullName: 'Valentina Restrepo',
    username: 'vale_restrepo',
    email: 'valentina.restrepo@example.com',
    bio: 'Amante del estilo minimalista y la moda sostenible.',
    location: 'Medellín, Colombia',
    website: 'https://valentina.example.com',
    profileImage: 'https://picsum.photos/seed/kloth-user-1/300/300',
  },
  {
    fullName: 'Santiago Gómez',
    username: 'santi_gomez',
    email: 'santiago.gomez@example.com',
    bio: 'Streetwear, sneakers y fútbol los fines de semana.',
    location: 'Bogotá, Colombia',
    website: null,
    profileImage: 'https://picsum.photos/seed/kloth-user-2/300/300',
  },
  {
    fullName: 'Camila Herrera',
    username: 'cami_herrera',
    email: 'camila.herrera@example.com',
    bio: 'Diseñadora de modas. Reseño prendas con ojo de costurera.',
    location: 'Cali, Colombia',
    website: 'https://camilaherrera.example.com',
    profileImage: 'https://picsum.photos/seed/kloth-user-3/300/300',
  },
  {
    fullName: 'Andrés Martínez',
    username: 'andres_mtz',
    email: 'andres.martinez@example.com',
    bio: 'Corredor y ciclista. Busco ropa deportiva que aguante.',
    location: 'Barranquilla, Colombia',
    website: null,
    profileImage: 'https://picsum.photos/seed/kloth-user-4/300/300',
  },
  {
    fullName: 'Mariana López',
    username: 'mari_lopez',
    email: 'mariana.lopez@example.com',
    bio: 'Vintage, segunda mano y accesorios de cuero.',
    location: 'Bucaramanga, Colombia',
    website: 'https://marianalopez.example.com',
    profileImage: null,
  },
];

export async function loadInitialUsers() {
  try {
    const count = await User.count();
    if (count === 0) {
      await User.bulkCreate(initialUsers, { validate: true });
      console.log(`Usuarios iniciales cargados: ${initialUsers.length}`);
    }
  } catch (error) {
    console.error('Error al cargar usuarios iniciales:', error);
  }
}
