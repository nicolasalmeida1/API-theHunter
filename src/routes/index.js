import app from "../app.js"
import router from "./recordsRoutes.js"
import express from "express"
import routerHunter from "./huntersRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send("seja bem vindo aos records");
    })

    app.use(
        express.json(),
        router,
        routerHunter
    )
}

export default routes;