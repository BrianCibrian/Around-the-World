console.log("Code is running");
let currentIndex = 0;
//dropdown code
const continentDropdown = document.querySelector('#continentDropdown');
const landscapeDropdown = document.querySelector('#landscapeDropdown')
const generateButton = document.querySelector('#generateButton');
console.log(generateButton);
const nameText = document.querySelector("#name");
const image = document.querySelector("#img");
const map = document.querySelector("#map");
const descriptionTitle = document.querySelector("#descriptionTitle");
const description = document.querySelector("#description");
const language = document.querySelector("#language");

//code courtesy of animate.style
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
let aroundCounter = 0;
title.addEventListener("mouseover", () => {
  animateCSS("#currencyTitle", "flip");
  aroundCounter++;
  console.log(aroundCounter);
  if (aroundCounter >= 10) {
    window.location = "surpriseOne.html";
  }
});


//Array contains destination objects, which follow the structure:
/*{name: string representing name of location,
  continent: string representing continent of location,
  landscape: string representing landscape of location,
  desc:string representing description of location,
  imgs: array of URLs,
  map: URL for Google Maps ,
  language: string representing primary language of location,

}
*/

const destinations =
  [{
    name: "Cherokee National Forest, Tennessee",
    continent: "North America",
    landscape: "Forest",
    desc: "Breathtakingly beautiful mountainous forest: great for hiking.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chimney_Rocks_-_Cherokee_National_Forest_-_Del_Rio%2C_TN.jpg/640px-Chimney_Rocks_-_Cherokee_National_Forest_-_Del_Rio%2C_TN.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Tellico_River_Road_Cherokee_National_Forest.jpg/640px-Tellico_River_Road_Cherokee_National_Forest.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cherokee.jpg/640px-Cherokee.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12938.536718638623!2d-83.00890126807404!3d35.83345017882915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885bd17b0dc68c05%3A0x7f144be2ab278166!2sCherokee%20National%20Forest!5e0!3m2!1sen!2sus!4v1659460795662!5m2!1sen!2sus",
    language: "English",

  }, {
    name: "Chippewa National Forest, Minnesota",
    continent: "North America",
    landscape: "Forest",
    desc: "Breathtakingly beautiful mountainous forest: great for hiking.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Chippewa_National_Forest_-_Social_-_2.jpg/640px-Chippewa_National_Forest_-_Social_-_2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Chippewa_National_Forest_-_Social_-_1.jpg/640px-Chippewa_National_Forest_-_Social_-_1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/South_Pike_Bay.jpg/640px-South_Pike_Bay.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21529.617377595077!2d-93.9177216952056!3d47.58330956507421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ba10f41ef37bf7%3A0xe5117791f4c037d9!2sChippewa%20National%20Forest!5e0!3m2!1sen!2sus!4v1659461149350!5m2!1sen!2sus",
    language: "English",
  }, {
    name: "Fishlake Nation Forest, Utah",
    continent: "North America",
    landscape: "Forest",
    desc: "Picturesque forest with wildlife and small mountain lakes.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fishlake_National_Forest_-_panoramio.jpg/640px-Fishlake_National_Forest_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Fishlake_National_Forest%2C_Annabella_Reservoir_%2829215364734%29.jpg/640px-Fishlake_National_Forest%2C_Annabella_Reservoir_%2829215364734%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fishlake_NF_Forest_Sign_ET5A5992_%2829126456121%29.jpg/640px-Fishlake_NF_Forest_Sign_ET5A5992_%2829126456121%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12453.653181660346!2d-111.96786452643715!3d38.70831916634513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874b0f2e636f8eb9%3A0x1d86923e2b30482e!2sFishlake%20National%20Forest!5e0!3m2!1sen!2sus!4v1659464406028!5m2!1sen!2sus",
    language: "English",
  }, {
    name: "Flagstaff, Arizona",
    continent: "North America",
    landscape: "Mountains",
    desc: "Astounding natural wonders, invigorating outdoor recreation and fascinating cultural attractions.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flagstaff_downtown_SFmtn.jpg/640px-Flagstaff_downtown_SFmtn.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/U.S._180%2C_Flagstaff%2C_United_States_%28Unsplash%29.jpg/640px-U.S._180%2C_Flagstaff%2C_United_States_%28Unsplash%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Milky_Way_over_Flagstaff_%2850155851437%29.jpg/640px-Milky_Way_over_Flagstaff_%2850155851437%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104352.28867967265!2d-111.67799928124505!3d35.181327699414595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d8ef7da2e2631%3A0x8e1f3ca1cedbb300!2sFlagstaff%2C%20AZ!5e0!3m2!1sen!2sus!4v1659468713558!5m2!1sen!2sus",
    language: "English",
  }, {
    name: "Whistler, British Columbia",
    continent: "North America",
    landscape: "Mountains",
    desc: "The stunning landscape, pedestrian-only Village and genuine, down-to-earth mountain culture <br> make Whistler an unforgettable year-round destination.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Whistler%2C_British_Columbia%2C_Canada_%2820823965762%29.jpg/640px-Whistler%2C_British_Columbia%2C_Canada_%2820823965762%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Whistler%2C_British_Columbia%2C_Canada_%2820832771585%29.jpg/640px-Whistler%2C_British_Columbia%2C_Canada_%2820832771585%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Whistler%2C_British_Columbia%2C_Canada_%2820211734263%29.jpg/640px-Whistler%2C_British_Columbia%2C_Canada_%2820211734263%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81889.31628445214!2d-123.07155485880276!3d50.10423703972237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54873cb203957b87%3A0x4ab741e875f5cff6!2sWhistler%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1659476187521!5m2!1sen!2sus",
    language: "English",
  }, {
    name: "Taxco, Guerrero",
    continent: "North America",
    landscape: "Mountains",
    desc: "All around the picturesque town you'll find sellers of silver finery, from open air markets to metal <br> workshops to high end boutiques.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Taxco%2C_Guerrero%2C_Mexico_%28Night%29.jpg/640px-Taxco%2C_Guerrero%2C_Mexico_%28Night%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cascada_Atzala%2C_Taxco%2C_Guerrero-_Atzala_Waterfall%2C_Taxco%2C_Guerrero_%2824212435553%29.jpg/640px-Cascada_Atzala%2C_Taxco%2C_Guerrero-_Atzala_Waterfall%2C_Taxco%2C_Guerrero_%2824212435553%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Taxco_de_Alarc%C3%B3n%2C_Guerrero_%2824298033073%29.jpg/640px-Taxco_de_Alarc%C3%B3n%2C_Guerrero_%2824298033073%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30259.19006908195!2d-99.62643373287685!3d18.556052827536114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cc4b368031a00b%3A0xc25e680ce5a35120!2sTaxco%2C%20Guerrero%2C%20Mexico!5e0!3m2!1sen!2sus!4v1659476758860!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Cancun, Mexico",
    continent: "North America",
    landscape: "Beaches",
    desc: "“Spring break forever” was once the unofficial Cancun motto, but Mexico’s most famous<br> party town is more than perfect beaches and wild nightclubs. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/A_beautiful_beach_in_Cancun%2C_Mexico.jpg/640px-A_beautiful_beach_in_Cancun%2C_Mexico.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bird_bath_pond_Cancun%2C_Quintana_Roo%2C_Mexico.jpg/640px-Bird_bath_pond_Cancun%2C_Quintana_Roo%2C_Mexico.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cancun_Beach.jpg/640px-Cancun_Beach.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119096.83694136917!2d-86.91927392414651!3d21.12148864508346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b05aef653db%3A0xce32b73c625fcd8a!2sCanc%C3%BAn%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sus!4v1659542264523!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Acapulco, Mexico",
    continent: "North America",
    landscape: "Beaches",
    desc: "Don't skip your siesta in Acapulco, because you'll need the sleep: you'll be busy dancing from  <br>midnight until the sun comes up.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ZipLine_Acapulco_XtaSeap1.jpg/640px-ZipLine_Acapulco_XtaSeap1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Acapulco%2C_Punta_Diamante_2019-05.jpg/640px-Acapulco%2C_Punta_Diamante_2019-05.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Acapulco_Nautico_area_in_Acapulco%2C_Mexico.jpg/640px-Acapulco_Nautico_area_in_Acapulco%2C_Mexico.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122202.02742593907!2d-99.93234923070708!3d16.83561284295833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5785aece50c9%3A0x9801d8f78a90a4e3!2sAcapulco%2C%20Guerrero%2C%20Mexico!5e0!3m2!1sen!2sus!4v1659542510483!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Tamarindo, Costa Rica",
    continent: "North America",
    landscape: "Beaches",
    desc: "Tamarindo is a prime spot for surfing and sportfishing, diving and sunning.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Costa_Rica_Playa_Tamarindo_and_Rivermouth_2007_Aerial_Photograph_Tamarindowiki_01.JPG/640px-Costa_Rica_Playa_Tamarindo_and_Rivermouth_2007_Aerial_Photograph_Tamarindowiki_01.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Costa_Rica_Playa_Tamarindo_and_Grande_2007_aerial_photograph_tamarindowiki.JPG/640px-Costa_Rica_Playa_Tamarindo_and_Grande_2007_aerial_photograph_tamarindowiki.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Tamarindo_beach-Guanacaste-Costa_Rica.jpg/640px-Tamarindo_beach-Guanacaste-Costa_Rica.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15702.044894512717!2d-85.84682467651434!3d10.300909594256462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e39409203c30f%3A0xbb189f5e2cc1f893!2sGuanacaste%20Province%2C%20Tamarindo%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1659542691961!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "San Juan, Puerto Rico",
    continent: "North America",
    landscape: "Island",
    desc: "The festive city of San Juan is the perfect place to experience Puerto Rican culture. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Raices_Fountain_in_San_Juan%2C_Puerto_Rico.jpg/640px-Raices_Fountain_in_San_Juan%2C_Puerto_Rico.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bus_in_San_Juan%2C_Puerto_Rico.jpg/640px-Bus_in_San_Juan%2C_Puerto_Rico.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/San_Juan%2C_Puerto_Rico_building_05.jpg/640px-San_Juan%2C_Puerto_Rico_building_05.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121154.43506899136!2d-66.1305131896574!3d18.389387536342134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03686fe268196f%3A0xad6b7f0f5c935adc!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1659542872923!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Nassau, Bahamas",
    continent: "North America",
    landscape: "Island",
    desc: "The capital city of the Bahamas boasts miles of spectacular beaches and stretches of <br>vivid coral reefs perfect for snorkeling. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Nassau%2C_Bahamas_Tranquility.JPG/640px-Nassau%2C_Bahamas_Tranquility.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Visiting_Fort_Charlotte%2C_Nassau%2C_Bahamas%2C_May_1992_01.jpg/640px-Visiting_Fort_Charlotte%2C_Nassau%2C_Bahamas%2C_May_1992_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Nassau%2C_Bahamas_%2851202081031%29.jpg/640px-Nassau%2C_Bahamas_%2851202081031%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462727.05914735235!2d-77.94848683636961!3d25.032202414311673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20The%20Bahamas!5e0!3m2!1sen!2sus!4v1659543031307!5m2!1sen!2sus",
    language: "English",
  }, {
    name: "Kingston, Jamaica",
    continent: "North America",
    landscape: "Island",
    desc: "Far from the north coast resort towns, Kingston is Jamaica at its most authentic, <br> a sprawling city of contrasts spread between the east coast and the Blue Mountains.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kingston_street%2C_Jamaica.jpg/640px-Kingston_street%2C_Jamaica.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kingston_City.jpg/640px-Kingston_City.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Abandoned_pier_in_Kingston%2C_Jamaica._%2833366013275%29.jpg/640px-Abandoned_pier_in_Kingston%2C_Jamaica._%2833366013275%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121412.90618815024!2d-76.87069704458223!3d18.0180869571661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f9784ded2a1%3A0x24f321bfabb7af40!2sKingston%2C%20Jamaica!5e0!3m2!1sen!2sus!4v1659543235267!5m2!1sen!2sus",
    language: "English",
  }, {
    name: "El Yunque National Forest, Puerto Rico",
    continent: "North America",
    landscape: "Jungle",
    desc: "Covering 28,000 acres, and receiving more than 200 inches of rain per year, <br> El Yunque National Forest is the only tropical rain forest in the US Forest System.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Entrance_to_El_Yunque_National_Forest_sign%2C_Puerto_Rico.jpg/640px-Entrance_to_El_Yunque_National_Forest_sign%2C_Puerto_Rico.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/El_Yunque%2C_Puerto_Rico_%28National_Forest%29.jpg/640px-El_Yunque%2C_Puerto_Rico_%28National_Forest%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Juan_Diego_Falls_in_R%C3%ADo_Grande%2C_Puerto_Rico.jpg/640px-Juan_Diego_Falls_in_R%C3%ADo_Grande%2C_Puerto_Rico.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.1414203572067!2d-65.80425988137986!3d18.295139746805933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c04a1b32efdd0c9%3A0x8342f6bc9bb224d1!2sEl%20Yunque%20National%20Forest!5e0!3m2!1sen!2sus!4v1659543466174!5m2!1sen!2sus",
    language: "English",
  }, {
    name: "Chiapas, Mexico",
    continent: "North America",
    landscape: "Jungle",
    desc: "Chiapas is a picturesque location that is perfect for unwinding and exploring.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ca%C3%B1on_del_Sumidero%2C_Chiapas%2C_M%C3%A9xico.jpg/640px-Ca%C3%B1on_del_Sumidero%2C_Chiapas%2C_M%C3%A9xico.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chiapas_landscape_-_Mexico_-_panoramio.jpg/640px-Chiapas_landscape_-_Mexico_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chiapa_de_Corzo%2C_Chiapas%2C_M%C3%A9xico._-_panoramio.jpg/640px-Chiapa_de_Corzo%2C_Chiapas%2C_M%C3%A9xico._-_panoramio.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961081.4719890575!2d-93.37675533458649!3d16.259606559811168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d44b49757ce67%3A0xcf0033824619d615!2sChiapas%2C%20Mexico!5e0!3m2!1sen!2sus!4v1659543641541!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Veracruz, Mexico",
    continent: "North America",
    landscape: "Jungle",
    desc: "Afro-Caribbean rhythms collide with colonial architecture in the lively town plaza, <br>while the Malecon boardwalk stretches along one of the busiest ports in Mexico.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Uxpanapa_Veracruz_vacas_paisajes.jpg/640px-Uxpanapa_Veracruz_vacas_paisajes.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Parroquia_de_Santa_Mar%C3%ADa_Magdalena_Xico_%28Veracruz%29.jpg/640px-Parroquia_de_Santa_Mar%C3%ADa_Magdalena_Xico_%28Veracruz%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Veracruz_letters2019.jpg/640px-Veracruz_letters2019.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60293.989805156154!2d-96.21133579113834!3d19.178844547857615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3414245ca78c5%3A0x18a4d642e936019b!2sHeroica%20Veracruz%2C%20Ver.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1659543870020!5m2!1sen!2sus",
    language: "Spanish",
  },//South America Forests
  {
    name: "Iguazu National Park, Argentina",
    continent: "South America",
    landscape: "Forest",
    desc: "A tropical forest renowned for its breathtaking waterfalls.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Iguazu_National_Park_Falls.jpg/640px-Iguazu_National_Park_Falls.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cataratas_Do_Igua%C3%A7u_Iguazu_Falls_%2891743163%29.jpeg/640px-Cataratas_Do_Igua%C3%A7u_Iguazu_Falls_%2891743163%29.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Iguazu_Falls_%22Garganta_do_Diabo%22.jpg/640px-Iguazu_Falls_%22Garganta_do_Diabo%22.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.6413191727115!2d-54.45689504951931!3d-25.683182149150287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea41eb9d9119%3A0x2ab8d74e979dc0a2!2sIguaz%C3%BA%20National%20Park!5e0!3m2!1sen!2sus!4v1659563785365!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Serra da Itajaí National Park, Brazil",
    continent: "South America",
    landscape: "Forest",
    desc: "A tropical forest with streams and hiking trails.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Serra_do_Itaja%C3%AD_National_Park_banner.jpg/640px-Serra_do_Itaja%C3%AD_National_Park_banner.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Parque_Nacional_da_Serra_do_Itaja%C3%AD_X_Fausto_Rosa.jpg/640px-Parque_Nacional_da_Serra_do_Itaja%C3%AD_X_Fausto_Rosa.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mirante_da_Serra_Dona_Francisca.jpg/640px-Mirante_da_Serra_Dona_Francisca.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227248.45244238977!2d-49.31266913085406!3d-27.132460589165344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df169b2a74b38f%3A0xdbe1941e5c2631b8!2sParque%20Nacional%20da%20Serra%20do%20Itaja%C3%AD!5e0!3m2!1sen!2sus!4v1659564020669!5m2!1sen!2sus",
    language: "Portuguese",
  }, {
    name: "Tierra del Fuego, Argentina",
    continent: "South America",
    landscape: "Forest",
    desc: "A national park that offers glaciers, lakes, and forests.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Lapataia_Bay%2C_Tierra_del_Fuego%2C_Argentina.jpg/640px-Lapataia_Bay%2C_Tierra_del_Fuego%2C_Argentina.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/ARG-2016-Aerial-Tierra_del_Fuego_%28Ushuaia%29%E2%80%93Valle_Carbajal_01.jpg/640px-ARG-2016-Aerial-Tierra_del_Fuego_%28Ushuaia%29%E2%80%93Valle_Carbajal_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tierra_del_Fuego_2.jpg/640px-Tierra_del_Fuego_2.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2410854.0865673195!2d-68.4492202026203!3d-53.83664397628234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c22cfd9432921%3A0x80ee54358cf0d88d!2sTierra%20del%20Fuego%20Province%2C%20Argentina!5e0!3m2!1sen!2sus!4v1659564253763!5m2!1sen!2sus",
    language: "Spanish",
  },


  //South America Jungle
  {
    name: "Moconá, Argentina",
    continent: "South America",
    landscape: "Jungle",
    desc: "A tropical jungle with majestic waterfalls.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Saltos_del_Mocon%C3%A1%2C_Misiones%2C_Argentina_-_panoramio.jpg/640px-Saltos_del_Mocon%C3%A1%2C_Misiones%2C_Argentina_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Los_Saltos_del_Mocona_-_Flickr_-_Rachel_and_Hugh.jpg/640px-Los_Saltos_del_Mocona_-_Flickr_-_Rachel_and_Hugh.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cielo_Brillante_Y_Via_Lactea_%28189471131%29.jpeg/640px-Cielo_Brillante_Y_Via_Lactea_%28189471131%29.jpeg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7160850.970444055!2d-63.45706086969334!3d-28.793894070328953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fbcd9fe119788d%3A0x561c3e6ba97159e4!2zTW9jb27DoQ!5e0!3m2!1sen!2sus!4v1659563179342!5m2!1sen!2sus",
    language: "Spanish",
  },
  {
    name: "The Amazon Rainforest",
    continent: "South America",
    landscape: "Jungle",
    desc: "The Amazon Rainforest boasts rich biodiversity.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Amazon_Manaus_forest.jpg/640px-Amazon_Manaus_forest.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Amazonia.jpg/640px-Amazonia.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Amazon_Rainforest_near_Manaus.jpg/640px-Amazon_Rainforest_near_Manaus.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.093430720715!2d-62.2246567344095!3d-3.465283740894534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sus!4v1659546882704!5m2!1sen!2sus",
    language: "Portuguese",
  }, {
    name: "Chiribiquete National Park, Colombia",
    continent: "South America",
    landscape: "Jungle",
    desc: "Chiribiquete National Natural Park is the largest national park in Colombia <br> and the largest tropical rainforest national park in the world. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Parque_Nacional_Natural_Serran%C3%ADa_de_Chiribiquete.jpg/640px-Parque_Nacional_Natural_Serran%C3%ADa_de_Chiribiquete.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Chiribiquete_view.jpg/640px-Chiribiquete_view.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chiribiquete_petroglyph_2.jpg/640px-Chiribiquete_petroglyph_2.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.093430720715!2d-62.2246567344095!3d-3.465283740894534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sus!4v1659546882704!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Rio de Janeiro, Brazil",
    continent: "South America",
    landscape: "Mountains",
    desc: "With its plentiful beaches, dramatic mountains, and backdrop of samba and bossa nova rhythms ,<br> it's easy to fall in love with Rio de Janeiro.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/640px-Cidade_Maravilhosa.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rio_de_janeiro_favela_ipanema_beach_night_2010.JPG/640px-Rio_de_janeiro_favela_ipanema_beach_night_2010.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rio_de_Janeiro_from_Corcovado_11.jpg/640px-Rio_de_Janeiro_from_Corcovado_11.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940810.3308814662!2d-44.00645413844896!3d-22.91188233259013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2sus!4v1659547217833!5m2!1sen!2sus",
    language: "Portuguese",
  }, {
    name: "Machu Picchu, Peru",
    continent: "South America",
    landscape: "Mountains",
    desc: "It's no wonder Machu Picchu is Peru's most-visited site. Dating to the mid-1400s, <br> it's a marvel of mortar-free limestone architecture perched on a high plateau <br> deep in the Amazonian jungle. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG/640px-Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/640px-Machu_Picchu%2C_Peru.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Llamas_at_Machu_Picchu_and_Waynapicchu.jpg/640px-Llamas_at_Machu_Picchu_and_Waynapicchu.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15539.954305614754!2d-72.55371767328113!3d-13.163120157696348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sMachu%20Picchu!5e0!3m2!1sen!2sus!4v1659547374339!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Andes Mountains",
    continent: "South America",
    landscape: "Mountains",
    desc: "Measuring 4,500 miles from north to south, the Andes Mountain range is one of the largest <br> in the world.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Andes_mountains_panoramic_view.jpg/640px-Andes_mountains_panoramic_view.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/AndesEarlyAMArgentinoLake.jpg/640px-AndesEarlyAMArgentinoLake.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/La_Cordill%C3%A8re_des_Andes-2.jpg/640px-La_Cordill%C3%A8re_des_Andes-2.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60672084.21203247!2d-68.42214200000001!3d-21.85251535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968792fc5a4e9d2f%3A0x8b16530d02147954!2sAndes!5e0!3m2!1sen!2sus!4v1659547603212!5m2!1sen!2sus",
    language: "Spanish",
  },
  //South America Beaches
  {
    name: "Aruba",
    continent: "South America",
    landscape: "Beaches",
    desc: "The quintessential Caribbean island, Aruba is all sun and sea and stretches <br>of powdery sand.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aruba_Lighthouse_at_sunset_05.jpg/640px-Aruba_Lighthouse_at_sunset_05.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Plaza_Daniel_Leo%2C_Oranjestad%2C_Aruba_-_February_2020.jpg/640px-Plaza_Daniel_Leo%2C_Oranjestad%2C_Aruba_-_February_2020.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palm-Beach-Aruba-2013.JPG/640px-Palm-Beach-Aruba-2013.JPG"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60672084.21203247!2d-68.42214200000001!3d-21.85251535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8538cfe25a77db%3A0xf16a8a3e89818c2f!2sAruba!5e0!3m2!1sen!2sus!4v1659547813164!5m2!1sen!2sus",
    language: "Dutch",
  }, {
    name: "Salvador, Brazil",
    continent: "South America",
    landscape: "Beaches",
    desc: "Brazil's former capital is renowned for its African-influenced cuisine, music and architecture.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Salvador_de_Bahia%2C_Brazil_%2848568911742%29.jpg/640px-Salvador_de_Bahia%2C_Brazil_%2848568911742%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Salvador_Brazil_skyline.jpg/640px-Salvador_Brazil_skyline.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Salvador_Bahia_Brazil_-_panoramio.jpg/640px-Salvador_Bahia_Brazil_-_panoramio.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497857.8122749599!2d-38.78199476056448!3d-12.874625881104127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x1b9fc7912c226698!2sSalvador%20-%20State%20of%20Bahia%2C%20Brazil!5e0!3m2!1sen!2sus!4v1659548869882!5m2!1sen!2sus",
    language: "Portuguese",
  }, {
    name: "Cartagena, Colombia",
    continent: "South America",
    landscape: "Beaches",
    desc: "Cartagena, a gorgeous fishing village on Colombia's Caribbean coast, has excellent beaches, a historic old town <br> (that's entirely walkable) and beautiful colonial architecture.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sector_Antiguo_de_Cartagena%2C_Colombia_01.jpg/640px-Sector_Antiguo_de_Cartagena%2C_Colombia_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aerial_view_of_Cartagena_CTG_11_2019_9722.jpg/640px-Aerial_view_of_Cartagena_CTG_11_2019_9722.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sector_Antiguo_de_Cartagena%2C_Colombia_03.jpg/640px-Sector_Antiguo_de_Cartagena%2C_Colombia_03.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251152.96705603495!2d-75.6482693252551!3d10.400506200768856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e7ae9d1351%3A0xb161392e033f26ca!2sCartagena%2C%20Cartagena%20Province%2C%20Bolivar%2C%20Colombia!5e0!3m2!1sen!2sus!4v1659549141427!5m2!1sen!2sus",
    language: "Spanish",
  },
  //South America Islands
  {
    name: "Galapagos Islands, Ecuador",
    continent: "South America",
    landscape: "Island",
    desc: "Abundant wildlife above and below the waves draws eco-tourists to Ecuador's Galapagos. Get up close on a <br> stroll or in a Zodiac boat. Snorkel and dive with denizens of the deep, from sea lions to <br>sea turtles at Santiago's Cousin's Rock.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG/640px-Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Giant_tortoise_of_the_galapagos_islands.jpg/640px-Giant_tortoise_of_the_galapagos_islands.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Darwinarch.jpg/640px-Darwinarch.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255345.7247221761!2d-90.84941597394109!3d-0.2609230157991561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9aab23acc78137a5%3A0x2a4992f090979738!2sSantiago%20Island!5e0!3m2!1sen!2sus!4v1659549574064!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "San Andres, Colombia",
    continent: "South America",
    landscape: "Island",
    desc: "The coral island of San Andres is a diverse ecosystem of reefs, geysers, groves, and cays. <br>Needless to say, it’s perfect for diving, snorkeling, and outdoor exploring.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/San_Andres_Islas%2C_Colombia.jpg/640px-San_Andres_Islas%2C_Colombia.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/San_Andr%C3%A9s_Island%2C_Colombia.jpg/640px-San_Andr%C3%A9s_Island%2C_Colombia.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hotel_Sunrise_San_Andres_Colombia.jpg/640px-Hotel_Sunrise_San_Andres_Colombia.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9402150342253!2d-81.69146114049583!3d12.599499525609811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f05a9e35a20ed05%3A0xca3ed0a1b98543f4!2sSan%20Andr%C3%A9s%20islas!5e0!3m2!1sen!2sus!4v1659550108828!5m2!1sen!2sus",
    language: "Spanish",
  },
  {
    name: "Easter Island, Chile",
    continent: "South America",
    landscape: "Island",
    desc: "Isolation has helped preserve the 1,500-year-old mysterious congregation of volcanic rock sculptures (maoi) <br>that’s the island’s biggest claim to fame.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Easter_Island_5.jpg/640px-Easter_Island_5.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Easter_Island_%2816491363758%29.jpg/640px-Easter_Island_%2816491363758%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Easter_Island_%2816677940642%29.jpg/640px-Easter_Island_%2816677940642%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113630.98419818546!2d-109.4088555461617!3d-27.125809791180593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9947f017a8d4ae2b%3A0xbbe5b3edc02a2db6!2sEaster%20Island!5e0!3m2!1sen!2sus!4v1659550225476!5m2!1sen!2sus",
    language: "Spanish",
  },
  //Europe Forests
  {
    name: "The Black Forest, Germany",
    continent: "Europe",
    landscape: "Forest",
    desc: "Fairytale villages, thermal baths, casinos and pine and birch-blanketed mountains beckon travelers <br> to southwestern Germany's Black Forest. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/A_black_forest_walk_%28Unsplash%29.jpg/640px-A_black_forest_walk_%28Unsplash%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Black_Forest_In_Autumn_-_panoramio.jpg/640px-Black_Forest_In_Autumn_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/A002%2C_Black_Forest%2C_Germany%2C_Vineyard%2C_1990.jpg/640px-A002%2C_Black_Forest%2C_Germany%2C_Vineyard%2C_1990.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720343.030044793!2d5.987773769071229!3d48.25311587269986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790ec232f1791bd%3A0xdbe2bec8ae87edf1!2sBlack%20Forest!5e0!3m2!1sen!2sus!4v1659549481942!5m2!1sen!2sus",
    language: "German",
  }, {
    name: "Hallerbos Forest, Belgium",
    continent: "Europe",
    landscape: "Forest",
    desc: "A lush, flower-filled forest.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bois_de_Hal.jpg/640px-Bois_de_Hal.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hallerbos_%2826787455905%29.jpg/640px-Hallerbos_%2826787455905%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hallerbos2.jpg/640px-Hallerbos2.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.4172107801824!2d4.2672836155065434!3d50.71219857635112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c9442c932c13%3A0x716f75cafb68cdad!2sHallerbos!5e0!3m2!1sen!2sus!4v1659549620574!5m2!1sen!2sus",
    language: "Dutch",
  }, {
    name: "Triglav National Park, Slovenia",
    continent: "Europe",
    landscape: "Forest",
    desc: "Triglav National Park is one of the most im¬portant natural treasures of Slovenia.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Triglav_National_Park_%2828749976304%29.jpg/640px-Triglav_National_Park_%2828749976304%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Triglav_National_Park_%2835473464814%29.jpg/640px-Triglav_National_Park_%2835473464814%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Triglav_National_Park_4308_%2848329191956%29.jpg/640px-Triglav_National_Park_4308_%2848329191956%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44055.120982214736!2d13.798895345977217!3d46.36055718921716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a8a8aeb7a1eed%3A0xf00f81d513270f0!2sTriglav%20National%20Park!5e0!3m2!1sen!2sus!4v1659549840797!5m2!1sen!2sus",
    language: "Slovenian",
  }, //Europe Mountains 
  {
    name: "The Alps",
    continent: "Europe",
    landscape: "Mountains",
    desc: "A magnet for skiers and hikers, these dramatic peaks – including the iconic Matterhorn – range from 3,000 <br>to 15,000 feet and spread across three-fifths of the country.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mont_Blanc_oct_2004.JPG/640px-Mont_Blanc_oct_2004.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Alps_from_Bella_Tola.jpg/640px-Alps_from_Bella_Tola.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2021.06.01.171346_View_Alps_Gut_Ilkah%C3%B6he_Tutzing_Bavaria_Germany.jpg/640px-2021.06.01.171346_View_Alps_Gut_Ilkah%C3%B6he_Tutzing_Bavaria_Germany.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390043.6232226768!2d10.361022315550807!3d47.12006384072268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789459fb534be51%3A0x38c7fdcd674c57d!2sAlps!5e0!3m2!1sen!2sus!4v1659550405210!5m2!1sen!2sus",
    language: "Varies",
  }, {
    name: "Mount Olympus, Greece",
    continent: "Europe",
    landscape: "Mountains",
    desc: "The mountain of myth stands majestically in Thessaly.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mount_Olympus%2CGreece1.jpg/640px-Mount_Olympus%2CGreece1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mount_Olympus_View.jpg/640px-Mount_Olympus_View.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mount_Olympus%2C_Greece_%28Unsplash%29.jpg/640px-Mount_Olympus%2C_Greece_%28Unsplash%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12210.57130851204!2d22.341165933276685!3d40.08337853799214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135813ec20ecc251%3A0xe579def37a813f8c!2zzozOu8-FzrzPgM6_z4I!5e0!3m2!1sen!2sus!4v1659550602773!5m2!1sen!2sus",
    language: "Greek",
  }, {
    name: "Pyrenees",
    continent: "Europe",
    landscape: "Mountains",
    desc: "Pyrenees stretches from the Bay of Biscay in the Atlantic Ocean to the Mediterranean Sea.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Central_pyrenees.jpg/640px-Central_pyrenees.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2019_-_Parc_national_des_Pyrenees_-_refuge_des_Espuguettes.jpg/640px-2019_-_Parc_national_des_Pyrenees_-_refuge_des_Espuguettes.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/2019_-_Parc_national_des_Pyrenees_-_Gavarnie.jpg/640px-2019_-_Parc_national_des_Pyrenees_-_Gavarnie.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002692.9600686994!2d-1.796244070301687!3d42.697000840188124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a8a48b202023d5%3A0x1711d86785a522d6!2sPyrenees!5e0!3m2!1sen!2sus!4v1659550839667!5m2!1sen!2sus",
    language: "French",
  },
  //Europe Beaches
  {
    name: "Mallorca, Spain",
    continent: "Europe",
    landscape: "Beaches",
    desc: "Attracting visitors from all parts of the world, Majorca is a dreamy island destination in the Mediterranean Sea, <br>just off the south-east coast of Spain.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/S%27illot%2C_Mallorca%2C_Spain_-_panoramio.jpg/640px-S%27illot%2C_Mallorca%2C_Spain_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Cala_Mesquida_beach_in_Mallorca%2C_Spain_%2847988460597%29.jpg/640px-Cala_Mesquida_beach_in_Mallorca%2C_Spain_%2847988460597%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786847.0855987857!2d2.351170700354345!3d39.61320968056231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b8766606c129%3A0xb7eb9bff02d2ecc0!2sMajorca!5e0!3m2!1sen!2sus!4v1659550979414!5m2!1sen!2sus",
    language: "Spanish",
  },
  {
    name: "Zakynthos, Greece",
    continent: "Europe",
    landscape: "Beaches",
    desc: "The Ionian Islands are splendid, cinematic paradise. The waters are bluest blue,<br> the sands are achingly silky and smooth.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Zakynthos_Shipwreck_Beach.jpg/640px-Zakynthos_Shipwreck_Beach.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Navagio_Beach_Zakynthos_2012.jpg/640px-Navagio_Beach_Zakynthos_2012.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gerakas_beach_Zakynthos_Greece_%2846470915421%29.jpg/640px-Gerakas_beach_Zakynthos_Greece_%2846470915421%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33984.443332418974!2d20.87663472182353!3d37.78607627246588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x136747d9efb0afbd%3A0xdbba1265b653379a!2sZakinthos%2C%20Greece!5e0!3m2!1sen!2sus!4v1659551281086!5m2!1sen!2sus",
    language: "Greek",
  },
  {
    name: "Cannes, France",
    continent: "Europe",
    landscape: "Beaches",
    desc: "Galas, regattas, the Film Festival and an outrageously attractive and affluent set characterize Cannes. <br>Get expensive seaside food and drinks service on hotel sand or opt for the <br>free public beaches, Plages du Midi and de la Boca",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Beach_-_Cannes_2014_%283%29.JPG/640px-Beach_-_Cannes_2014_%283%29.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cannes_%285647001725%29.jpg/640px-Cannes_%285647001725%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46275.723840814564!2d6.974431764014955!3d43.53919017603936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce8180530cffff%3A0x40819a5fd979e20!2sCannes%2C%20France!5e0!3m2!1sen!2sus!4v1659551547938!5m2!1sen!2sus",
    language: "French",
  },
  //Europe Island
  {
    name: "Mykonos, Greece",
    continent: "Europe",
    landscape: "Island",
    desc: "The most popular Greek Island in the Aegean Sea is all about energy and attracts <br> a diverse and upscale crowd that thrives on its stylish nightlife.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mykonos_Moulins_10.jpg/640px-Mykonos_Moulins_10.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mykonos_Rivage.jpg/640px-Mykonos_Rivage.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Streets_in_Mykonos%2C_Greece_%2850662345197%29.jpg/640px-Streets_in_Mykonos%2C_Greece_%2850662345197%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101356.4184517341!2d25.310635819775783!3d37.45155816360123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2b8b4f03c9b91%3A0x78d164471e79b4a1!2sMykonos!5e0!3m2!1sen!2sus!4v1659551093278!5m2!1sen!2sus",
    language: "Greek",
  }, {
    name: "Ibiza, Spain",
    continent: "Europe",
    landscape: "Island",
    desc: "Ibiza boasts more than 100 miles of coastline with some 50 beaches, plus plenty <br> of restaurants, bars, and water sports—and clubs, of course.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Puerto_de_Ibiza%2C_en_Baleares_%28Espa%C3%B1a%29.jpg/640px-Puerto_de_Ibiza%2C_en_Baleares_%28Espa%C3%B1a%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ibiza_rock_volcano_%28747230830%29.jpg/640px-Ibiza_rock_volcano_%28747230830%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/View_from_KM4_to_Salinas_Ibiza_%28salt_mines%29.jpg/640px-View_from_KM4_to_Salinas_Ibiza_%28salt_mines%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198514.38384949227!2d1.2769593264750376!3d38.974525726891144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1299476385093943%3A0x9064725cd8426d6!2sIbiza!5e0!3m2!1sen!2sus!4v1659551335285!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Sardinia, Italy",
    continent: "Europe",
    landscape: "Island",
    desc: "The second-largest island in Mediterranean after Sicily, Sardinia serves up a lovely blend of <br>sea, sand and history.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sardinia%2C_Ground_of_Wonders.png/640px-Sardinia%2C_Ground_of_Wonders.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pittulongu_OT%2C_Sardinia%2C_Italy_-_panoramio.jpg/640px-Pittulongu_OT%2C_Sardinia%2C_Italy_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hotel_La_Bitta%2C_Arbatax%2C_Ogliastra%2C_Sardinia%2C_Italy_-_panoramio.jpg/640px-Hotel_La_Bitta%2C_Arbatax%2C_Ogliastra%2C_Sardinia%2C_Italy_-_panoramio.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563528.812918328!2d7.854983468813026!3d40.058295611664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ddc48d448d3591%3A0x339674b6e4ab6631!2sSardinia!5e0!3m2!1sen!2sus!4v1659551568326!5m2!1sen!2sus",
    language: "Italian",
  },
  //Europe Jungle
  {
    name: "Perucica Forest, Bosnia and Herzegovina",
    continent: "Europe",
    landscape: "Jungle",
    desc: "Perućica is one of the last remaining primeval forests in Europe. It is located in Bosnia and <br>Herzegovina, near the border with Montenegro.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Peru%C4%87ica_Forest_%283886656871%29.jpg/640px-Peru%C4%87ica_Forest_%283886656871%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Perucica.jpg/640px-Perucica.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/%D0%A1%D0%BA%D0%B0%D0%BA%D0%B0%D0%B2%D0%B0%D1%86_2.jpg/640px-%D0%A1%D0%BA%D0%B0%D0%BA%D0%B0%D0%B2%D0%B0%D1%86_2.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.801056936405!2d18.68663401483418!3d43.31842388203297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134cd0bfffffffff%3A0x45eb992bc7505107!2zUGVydcSHaWNh!5e0!3m2!1sen!2sus!4v1659552056615!5m2!1sen!2sus",
    language: "Bosnian",
  },
  {
    name: "Irati Forest, Spain",
    continent: "Europe",
    landscape: "Jungle",
    desc: "The Irati Forest, found in the western Pyrenees, covers 17,300 h of the Navarre region,<br> it is the second largest and best preserved mixed beech-fir forest in Europe.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Selva_de_Irati_%28Navarra%29.jpg/640px-Selva_de_Irati_%28Navarra%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/In_the_magical_forest.jpg/640px-In_the_magical_forest.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Irati%2C_oto%C3%B1o_1990_02.jpg/640px-Irati%2C_oto%C3%B1o_1990_02.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187674.60560567107!2d-1.6079488997743039!3d42.69491765444225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50afd722a39883%3A0x2c36c3d95eb03596!2sIrati!5e0!3m2!1sen!2sus!4v1659552389071!5m2!1sen!2sus",
    language: "Spanish",
  }, {
    name: "Parque Natural de Los Alcornocales, Spain",
    continent: "Europe",
    landscape: "Jungle",
    desc: "A forest known for mushroom-picking",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Parque_natural_de_Los_Alcornocales_%28C%C3%A1diz%2C_Espa%C3%B1a%29_06.jpg/640px-Parque_natural_de_Los_Alcornocales_%28C%C3%A1diz%2C_Espa%C3%B1a%29_06.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Parque_natural_de_Los_Alcornocales_%28C%C3%A1diz%2C_Espa%C3%B1a%29_05.JPG/640px-Parque_natural_de_Los_Alcornocales_%28C%C3%A1diz%2C_Espa%C3%B1a%29_05.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Korkeiche_%28Quercus_suber%29_im_Naturpark_Los_Alcornocales_3.JPG/640px-Korkeiche_%28Quercus_suber%29_im_Naturpark_Los_Alcornocales_3.JPG"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.50279697485!2d-5.608225809333831!3d36.34859833707559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c8d23c8133b5f%3A0x432fc0c63550e340!2sParque%20Natural%20Los%20Alcornocales!5e0!3m2!1sen!2sus!4v1659562733988!5m2!1sen!2sus",
    language: "Spanish",
  },
  //Asia Forests
  {
    name: "Bijarim Forest, South Korea",
    continent: "Asia",
    landscape: "Forest",
    desc: "A tranquil nutmeg forest.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bijarim_forest%2C_Jeju.jpg/640px-Bijarim_forest%2C_Jeju.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/%EC%A0%9C%EC%A3%BC_%EB%B9%84%EC%9E%90%EB%A6%BC_Jeju_Bijarim-cropped.jpg/640px-%EC%A0%9C%EC%A3%BC_%EB%B9%84%EC%9E%90%EB%A6%BC_Jeju_Bijarim-cropped.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bijarim_Forest.jpg/640px-Bijarim_Forest.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.6571295269428!2d126.80428525055179!3d33.48427645479943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350d17330b2d9d17%3A0x7bedd232f66acd24!2sBijarim%20Forest!5e0!3m2!1sen!2sus!4v1659551974061!5m2!1sen!2sus",
    language: "Korean",
  }, {
    name: "Chitwan National Park, Nepal",
    continent: "Asia",
    landscape: "Forest",
    desc: "Chitwan's dense forests and grassy plains are home to rare mammals like one-horned <br> rhinos and Bengal tigers. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Chitwan_National_Park_%28Rapti_River%29.jpg/640px-Chitwan_National_Park_%28Rapti_River%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chital_or_Spotted_deer_at_Chitwan_National_Park_%284%29.jpg/640px-Chital_or_Spotted_deer_at_Chitwan_National_Park_%284%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Great_one_horned_rhino_-_chitwan_national_park.jpg/640px-Great_one_horned_rhino_-_chitwan_national_park.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113205.10817817686!2d84.32109312318701!3d27.54203167503426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994b0337772df43%3A0xafa1603d5d63a217!2sChitwan%20National%20Park!5e0!3m2!1sen!2sus!4v1659552211267!5m2!1sen!2sus",
    language: "Nepali",
  }, {
    name: "Fuji Hakone Izu National Park, Japan",
    continent: "Asia",
    landscape: "Forest",
    desc: "With Mt. Fuji located at its northern end, Fuji-Hakone-Izu National Park is a symbol of <br> Japan as a volcanic country.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mount_Fuji_from_Fujinomiyaguchi.jpg/640px-Mount_Fuji_from_Fujinomiyaguchi.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lake_Sh%C5%8Dji_from_north_side_01.jpg/640px-Lake_Sh%C5%8Dji_from_north_side_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Le_mont_Fuji_.-_Parc_national_de_Fuji-Hakone-Izu.jpg/640px-Le_mont_Fuji_.-_Parc_national_de_Fuji-Hakone-Izu.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.9487835184855!2d139.02012365059545!3d35.232644961953845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60199fa87005438b%3A0xf58302054248b7a3!2sFuji%20Hakone%20Izu%20National%20Park!5e0!3m2!1sen!2sus!4v1659552433682!5m2!1sen!2sus",
    language: "Japanese",
  },//Asia Mountains
  {
    name: "Sapporo, Japan",
    continent: "Asia",
    landscape: "Mountains",
    desc: "Probably best known for its eponymous beer, Sapporo—the capital of Hokkaido, Japan’s northernmost island—<br>has maintained the youthful and open atmosphere of the 1972 Olympic Winter Games, drawing international <br> visitors for its annual Snow Festival and its world-famous ramen.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/View_of_Sapporo_from_Summit_of_Mount_Moiwayama_-_Sapporo_-_Hokkaido_-_Japan_-_02_%2847977608752%29.jpg/640px-View_of_Sapporo_from_Summit_of_Mount_Moiwayama_-_Sapporo_-_Hokkaido_-_Japan_-_02_%2847977608752%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/The_Sapporo_Streetcar.jpg/640px-The_Sapporo_Streetcar.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/ANA_Sapporo_%286405493101%29.jpg/640px-ANA_Sapporo_%286405493101%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373588.11654532334!2d140.96709759796988!3d42.985495090002566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ad4755a973633%3A0x33937e9d4687bad5!2sSapporo%2C%20Hokkaido%2C%20Japan!5e0!3m2!1sen!2sus!4v1659561802592!5m2!1sen!2sus",
    language: "Japanese",
  }, {
    name: "The Himalayas",
    continent: "Asia",
    landscape: "Mountains",
    desc: "The Himalayas contain the famous Mount Everest.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Himalayas.jpg/640px-Himalayas.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Himalayas_Viewed_from_Aircraft_Near_Patna.jpg/640px-Himalayas_Viewed_from_Aircraft_Near_Patna.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/YAK_On_Himalayas.jpg/640px-YAK_On_Himalayas.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7053633.1047123205!2d81.08660940547583!3d30.31805780126988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995b9ebef1235bd%3A0x3ae1297b70640201!2sHimalayas!5e0!3m2!1sen!2sus!4v1659562130346!5m2!1sen!2sus",
    language: "Varies",
  }, {
    name: "Mount Fuji, Japan",
    continent: "Asia",
    landscape: "Mountains",
    desc: " You don't have to be a die-hard mountaineer to climb Mt. Fuji; <br>the slopes are full of children and adults of all ages, shapes,<br> and sizes. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/640px-080103_hakkai_fuji.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mount_Fuji_from_Jurigi.jpg/640px-Mount_Fuji_from_Jurigi.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mount_Fuji_from_panoramadai.jpg/640px-Mount_Fuji_from_panoramadai.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13015.194725203537!2d138.71858717206493!3d35.36064218213228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e0!3m2!1sen!2sus!4v1659562357210!5m2!1sen!2sus",
    language: "Japanese",
  }, //Asia Beaches
  {
    name: "Goa, India",
    continent: "Asia",
    landscape: "Beaches",
    desc: "The sandy coast of Goa is perfect for reclining by the sea.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Anjuna_Beach%2C_Goa%2C_India%2C_Legendary_Curlies_beach_shack.jpg/640px-Anjuna_Beach%2C_Goa%2C_India%2C_Legendary_Curlies_beach_shack.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Vagator%2C_Goa%2C_India%2C_Psychedelic_art.jpg/640px-Vagator%2C_Goa%2C_India%2C_Psychedelic_art.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/The_Terekhol_River_and_Querim_Beach%2C_panoramic_view%2C_Goa%2C_India.jpg/640px-The_Terekhol_River_and_Querim_Beach%2C_panoramic_view%2C_Goa%2C_India.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984967.2958623542!2d73.45181061630439!3d15.347837939518643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa%2C%20India!5e0!3m2!1sen!2sus!4v1659564754511!5m2!1sen!2sus",
    language: "Hindi",
  }, {
    name: "Lombok, Indonesia",
    continent: "Asia",
    landscape: "Beaches",
    desc: "If it were located anywhere else in the world, Lombok would be on everyone’s<br> bucket list. But because it’s just east of Bali, fewer people have<br>heard of its secluded coves, endless string of cream-colored beaches,<br> and waterfalls crashing through its impossibly lush foliage.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Lombok%2C_Indonesia_%283%29_%28Imagicity_1192%29.jpg/640px-Lombok%2C_Indonesia_%283%29_%28Imagicity_1192%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lombok%2C_Indonesia_%28933932466%29.jpg/640px-Lombok%2C_Indonesia_%28933932466%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lombok_Coast.jpg/640px-Lombok_Coast.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009958.9860150696!2d115.71250033974201!3d-8.581352609076792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb7d23e8cc745%3A0x446689c4ab50d8c9!2sLombok!5e0!3m2!1sen!2sus!4v1659564926387!5m2!1sen!2sus",
    language: "Indonesian",
  }, {
    name: "Bali, Indonesia",
    continent: "Asia",
    landscape: "Beaches",
    desc: "No island has enchanted travelers quite like Bali. Less than half the size of Hawaii’s big island,<br> Bali manages to pack countless adventures into one small package.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/TanahLot_2014.JPG/640px-TanahLot_2014.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kuta_Bali_Indonesia_Pura-Luhur-Uluwatu-06.jpg/640px-Kuta_Bali_Indonesia_Pura-Luhur-Uluwatu-06.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tanah-Lot_Bali_Indonesia_Pura-Batu-Bolong-02.jpg/640px-Tanah-Lot_Bali_Indonesia_Pura-Batu-Bolong-02.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010295.9964612684!2d114.51107972978379!3d-8.453713844942973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1659565164420!5m2!1sen!2sus",
    language: "Indonesian",
  },
  //Asia Islands
  {
    name: "The Maldives",
    continent: "Asia",
    landscape: "Island",
    desc: "A picturesque country built on an archipelago.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Maldives_09813.JPG/640px-Maldives_09813.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Maldives_%2816240341375%29.jpg/640px-Maldives_%2816240341375%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Maldives_%2815383218305%29.jpg/640px-Maldives_%2815383218305%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159086.286875985!2d68.74106958480027!3d3.1135266657045433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sus!4v1659565791226!5m2!1sen!2sus",
    language: "Dhivehi",
  }, {
    name: "Okinawa, Japan",
    continent: "Asia",
    landscape: "Island",
    desc: "A picturesque island.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Cape_Kyan%2C_Okinawa_4.jpg/640px-Cape_Kyan%2C_Okinawa_4.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mount_Ishikawa_and_Okinawa_Expressway_202001_01.JPG/640px-Mount_Ishikawa_and_Okinawa_Expressway_202001_01.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Naha_Okinawa_Japan_Shikinaen-03.jpg/640px-Naha_Okinawa_Japan_Shikinaen-03.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673159.691640414!2d127.1328998!3d25.96574415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34f57062eeab5be7%3A0x35bb617286fdd1ef!2sOkinawa%2C%20Japan!5e0!3m2!1sen!2sus!4v1659566103277!5m2!1sen!2sus",
    language: "Japanese",
  }, {
    name: "Koh Samui, Thailand",
    continent: "Asia",
    landscape: "Island",
    desc: "Once a fishing community, Koh Samui, Thailand's second largest island,<br> has retained its charming sensibility. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Koh_Samui_Lipa_Noi2.jpg/640px-Koh_Samui_Lipa_Noi2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ko_Samui%2C_Thailand_%28Unsplash_FgiVhlKhOCc%29.jpg/640px-Ko_Samui%2C_Thailand_%28Unsplash_FgiVhlKhOCc%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lipa_Noi%2C_Ko_Samui_District%2C_Surat_Thani%2C_Thailand_-_panoramio.jpg/640px-Lipa_Noi%2C_Ko_Samui_District%2C_Surat_Thani%2C_Thailand_-_panoramio.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503616.8119186948!2d99.59019475941555!3d9.55154598411369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054f1501c66266f%3A0xedd55abd3d7d8330!2sKo%20Samui!5e0!3m2!1sen!2sus!4v1659566280356!5m2!1sen!2sus",
    language: "Thai",
  },//Asia Jungle
  {
    name: "South China Karst",
    continent: "Asia",
    landscape: "Jungle",
    desc: "A UNESCO park known for rich biodiversity.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/%E8%8D%94%E6%B3%A2-%E5%B0%8F%E4%B8%83%E5%AD%94%E7%80%91%E5%B8%83_-_panoramio.jpg/640px-%E8%8D%94%E6%B3%A2-%E5%B0%8F%E4%B8%83%E5%AD%94%E7%80%91%E5%B8%83_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/%E8%8D%94%E6%B3%A2-%E5%B0%8F%E4%B8%83%E5%AD%94%E6%A1%A5_-_panoramio.jpg/640px-%E8%8D%94%E6%B3%A2-%E5%B0%8F%E4%B8%83%E5%AD%94%E6%A1%A5_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%E8%8D%94%E6%B3%A2-%E5%B0%8F%E4%B8%83%E5%AD%94%E6%99%AF%E5%8C%BA%E5%A4%A7%E9%97%A8_-_panoramio.jpg/640px-%E8%8D%94%E6%B3%A2-%E5%B0%8F%E4%B8%83%E5%AD%94%E6%99%AF%E5%8C%BA%E5%A4%A7%E9%97%A8_-_panoramio.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1524303070005!2d110.35300451472618!3d24.92687664873191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36a5aa5e2392447b%3A0x206dadac041f7b1e!2sSouth%20China%20Karst!5e0!3m2!1sen!2sus!4v1659566485619!5m2!1sen!2sus",
    language: "Hakka Chinese",
  }, {
    name: "Taman Negara National Park, Malaysia",
    continent: "Asia",
    landscape: "Jungle",
    desc: "An expansive jungle national park in Malaysia",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Taman_Negara.JPG/640px-Taman_Negara.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Taman_Negara%2C_Malaysia%2C_Clearing.jpg/640px-Taman_Negara%2C_Malaysia%2C_Clearing.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Taman_Negara%2C_Malaysia%2C_Panoramic_view_2.jpg/640px-Taman_Negara%2C_Malaysia%2C_Panoramic_view_2.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018051.7764452667!2d101.35223050000002!3d4.636007999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c998d100718c3b%3A0x6b7d433c91511354!2sTaman%20Negara!5e0!3m2!1sen!2sus!4v1659567016943!5m2!1sen!2sus",
    language: "Malay",
  }, {
    name: "Kinabatangan River, Malaysia",
    continent: "Asia",
    landscape: "Jungle",
    desc: "The Kinabatangan River is the second longest river in Malaysia.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kinabatangan_River_%2814154417142%29.jpg/640px-Kinabatangan_River_%2814154417142%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kinabatangan_River_1.jpg/640px-Kinabatangan_River_1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bilit_Sabah_Sungai-Kinabatangan-at-Kg-Bilit-02.jpg/640px-Bilit_Sabah_Sungai-Kinabatangan-at-Kg-Bilit-02.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508260.2931057619!2d117.89040514620088!3d5.598965865790365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323f39b5a542391b%3A0x8c36245e044f7088!2sKinabatangan%20River!5e0!3m2!1sen!2sus!4v1659567304383!5m2!1sen!2sus",
    language: "Malay",
  },


  //Africa Forests
  {
    name: "Pledge Nature Reserve, South Africa",
    continent: "Africa",
    landscape: "Forest",
    desc: "Visit Pledge Nature Reserve in the heart of Knysna to view indigenous plants to<br> the area and some history.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Knysna_Forest00.jpg/640px-Knysna_Forest00.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Knysna_Forest_-_Garden_Route%2C_South_Africa_%283919268880%29.jpg/640px-Knysna_Forest_-_Garden_Route%2C_South_Africa_%283919268880%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Groot_River.jpg/640px-Groot_River.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.4279937761185!2d23.04410640000001!3d-34.03289079999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e78ea85d5ec8677%3A0xd8143c088b60fcb8!2sPledge%20Nature%20Reserve!5e0!3m2!1sen!2sus!4v1659631984306!5m2!1sen!2sus",
    language: "Afrikaans",
  },

  {
    name: "Tokai Park, South Africa",
    continent: "Africa",
    landscape: "Forest",
    desc: "A stunning forest for hiking and exploring.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tokai_Arboretum_Entrance.jpg/640px-Tokai_Arboretum_Entrance.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Wachendorfia_thyrsiflora_Flipphi_9.jpg/640px-Wachendorfia_thyrsiflora_Flipphi_9.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Protea_repens_20D_4732.jpg/640px-Protea_repens_20D_4732.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13221.885573064574!2d18.416183632689776!3d-34.05742836241431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42062b5f2aaf%3A0xd327815384a938b5!2sTokai%20Park!5e0!3m2!1sen!2sus!4v1659632285344!5m2!1sen!2sus",
    language: "Afrikaans",
  },

  {
    name: "Arabuko Sokoke Forest, Kenya",
    continent: "Africa",
    landscape: "Forest",
    desc: "An expansive forest that houses countless colorful birds.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sokoke_scops_owl_pair_in_Arabuko-Sokoke_Forest.jpg/640px-Sokoke_scops_owl_pair_in_Arabuko-Sokoke_Forest.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Arch_Wood._Arabuko_Sokoke_Forest_-_panoramio.jpg/640px-Arch_Wood._Arabuko_Sokoke_Forest_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Endless_Africa._Arabuko_Sokoke_Forest_-_panoramio.jpg/640px-Endless_Africa._Arabuko_Sokoke_Forest_-_panoramio.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.272719034372!2d39.866666699999996!3d-3.3333332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183e2c48ec0b41e9%3A0xc1d9dfa6d043238d!2sArabuko%20Sokoke%20Forest!5e0!3m2!1sen!2sus!4v1659632564997!5m2!1sen!2sus",
    language: "Swahili",
  },

  //Africa Mountains
  {
    name: "Atlas Mountains (Morocco, Algeria, Tunisia)",
    continent: "Africa",
    landscape: "Mountains",
    desc: "A series of ranges with diverse terrain, climates and wildlife, the Atlas <br> are dotted with Berber villages and riven with canyons and ravines.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/High_Atlas_Mountains_%282359585494%29.jpg/640px-High_Atlas_Mountains_%282359585494%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Imlil%2C_Atlas_Mountains.jpg/640px-Imlil%2C_Atlas_Mountains.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Atlas_Mountains_Morocco_-_panoramio_%281%29.jpg/640px-Atlas_Mountains_Morocco_-_panoramio_%281%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13782282.985540306!2d-9.280291810642577!3d32.504368554120134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb00d01d0c46293%3A0xcef8dcbb4c57c272!2sAtlas%20Mountains!5e0!3m2!1sen!2sus!4v1659632116544!5m2!1sen!2sus",
    language: "Arabic",
  },
  {
    name: "Mount Kilimanjaro, Tanzania",
    continent: "Africa",
    landscape: "Mountains",
    desc: "On ascent, the mountain's foothills morph into lush forests, serving as home to elephants, <br> leopard and buffalo. Further up are moorlands covered in giant heather, then alpine desert land.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/640px-Mt._Kilimanjaro_12.2006.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Uitzicht_vanaf_top_kilimanjaro.jpg/640px-Uitzicht_vanaf_top_kilimanjaro.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Mount_Kilimanjaro_2007.jpg/640px-Mount_Kilimanjaro_2007.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.40803767013!2d37.346872515689626!3d-3.0674031371981236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1839fc5a396ea805%3A0x8e741c478eea6c01!2sMt%20Kilimanjaro!5e0!3m2!1sen!2sus!4v1659632420685!5m2!1sen!2sus",
    language: "Swahili, English",
  },
  {
    name: "Maloti Mountains, Lesotho",
    continent: "Africa",
    landscape: "Mountains",
    desc: "The Maloti Mountains are a mountain range of the highlands of the Kingdom of Lesotho.<br> They extend for about 100 km into the South African Free State.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Maluti_snow.jpg/640px-Maluti_snow.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Snow_Capped_Maloti_Mountains_-_panoramio.jpg/640px-Snow_Capped_Maloti_Mountains_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/South_Africa_-_Drakensberg_%2816261357780%29.jpg/640px-South_Africa_-_Drakensberg_%2816261357780%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27891.351333443574!2d28.34846955290272!3d-29.093311407184785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8d20d7ec640ba7%3A0x938756259a14234f!2sMaluti%20Mountains!5e0!3m2!1sen!2sus!4v1659632789680!5m2!1sen!2sus",
    language: "Southern Sotho, English",
  },

  //Africa Beaches

  {
    name: "Unguja, Tanzania",
    continent: "Africa",
    landscape: "Beaches",
    desc: "An island with picturesque beaches and cultural landmarks.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Unguja_island_-_Tanzania-4.jpg/640px-Unguja_island_-_Tanzania-4.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Unguja_island_from_Air.jpg/640px-Unguja_island_from_Air.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Makunduchi%2C_Zanzibar.jpg/640px-Makunduchi%2C_Zanzibar.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507805.8943360315!2d39.10081336182399!3d-6.09921568182766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d29602a2909e5%3A0xa035af4aad9b7d5f!2sUnguja!5e0!3m2!1sen!2sus!4v1659632786530!5m2!1sen!2sus",
    language: "Swahili",
  },
  {
    name: "Cape Town, South Africa",
    continent: "Africa",
    landscape: "Beaches",
    desc: "From flat-topped Table Mountain down to the blue waters of Table Bay,<br> Cape Town is simply stunning, but the city doesn't thrive by its looks alone. <br> Proudly multicultural, its flourishing arts, dining, and nightlife scenes are proof of this modern metropolis' <br> creativity and innovative spirit.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Rhodes_Memorial%2C_Cape_Town_%28South_Africa%29.jpg/640px-Rhodes_Memorial%2C_Cape_Town_%28South_Africa%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Penguins_in_Cape_Town%2C_South_Africa_%283154187178%29.jpg/640px-Penguins_in_Cape_Town%2C_South_Africa_%283154187178%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/The_Bible_Institute_of_South_Africa_in_Kalk_Bay_Cape_Town.jpg/640px-The_Bible_Institute_of_South_Africa_in_Kalk_Bay_Cape_Town.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847638.5859651256!2d18.095603798537713!3d-33.91312881161041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1659633058844!5m2!1sen!2sus",
    language: "Afrikaans",
  },
  {
    name: "Hurghada, Egypt",
    continent: "Africa",
    landscape: "Beaches",
    desc: "Stunning coral reefs and turquoise waters perfect for windsurfing have made Hurghada, on Egypt's <br> Red Sea Coast, a busy resort town. ",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hurghada%2C_Egypt%2C_%E5%9F%83%E5%8F%8A_-_Explore.jpg/640px-Hurghada%2C_Egypt%2C_%E5%9F%83%E5%8F%8A_-_Explore.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hurghada%2C_Qesm_Hurghada%2C_Red_Sea_Governorate%2C_Egypt_-_panoramio_-_Figure_%282%29.jpg/640px-Hurghada%2C_Qesm_Hurghada%2C_Red_Sea_Governorate%2C_Egypt_-_panoramio_-_Figure_%282%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Hurghada%2C_Qesm_Hurghada%2C_Red_Sea_Governorate%2C_Egypt_-_panoramio_%2874%29.jpg/640px-Hurghada%2C_Qesm_Hurghada%2C_Red_Sea_Governorate%2C_Egypt_-_panoramio_%2874%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454252.5813864627!2d33.78171045!3d27.19250455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b2cd3dbbb3%3A0x2db807f98bd3c360!2sHurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1659633303478!5m2!1sen!2sus",
    language: "Modern Standard Arabic",
  },
  //Africa Island
  {
    name: "Nosy Be, Madagascar",
    continent: "Africa",
    landscape: "Island",
    desc: "A large island off the northwest coast of Madagascar. Here you’ll find volcanic lakes, <br>lazy lemurs, rum distilleries, Ylang Ylang plantations and intricate coral reefs that are practically begging <br>to be explored.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Nosy_Iranja_097.jpg/640px-Nosy_Iranja_097.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Andilana_beach_Nosy_Be_2013-10-24_20-29.jpg/640px-Andilana_beach_Nosy_Be_2013-10-24_20-29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/View_of_Nosy_Komba%2C_Madagascar.jpg/640px-View_of_Nosy_Komba%2C_Madagascar.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248487.88543159334!2d48.12587666125112!3d-13.311461446288412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213b8328fe7bf11%3A0x1a642673cfda870!2sNosy%20Be!5e0!3m2!1sen!2sus!4v1659633380515!5m2!1sen!2sus",
    language: "French, Malagasy",
  },
  {
    name: "Moroni, Comoros",
    continent: "Africa",
    landscape: "Island",
    desc: "Moroni is the capital city of the volcanic Comoros archipelago off Africa's east <br>coast. It is on the island of Grande Comore (Ngazidja), which is ringed by beaches and old lava <br>from the active Mount Karthala Volcano.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Moroni_City_Comoros.JPG/640px-Moroni_City_Comoros.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Moroni_Mosque_Photo_by_Sascha_Grabow.jpg/640px-Moroni_Mosque_Photo_by_Sascha_Grabow.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Comoros_beach.jpg/640px-Comoros_beach.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62510.54284442601!2d43.22361233697094!3d-11.700862625533311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1898feade3e34bb1%3A0x3943d96d792e2d3e!2sMoroni%2C%20Comoros!5e0!3m2!1sen!2sus!4v1659633847473!5m2!1sen!2sus",
    language: "Comorian, Arabic, French",
  },
  {
    name: "Zanzibar, Tanzania",
    continent: "Africa",
    landscape: "Island",
    desc: "The Zanzibar Archipelago, located in the Indian Ocean 15 miles off the <br> coast of Tanzania, is a breathtaking spot to escape from the world",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Zanzibar_Island_%288022774890%29.jpg/640px-Zanzibar_Island_%288022774890%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Zanzibar%2C_Tanzania_-_panoramio_%282%29.jpg/640px-Zanzibar%2C_Tanzania_-_panoramio_%282%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Unnamed_Road%2C_Zanzibar_Town%2C_Tanzania_-_panoramio_%284%29.jpg/640px-Unnamed_Road%2C_Zanzibar_Town%2C_Tanzania_-_panoramio_%284%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126935.95372658856!2d39.16063130816039!3d-6.164419052152117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd0ba23b63ecb%3A0x52c848ab6efc138e!2sZanzibar%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1659634181831!5m2!1sen!2sus",
    language: "Swahili, English",
  },
  //Africa Jungle
  {
    name: "Mau Forest, Kenya",
    continent: "Africa",
    landscape: "Jungle",
    desc: "A forest with natural springs and canopied trees.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mau_Forest_natural_spring.jpg/640px-Mau_Forest_natural_spring.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Rainbow_above_mau_forest_tea_boundary.jpg/640px-Rainbow_above_mau_forest_tea_boundary.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Picture_of_the_mau_forest_from_inside.jpg/640px-Picture_of_the_mau_forest_from_inside.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042664.773310907!2d33.9402866!3d-0.6267232000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829651ee66715a9%3A0xa6477a27a6a1669c!2sMau%20Forest!5e0!3m2!1sen!2sus!4v1659633504402!5m2!1sen!2sus",
    language: "Swahili",
  },
  {
    name: "Congo Rainforest",
    continent: "Africa",
    landscape: "Jungle",
    desc: "A renowned rainforest at the basin of the Congo River.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Observation_Spatiale_des_For%C3%AAts_Tropicales_Bassin_du_Congo_-_Exemple_de_for%C3%AAt_%28RCA%29.jpg/640px-Observation_Spatiale_des_For%C3%AAts_Tropicales_Bassin_du_Congo_-_Exemple_de_for%C3%AAt_%28RCA%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Loxodontacyclotis.jpg/640px-Loxodontacyclotis.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Congo_banner_Congo_River.JPG/640px-Congo_banner_Congo_River.JPG"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.557864898479!2d12.546254214544023!3d-5.917528959873287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c420c3fff48e7%3A0x2a6b43a17a136a44!2sCongo%20Rainforest!5e0!3m2!1sen!2sus!4v1659633671003!5m2!1sen!2sus",
    language: "French",
  }, {
    name: "Bwindi Impenetrable Forest, Uganda",
    continent: "Africa",
    landscape: "Jungle",
    desc: "A biologically diverse forest home to more than half of the <br> world's mountain gorilla population.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mountain_gorilla%2C_2-year-old%2C_Mubare_Group%2C_Buhoma%2C_Bwindi_Impenetrable_Forest%2C_Uganda.jpg/640px-Mountain_gorilla%2C_2-year-old%2C_Mubare_Group%2C_Buhoma%2C_Bwindi_Impenetrable_Forest%2C_Uganda.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bwindi_Impenetrable_National_Park_10.jpg/640px-Bwindi_Impenetrable_National_Park_10.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bwindi_Impenetrable_National_Park-112393.jpg/640px-Bwindi_Impenetrable_National_Park-112393.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31913.16541289994!2d29.602590951638586!3d-1.0521065423109166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19de9d58dac3d859%3A0x972f044d905ac1fa!2sBwindi%20Impenetrable%20Forest!5e0!3m2!1sen!2sus!4v1659634125655!5m2!1sen!2sus",
    language: "Swahili",
  },
  //Oceania Forest
  {
    name: "Whakarewarewa Forest, New Zealand",
    continent: "Oceania",
    landscape: "Forest",
    desc: "Redwoods Forest is a forest of naturalised coastal redwood on the outskirts of <br> Rotorua, New Zealand, adjacent to the Whakarewarewa thermal area.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/00_1540_Whakarewarewa_geothermal_area_%28Whaka%29%2C_New_Zeeland.jpg/640px-00_1540_Whakarewarewa_geothermal_area_%28Whaka%29%2C_New_Zeeland.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Californian_redwood_redwood_grove_rotorua_New_Zealand.jpg/640px-Californian_redwood_redwood_grove_rotorua_New_Zealand.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Californian_redwood_redwood_grove_rotorua_New_Zealand.jpg/640px-Californian_redwood_redwood_grove_rotorua_New_Zealand.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10175.479489446967!2d176.26889132956822!3d-38.156394976322446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e9e97daf65ebd%3A0xf00ef62249d40a0!2sRedwoods%20%E2%80%93%20Whakarewarewa%20Forest!5e0!3m2!1sen!2sus!4v1659634811864!5m2!1sen!2sus",
    language: "Maori",
  },
   {
    name: "Waipoua Kauri Forest, New Zealand",
    continent: "Oceania",
    landscape: "Forest",
    desc: "A majestic forest perfect for exploring.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Waipoua_Forest%2C_Kauri_walks_-_Tane_Mahuta_%283%29.jpg/640px-Waipoua_Forest%2C_Kauri_walks_-_Tane_Mahuta_%283%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Waipoua_Forest%2C_detail-4.jpg/640px-Waipoua_Forest%2C_detail-4.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flickr_-_brewbooks_-_Waipoua_Forest_%2800%29.jpg/640px-Flickr_-_brewbooks_-_Waipoua_Forest_%2800%29.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103774.31882651898!2d173.42983783686898!3d-35.62902164813239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0bfdc295a85653%3A0x500ef6143a2b9f0!2sWaipoua%20Kauri%20Forest%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1659637440886!5m2!1sen!2sus",
    language: "Maori",
  },
   {
    name: "Whirinaki Forest Park, New Zealand",
    continent: "Oceania",
    landscape: "Forest",
    desc: "Whirinaki Forest Park is perfect for hikers and nature-enthusiasts.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Fern_groundcover_in_Whirinaki_Forest.jpg/640px-Fern_groundcover_in_Whirinaki_Forest.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Tree_fern_understorey_in_Whirinaki_Forest.jpg/640px-Tree_fern_understorey_in_Whirinaki_Forest.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Arohaki_Lagoon_with_kahikatea_background_1.jpg/640px-Arohaki_Lagoon_with_kahikatea_background_1.jpg"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2552038196463!2d176.71932881528107!3d-38.71194939374017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6931b28d8ce62b%3A0x421db22e66ca8cc4!2sWhirinaki%20Forest%20Park!5e0!3m2!1sen!2sus!4v1659637658848!5m2!1sen!2sus",
    language: "Maori",
  },
  //Oceania Mountains
  {
    name: "Mount Cook, New Zealand",
    continent: "Oceania",
    landscape: "Mountains",
    desc: "It sits in the Southern Alps, the mountain range that runs the length of the South Island.<br> A popular tourist destination, it is also a favourite challenge for mountain climbers.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/00_1287_Mount_Cook_-_New_Zealand_Alps.jpg/640px-00_1287_Mount_Cook_-_New_Zealand_Alps.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Aoraki_Mount_Cook.JPG/640px-Aoraki_Mount_Cook.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Aoraki_Mount_Cook_%2832968667%29.jpeg/640px-Aoraki_Mount_Cook_%2832968667%29.jpeg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47342476.721708!2d102.64178829999997!3d-43.59497489999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2bcbf4957533cb%3A0x2459ca45fd83e865!2sAoraki%20%2F%20Mount%20Cook!5e0!3m2!1sen!2sus!4v1659635294499!5m2!1sen!2sus",
    language: "English",
  },
  {
    name: "Mount Wilhelm, Papua New Guinea",
    continent: "Oceania",
    landscape: "Mountains",
    desc: "This rugged mountain, the highest in Papua New Guinea, <br> has an excellent trail that takes hikers to the top, past lakes, waterfalls, and moss forests",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mount_Wilhelm.jpg/640px-Mount_Wilhelm.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mount_Giluwe.jpg/640px-Mount_Giluwe.jpg", "https://www.alpineascents.com/wp-content/uploads/2019/05/piunde.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.136010712786!2d145.0209464160434!3d-5.779968084270068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6858f66ea8524185%3A0x6667cdf0e678bfdd!2sMt%20Wilhelm!5e0!3m2!1sen!2sus!4v1659637815306!5m2!1sen!2sus",
    language: "Tok Pisin, English",
  },
  {
    name: "Mount Tabwemasana, Vanuatu",
    continent: "Oceania",
    landscape: "Mountains",
    desc: "At over 1700 meters, this is the country's highest mountain.",
    imgs: ["https://www.seal-superyachts.com/wp-content/uploads/2017/06/V10.jpg", "https://www.seal-superyachts.com/wp-content/uploads/2017/06/v6.jpg", "https://i.redd.it/ow8rp6lxn6q61.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.251942752818!2d166.75295056422493!3d-15.362835766579344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ef261ea5da859d7%3A0x6016e6e5ee1b2b36!2sMount%20Tabwemasana!5e0!3m2!1sen!2sus!4v1659638112957!5m2!1sen!2sus",
    language: "French, English",
  },
    //Oceania Beaches
{
    name: "Whitehaven Beach, Australia",
    continent: "Oceania",
    landscape: "Beaches",
    desc: "Uninhabited Whitsunday Island is home to this beautiful beach, one of the world's most spectacular.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Whitehaven_Beach_-_Northern_End.jpg/640px-Whitehaven_Beach_-_Northern_End.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Whitehaven_Bay_and_Beach.jpg/640px-Whitehaven_Bay_and_Beach.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/ZigZag_Whitsundays_Day_Tour_To_Whitehaven_Beach.jpg/640px-ZigZag_Whitsundays_Day_Tour_To_Whitehaven_Beach.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29941.183248220168!2d149.03992745!3d-20.273432099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd8543936f3a3a1%3A0x808bfe71f86a4e1e!2sWhitehaven%20Beach!5e0!3m2!1sen!2sus!4v1659636473222!5m2!1sen!2sus",
    language: "English",
  },{
    name: "Bronte Beach, Australia",
    continent: "Oceania",
    landscape: "Beaches",
    desc: "Bronte Beach, sandwiched between the bigger Bondi and Coogee beaches, is a cozier stretch of <br> sand and surf perfect for families.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/This_is_a_picture_of_a_sunrise_at_Bronte_Beach_in_Sydney.png/640px-This_is_a_picture_of_a_sunrise_at_Bronte_Beach_in_Sydney.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sydney_-_Bronte_Beach_%284175687533%29.jpg/640px-Sydney_-_Bronte_Beach_%284175687533%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sydney_-_Bronte_Beach_2_%284176445690%29.jpg/640px-Sydney_-_Bronte_Beach_2_%284176445690%29.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.4572411982103!2d151.26852360000004!3d-33.903629699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ad88079530e3%3A0xbac8c39d0d92a897!2sBronte%20Beach!5e0!3m2!1sen!2sus!4v1659637008151!5m2!1sen!2sus",
    language: "English",
  },
   {
    name: "Cathedral Cove, New Zealand",
    continent: "Oceania",
    landscape: "Beaches",
    desc: "Cathedral Cove is a relaxing location for travelers who enjoy the beach.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cathedral_Cove_06.jpg/640px-Cathedral_Cove_06.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Cathedral_Cove_09.jpg/640px-Cathedral_Cove_09.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cathedral_Cove_pano.jpg/640px-Cathedral_Cove_pano.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5747749285842!2d175.79062929999998!3d-36.828708299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d72430319d01ff1%3A0x199ada76de6fb8d1!2sCathedral%20Cove!5e0!3m2!1sen!2sus!4v1659637176089!5m2!1sen!2sus",
    language: "Maori",
  },
    //Oceania Island
{
    name: "Bora Bora, French Polynesia",
    continent: "Oceania",
    landscape: "Island",
    desc: "Turquoise lagoons, soft white sands, and deep tangerine sunsets <br> set the scene for romance on the island so nice they named it twice.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%C3%8Ele_Bora_Bora_%C3%A9t%C3%A9_2006.jpg/640px-%C3%8Ele_Bora_Bora_%C3%A9t%C3%A9_2006.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bora_Bora_Bikers_-_panoramio.jpg/640px-Bora_Bora_Bikers_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bora-Bora_French_Polynesia_-_panoramio_%287%29.jpg/640px-Bora-Bora_French_Polynesia_-_panoramio_%287%29.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61206.894082002545!2d-151.80628971847824!3d-16.50433082305027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd188a4a98ab%3A0x160a089e92d5ce61!2sBora%20Bora!5e0!3m2!1sen!2sus!4v1659636546404!5m2!1sen!2sus",
    language: "French",
  },{
    name: "Tahiti, French Polynesia",
    continent: "Oceania",
    landscape: "Island",
    desc: "The unique and ubiquitous island of Tahiti is world-renowned for its Polynesian <br>charm, colorful culture and romantic ambiance.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Vue_de_Tahiti_depuis_Moorea.jpg/640px-Vue_de_Tahiti_depuis_Moorea.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Destinos_turisticos_de_Tahit%C3%AD.jpg/640px-Destinos_turisticos_de_Tahit%C3%AD.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/FP-tahiti-vaipahi-k%C3%BCst.jpg/640px-FP-tahiti-vaipahi-k%C3%BCst.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486557.9130439355!2d-149.65300145026038!3d-17.686417037336135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769bb353982d1e65%3A0x413cf43a8988a3fa!2sTahiti!5e0!3m2!1sen!2sus!4v1659637881799!5m2!1sen!2sus" ,
    language: "French",
  },
   {
    name: "Viti Levu, Fiji",
    continent: "Oceania",
    landscape: "Island",
    desc: "Fiji's largest island, home to capital Suva, offers some wonderful beaches. <br>Palm-fringed Natadola Beach, reputed to be one of the best beaches in the world,<br> is a picture perfect crescent of powdery sand leading to dramatic cliffs.<br> Coconuts hang overhead and the striking azure lagoon entices swimmers.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Viti_Levu_beach_7.jpg/640px-Viti_Levu_beach_7.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2010-11-03_Viti_Levu_on_approach_to_Nadi_Airport_-_15.jpg/640px-2010-11-03_Viti_Levu_on_approach_to_Nadi_Airport_-_15.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cliff_on_Mount_Batilamu%2C_Koroyanitu_National_Heritage_Park%2C_Viti_Levu%2C_Fiji_-_August_2016.jpg/640px-Cliff_on_Mount_Batilamu%2C_Koroyanitu_National_Heritage_Park%2C_Viti_Levu%2C_Fiji_-_August_2016.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36060288.7562088!2d131.82412565268422!3d-21.914008640512293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e1990fdd063a37b%3A0xe8c8ddf1c3251729!2sViti%20Levu!5e0!3m2!1sen!2sus!4v1659638059436!5m2!1sen!2sus" ,
    language: "English",
  },
    //Oceania Jungle
  {
    name: "Daintree Forest, Australia",
    continent: "Oceania",
    landscape: "Jungle",
    desc: "Daintree is a part of the largest continuous area of tropical rainforest on the Australian continent.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Daintree_QLD_4873%2C_Australia_-_panoramio_%282%29.jpg/640px-Daintree_QLD_4873%2C_Australia_-_panoramio_%282%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Daintree_forrest.jpg/640px-Daintree_forrest.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Daintree_29th_Feb.jpg/640px-Daintree_29th_Feb.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.2352174340658!2d145.41644376154696!3d-16.170568598480948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x699d573ed18a04cb%3A0x147c855099501a8f!2sDaintree%20Rainforest!5e0!3m2!1sen!2sus!4v1659638508695!5m2!1sen!2sus",
    language: "English",
  },
   {
    name: "Dorrigo National Park (Gondwana Rainforest), Australia",
    continent: "Oceania",
    landscape: "Jungle",
    desc: "This area is made up of eight regions from Newcastle to Brisbane and was formerly known <br> as the Central Eastern Rainforest Reserves of Australia.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Never_Never_River%2C_Dorrigo_National_Park%2C_Gondwana_Rainforests_of_Australia.jpg/640px-Never_Never_River%2C_Dorrigo_National_Park%2C_Gondwana_Rainforests_of_Australia.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gondwana_rainforest_at_Dorrigo_National_Park_%286611254443%29.jpg/640px-Gondwana_rainforest_at_Dorrigo_National_Park_%286611254443%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Dorrigo_National_Park_Cedar_Falls.jpg/640px-Dorrigo_National_Park_Cedar_Falls.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54485437.61213172!2d82.92106140000001!3d-33.53967629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9ea0ae4f70f409%3A0xf0609b573fef9d0!2sDorrigo%20National%20Park!5e0!3m2!1sen!2sus!4v1659638468080!5m2!1sen!2sus",
    language: "English",
  },
  {
    name: "Hanmer Springs, New Zealand",
    continent: "Oceania",
    landscape: "Jungle",
    desc: "Both a weekend destination for locals and a magnet for tourists craving other-worldly relaxation, Hanmer Springs is the perfect spot for pampering.",
    imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hanmer_springs_-_2.jpeg/640px-Hanmer_springs_-_2.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Hanmer_Springs_Conical_Hill_Walkway_-_panoramio.jpg/640px-Hanmer_Springs_Conical_Hill_Walkway_-_panoramio.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Fog_Shrouded_Valley_North_Of_Hanmer_Springs.jpg/640px-Fog_Shrouded_Valley_North_Of_Hanmer_Springs.jpg"],
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188206.5872411002!2d172.59652363741145!3d-42.518589529144094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3063796f545947%3A0x500ef86847973f0!2sHanmer%20Springs%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1659638995365!5m2!1sen!2sus",
    language: "English",
  },
  ];
console.log(destinations);


//generateButton code
generateButton.addEventListener("click", () => {
  currentIndex = 0;
  let filteredArray = [];
  //filters through all destinations by continent and landscape
  destinations.forEach((destination) => {
    if (destination.landscape == landscapeDropdown.options[landscapeDropdown.selectedIndex].text && destination.continent == continentDropdown.options[continentDropdown.selectedIndex].text) {
      filteredArray.push(destination);
    } else if (landscapeDropdown.options[landscapeDropdown.selectedIndex].text == "Select a landscape!" && destination.continent == continentDropdown.options[continentDropdown.selectedIndex].text) {
      filteredArray.push(destination);
    } else if (destination.landscape == landscapeDropdown.options[landscapeDropdown.selectedIndex].text && continentDropdown.options[continentDropdown.selectedIndex].text == "Select a continent!") {
      filteredArray.push(destination);
    } else if (landscapeDropdown.options[landscapeDropdown.selectedIndex].text == "Select a landscape!" && continentDropdown.options[continentDropdown.selectedIndex].text == "Select a continent!") {
      filteredArray.push(destination);
    }
  });




  //selects a random destination
  let randomDestination = filteredArray[Math.floor(Math.random() * filteredArray.length)];

  descriptionTitle.innerHTML = "Description";
  nameText.innerHTML = randomDestination.name;
  image.src = randomDestination.imgs[0];
  map.src = randomDestination.map;
  description.innerHTML = randomDestination.desc;
  language.innerHTML = "Primary Language: " + randomDestination.language;



});
//Hover over images to change them
image.addEventListener("mouseover", () => {
  let currentObj;
  destinations.forEach((destination) => {
    for (let i = 0; i < destination.imgs.length; i++) {
      if (destination.imgs[i] == image.src) {
        currentObj = destination;
        break;
      }
    }
  });

  if (currentIndex == currentObj.imgs.length - 1) {
    currentIndex = 0;
  } else if (currentIndex >= 0 && currentIndex < currentObj.imgs.length - 1) {
    currentIndex++;
  }
  image.src = currentObj.imgs[currentIndex];

});



