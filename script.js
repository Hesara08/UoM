function showSpecial() {
    const specials = [
        "Pumpkin Spice Latte - Only $3.00 today!",
        "Free cookie with any large coffee!",
        "Buy 1 Get 1 Free on all muffins!",
        "Iced Caramel Macchiato - $2.50!",
        "Try our new Vegan Brownie!"
    ];
    const msg = specials[Math.floor(Math.random() * specials.length)];
    document.getElementById('specialMsg').textContent = msg;
}