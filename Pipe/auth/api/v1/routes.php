<?php

$app->get('/filings/', function() {
    $filing = new filing\FilingController();
    $filing->get();
});


$app->get('/persons/', function() {
    $person = new person\PersonController();
    $person->get();
});