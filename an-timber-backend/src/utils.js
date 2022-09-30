module.exports.formatText = (text) => {
    let res = "Замовлення\n";
    if (text.product) res+="Назва продукту: " + text.product
    if (text.name) res+="\nІм'я: " + text.name
    if (text.phone) res+="\nТелефон: " + text.phone
    if (text.comment) res+="\nКоментар: " + text.comment
    return res;
}