 // LOGIN FORM SUBMISSION

$(document).ready(function () {
  $("#Continue").click(function () {
    let inputEmail = $("#email").val();
    let inputPassword = $("#password").val();
    let storedEmail = localStorage.getItem("Email");
    let storedPassword = localStorage.getItem("Password");

    if (inputEmail === "" || inputPassword === "") {
      $(".login-error").text("Plese fill out all field");
    } else if (inputEmail === storedEmail && inputPassword === storedPassword) {
      $("#new").hide();
      $(".loading").show();
      $(".load").show();

      setTimeout(() => {
        window.location.href = "/index.html";
        alert("WELCOME TO YOUR PROFILE!")

      }, 3000);
    } else {
      $(".login-error").text("Invalid email or password. Please try again.");
    }
  });
});

// CREATE NEW FORM SUBMISSION

$(document).ready(function () {
  $("#create").click(function (event) {
    event.preventDefault();

    //FLAG 
    let isvalid = true;

   

    // NAME INPUT FIELD
    let name = $("#name").val();
  
     
    if (name === "") {
      $("#name-error").text("plese fill input field");
      isvalid = false;
    } else if (name.length < 3) {
      $("#name-error").text("plese enter Atleast 3 character");
      isvalid = false;
    }
// EMAIL INPUT FIELD
    let email = $("#email").val();
    let confirmEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      $("#email-error").text("plese fill input field");
      isvalid = false;
    } else if (!confirmEmail.test(email)) {
      $("#email-error").text("Your Email is Incorrect");
      isvalid = false;
    }

// PASSWORD INPUT FIELD

    let password = $("#password").val();
    if (password === "") {
      $("#password-error").text("plese fill input field");
      isvalid = false;
    } else if (password.length < 5) {
      $("#password-error").text("plese enter atleast 5 Character");
      isvalid = false;
    }
// NUMBER INPUT FIELD
    let number = $("#number").val();
    if (number === "") {
      $("#number-error").text("Plese fill input field");
      isvalid = false;
    }
   // FLAG TRUE
    if (isvalid) {
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", password);
      localStorage.setItem("Number", number);
      //loader
      $(".loading").show();
      //loading text
      $(".load").show();

      setTimeout(() => {
       
        window.location.href = "/index.html";
        alert("WELCOME TO YOUR PROFILE!")
      }, 2000);
    }
  });
});


//QUIRY STRING CONCEPT

$(document).ready(function () {
  $(".view-details").click(function () {
    const productId = $(this).data("id");
    window.location.href = "/pages/product.html?productId=" + productId;
  });
});


