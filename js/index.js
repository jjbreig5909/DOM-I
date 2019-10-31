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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelector('nav').children;
Array.from(navLinks).forEach((navLink, i) => {
  navLink.textContent = siteContent.nav[`nav-item-${i + 1}`];
  navLink.style.color = 'green';
});

//Using the append child method
const newLink1 = document.createElement('a');
newLink1.innerHTML = "Learn";
newLink1.style.color='green';
newLink1.setAttribute("href", "#");

//Using the prepend method
const newLink2 = document.createElement("a");
newLink2.innerHTML =  "Home";
newLink2.setAttribute("href", "#");
newLink2.style.color = 'green';

const newNav=document.querySelector('nav');
newNav.prepend(newLink2);
newNav.appendChild(newLink1);




const h1Text = document.querySelector('h1');
h1Text.append(siteContent.cta["h1"]);
const ctaButton = document.querySelector('button');
ctaButton.append(siteContent.cta['button']);
ctaButton.addEventListener('click', (event)=>{h1Text.textContent = "But Jeff is awesomer";});

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

const siteTextContentHeaders = document.querySelectorAll('h4');
siteTextContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
siteTextContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
siteTextContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
siteTextContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
siteTextContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
siteTextContentHeaders[5].textContent = siteContent.contact["contact-h4"];

const siteTextContent = document.querySelectorAll('p');
siteTextContent[0].textContent = siteContent["main-content"]["features-content"];
siteTextContent[1].textContent = siteContent["main-content"]["about-content"];
siteTextContent[2].textContent = siteContent["main-content"]["services-content"];
siteTextContent[3].textContent = siteContent["main-content"]["product-content"];
siteTextContent[4].textContent = siteContent["main-content"]["vision-content"];
siteTextContent[5].textContent = siteContent.contact.address;
siteTextContent[6].textContent = siteContent.contact.phone;
siteTextContent[7].textContent = siteContent.contact.email;

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const footerText = document.querySelector('footer').children;
footerText[0].textContent = siteContent.footer.copyright;


