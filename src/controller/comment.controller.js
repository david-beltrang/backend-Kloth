import { Comment } from "../models/Comment.js";
import { Review } from "../models/Review.js";

export const getCommentsByReview = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        const comments = await Comment.findAll({
            where: {
                reviewId: review.reviewId,
                eliminated: false,
            },
            order: [["createdAt", "DESC"]],
        });

        return res.json(comments);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createComment = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        const newComment = await Comment.create({
            ...req.body,
            reviewId: review.reviewId,
        });

        return res.json(newComment);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        await comment.update(req.body);
        return res.json(comment);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        await comment.destroy();
        return res.json({ deleted: true });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
