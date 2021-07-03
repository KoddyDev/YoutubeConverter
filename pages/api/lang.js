import { app } from '../../config.json'

export default async function handler(req, res) {
    res.send(app.lang)   
}