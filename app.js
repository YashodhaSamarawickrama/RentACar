'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');

const PatientRoute = require('./Route/patient.route');
const AdmissionRoute = require('./Route/admission.route');
const TreatmentRoute = require('./Route/treatment.route');
const InjectionRoute = require('./Route/injection.route');
const QuestionnaireRoute = require('./Route/questionnaire.route');

const app = express();

app.use('/patient', PatientRoute);
app.use('/admission', AdmissionRoute);
app.use('/treatment', TreatmentRoute);
app.use('/injection', InjectionRoute);
app.use('/questionnaire', QuestionnaireRoute);

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(Cors());


app.listen(3001, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port 3000');
});