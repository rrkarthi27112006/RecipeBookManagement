const express = require("express");

const app = express();

app.use(express.json());

// Sample recipe data
let recipes = [
    {
        id: 1,
        name: "Vegetable Fried Rice",
        category: "Lunch",
        cookingTime: "30 mins"
    },
    {
        id: 2,
        name: "Chocolate Cake",
        category: "Dessert",
        cookingTime: "45 mins"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Recipe Book Management System Backend Running");
});

// View All Recipes
app.get("/recipes", (req, res) => {
    res.json(recipes);
});

// Add Recipe
app.post("/recipes", (req, res) => {
    const recipe = req.body;
    recipes.push(recipe);
    res.json({
        message: "Recipe Added Successfully",
        recipe
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});