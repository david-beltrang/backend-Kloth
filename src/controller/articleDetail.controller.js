import { Article } from "../models/Article.js";
import { Clothing } from "../models/Article-Type/Clothing.js";
import { Outfit } from "../models/Article-Type/Outfit.js";
import { Brand } from "../models/Article-Type/Brand.js";
import { Event } from "../models/Article-Type/Event.js";

const detailModelByType = {
    PRENDA: Clothing,
    OUTFIT: Outfit,
    MARCA: Brand,
    EVENTO: Event,
};

export const getArticleDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findByPk(id);

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        const detailModel = detailModelByType[article.typeArticle];
        let detail = null;

        if (detailModel) {
            detail = await detailModel.findOne({
                where: { articleId: article.articleId },
            });
        }

        return res.json({ ...article.toJSON(), detail });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
