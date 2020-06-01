const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function findPromotion(products) {
  const categories = [];

  products.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });

  return promotions[categories.length - 1];
}

function sumArray(prices) {
  return prices.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
}

function calculateTotalWithDiscount(products, promotion) {
  const promotions = [];

  products.forEach((product) => {
    let includes = false;

    product.promotions.forEach((promo) => {
      if (promo.looks.includes(promotion)) {
        promotions.push(promo.price);
        includes = true;
      }
    });

    if (!includes) promotions.push(product.regularPrice);
  });

  return sumArray(promotions);
}

function calculateTotal(products) {
  const prices = products.map((product) => {
    return product.regularPrice;
  });

  return sumArray(prices);
}

function getProductsById(ids, productsList) {
  return productsList.filter((product) => {
    if (ids.includes(product.id)) return product;
  });
}

function getShoppingCart(ids, productsList) {
  const products = getProductsById(ids, productsList);

  const productsModified = products.map((product) => {
    return { name: product.name, category: product.category };
  });

  const promotion = findPromotion(products);
  const totalWithDiscount = calculateTotalWithDiscount(products, promotion);
  const total = calculateTotal(products);
  const discount = total - totalWithDiscount;

  const percentage = (discount * 100) / total;

  return {
    products: productsModified,
    promotion: promotion,
    totalPrice: totalWithDiscount.toFixed(2),
    discount: `${percentage.toFixed(2)}%`,
    discountValue: String(discount.toFixed(2)),
  };
}

module.exports = { getShoppingCart };
