//toggle menu and full screen menu
(function() {
    "use strict";
    var mainmenu = document.querySelector(".primarynav");
    var fullscreenmenu = document.querySelector(".fullscreenmenu");
    var mainnav = document.querySelector(".main-nav");

    var strokes = document.querySelectorAll(".strokes"),
        icon = document.querySelector(".menu"),
        fullscreenmenu = document.querySelector(".fullscreenmenu");

    function transformStart() {
        strokes[0].classList.toggle("animate0");
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        mainmenu.classList.toggle("fullscreenmenu");
        mainmenu.classList.toggle("show");
        mainnav.classList.toggle("fullscreenmenu");
        mainnav.classList.toggle("show");
    }

    icon.addEventListener("click", transformStart);
})();

//fullscreen show removal using matchmedia api

if (matchMedia) {
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(ToggleFullScreen);
    ToggleFullScreen(mq);
}

// media query change
function ToggleFullScreen(mq) {
    var strokes = document.querySelectorAll(".strokes");
    const primarynav = document.querySelector(".primarynav");
    const mainnav = document.querySelector(".main-nav");
    if (primarynav.classList.contains("fullscreenmenu")) {
        primarynav.classList.toggle("fullscreenmenu");
        primarynav.classList.toggle("show");
    }
    if (strokes[0].classList.contains("animate0")) {
        strokes[0].classList.toggle("animate0");
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
    }
    if (mainnav.classList.contains("fullscreenmenu")) {
        mainnav.classList.toggle("fullscreenmenu");
        mainnav.classList.toggle("show");
    }
}

//sticky menu

function throttle(fn, delay) {
    var last = undefined;
    var timer = undefined;

    return function() {
        var now = +new Date();

        if (last && now < last + delay) {
            clearTimeout(timer);

            timer = setTimeout(function() {
                last = now;
                fn();
            }, delay);
        } else {
            last = now;
            fn();
        }
    };
}

function onScroll() {
    if (window.pageYOffset) {
        $$header.classList.add("is-active");
    } else {
        $$header.classList.remove("is-active");
    }
}

var $$header = document.querySelector(".js-header");

window.addEventListener("scroll", throttle(onScroll, 25));

//ScrollTo Buttons

/*Navigation Scroll */

function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop - 50, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom =
            window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

//Product Menu

var elem1 = document.querySelector("#prod1-content");
var elem2 = document.querySelector("#prod2-content");
var elem3 = document.querySelector("#prod3-content");
var elem4 = document.querySelector("#prod4-content");
var elem5 = document.querySelector("#prod5-content");
// Get HTML content

var icon1 = document.getElementById("prod1-overview");
var icon2 = document.getElementById("prod1-info");
var icon3 = document.getElementById("prod1-taste");
var icon4 = document.getElementById("prod1-cocktail");

var icon5 = document.getElementById("prod2-overview");
var icon6 = document.getElementById("prod2-info");
var icon7 = document.getElementById("prod2-taste");
var icon8 = document.getElementById("prod2-cocktail");

var icon9 = document.getElementById("prod3-overview");
var icon10 = document.getElementById("prod3-info");
var icon11 = document.getElementById("prod3-taste");
var icon12 = document.getElementById("prod3-cocktail");

var icon13 = document.getElementById("prod4-overview");
var icon14 = document.getElementById("prod4-info");
var icon15 = document.getElementById("prod4-taste");
var icon16 = document.getElementById("prod4-cocktail");

var icon17 = document.getElementById("prod5-overview");
var icon18 = document.getElementById("prod5-info");
var icon19 = document.getElementById("prod5-taste");
var icon20 = document.getElementById("prod5-cocktail");

icon1.addEventListener("click", function() {
    elem1.innerHTML = `<div class = "overview_wrapper">
<h3> Snow Maiden </h3>
<p class = "product-info">This sake is named after Hanako, or “Flower Maiden”, the most famous Japanese koi fish that lived for 226 years in the snowy, icy waters at the foot of Japan’s Mt. Ontake.
  </p></div>`;
});

