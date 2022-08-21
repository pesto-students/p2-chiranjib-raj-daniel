const express = require("express");
const axios = require("axios");
const router = express.Router();

const key = "0321f3f8c18f4361b3b165952222108";

const getForecast = async (req, res) => {
    const result = [];
    if (!req.query.city || !req.query.days) return [];
    const cities = req.query.city.split(",");
    const { days } = req.query;
    for (let i = 0; i < cities.length; i++) {
        try {
            let results = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cities[i]}&days=${days}`
            );
            results = results.data;
            result.push(results);
        } catch (err) {
            err.res.data || "data not found";
        }
    }
    res.send(result);
};

const getCitiesData = async (res, req) => {
    const result = [];
    if (!req.query.city) return [];
    const cities = req.query.city.split(",");
    for (let i = 0; i < cities.length; i++) {
        try {
            let results = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cities[i]}`
            );
            results = results.data;
            result.push(results);
        } catch (err) {
            err.res.data || "data not found";
        }
    }
    const page = !req.query.page ? 1 : parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const start = (page - 1) * limit;
    const end = page * limit;

    const resultFinal = result.slice(start, end);
    res.send(resultFinal);
};

router.get("/forecast", getForecast);

router.get("/weather/cities", getCitiesData);

module.exports = router;
