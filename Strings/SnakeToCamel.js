function SnakeToCamel(snakeStr) {
  let camelStr = snakeStr
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");

  console.log(camelStr);
  return camelStr;
}

SnakeToCamel("first_dashboard_module");
