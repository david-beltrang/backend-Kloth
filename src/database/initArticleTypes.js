import { Article } from "../models/Article.js";
import { Clothing } from "../models/Article-Type/Clothing.js";
import { Outfit } from "../models/Article-Type/Outfit.js";
import { Brand } from "../models/Article-Type/Brand.js";
import { Event } from "../models/Article-Type/Event.js";

// Datos especificos de cada tipo de articulo. articleTitle permite localizar el
// articleId real sin asumir valores del auto-incremental.

const initialClothing = [
    {
        articleTitle: "Nike Air Force 1 '07",
        size: "M",
        color: "Blanco",
        category: "FOOTWEAR",
        material: "Cuero",
        brand: "Nike",
        price: 549900,
    },
    {
        articleTitle: "Adidas Samba OG",
        size: "M",
        color: "Negro y blanco",
        category: "FOOTWEAR",
        material: "Gamuza y cuero",
        brand: "Adidas",
        price: 479900,
    },
    {
        articleTitle: "Chaqueta de jean Levi's Trucker",
        size: "M",
        color: "Azul indigo",
        category: "TOP",
        material: "Mezclilla",
        brand: "Levi's",
        price: 389900,
    },
    {
        articleTitle: "Bolso tote de cuero",
        size: "M",
        color: "Marron",
        category: "ACCESSORY",
        material: "Cuero",
        brand: "Artesanal",
        price: 259900,
    },
];

const initialOutfits = [
    {
        articleTitle: "Look de oficina minimalista",
        style: "FORMAL",
    },
    {
        articleTitle: "Domingo de streetwear",
        style: "CASUAL",
    },
    {
        articleTitle: "Vintage de mercado de pulgas",
        style: "CASUAL",
    },
];

const initialBrands = [
    {
        articleTitle: "Vélez",
        website: "https://www.velez.co",
        originCountry: "Colombia",
        foundedAt: 1976,
    },
    {
        articleTitle: "Nike",
        website: "https://www.nike.com",
        originCountry: "Estados Unidos",
        foundedAt: 1964,
    },
    {
        articleTitle: "Adidas",
        website: "https://www.adidas.com",
        originCountry: "Alemania",
        foundedAt: 1949,
    },
];

const initialEvents = [
    {
        articleTitle: "Colombiamoda 2026",
        city: "Medellin",
        country: "Colombia",
        startDate: new Date("2026-07-28"),
        endDate: new Date("2026-07-30"),
        organizer: "ProColombia",
    },
    {
        articleTitle: "Paris Fashion Week SS27",
        city: "Paris",
        country: "Francia",
        startDate: new Date("2026-09-28"),
        endDate: new Date("2026-10-06"),
        organizer: "Federation de la Haute Couture",
    },
];

async function bulkCreateByArticleTitle(model, rows, label) {
    const count = await model.count();

    if (count > 0) {
        console.log(
            `Ya existen ${count} ${label} en la base de datos. No se cargaron registros iniciales.`
        );
        return;
    }

    const articles = await Article.findAll({
        attributes: ["articleId", "title"],
    });
    // title es CHAR(200): PostgreSQL devuelve el valor relleno con espacios.
    const articleIdByTitle = new Map(
        articles.map((article) => [article.title.trim(), article.articleId])
    );

    const records = [];

    for (const row of rows) {
        const { articleTitle, ...attributes } = row;
        const articleId = articleIdByTitle.get(articleTitle.trim());

        if (articleId === undefined) {
            console.warn(`Articulo no encontrado para ${label}: ${articleTitle}`);
            continue;
        }

        records.push({ articleId, ...attributes });
    }

    if (records.length > 0) {
        await model.bulkCreate(records);
        console.log(`${label} iniciales cargados: ${records.length}`);
    }
}

export async function loadInitialArticleTypes() {
    try {
        await bulkCreateByArticleTitle(Clothing, initialClothing, "prendas");
        await bulkCreateByArticleTitle(Outfit, initialOutfits, "outfits");
        await bulkCreateByArticleTitle(Brand, initialBrands, "brands");
        await bulkCreateByArticleTitle(Event, initialEvents, "events");
    } catch (error) {
        console.error("Error al cargar los tipos de articulo:", error);
    }
}
