console.log("Code is running");
console.log("currency!")
//element code
const dropdown1 = document.querySelector("#dropdown1");
const dropdown2 = document.querySelector("#dropdown2");
const amount = document.querySelector("#amount");
const calculateButton = document.querySelector("#calculateButton");
const exchangeInfo = document.querySelector("#exchangeInfo");

const currencies = [{ singular: "US Dollar", plural: "US Dollars", abb: "USD", }, { singular: "Euro", plural: "Euros", abb: "EUR", }, { singular: "Australian Dollar", plural: "Australian Dollars", abb: "AUD", }, { singular: "Japanese Yen", plural: "Japanese Yen", abb: "JPY", }, { singular: "British Pound Sterling", plural: "British Pound Sterling", abb: "GBP", },];

const title = document.querySelector("#currencyTitle");
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });

//Easter Egg Code

title.addEventListener("mouseover", () => {
  animateCSS("#currencyTitle", "flip");
});

const convert = async () => {
  let fromValue = dropdown1.options[dropdown1.selectedIndex].text;
  let toValue = dropdown2.options[dropdown2.selectedIndex].text;
  let currentAmount = parseFloat(amount.value);
  let pluralFrom = "";
  let pluralTo = "";
  let singularFrom = "";
  let singularTo = "";

  const response = await fetch(`https://api.exchangerate.host/convert?from=${fromValue}&to=${toValue}&amount=${currentAmount}`);

  const data = await response.json();
  console.log(data.info.rate)
  let convertedAmount = currentAmount * data.info.rate;
  console.log(convertedAmount);
  currencies.forEach((currency) => {
    if (currency.abb == fromValue && currency.abb == toValue) {
      pluralFrom = currency.plural;
      singularFrom = currency.singular;
      pluralTo = currency.plural;
      singularTo = currency.singular;
    } else if (currency.abb == toValue) {
      pluralTo = currency.plural;
      singularTo = currency.singular;
    } else if (currency.abb == fromValue) {
      pluralFrom = currency.plural;
      singularFrom = currency.singular;
    }
  });
  if (currentAmount == 1 && convertedAmount == 1) {
    exchangeInfo.innerHTML = `${currentAmount} ${singularFrom} is equal to ${convertedAmount} ${singularTo}.`

  } else if (convertedAmount == 1) {
    exchangeInfo.innerHTML = `${currentAmount} ${pluralFrom} are equal to ${convertedAmount} ${singularTo}.`
  } else if (currentAmount == 1) {
    exchangeInfo.innerHTML = `${currentAmount} ${singularFrom} is equal to ${convertedAmount} ${pluralTo}.`
  } else {
    exchangeInfo.innerHTML = `${currentAmount} ${pluralFrom} are equal to ${convertedAmount} ${pluralTo}.`
  }



};

calculateButton.addEventListener("click", convert);
