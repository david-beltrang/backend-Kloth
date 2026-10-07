import { Review } from '../models/Review.js';
import { Comment } from '../models/Comment.js';

// Comentarios de ejemplo. reviewIndex apunta a la posición de la reseña dentro
// de initialReviews (initReviews.js), para no depender de IDs fijos.
const initialComments = [
    {
        reviewIndex: 0,
        userId: 4, // andres_mtz
        text: "Los tengo hace un año y siguen como nuevos.",
        likesCount: 5,
        createdAt: new Date("2026-09-21"),
    },
    {
        reviewIndex: 0,
        userId: 2, // santi_gomez
        text: "¿De qué talla son? Estoy dudando entre S y M.",
        likesCount: 1,
        createdAt: new Date("2026-09-22"),
    },
    {
        reviewIndex: 1,
        userId: 5, // mari_lopez
        text: "Totalmente de acuerdo, el diseño es muy versátil.",
        likesCount: 3,
        createdAt: new Date("2026-09-22"),
    },
    {
        reviewIndex: 2,
        userId: 3, // cami_herrera
        text: "Los compré el mes pasado y la calidad me sorprendió.",
        likesCount: 4,
        createdAt: new Date("2026-09-23"),
    },
    {
        reviewIndex: 3,
        userId: 1, // vale_restrepo
        text: "A mí me quedaron perfectos con jeans claros.",
        likesCount: 2,
        createdAt: new Date("2026-09-24"),
    },
    {
        reviewIndex: 6,
        userId: 2, // santi_gomez
        text: "La foto no le hace justicia, en persona se ven mucho mejor.",
        likesCount: 6,
        createdAt: new Date("2026-09-25"),
    },
    {
        reviewIndex: 9,
        userId: 4, // andres_mtz
        text: "Me encanta, pero el envío fue un poco lento.",
        likesCount: 0,
        createdAt: new Date("2026-09-26"),
    },
    {
        reviewIndex: 12,
        userId: 5, // mari_lopez
        text: "¿Alguien sabe si la marca tiene tienda física en Bogotá?",
        likesCount: 2,
        createdAt: new Date("2026-09-28"),
    },
    {
        reviewIndex: 14,
        userId: 3, // cami_herrera
        text: "Ya fui dos veces y siempre vale la pena.",
        likesCount: 8,
        createdAt: new Date("2026-09-30"),
    },
];

export async function loadInitialComments() {
    try {
        const count = await Comment.count();

        if (count > 0) {
            console.log(
                `Ya existen ${count} comentarios en la base de datos. No se cargaron comentarios iniciales.`
            );
            return;
        }

        const reviews = await Review.findAll({
            order: [
                ["createdAt", "ASC"],
                ["reviewId", "ASC"],
            ],
        });

        const records = [];

        for (const row of initialComments) {
            const review = reviews[row.reviewIndex];

            if (!review) {
                console.log(
                    `Reseña en posición ${row.reviewIndex} no encontrada. Comentario omitido.`
                );
                continue;
            }

            records.push({
                reviewId: review.reviewId,
                userId: row.userId,
                text: row.text,
                likesCount: row.likesCount,
                createdAt: row.createdAt,
                updatedAt: row.createdAt,
                eliminated: false,
            });
        }

        if (records.length > 0) {
            await Comment.bulkCreate(records);
        }

        console.log(`Comentarios iniciales cargados: ${records.length}`);
    } catch (error) {
        console.error("Error al cargar comentarios iniciales:", error);
    }
}
