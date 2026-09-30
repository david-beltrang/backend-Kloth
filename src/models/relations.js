import { Article } from "./Article.js";
import {User} from "./User.js";
import { Follower } from "./Follower.js";
import { Review } from "./Review.js";
import { Clothing } from "./Article-Type/Clothing.js";
import {Event} from "./Article-Type/Event.js";
import {Outfit} from "./Article-Type/Outfit.js";
import {Brand} from "./Article-Type/Brand.js";


export function setupRelations() {

    //1. Usuario tiene muchos Artículos (1:N)
    User.hasMany(Article, {
        foreignKey: "idUser",
        as: "articles",
        onDelete: "CASCADE",
        hooks: true,
    });
    //2. Artículo pertenece a un Usuario (N:1)
    Article.belongsTo(User, {
        foreignKey: "idUser",
        as: "user",
    });

    //3. Usuario tiene muchos Seguidos (N:M)
    User.belongsToMany(User, {
        through: Follower,
        as: "following",
        foreignKey: "idUserFollower",
        otherKey: "idUserFollowing",
    });

    //4. Usuario tiene muchos Seguidores (N:M)
    User.belongsToMany(User, {
        through: Follower,
        as: "followers",
        foreignKey: "idUserFollowing",
        otherKey: "idUserFollower",
    });

    //5. Usuario tiene muchas reseñas (1:N)
    User.hasMany(Review, { 
        foreignKey: 'userId', 
        as: 'userReviews', 
        onDelete: 'SET NULL' });

    //6. Reseña pertenece a un Usuario (N:1)
    Review.belongsTo(User, { 
        foreignKey: 'userId', 
        as: 'author' });

    //7. Artículo tiene muchas reseñas (1:N)
    Article.hasMany(Review, { 
        foreignKey: 'articleId', 
        as: 'articleReviews', 
        onDelete: 'CASCADE', 
        hooks: true });

    //8. Reseña pertenece a un Artículo (N:1)
    Review.belongsTo(Article, { 
        foreignKey: 'articleId', 
        as: 'article' });

    //9. Articulo es una prenda (1:1)
    Article.hasOne(Clothing, {
        foreignKey: "articleId",
        as: "clothing",
        onDelete: "CASCADE",
        hooks: true,
    });

    //10. Prenda pertenece a un Artículo (1:1)
    Clothing.belongsTo(Article, {
        foreignKey: "articleId",
        as: "article",
        onDelete: "CASCADE",
        hooks: true,
    });

    //11. Articulo es un Outfit (1:1)
    Article.hasOne(Outfit, {
        foreignKey: "articleId",
        as: "outfit",
        onDelete: "CASCADE",
        hooks: true,
    });

    //12. Outfit pertenece a un Artículo (1:1)
    Outfit.belongsTo(Article, {
        foreignKey: "articleId",
        as: "article",
        onDelete: "CASCADE",
        hooks: true,
    });

   //13. Articulo es una Marca (1:1)
    Article.hasOne(Brand, {
        foreignKey: "articleId",
        as: "brand",
        onDelete: "CASCADE",
        hooks: true,
    });

    //14. Marca pertenece a un Artículo (1:1)
    Brand.belongsTo(Article, {
        foreignKey: "articleId",
        as: "article",
        onDelete: "CASCADE",
        hooks: true,
    });

    //15. Articulo es un Evento (1:1)
    Article.hasOne(Event, {
        foreignKey: "articleId",
        as: "event",
        onDelete: "CASCADE",
        hooks: true,
    });

    Event.belongsTo(Article, {
        foreignKey: "articleId",
        as: "article",
        onDelete: "CASCADE",
        hooks: true,
    });
}
