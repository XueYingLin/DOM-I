const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//use getElementById()
// let logo = document.getElementById("logo-img");
//use querySelector("#")
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// let a = document.getElementsByTagName("a");
let a = document.querySelector("a");

for (let i=0; i<a.length; i++) {
  a[i].innerHTML = siteContent['nav'][`nav-item-${i+1}`];
}

//use etElementsByTagName(), return arrayList like
// let h1 = document.getElementsByTagName("h1");
// h1[0].textContent = siteContent["cta"]["h1"]; 

//use querySelector, return a variable
let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"]; 

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute ('src', siteContent["cta"]["img-src"]);

let button = document.getElementsByTagName("button");
button[0].innerHTML = siteContent["cta"]["button"];

let text_context = document.getElementsByClassName("text-content");

text_context[0].children[0].textContent = siteContent["main-content"]["features-h4"];
text_context[0].children[1].textContent = siteContent["main-content"]["features-content"];

text_context[1].children[0].textContent = siteContent["main-content"]["about-h4"];
text_context[1].children[1].textContent = siteContent["main-content"]["about-content"]

text_context[2].children[0].textContent = siteContent["main-content"]["services-h4"];
text_context[2].children[1].textContent = siteContent["main-content"]["services-content"];

text_context[3].children[0].textContent = siteContent["main-content"]["product-h4"];
text_context[3].children[1].textContent = siteContent["main-content"]["product-content"];


text_context[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
text_context[4].children[1].textContent = siteContent["main-content"]["vision-content"];

let image = document.getElementById("middle-img");
image.setAttribute ('src', siteContent["main-content"]["middle-img-src"]);

let contact = document.getElementsByClassName("contact");
contact[0].children[0].textContent = siteContent["contact"]["contact-h4"];
contact[0].children[1].textContent = siteContent["contact"]["address"];
contact[0].children[2].textContent = siteContent["contact"]["phone"];
contact[0].children[3].textContent = siteContent["contact"]["email"];



let footer = document.querySelector("footer > p");
footer.textContent = siteContent["footer"]["copyright"];

