icon2.addEventListener("click", function() {
    elem1.innerHTML = `<div class = "row"><div class = "col col_info"><h4> Grade </h4>
    <p class = "product-info product-tech ">Junmai Nigori
      </p>
      <h4> Seimaibuai </h4>
      <p class = "product-info product-tech">70%
        </p>
        <h4> Rice</h4>
        <p class = "product-info">Gohyakumangoku & Gin-Ohmi
          </p>
          <h4> Nihonshu-Do: </h4>
        <p class = "product-info product-tech">+6.5
          </p>
        </div>
        <div class = "col col_info"> 
        <h4> Acidity </h4>
        <p class = "product-info product-tech">1.6
          </p><h4> Alchohol </h4>
          <p class = "product-info product-tech">14.9%
            </p><h4> Sizes </h4>
            <p class = "product-info product-tech">12/300ml<br>
            6/720ml
              </p><h4> Retail Price </h4>
              <p class = "product-info product-tech">$10<br>
              $17.5
                </p></div></div>`;
});
icon3.addEventListener("click", function() {
    elem1.innerHTML = `<div class = "taste_wrapper">
        <h3> Tasting </h3>
        <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
          </p><h3> Food Pairing</h3>
        <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
          </p></div>`;
});

icon4.addEventListener("click", function() {
    elem1.innerHTML = `<img class="recipe" src="resources/img/mango-maiden-recipe-min.jpg">`;
});

icon5.addEventListener("click", function() {
    elem2.innerHTML = `<div class = "overview_wrapper"><h3> Living Jewel </h3>
          <p class = "product-info">Light and easy drinking sake named after Japan’s colorful koi fish that represent good fortune and luck. This sake represents the combination of vibrant colors, patterns, and shimmering scales that have earned Japanese koi fish the moniker “living jewels."
          </p></div>`;
});

icon6.addEventListener("click", function() {
    elem2.innerHTML = `<div class = "row"><div class = "col col_info"><h4> Grade </h4>
              <p class = "product-info product-tech ">Junmai Nigori
                </p>
                <h4> Seimaibuai </h4>
                <p class = "product-info product-tech">70%
                  </p>
                  <h4> Rice</h4>
                  <p class = "product-info">Gohyakumangoku & Gin-Ohmi
                    </p>
                    <h4> Nihonshu-Do: </h4>
                  <p class = "product-info product-tech">+6.5
                    </p>
                  </div>
                  <div class = "col col_info"> 
                  <h4> Acidity </h4>
                  <p class = "product-info product-tech">1.6
                    </p><h4> Alchohol </h4>
                    <p class = "product-info product-tech">14.9%
                      </p><h4> Sizes </h4>
                      <p class = "product-info product-tech">12/300ml<br>
                      6/720ml
                        </p><h4> Retail Price </h4>
                        <p class = "product-info product-tech">$10<br>
                        $17.5
                          </p></div></div>`;
});
icon7.addEventListener("click", function() {
    elem2.innerHTML = `<div class = "taste_wrapper"><h3> Tasting </h3>
                  <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                    </p><h3> Food Pairing</h3>
                  <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                    </p></div>`;
});

icon8.addEventListener("click", function() {
    elem2.innerHTML = `<img class="recipe" src="resources/img/ruby-jewel-recipe-min.jpg">`;
});

icon9.addEventListener("click", function() {
    elem3.innerHTML = `<div class = "overview_wrapper"><h3> Blossom of Peace </h3>
                    <p class = "product-info">Local, all-natural aodani plums are soaked in Tozai sake for over three months resulting in an incredibly balanced sake with tart, juicy acidity on the finish. Plum blossoms are known as "The Flowers of Peace" in Japan and symbolize growth, renewal, and awakening.
                    </p></div>`;
});

