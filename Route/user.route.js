const express = require('express');
const router = express.Router();
const controller = require('../Controller/user.controller');
const app = express();
const Cors = require('cors');

router.use(Cors());

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

router.get('/:userid', (req, res) => {
    controller.getSingle(req.params.userid).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.put('/:userid', (req, res) => {
    controller.update(req.params.userid, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:userid', (req, res) => {
    controller.delete(req.params.userid).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

module.exports = router;