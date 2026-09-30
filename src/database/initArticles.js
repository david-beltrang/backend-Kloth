import { Article } from '../models/Article.js';
import { User } from '../models/User.js';

// Datos de ejemplo. Precios y fechas son valores ilustrativos; las imagenes
// son placeholders de picsum.photos. creatorUsername se traduce a creatorId al cargar.
const initialArticles = [
    {
        typeArticle: "PRENDA",
        title: "Nike Air Force 1 '07",
        description:
            "Tenis clásicos de caña baja en cuero blanco. Cómodos desde el primer día y fáciles de combinar.",
        createdAt: new Date("2026-09-10"),
        idUser: 2, // santi_gomez
        eliminated: false,
        imageArticle: "https://picsum.photos/seed/kloth-af1/600/800",
    },
    {
        typeArticle: "PRENDA",
        title: "Adidas Samba OG",
        description:
            "Tenis de gamuza y cuero con suela de goma. Un diseño de fútbol sala que se volvió básico del streetwear.",
        createdAt: new Date("2026-09-11"),
        idUser: 1, // vale_restrepo
        eliminated: false,
        imageArticle: "https://picsum.photos/seed/kloth-samba/600/800",
    },
    {
        typeArticle: "PRENDA",
        title: "Chaqueta de jean Levi's Trucker",
        description:
            "Chaqueta de mezclilla de corte recto con botones metálicos. Se ve mejor con cada lavada.",
        createdAt: new Date("2026-09-12"),
        idUser: 3, // cami_herrera
        eliminated: false,
        imageArticle: "https://picsum.photos/seed/kloth-trucker/600/800",
    },
    {
        typeArticle: "PRENDA",
        title: "Bolso tote de cuero",
        description:
            "Bolso amplio en cuero con asas reforzadas y bolsillo interno con cremallera. Envejece con carácter.",
        createdAt: new Date("2026-09-13"),
        idUser: 5, // mari_lopez
        eliminated: false,
        imageArticle: "https://picsum.photos/seed/kloth-tote/600/800",
    },

    {
        typeArticle: "OUTFIT",
        title: "Look de oficina minimalista",
        description:
            "Blazer beige, camisa blanca y pantalón negro de tiro alto. Sobrio pero con estructura.",
        createdAt: new Date("2026-09-14"),
        idUser: 1, // vale_restrepo
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-outfit-business/600/800",
    },
    {
        typeArticle: "OUTFIT",
        title: "Domingo de streetwear",
        description:
            "Buzo oversize gris, jean ancho y Samba blancos. Cómodo para caminar todo el día.",
        createdAt: new Date("2026-09-15"),
        idUser: 2, // santi_gomez
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-outfit-street/600/800",
    },
    {
        typeArticle: "OUTFIT",
        title: "Vintage de mercado de pulgas",
        description:
            "Chaqueta de cuero de segunda mano, camiseta de banda y botas. Todo encontrado en San Alejo.",
        createdAt: new Date("2026-09-16"),
        idUser: 5, // mari_lopez
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-outfit-vintage/600/800",
    },

    {
        typeArticle: "MARCA",
        title: "Vélez",
        description:
            "Marca colombiana de artículos de cuero: bolsos, calzado, chaquetas y accesorios.",
        createdAt: new Date("2026-09-17"),
        idUser: 5, // mari_lopez
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-logo-velez/400/400",
    },
    {
        typeArticle: "MARCA",
        title: "Nike",
        description:
            "Marca estadounidense de calzado, ropa y equipamiento deportivo.",
        createdAt: new Date("2026-09-18"),
        idUser: 2, // santi_gomez
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-logo-nike/400/400",
    },
    {
        typeArticle: "MARCA",
        title: "Adidas",
        description:
            "Marca alemana de ropa y calzado deportivo, reconocida por sus tres rayas.",
        createdAt: new Date("2026-09-19"),
        idUser: 1, // vale_restrepo
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-logo-adidas/400/400",
    },

    {
        typeArticle: "EVENTO",
        title: "Colombiamoda 2026",
        description:
            "La principal feria de moda de Colombia: pasarelas, negocios y tendencias en Medellín.",
        createdAt: new Date("2026-07-28"),
        idUser: 3, // cami_herrera
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-colombiamoda/600/400",
    },
    {
        typeArticle: "EVENTO",
        title: "Paris Fashion Week SS27",
        description:
            "Semana de la moda de París con las colecciones primavera-verano de las grandes casas.",
        createdAt: new Date("2026-09-28"),
        idUser: 4, // andres_mtz
        eliminated: false,
        imageArticle:
            "https://picsum.photos/seed/kloth-pfw/600/400",
    },
];

export async function loadInitialArticles() {
    try {
        const count = await Article.count();

        if (count === 0) {
            await Article.bulkCreate(initialArticles);

            console.log(
                `Articulos iniciales cargados: ${initialArticles.length}`
            );
        } else {
            console.log(
                `Ya existen ${count} articulos en la base de datos. No se cargaron articulos iniciales.`
            );
        }
    } catch (error) {
        console.error("Error al cargar articulos iniciales:", error);
    }
}