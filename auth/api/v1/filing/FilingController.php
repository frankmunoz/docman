<?php

namespace filing;

class FilingController extends \rest\Rest {

    public function get() {
        try {
            $data = [
                [
                    "name" => "Frank Muñoz",
                    "price" => "$$",
                    "sales" => 1978,
                    "rating" => 4
                ], [
                    "name" => "Eat On Monday Truck",
                    "price" => "$",
                    "sales" => 119,
                    "rating" => 4.3
                ], [
                    "name" => "Tea Era",
                    "price" => "$",
                    "sales" => 874,
                    "rating" => 4
                ], [
                    "name" => "Rogers Deli",
                    "price" => "$",
                    "sales" => 347,
                    "rating" => 4.2
                ], [
                    "name" => "MoBowl",
                    "price" => "$$$",
                    "sales" => 24,
                    "rating" => 4.6
                ], [
                    "name" => "The Milk Pail Market",
                    "price" => "$",
                    "sales" => 543,
                    "rating" => 4.5
                ], [
                    "name" => "Nob Hill Foods",
                    "price" => "$$",
                    "sales" => 874,
                    "rating" => 4
                ], [
                    "name" => "Scratch",
                    "price" => "$$$",
                    "sales" => 643,
                    "rating" => 3.6
                ], [
                    "name" => "Gochi Japanese Fusion Tapas",
                    "price" => "$$$",
                    "sales" => 56,
                    "rating" => 4.1
                ], [
                    "name" => "Cost Plus World Market",
                    "price" => "$$",
                    "sales" => 79,
                    "rating" => 4
                ], [
                    "name" => "Bumble Bee Health Foods",
                    "price" => "$$",
                    "sales" => 43,
                    "rating" => 4.3
                ], [
                    "name" => "Costco",
                    "price" => "$$",
                    "sales" => 219,
                    "rating" => 3.6
                ], [
                    "name" => "Red Rock Coffee Co",
                    "price" => "$",
                    "sales" => 765,
                    "rating" => 4.1
                ], [
                    "name" => "99 Ranch Market",
                    "price" => "$",
                    "sales" => 181,
                    "rating" => 3.4
                ], [
                    "name" => "Mi Pueblo Food Center",
                    "price" => "$",
                    "sales" => 78,
                    "rating" => 4
                ], [
                    "name" => "Cucina Venti",
                    "price" => "$$",
                    "sales" => 163,
                    "rating" => 3.3
                ], [
                    "name" => "Sufi Coffee Shop",
                    "price" => "$",
                    "sales" => 113,
                    "rating" => 3.3
                ], [
                    "name" => "Dana Street Roasting",
                    "price" => "$",
                    "sales" => 316,
                    "rating" => 4.1
                ], [
                    "name" => "Pearl Cafe",
                    "price" => "$",
                    "sales" => 173,
                    "rating" => 3.4
                ], [
                    "name" => "Posh Bagel",
                    "price" => "$",
                    "sales" => 140,
                    "rating" => 4
                ], [
                    "name" => "Artisan Wine Depot",
                    "price" => "$$",
                    "sales" => 26,
                    "rating" => 4.1
                ], [
                    "name" => "Hong Kong Chinese Bakery",
                    "price" => "$",
                    "sales" => 182,
                    "rating" => 3.4
                ], [
                    "name" => "Starbucks",
                    "price" => "$$",
                    "sales" => 97,
                    "rating" => 3.7
                ], [
                    "name" => "Tapioca Express",
                    "price" => "$",
                    "sales" => 301,
                    "rating" => 3
                ], [
                    "name" => "House of Bagels",
                    "price" => "$",
                    "sales" => 82,
                    "rating" => 4.4
                ]
            ];
            $this->setOutputStream($data, self::HTTP_OK);
        } catch (Exception $exc) {
            $this->setOutputStream($data, self::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function put() {
        try {
            
        } catch (Exception $exc) {
            $this->setOutputStream($data, self::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
