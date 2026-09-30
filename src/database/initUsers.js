import { User } from '../models/User.js';

// Datos ficticios. Las imagenes son placeholders de picsum.photos.
const initialUsers = [
    {
        email: "valentina.restrepo@example.com",
        username: "vale_restrepo",
        password: "Password123!",
        imageURL: "https://picsum.photos/seed/kloth-user-1/300/300",
        biography: "Amante del estilo minimalista y la moda sostenible.",
        registeredAt: new Date("2026-09-01"),
        eliminated: false,
        eliminatedAt: null,
        userType: "USER",
    },
    {
        email: "santiago.gomez@example.com",
        username: "santi_gomez",
        password: "Password123!",
        imageURL: "https://picsum.photos/seed/kloth-user-2/300/300",
        biography: "Streetwear, sneakers y fútbol los fines de semana.",
        registeredAt: new Date("2026-09-02"),
        eliminated: false,
        eliminatedAt: null,
        userType: "USER",
    },
    {
        email: "camila.herrera@example.com",
        username: "cami_herrera",
        password: "Password123!",
        imageURL: "https://picsum.photos/seed/kloth-user-3/300/300",
        biography: "Diseñadora de modas. Reseño prendas con ojo de costurera.",
        registeredAt: new Date("2026-09-03"),
        eliminated: false,
        eliminatedAt: null,
        userType: "USER",
    },
    {
        email: "andres.martinez@example.com",
        username: "andres_mtz",
        password: "Password123!",
        imageURL: "https://picsum.photos/seed/kloth-user-4/300/300",
        biography: "Corredor y ciclista. Busco ropa deportiva que aguante.",
        registeredAt: new Date("2026-09-04"),
        eliminated: false,
        eliminatedAt: null,
        userType: "USER",
    },
    {
        email: "mariana.lopez@example.com",
        username: "mari_lopez",
        password: "Password123!",
        imageURL: null,
        biography: "Vintage, segunda mano y accesorios de cuero.",
        registeredAt: new Date("2026-09-05"),
        eliminated: false,
        eliminatedAt: null,
        userType: "USER",
    },
];

export async function loadInitialUsers() {
  try {
    const count = await User.count();
    if (count === 0) {
      await User.bulkCreate(initialUsers);
      console.log(`Usuarios iniciales cargados: ${initialUsers.length}`);
    }else {
      console.log(`Usuarios ya existen en la base de datos. No se cargaron usuarios iniciales.`);
    }
  } catch (error) {
    console.error('Error al cargar usuarios iniciales:', error);
  }
}