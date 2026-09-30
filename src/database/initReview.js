import { Article } from '../models/Article.js';
import { User } from '../models/User.js';
import { Review } from '../models/Review.js';

const initialReviews = [
    {
        userId: 1, // vale_restrepo
        articleId: 1, // Nike Air Force 1 '07
        rating: 5,
        text: "Un clásico que combina con prácticamente todo. Muy cómodos.",
        createdAt: new Date("2026-09-20"),
        updatedAt: new Date("2026-09-20"),
        eliminated: false,
    },
    {
        userId: 3, // cami_herrera
        articleId: 1, // Nike Air Force 1 '07
        rating: 4,
        text: "Diseño muy versátil y fácil de combinar con diferentes estilos.",
        createdAt: new Date("2026-09-21"),
        updatedAt: new Date("2026-09-21"),
        eliminated: false,
    },

    {
        userId: 2, // santi_gomez
        articleId: 2, // Adidas Samba OG
        rating: 5,
        text: "Muy buenos tenis para un look casual. El diseño me encanta.",
        createdAt: new Date("2026-09-21"),
        updatedAt: new Date("2026-09-21"),
        eliminated: false,
    },
    {
        userId: 5, // mari_lopez
        articleId: 2, // Adidas Samba OG
        rating: 4,
        text: "Un diseño clásico que funciona muy bien con jeans.",
        createdAt: new Date("2026-09-22"),
        updatedAt: new Date("2026-09-22"),
        eliminated: false,
    },

    {
        userId: 1, // vale_restrepo
        articleId: 3, // Levi's Trucker
        rating: 5,
        text: "La chaqueta tiene un corte muy bonito y combina con muchos outfits.",
        createdAt: new Date("2026-09-22"),
        updatedAt: new Date("2026-09-22"),
        eliminated: false,
    },

    {
        userId: 4, // andres_mtz
        articleId: 4, // Bolso tote de cuero
        rating: 4,
        text: "Se ve resistente y tiene bastante espacio para llevar cosas.",
        createdAt: new Date("2026-09-23"),
        updatedAt: new Date("2026-09-23"),
        eliminated: false,
    },

    {
        userId: 3, // cami_herrera
        articleId: 5, // Look de oficina minimalista
        rating: 5,
        text: "Una combinación sencilla, elegante y muy fácil de llevar.",
        createdAt: new Date("2026-09-24"),
        updatedAt: new Date("2026-09-24"),
        eliminated: false,
    },

    {
        userId: 2, // santi_gomez
        articleId: 6, // Domingo de streetwear
        rating: 5,
        text: "El outfit se ve cómodo y tiene muy buen estilo urbano.",
        createdAt: new Date("2026-09-24"),
        updatedAt: new Date("2026-09-24"),
        eliminated: false,
    },
    {
        userId: 4, // andres_mtz
        articleId: 6, // Domingo de streetwear
        rating: 4,
        text: "Me gusta para un día casual. Las prendas combinan muy bien.",
        createdAt: new Date("2026-09-25"),
        updatedAt: new Date("2026-09-25"),
        eliminated: false,
    },

    {
        userId: 1, // vale_restrepo
        articleId: 7, // Vintage de mercado de pulgas
        rating: 5,
        text: "Tiene mucha personalidad y las prendas vintage le dan un toque especial.",
        createdAt: new Date("2026-09-25"),
        updatedAt: new Date("2026-09-25"),
        eliminated: false,
    },

    {
        userId: 5, // mari_lopez
        articleId: 8, // Vélez
        rating: 5,
        text: "Una marca con diseños clásicos y muy buenos productos de cuero.",
        createdAt: new Date("2026-09-26"),
        updatedAt: new Date("2026-09-26"),
        eliminated: false,
    },
    {
        userId: 2, // santi_gomez
        articleId: 8, // Vélez
        rating: 4,
        text: "Me gustan especialmente sus bolsos y accesorios.",
        createdAt: new Date("2026-09-27"),
        updatedAt: new Date("2026-09-27"),
        eliminated: false,
    },

    {
        userId: 3, // cami_herrera
        articleId: 9, // Nike
        rating: 5,
        text: "Una marca con muchas opciones tanto deportivas como casuales.",
        createdAt: new Date("2026-09-27"),
        updatedAt: new Date("2026-09-27"),
        eliminated: false,
    },

    {
        userId: 4, // andres_mtz
        articleId: 10, // Adidas
        rating: 4,
        text: "Tiene buenos diseños y una gran variedad de ropa deportiva.",
        createdAt: new Date("2026-09-28"),
        updatedAt: new Date("2026-09-28"),
        eliminated: false,
    },

    {
        userId: 5, // mari_lopez
        articleId: 11, // Colombiamoda 2026
        rating: 5,
        text: "Un evento muy interesante para conocer nuevas tendencias de moda.",
        createdAt: new Date("2026-09-29"),
        updatedAt: new Date("2026-09-29"),
        eliminated: false,
    },

    {
        userId: 1, // vale_restrepo
        articleId: 12, // Paris Fashion Week SS27
        rating: 5,
        text: "Un evento imprescindible para conocer las nuevas colecciones.",
        createdAt: new Date("2026-09-29"),
        updatedAt: new Date("2026-09-29"),
        eliminated: false,
    },
];

export async function loadInitialReviews() {
    try {
        const count = await Review.count();

        if (count === 0) {
            await Review.bulkCreate(initialReviews);

            console.log(
                `Reseñas iniciales cargadas: ${initialReviews.length}`
            );
        } else {
            console.log(
                `Ya existen ${count} reseñas en la base de datos. No se cargaron reseñas iniciales.`
            );
        }
    } catch (error) {
        console.error("Error al cargar reseñas iniciales:", error);
    }
}