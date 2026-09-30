import { Article } from '../models/article.js';
import { User } from '../models/user.js';

// Datos de ejemplo. Precios y fechas son valores ilustrativos; las imagenes
// son placeholders de picsum.photos. creatorUsername se traduce a creatorId al cargar.
const initialArticles = [
  // Publicaciones: Prendas
  {
    category: 'PRENDA',
    name: 'Nike Air Force 1 \'07',
    description: 'Tenis clásicos de caña baja en cuero blanco. Cómodos desde el primer día y fáciles de combinar.',
    imageUrl: 'https://picsum.photos/seed/kloth-af1/600/800',
    brand: 'Nike',
    clothingCategory: 'Tenis',
    color: 'Blanco',
    price: 569900,
    creatorUsername: 'santi_gomez',
  },
  {
    category: 'PRENDA',
    name: 'Adidas Samba OG',
    description: 'Tenis de gamuza y cuero con suela de goma. Un diseño de fútbol sala que se volvió básico del streetwear.',
    imageUrl: 'https://picsum.photos/seed/kloth-samba/600/800',
    brand: 'Adidas',
    clothingCategory: 'Tenis',
    color: 'Blanco y negro',
    price: 499900,
    creatorUsername: 'vale_restrepo',
  },
  {
    category: 'PRENDA',
    name: 'Chaqueta de jean Levi\'s Trucker',
    description: 'Chaqueta de mezclilla de corte recto con botones metálicos. Se ve mejor con cada lavada.',
    imageUrl: 'https://picsum.photos/seed/kloth-trucker/600/800',
    brand: 'Levi\'s',
    clothingCategory: 'Chaquetas',
    color: 'Azul índigo',
    price: 349900,
    creatorUsername: 'cami_herrera',
  },
  {
    category: 'PRENDA',
    name: 'Bolso tote de cuero',
    description: 'Bolso amplio en cuero con asas reforzadas y bolsillo interno con cremallera. Envejece con carácter.',
    imageUrl: 'https://picsum.photos/seed/kloth-tote/600/800',
    brand: 'Vélez',
    clothingCategory: 'Bolsos',
    color: 'Marrón tabaco',
    price: 529900,
    creatorUsername: 'mari_lopez',
  },

  // Publicaciones: Outfits
  {
    category: 'OUTFIT',
    name: 'Look de oficina minimalista',
    description: 'Blazer beige, camisa blanca y pantalón negro de tiro alto. Sobrio pero con estructura.',
    imageUrl: 'https://picsum.photos/seed/kloth-outfit-business/600/800',
    style: 'Business',
    creatorUsername: 'vale_restrepo',
  },
  {
    category: 'OUTFIT',
    name: 'Domingo de streetwear',
    description: 'Buzo oversize gris, jean ancho y Samba blancos. Cómodo para caminar todo el día.',
    imageUrl: 'https://picsum.photos/seed/kloth-outfit-street/600/800',
    style: 'Streetwear',
    creatorUsername: 'santi_gomez',
  },
  {
    category: 'OUTFIT',
    name: 'Vintage de mercado de pulgas',
    description: 'Chaqueta de cuero de segunda mano, camiseta de banda y botas. Todo encontrado en San Alejo.',
    imageUrl: 'https://picsum.photos/seed/kloth-outfit-vintage/600/800',
    style: 'Vintage',
    creatorUsername: 'mari_lopez',
  },

  // Catalogo: Marcas
  {
    category: 'MARCA',
    name: 'Vélez',
    description: 'Marca colombiana de artículos de cuero: bolsos, calzado, chaquetas y accesorios.',
    imageUrl: 'https://picsum.photos/seed/kloth-logo-velez/400/400',
    website: 'https://www.velez.com.co',
    country: 'Colombia',
    brandType: 'Accesorios',
    foundedYear: 1986,
  },
  {
    category: 'MARCA',
    name: 'Nike',
    description: 'Marca estadounidense de calzado, ropa y equipamiento deportivo.',
    imageUrl: 'https://picsum.photos/seed/kloth-logo-nike/400/400',
    website: 'https://www.nike.com',
    country: 'Estados Unidos',
    brandType: 'Calzado',
    foundedYear: 1964,
  },
  {
    category: 'MARCA',
    name: 'Adidas',
    description: 'Marca alemana de ropa y calzado deportivo, reconocida por sus tres rayas.',
    imageUrl: 'https://picsum.photos/seed/kloth-logo-adidas/400/400',
    website: 'https://www.adidas.com',
    country: 'Alemania',
    brandType: 'Ropa',
    foundedYear: 1949,
  },

  // Catalogo: Eventos
  {
    category: 'EVENTO',
    name: 'Colombiamoda 2026',
    description: 'La principal feria de moda de Colombia: pasarelas, negocios y tendencias en Medellín.',
    imageUrl: 'https://picsum.photos/seed/kloth-colombiamoda/600/400',
    city: 'Medellín',
    country: 'Colombia',
    startDate: '2026-07-28',
    endDate: '2026-07-30',
    organizer: 'Inexmoda',
  },
  {
    category: 'EVENTO',
    name: 'Paris Fashion Week SS27',
    description: 'Semana de la moda de París con las colecciones primavera-verano de las grandes casas.',
    imageUrl: 'https://picsum.photos/seed/kloth-pfw/600/400',
    city: 'París',
    country: 'Francia',
    startDate: '2026-09-28',
    endDate: '2026-10-06',
    organizer: 'Fédération de la Haute Couture et de la Mode',
  },
];

export async function loadInitialArticles() {
  try {
    const count = await Article.count();
    if (count === 0) {
      // Los usuarios ya deben estar cargados: se busca el id de cada creador por username
      const users = await User.findAll({ attributes: ['id', 'username'] });
      const idByUsername = Object.fromEntries(users.map((u) => [u.username, u.id]));

      const articles = initialArticles.map(({ creatorUsername, ...article }) => ({
        ...article,
        creatorId: creatorUsername ? idByUsername[creatorUsername] ?? null : null,
      }));

      await Article.bulkCreate(articles, { validate: true });
      console.log(`Articulos iniciales cargados: ${articles.length}`);
    }
  } catch (error) {
    console.error('Error al cargar articulos iniciales:', error);
  }
}
