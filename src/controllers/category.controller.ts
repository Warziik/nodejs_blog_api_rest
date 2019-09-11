import express from 'express';
import CategoryModel from '../models/category.model'

export default class CategoryController {
    constructor(private categoryModel: typeof CategoryModel) { }

    public static get(req: express.Request, res: express.Response) {
        res.json({ meta: { code: 200 }, categories: "" }).status(200);
    }

    public static create(req: express.Request, res: express.Response) {
        res.json({ meta: { code: 201 } }).status(201);
    }

    public static find(req: express.Request, res: express.Response) {
        res.json({ meta: { code: 200 }, data: req.params }).status(200);
    }

    public static update(req: express.Request, res: express.Response) {
        res.json({ meta: { code: 200 } }).status(200);
    }

    public static delete(req: express.Request, res: express.Response) {
        res.json({ meta: { code: 200 } }).status(200);
    }
}