let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "All",
      price: "30",
      image:
        "https://www.crestedschoolwear.co.uk/wp-content/uploads/2018/07/white-tshirt.jpg",
    },
    {
      productName: "Casual Blue Shirt",
      category: "Top-Wear",
      price: "40",
      image:
        "https://rlv.zcache.com/plain_bright_blue_fitted_crew_neck_t_shirt_for_men-r12248f6277e04b729bee4a3f2bbdbc80_k2grm_736.jpg",
    },
    {
      productName: "Classic Red Polo",
      category: "Top-Wear",
      price: "25",
      image:
        "https://martinvalen.com/13969-large_default/men-s-classic-slim-fit-longline-polo-t-shirt-red.jpg",
    },
    {
      productName: "Striped Button-Up",
      category: "Top-Wear",
      price: "35",
      image:
        "https://i.pinimg.com/736x/43/49/2e/43492e4e4501b8fbf227959bd1bf9e92.jpg",
    },
    {
      productName: "Denim Jeans",
      category: "Bottom-Wear",
      price: "50",
      image:
        "https://th.bing.com/th/id/OIP.jip6TVki-O8J3G7O33ImMAHaHa?rs=1&pid=ImgDetMain",
    },
    {
      productName: "Comfy Sweatpants",
      category: "Bottom-Wear",
      price: "35",
      image:
        "https://www.comfortnerd.com/wp-content/uploads/2019/02/championsweats2.jpg",
    },
    {
      productName: "Khaki Chinos",
      category: "Bottom-Wear",
      price: "30",
      image:
        "https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtpOjExNTI7czo2OiJoZWlnaHQiO2I6MDt9/images/catalog/Tailor-Store-Dayton-khaki-01-2.jpg",
    },
    {
      productName: "Leather Biker Jacket",
      category: "Jacket",
      price: "120",
      image:
        "https://th.bing.com/th/id/R.495ddc42fcecc29663f60292b669f7a1?rik=cl7lBHaNRd2RRA&riu=http%3a%2f%2fultimateleather.pk%2fwp-content%2fuploads%2f2021%2f02%2fMens-Black-Biker-Jacket.jpg&ehk=qI%2b80WoRyJNIQbSYrCzzXV49i22hhvAltt9r3Y09ABo%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      productName: "Lightweight Windbreaker",
      category: "Jacket",
      price: "60",
      image:
        "https://th.bing.com/th/id/OIP.kSujRYa1Hf_IXKnNXFdTjAAAAA?rs=1&pid=ImgDetMain",
    },
    {
      productName: "Quilted Puffer Coat",
      category: "Jacket",
      price: "80",
      image:
        "https://image.harrods.com/weekend-max-mara-quilted-puffer-coat_15837141_28953173_2048.jpg",
    },
    {
      productName: "Classic Analog Watch",
      category: "Watch",
      price: "80",
      image:
        "https://d3d71ba2asa5oz.cloudfront.net/12024510/images/casio-mq-24-7b-1.jpg",
    },
    {
      productName: "Sporty Digital Watch",
      category: "Watch",
      price: "45",
      image:
        "https://ae01.alicdn.com/kf/HTB1IcwGa.zrK1RjSspmq6AOdFXat/SBAO-Men-Watches-LED-Waterproof-Sports-Shock-Digital-watch-electronic-male-digital-wrist-watch-sports-fitness.jpg",
    },
    {
      productName: "Luxury Gold Watch",
      category: "Watch",
      price: "150",
      image:
        "https://ae01.alicdn.com/kf/HTB13idOaifrK1RjSspbq6A4pFXaz/MISSFOX-Women-Watches-Luxury-Watch-Women-Fashion-2019-Relogio-Feminino-Chronograph-Roman-Gold-Ladies-Watches-Quartz.jpg",
    },
    {
      productName: "Designer Cotton Saree",
      category: "Top-Wear",
      price: "50",
      image:
        "https://sellon.kraftly.com/web/tr:f-auto,pr-true/shop_22540/mega-fashion-cotton-silk-blue-1466174372zod-main.jpg",
    },
    {
      productName: "Ladies Kurtha Black",
      category: "Top-Wear",
      price: "60",
      image:
        "https://s4sassy.com/ibaweb/pub/media/catalog/product/_/9/_939f41-904689-min-ik-43d_380_1.jpg",
    },
    {
      productName: "Indian Dhoti",
      category: "Bottom-Wear",
      price: "25",
      image:
        "https://www.utsavpedia.com/wp-content/uploads/2013/07/dupion-silk-dhoti-in-light-beige-720x1042.jpg",
    },
    {
      productName: "Warm Jacket",
      category: "Jacket",
      price: "90",
      image:
        "https://fxposed.co.uk/Images/No%20Watermark/Jackets/CJ-T807A/CJ-T807A-KHAKI/IMG_1471.JPG",
    },
    {
      productName: "Digital Sport Watch",
      category: "Watch",
      price: "55",
      image:
        "https://th.bing.com/th/id/OIP.uhJ16tWp_UWXQOFlZgifeQHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
    },
    {
      productName: "Stylish Red Shirt",
      category: "Top-Wear",
      price: "45",
      image:
        "https://i.pinimg.com/originals/30/c4/4b/30c44b003cf32e4e8a77ec9d93d918a8.jpg",
    },
    {
      productName: "Blue Denim",
      category: "Bottom-Wear",
      price: "40",
      image:
        "https://www.withlifeclothing.com/uploads/1/9/2/4/19245103/816339_orig.jpg",
    },
    {
      productName: "Casual Jacket",
      category: "Jacket",
      price: "70",
      image:
        "https://www.danezon.com/wp-content/uploads/2019/01/Dark-Brown-Mens-Casual-Leather-Jacket-768x960.jpg",
    },
    {
      productName: "Elegant Watch",
      category: "Watch",
      price: "120",
      image:
        "https://ae01.alicdn.com/kf/HTB1Sh_TdFkoBKNjSZFEq6zrEVXaB/REBIRTH-Brand-Luxury-Quartz-Watch-Simple-Fashion-Diamond-Elegant-Ladies-Wristwatches-for-Women-Watches-reloj-mujer.jpg",
    },
    {
      productName: "White Polo",
      category: "Top-Wear",
      price: "30",
      image:
        "https://th.bing.com/th/id/OIP.w-0weNYlVTQNcqEVBkHHWwHaJT?rs=1&pid=ImgDetMain",
    },
    {
      productName: "Summer Shorts",
      category: "Bottom-Wear",
      price: "20",
      image:
        "https://image1.superdry.com/static/images/optimised/upload9223368955666217677.jpg",
    },
    {
      productName: "Fashionable Jacket",
      category: "Jacket",
      price: "80",
      image:
        "https://i.etsystatic.com/27824899/r/il/a10fc3/2977280961/il_570xN.2977280961_lh8r.jpg",
    },
    {
      productName: "Classic Black Watch",
      category: "Watch",
      price: "100",
      image: "https://www.dmarge.com/wp-content/uploads/2016/06/tudor.jpg",
    },
    {
      productName: "Trendy Shirt",
      category: "Top-Wear",
      price: "35",
      image:
        "https://ae01.alicdn.com/kf/HTB1epCpb7fb_uJkHFCcq6xagFXaX/Top-Fashion-Trendy-Luxury-Mens-Silk-Shirts-Formal-Turn-Down-Collar-Black-Blue-Velvet-Shirt.jpg",
    },
    {
      productName: "Cargo Pants",
      category: "Bottom-Wear",
      price: "55",
      image:
        "https://i5.walmartimages.com/asr/d4b50bc8-1566-44b2-aa09-4ca08c80c8f8.1ad07e3c63a8d8945c837f072e79f3e2.jpeg",
    },
    {
      productName: "Winter Coat",
      category: "Jacket",
      price: "110",
      image:
        "https://th.bing.com/th/id/OIP.6gl3u984DAJWM8-YQ9AwggHaHa?rs=1&pid=ImgDetMain",
    },
    {
      productName: "Modern Smartwatch",
      category: "Watch",
      price: "150",
      image:
        "https://www.electronicabf.com/23120-thickbox_default/34157065.jpg",
    },
  ],
};

for (let i of products.data) {
  //create a card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //img div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  //image tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  //price

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//Parameter passed from button (parameter same as category)
function filterProduct(value) {
  //button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innertext
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((elements) => {
    //display all cards on 'all' button click
    if (value == "all") {
      elements.classList.remove("hide");
    } else {
      //check if element  contains category class
      if (elements.classList.contains(value)) {
        //display elements based on category
        elements.classList.remove("hide");
      } else {
        //hide othere elements
        elements.classList.add("hide");
      }
    }
  });
}

//search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check  if text  includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//initially display all products
window.onload = () => {
  filterProduct("all");
};