// PRODUCT MAIN OBJECT
$(document).ready(function () {
  // Get the product ID from the URL
  const url = new URLSearchParams(window.location.search);

  const productId = url.get("productId");

  const product1 = {
    1: {
      title: "Hair Coloring Shampoo-Black Soft",
      price: "Rs:2,950",
      imageUrl: "../Images/black shampoo.webp",
    },
    2: {
      title: "Professional Keratin Shampoo",
      price: "Rs:4,000",
      imageUrl: "/Images/keratin.webp",
    },
    3: {
      title: "Hair Nourishing Mask",
      price: "Rs:3,000",
      imageUrl: "/Images/hair cream.webp",
    },
    4: {
      title: "Blue Shampoo",
      price: "Rs:1,550",
      imageUrl: "/Images/blue shampoo.webp ",
    },
    5: {
      title: "Scalp Comfort Shampoo",
      price: "Rs:2,000",
      imageUrl: "/Images/scapl shampoo.webp",
    },
    6: {
      title: "Purple Shampoo",
      price: "Rs:1,600",
      imageUrl: "/Images/purple.webp",
    },
    7: {
      title: "Hair Growth Shampoo",
      price: "Rs:1,500",
      imageUrl: "/Images/hair growth shampoo.webp",
    },
    8: {
      title: "Hyaluronic Acid Shampoo",
      price: "Rs:2,000",
      imageUrl: "/Images/hylru acid.webp",
    },
    9: {
      title: "Hair Repairing Shampoo",
      price: "Rs:2,700",
      imageUrl: "/Images/shampoo.webp",
    },
    10: {
      title: "Hydrating Aloe Vera Face Wash",
      price: "Rs:1,120 ",
      imageUrl: "/Images/8_bcaba898-1de3-4749-9e6a-1fcd4e52d8c7.webp",
    },
    11: {
      title: "Saffron Face Wash",
      price: "Rs:1,120",
      imageUrl: "/Images/12_4e33da85-6c94-412d-81e1-e85079a20a5e.webp",
    },

    12: {
      title: "Vitamin C Face Wash",
      price: "Rs:1,120 ",
      imageUrl: "/Images/10_f41a633c-0a13-4050-883c-50c175e93973.webp",
    },
    13: {
      title: "Tea Tree & Neem Face Wash",
      price: "Rs:1,120 ",
      imageUrl: "/Images/11_737d4ff0-bd05-4e63-8400-c9ba76629e22.webp",
    },
    14: {
      title: " Cleanser & Make-up Remover",
      price: "Rs:1,120 ",
      imageUrl: "/Images/6_fdf86a2e-b9f3-4296-904d-01e09181f585.webp",
    },
    15: {
      title: "Rose Face Wash",
      price: "Rs:1,120 ",
      imageUrl: "/Images/13_2564f508-7845-4a9e-ad18-4957da830ae0.webp",
    },
    16: {
      title: "  Daily Essentials Face Wash ",
      price: "Rs:1,120 ",
      imageUrl: "/Images/blue copy.webp",
    },
    17: {
      title: "  Acne Defence Face Wash",
      price: "Rs:1,120 ",
      imageUrl: "/Images/green copy.webp",
    },
    18: {
      title: "Oil Control Face Wash",
      price: "Rs:1,120 ",
      imageUrl: "/Images/grey copy.webp",
    },
    19: {
      title: "Hair Black Seed Oil",
      price: "Rs:950",
      imageUrl: "/Images/black seed.webp",
    },
    20: {
      title: "Caster Oil",
      price: "Rs:800",
      imageUrl: "/Images/CastorOil_.webp",
    },
    21: {
      title: "Coconut Oil",
      price: "Rs:500",
      imageUrl: "/Images/cocunt.webp",
    },
    22: {
      title: "Onion Oil",
      price: "Rs:750",
      imageUrl: "/Images/onion_oil.webp",
    },
    23: {
      title: "Almond Oil - Natural Hair Treatment ",
      price: "Rs:600",
      imageUrl: "/Images/almond.webp",
    },
    24: {
      title: "Hair Growth Herbal Mask for Men",
      price: "Rs:950",
      imageUrl: "/Images/HairGrowthPowderjar max orange.webp",
    },
    25: {
      title: "Amla Herbal Hair Mask",
      price: "Rs:800",
      imageUrl: "/Images/AMla-Powder-jarmask.webp",
    },
    26: {
      title: "Retha Herbal Hair Mask",
      price: "Rs:500",
      imageUrl: "/Images/Reetha-Powder-Jar_mASK.webp",
    },
    27: {
      title: "Shikakai Herbal Hair Mask",
      price: "Rs:750",
      imageUrl: "/Images/Shikakai-Powder-Jar_mask.webp",
    },
    28: {
      title: "TRESEMME Volume Hair Spray  Fast Hold",
      price: "Rs:4,000",
      imageUrl: "/Images/022400640457.webp",
    },
    29: {
      title: "TRESEMME HAIR SPRAY FREEZE HOLD",
      price: "Rs:4,000",
      imageUrl: "/Images/022400640457.webp",
    },
    30: {
      title: "TRES TWO Ultra Fine Mist Hair Sprayk",
      price: "Rs:3,000",
      imageUrl:
        "/Images//cd0d36537926fbe5a8cd31f9fcb64afaa7322415-5000x5000.avif",
    },
    31: {
      title: "TRES TWO Extra Hold Unscented",
      price: "Rs:1,550",
      imageUrl:
        "/Images/23f67eb51b9d726c41585a0842052eb95dd0bf68-5000x5000.avif",
    },
    32: {
      title: "Flawless Curls Flexible Hold Curly",
      price: "Rs:2,000",
      imageUrl:
        "/Images//330d887d94a41c200c4240a7cb0d1db29c82eb17-600x600.avif",
    },
    33: {
      title: "Hair Studio Line Gel",
      price: "Rs:500",
      imageUrl: "/Images/gel-1.webp",
    },
    34: {
      title: "Hair Super Orange Gel",
      price: "Rs:500",
      imageUrl: "/Images/gel2.webp",
    },
    35: {
      title: "Hair Hyper Solid Gel ",
      price: "Rs:500",
      imageUrl: "/Images/gel-3.webp",
    },
    36: {
      title: "Hair Water Gloss Soft Gel",
      price: "Rs:500",
      imageUrl: "/Images/gel 5.webp",
    },
    37: {
      title: "Hair Studio Line Gel",
      price: "Rs:2,000",
      imageUrl: "/Images/gel-1.webp",
    },
    38: {
      title: "Vitamin C Skin Serum",
      price: "Rs:1,499",
      imageUrl: "/Images/eye serum.webp",
    },
    39: {
      title: "Brightening Skin Serum",
      price: "Rs:1,350",
      imageUrl: "/Images/brightening.webp",
    },
    40: {
      title: "HAnti-Aging Serum",
      price: "Rs:950",
      imageUrl: "/Images/hyua.webp",
    },
    41: {
      title: "Anti-Pigmentation Serum",
      price: "Rs:950",
      imageUrl: "/Images/pigmen.webp",
    },
    42: {
      title: "Niacinamide + Zinc Serum",
      price: "Rs:950",
      imageUrl: "/Images/zinc skin.webp",
    },
    43: {
      title: "Anti-Acne Skin Serum",
      price: "Rs:1,000",
      imageUrl: "/Images/aging.webp",
    },
    44: {
      title: "Ultra soft Moisturizing Cream",
      price: "Rs:500",
      imageUrl: "/Images/red1.webp",
    },
    45: {
      title: "Classic Moisturizing Cream",
      price: "Rs:500",
      imageUrl: "/Images/classic4.webp",
    },
    46: {
      title: "Soft Moisturizing Cream",
      price: "Rs:500",
      imageUrl: "/Images/soft3.webp",
    },
    47: {
      title: "Whitening Moisturizing Cream",
      price: "Rs:500",
      imageUrl: "/Images/whitening2.webp",
    },
    48: {
      title: "Ultra soft body Lotion",
      price: "Rs:600",
      imageUrl: "/Images/l-red.webp",
    },
    49: {
      title: "Classic body Lotion",
      price: "Rs:600",
      imageUrl: "/Images/l-blue.webp",
    },
    50: {
      title: "Vitamin C body Lotion",
      price: "Rs:600",
      imageUrl: "/Images/l-orange.webp",
    },
    51: {
      title: "Whitening body Lotion",
      price: "Rs:600",
      imageUrl: "/Images/l-pink1.webp",
    },
    52: {
      title: "Aloe Vera body Lotion",
      price: "Rs:600",
      imageUrl: "/Images/L-GR.webp",
    },
    53: {
      title: "Sunscreen SPF 60",
      price: "Rs:799",
      imageUrl: "/Images/20.webp",
    },
    54: {
      title: "Classic Moisturizing Sunblock",
      price: "Rs:500",
      imageUrl: "/Images/Sunblock-3.webp",
    },
    55: {
      title: "Soft Moisturizing Sunblock",
      price: "Rs:500",
      imageUrl: "/Images/Sunblock-2.webp",
    },
    56: {
      title: "Whitening Moisturizing Sunblock",
      price: "Rs:500",
      imageUrl: "/Images/sunscreen-4.webp",
    },
  };

  const product = product1[productId];

  if (product) {
    $("#product-title").text(product.title);
    $("#product-price").text(product.price);
    $("#product-image").attr("src", product.imageUrl);
  }

  // add-to-cart feature
  $("#add-to-cart").click(function () {
    localStorage.setItem("cartItem", JSON.stringify(product1));
    window.location.href = `Add-to-cart.html?ProductId=${productId}`;
  });
});

