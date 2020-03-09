const express = require('express');
const router = express.Router();
const controller = require('../Controller/payment.controller');
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

router.get('/:paymentid', (req, res) => {
    controller.getSingle(req.params.paymentid).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.put('/:paymentid', (req, res) => {
    controller.update(req.params.paymentid, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:paymentid', (req, res) => {
    controller.delete(req.params.paymentid).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

module.exports = router;