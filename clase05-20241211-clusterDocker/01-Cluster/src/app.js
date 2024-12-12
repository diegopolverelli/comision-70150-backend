import express from 'express';
import cluster from "cluster"
import { router as pruebasRouter } from './routes/pruebaRouter.js';
import os from "os"
// process.cpuUsage()

if (cluster.isPrimary) {
    // console.log(process.memoryUsage())
    // console.log(process.cpuUsage())

    console.log(`Cantidad de núcleos hard: `, os.cpus().length)

    console.log(`Gestionando copias app`)
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    for(let i=0; i<os.cpus().length; i++){
        cluster.fork()
    }
    
    // cluster.on("message", msg=>console.log(msg))
    cluster.on("disconnect",()=>{
        console.log(`Regenerando cluster caído...`)
        cluster.fork()
    })
} else {
    const PORT = 3000;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/", pruebasRouter)

    let visitas = 0
    app.get('/', (req, res) => {
        visitas++
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(`Visitas: ${visitas}`);
    })

    const server = app.listen(PORT, () => {
        console.log(`Server escuchando en puerto ${PORT} - pid: ${process.pid} - n° cluster: ${cluster.worker.id}`);
    });

}