icon10.addEventListener("click", function() {
    elem3.innerHTML = `<div class = "row"><div class = "col col_info"><h4> Grade </h4>
                        <p class = "product-info product-tech ">Junmai Nigori
                          </p>
                          <h4> Seimaibuai </h4>
                          <p class = "product-info product-tech">70%
                            </p>
                            <h4> Rice</h4>
                            <p class = "product-info">Gohyakumangoku & Gin-Ohmi
                              </p>
                              <h4> Nihonshu-Do: </h4>
                            <p class = "product-info product-tech">+6.5
                              </p>
                            </div>
                            <div class = "col col_info"> 
                            <h4> Acidity </h4>
                            <p class = "product-info product-tech">1.6
                              </p><h4> Alchohol </h4>
                              <p class = "product-info product-tech">14.9%
                                </p><h4> Sizes </h4>
                                <p class = "product-info product-tech">12/300ml<br>
                                6/720ml
                                  </p><h4> Retail Price </h4>
                                  <p class = "product-info product-tech">$10<br>
                                  $17.5
                                    </p></div></div>`;
});
icon11.addEventListener("click", function() {
    elem3.innerHTML = `<div class = "taste_wrapper"><h3> Tasting </h3>
                            <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                              </p><h3> Food Pairing</h3>
                            <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                              </p></div>`;
});

icon12.addEventListener("click", function() {
    elem3.innerHTML = `<img class="recipe" src="resources/img/sakura-smash-recipe-min.jpg">`;
});

icon13.addEventListener("click", function() {
    elem4.innerHTML = ` <div class = "overview_wrapper"><h3> Well of Wisdom</h3>
                              <p class = "product-info">The juicy watermelon notes in this sake make it perfect for a warm day or for an apertif. Well of Wisdom draws its water source from the town of Fushimi, which means “hidden water” and is known for its characteristically soft and pure water that is perfect for brewing sake.
                              </p></div>`;
});

icon14.addEventListener("click", function() {
    elem4.innerHTML = `<div class = "row"><div class = "col col_info"><h4> Grade </h4>
                                  <p class = "product-info product-tech ">Junmai Nigori
                                    </p>
                                    <h4> Seimaibuai </h4>
                                    <p class = "product-info product-tech">70%
                                      </p>
                                      <h4> Rice</h4>
                                      <p class = "product-info">Gohyakumangoku & Gin-Ohmi
                                        </p>
                                        <h4> Nihonshu-Do: </h4>
                                      <p class = "product-info product-tech">+6.5
                                        </p>
                                      </div>
                                      <div class = "col col_info"> 
                                      <h4> Acidity </h4>
                                      <p class = "product-info product-tech">1.6
                                        </p><h4> Alchohol </h4>
                                        <p class = "product-info product-tech">14.9%
                                          </p><h4> Sizes </h4>
                                          <p class = "product-info product-tech">12/300ml<br>
                                          6/720ml
                                            </p><h4> Retail Price </h4>
                                            <p class = "product-info product-tech">$10<br>
                                            $17.5
                                              </p></div></div>`;
});
icon15.addEventListener("click", function() {
    elem4.innerHTML = `<div class = "taste_wrapper"><h3> Tasting </h3>
                                      <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                                        </p><h3> Food Pairing</h3>
                                      <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                                        </p></div>`;
});

icon16.addEventListener("click", function() {
    elem4.innerHTML = `<img class="recipe" src="resources/img/tea-of-wisdom-min.jpg">`;
});

icon17.addEventListener("click", function() {
    elem5.innerHTML = `<div class = "overview_wrapper"> <h3> Typhoon</h3>
                                        <p class = "product-info">A table sake of remarkable quality with rustic banana bread and nut notes. Sturdy enough to handle being warmed or mixed in cocktails.</p></div>`;
});

icon18.addEventListener("click", function() {
    elem5.innerHTML = `<div class = "row"><div class = "col col_info"><h4> Grade </h4>
                                            <p class = "product-info product-tech ">Junmai Nigori
                                              </p>
                                              <h4> Seimaibuai </h4>
                                              <p class = "product-info product-tech">70%
                                                </p>
                                                <h4> Rice</h4>
                                                <p class = "product-info">Gohyakumangoku & Gin-Ohmi
                                                  </p>
                                                  <h4> Nihonshu-Do: </h4>
                                                <p class = "product-info product-tech">+6.5
                                                  </p>
                                                </div>
                                                <div class = "col col_info"> 
                                                <h4> Acidity </h4>
                                                <p class = "product-info product-tech">1.6
                                                  </p><h4> Alchohol </h4>
                                                  <p class = "product-info product-tech">14.9%
                                                    </p><h4> Sizes </h4>
                                                    <p class = "product-info product-tech">12/300ml<br>
                                                    6/720ml
                                                      </p><h4> Retail Price </h4>
                                                      <p class = "product-info product-tech">$10<br>
                                                      $17.5
                                                        </p></div></div>`;
});
icon19.addEventListener("click", function() {
    elem5.innerHTML = `<div class = "taste_wrapper"><h3> Tasting </h3>
                                                <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                                                  </p><h3> Food Pairing</h3>
                                                <p class = "product-info">Bright and fresh with a lovely ricey and fruity combination. Flavors of honeydew melon, raw pumpkin, and radish. Creamy texture and full body.
                                                  </p></div>`;
});