// ADD-TO-CART METHOD

$(document).ready(function () {
  let cartData = localStorage.getItem("cartItem");

  if (cartData) {
    let cartItems = JSON.parse(cartData);
    let params = new URLSearchParams(window.location.search);
    let productId = params.get("ProductId");

    if (productId && cartItems[productId]) {
      let product = cartItems[productId];
      $(".img-cart").html(
        `<img src="${product.imageUrl}" style="width: 130px;">`
      );
      $(".price-cart").text(` ${product.price}`);
      $(".title-cart").text(product.title);

      let count = 1;
      let price = `${product.price}`;
      let numericValue = parseInt(price.replace(/Rs:|,/g, ""));

      $(".total-cart").html(`Rs: ${numericValue}`);

      $("#plus").click(function () {
        count++;
        $("#counter").text(count);
        let totalPrice = numericValue * count;
        $(".total-cart").text(`Rs: ${totalPrice}`);
      });

      $("#minus").click(function () {
        if (count > 1) {
          count--;
          $("#counter").text(count);
          let totalPrice = numericValue * count;
          $(".total-cart").text(`Rs: ${totalPrice}`);
        }
      });
    }
  }
});

$(document).ready(function () {
  $(".shampoo").click(function () {
    window.location.href = "/pages/Shampoo.html";
  });
  $(".facewash").click(function () {
    window.location.href = "/pages/facewash.html";
  });
  $(".Hair-Growth-Oil").click(function () {
    window.location.href = "/pages/hair-oil.html";
  });
  $(".mask").click(function () {
    window.location.href = "/pages/mask.html";
  });
  $(".volume-spray").click(function () {
    window.location.href = "/pages/volume-spray.html";
  });
  $(".gel").click(function () {
    window.location.href = "/pages/gel.html";
  });
  $(".serum").click(function () {
    window.location.href = "/pages/serum.html";
  });
  $(".cream").click(function () {
    window.location.href = "/pages/cream.html";
  });
  $(".lotion").click(function () {
    window.location.href = "/pages/lotion.html";
  });
  $(".sunscreen").click(function () {
    window.location.href = "/pages/sunblock.html";
  });
  $(".men").click(function () {
    window.location.href = "/pages/men.html";
  });

  $(".fa-cart-shopping").click(function () {
    alert("Your Cart is empty");
  });
  $(".all").click(function () {
    window.location.href = "/pages/All.html";
  });
  $(".Started").click(function () {
    window.location.href = "/pages/All.html";
  });
  $(".Shop-Now").click(function () {
    window.location.href = "/pages/facewash.html";
  });
  $(".contact").click(function () {
    window.location.href = "/pages/Contact.html";
  });
  $("#iframe").click(function () {
    window.location.href = "/index.html#iframe";
  });
  $(".carte").click(function () {
    window.location.href = "/pages/Add-to-cart.html";
  });
  $(".cont-shop").click(function () {
    window.location.href = "/pages/All.html";
  });
  $("body").css("background-color", "whitesmoke");
});

