                      //THE CHARTS
  <br>
    <canvas id="myChart2" style="width:100%;max-width:600px;"></canvas>
    <div class="container reveal fade-left">

        <style>
            canvas {
                padding: 0 0px 0 0;
                display: inline;

            }
        </style>
        <script>
            var xValues = ["South-East Asia", "East Asia", "America", "Central Europe", "Middle East Europe", "Asia-Pacific"];
            var yValues = [68, 3, 4, 5, 2, 11];
            var barColors = [
                "#000000",
                "#ff",
                "#ff0157",
                "#000000",
                "#ff",
                "#ff0157",
                "#000000",
                "#ff",
                "#ff0157",


            ];

            new Chart("myChart2", {
                type: "doughnut",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Geographic Reach"
                    }
                }
            });
        </script>
    </div>
    <br>

    <canvas id="myChart3" style="width:100%;max-width:600px;"></canvas>

    <style>
        canvas {
            padding: 0 0px 0 0;
            display: inline;

        }
    </style>
    <script>
        var xValues = ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
        var yValues = [3.7, 21.3, 28, 16, 27.7, 1.9, 1.0];
        var barColors = [
            "#000000",
            "#ff",
            "#ff0157",
            "#000000",
            "#ff",
            "#ff0157",
            "#000000",
            "#ff",
            "#ff0157",


        ];

        new Chart("myChart3", {
            type: "doughnut",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Viewers: Age-Group"
                }
            }
        });
    </script>

    <!-- <br>
<canvas id="myChart1" style="width:100%;max-width:600px;"></canvas>

    <style>
        canvas {
            padding: 0 0px 0 0;
            display: inline;
            width:400px;
            height: 300px;

        }
    </style>
    <script>
        var xValues = ["June  ", "July  ", "August  ", "September   ", "October   ", "November   ", "December"];
        var yValues = [10.4, 15.8, 12.2, 16.4, 13, 15.7, 15.5];
        var barColors = [
            "#000000",
            "#ff",
            "#ff0157",
            "#000000",
            "#ff",
            "#ff0157",
            "#000000",
            "#ff",
            "#ff0157",


        ];

        new Chart("myChart1", {
            type: "doughnut",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Monthly Channel Growth"
                }
            }
        });
    </script> --></br>

                           {/* THE MORPHING WORDS */}
                    <svg id="filters">
                        <defs>
                            <filter id="threshold">
                                <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                                          0 1 0 0 0
                                          0 0 1 0 0
                                          0 0 0 255 -140" />
                            </filter>
                        </defs>
                    </svg>

                    <script>const elts = {
                            text1: document.getElementById("text1"),
                            text2: document.getElementById("text2")
                        };

                        const texts = [
                            " Myself Barnali",
                            "Glad to be here",
                            "with you all !!",
                            "Welcome Guys",
                            "to the ",
                            "official website",
                            "of ",
                            "Cholar Pothe Barnali",

                        ];

                        const morphTime = .5;
                        const cooldownTime = 2.5;

                        let textIndex = texts.length - 1;
                        let time = new Date();
                        let morph = 0;
                        let cooldown = cooldownTime;

                        elts.text1.textContent = texts[textIndex % texts.length];
                        elts.text2.textContent = texts[(textIndex + 1) % texts.length];

                        function doMorph() {
                            morph -= cooldown;
                            cooldown = 0;

                            let fraction = morph / morphTime;

                            if (fraction > 1) {
                                cooldown = cooldownTime;
                                fraction = 1;
                            }

                            setMorph(fraction);
                        }

                        function setMorph(fraction) {
                            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

                            fraction = 1 - fraction;
                            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

                            elts.text1.textContent = texts[textIndex % texts.length];
                            elts.text2.textContent = texts[(textIndex + 1) % texts.length];
                        }

                        function doCooldown() {
                            morph = 0;

                            elts.text2.style.filter = "";
                            elts.text2.style.opacity = "100%";

                            elts.text1.style.filter = "";
                            elts.text1.style.opacity = "0%";
                        }

                        function animate() {
                            requestAnimationFrame(animate);

                            let newTime = new Date();
                            let shouldIncrementIndex = cooldown > 0;
                            let dt = (newTime - time) / 1000;
                            time = newTime;

                            cooldown -= dt;

                            if (cooldown <= 0) {
                                if (shouldIncrementIndex) {
                                    textIndex++;
                                }

                                doMorph();
                            } else {
                                doCooldown();
                            }
                        }

                        animate();</script>


                        {/* <!-- The dots/circles --> */}
                    <div style="text-align:center">
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                        <span class="dot" onclick="currentSlide(4)"></span>
                        <span class="dot" onclick="currentSlide(5)"></span>
                        <span class="dot" onclick="currentSlide(6)"></span>
                        <span class="dot" onclick="currentSlide(7)"></span>
                        <span class="dot" onclick="currentSlide(8)"></span>
                        <span class="dot" onclick="currentSlide(9)"></span>
                        <span class="dot" onclick="currentSlide(10)"></span>
                        <span class="dot" onclick="currentSlide(11)"></span>
                        <span class="dot" onclick="currentSlide(12)"></span>
                        <span class="dot" onclick="currentSlide(13)"></span>
                        <span class="dot" onclick="currentSlide(14)"></span>
                        <span class="dot" onclick="currentSlide(15)"></span>
                        <span class="dot" onclick="currentSlide(16)"></span>

                    </div>

                          {/* TO MAKE THE NAVBAR STICKY */}
                    <script type="text/javascript">window.addeventListener('scroll ', function () {
                          const header = document.querySelector('header');
                          header.classList.toggle("sticky", window.scrollY > 0);
                    });
                   </script>

                          {/* TO MAKE THE NAVBAR DISAPPEAR WITH DOWN-SCROLL AND REAPPEAR WITH UP-SCROLL */}
                               

    <script>
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navigation").style.top = "0";
            } else {
                document.getElementById("navigation").style.top = "-132px";
            }
            prevScrollpos = currentScrollPos;
        }
    </script>

                            // THE SLIDESHOW
    <script>
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
    </script>

                         

    <script>function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);</script>