icon20.addEventListener("click", function() {
    elem5.innerHTML = `<img class="recipe" src="resources/img/citrus-basil-typhoontini-recipe-min.jpg">`;
});

//WayPoints

/*Animate on Scroll Manual  */

var waypointa = document.querySelector("js--wp-1");
var waypointb = document.querySelector("js--wp-2");
var waypointc = document.querySelector("js--wp-3");
var waypointd = document.querySelector("js--wp-4");
var waypointe = document.querySelector("js--wp-5");
var waypointf = document.querySelector("js--wp-6");

var waypoint1 = new Waypoint({
    element: document.getElementById("js--wp-1"),
    handler: function(direction) {
        document.getElementById("js--wp-1").classList.add("animated", "fadeIn");
    },
    offset: "50%"
});

var waypoint2 = new Waypoint({
    element: document.getElementById("js--wp-2"),
    handler: function(direction) {
        document
            .getElementById("js--wp-2")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint3 = new Waypoint({
    element: document.getElementById("js--wp-3"),
    handler: function(direction) {
        document
            .getElementById("js--wp-3")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint4 = new Waypoint({
    element: document.getElementById("js--wp-4"),
    handler: function(direction) {
        document
            .getElementById("js--wp-4")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint5 = new Waypoint({
    element: document.getElementById("js--wp-5"),
    handler: function(direction) {
        document
            .getElementById("js--wp-5")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint6 = new Waypoint({
    element: document.getElementById("js--wp-6"),
    handler: function(direction) {
        document
            .getElementById("js--wp-6")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint7 = new Waypoint({
    element: document.getElementById("js--wp-7"),
    handler: function(direction) {
        document
            .getElementById("js--wp-7")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint8 = new Waypoint({
    element: document.getElementById("js--wp-8"),
    handler: function(direction) {
        document
            .getElementById("js--wp-8")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint9 = new Waypoint({
    element: document.getElementById("js--wp-9"),
    handler: function(direction) {
        document
            .getElementById("js--wp-9")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint10 = new Waypoint({
    element: document.getElementById("js--wp-10"),
    handler: function(direction) {
        document
            .getElementById("js--wp-10")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint11 = new Waypoint({
    element: document.getElementById("js--wp-11"),
    handler: function(direction) {
        document
            .getElementById("js--wp-11")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint12 = new Waypoint({
    element: document.getElementById("js--wp-12"),
    handler: function(direction) {
        document
            .getElementById("js--wp-12")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint13 = new Waypoint({
    element: document.getElementById("js--wp-13"),
    handler: function(direction) {
        document
            .getElementById("js--wp-13")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint14 = new Waypoint({
    element: document.getElementById("js--wp-14"),
    handler: function(direction) {
        document
            .getElementById("js--wp-14")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint15 = new Waypoint({
    element: document.getElementById("js--wp-15"),
    handler: function(direction) {
        document
            .getElementById("js--wp-15")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint16 = new Waypoint({
    element: document.getElementById("js--wp-16"),
    handler: function(direction) {
        document
            .getElementById("js--wp-16")
            .classList.add("animated", "slideInRight");
    },
    offset: "50%"
});

var waypoint17 = new Waypoint({
    element: document.getElementById("js--wp-17"),
    handler: function(direction) {
        document
            .getElementById("js--wp-17")
            .classList.add("animated", "scaleUpCenter");
    },
    offset: "50%"
});

var waypoint19 = new Waypoint({
    element: document.getElementById("js--wp-19"),
    handler: function(direction) {
        document
            .getElementById("js--wp-19")
            .classList.add("animated", "fadeInRight");
    },
    offset: "50%"
});