const express = require('express');
const router = express.Router();
const controller = require('../Controller/vehicle.controller');
const app = express();
const cors = require('cors');

router.use(cors());


router.post('/', (req, res) => {
    controller.add(req.body).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.get('/', (req, res) => {
    controller.getAll().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.get('/:vehicleid', (req, res) => {
    controller.getSingle(req.params.vehicleid).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.put('/:vehicleid', (req, res) => {
    controller.update(req.params.vehicleid, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:vehicleid', (req, res) => {
    controller.delete(req.params.vehicleid).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

module.exports = router;