// PLACE_ORDER LOGIC

$(document).ready(function () {
  $(".Place-Order").click(function (event) {
    event.preventDefault();
    let isvalid = true;
    $(".text-danger").text(""); // Reset error messages

   
   
    // Name Validation
    let name = $("#name").val();
    if (name === "") {
      $("#name-error-cart").text("Please fill in your name.");
      isvalid = false;
    } else if (name.length < 3) {
      $("#name-error-cart").text("Please enter at least 3 characters.");
      isvalid = false;
    }

    // Address Validation
    let address = $("#address").val();
    if (address === "") {
      $("#address-error-cart").text("Please fill in your address.");
      isvalid = false;
    }

    // City Validation
    let city = $("#city").val();
    if (city === "") {
      $("#city-error-cart").text("Please fill in your city.");
      isvalid = false;
    }

    // Number Validation
    let number = $("#number").val();
    if (number === "") {
      $("#number-error-cart").text("Please fill in your number.");
      isvalid = false;
    }

    // If validation is successful, show second modal (confirmation)
    if (isvalid) {
      // Hide the first modal (Order details)
      $("#mymodal").modal("hide");

      // Show the second modal (Order Confirmation)
      $("#orderConfirmationModal").modal("show");
    }
  });
});
//  Search Logic
$(document).ready(function () {
  $(".search-icon").click(function () {
    // Check if the search input is visible
    const isVisible = $(".search-input").is(":visible");

    if (isVisible) {
      // If visible and input is empty, show an alert
      const query = $(".search-input").val().trim().toLowerCase();
     
      if (!query) {
        alert("Search bar is empty. Please enter a query.");
       return
      }
      localStorage.setItem("searchQuery", query);
      window.location.href = "/pages/All.html";
     
    } else {
      // If the search input is not visible, show it
      $(".search-input").show();
    }
  });
});

$(document).ready(function () {
  const query = localStorage.getItem("searchQuery");

  let found = true;
  if (query) {
    $("#product-list .col-lg-4 ").each(function () {
      const productName = $(this).find(".card-title").text().toLowerCase();

      if (productName.includes(query)) {
        $(this).show();
        found = false;
      } else {
        $(this).hide();
      }


      if (found) {
        $(".not-found-div").text("No products found!").show();
       
      } else {
        $(".not-found-div").hide();
      }
    });

    localStorage.removeItem("searchQuery");
  }
});
 //All.html search bar logic
$(document).ready(function(){
  $("#searchInput").on('input',function(){
    let found = true;
    const filter = $(this).val().toLowerCase()
    $(".col-lg-4 ,col-md-6, col-sm-12").each(function(){
      const title = $(this).find('.card-title').text().toLowerCase()
      if(title.includes(filter)){
        $(this).show();
        found = false;
    } else {
      $(this).hide();

    }
    // error msg
    if (found) {
      $(".not-found-div").text("No products found!").show();
     
    } else {
      $(".not-found-div").hide();
    }
      })
    })
    

  })

 //SCROLL TOP BTN
$("#scrollToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow"); // Scroll to top smoothly
});

// CONTACT US

$(document).ready(function () {
  $(".contact-form").on("submit", function (e) {
    e.preventDefault();
    let isvalid = true;
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    if (!name && !email && !subject && !message) {
      $(
        "#contact-error-name, #contact-error-email, #contact-error-subject, #contact-error-textarea"
      ).text("plese Fill out Input");
      isvalid = false;
    }
    if (isvalid) {
      alert("THANK YOU!");
      $(".contact-form")[0].reset();

      window.location.href = "/index.html";
    }
  });
});




