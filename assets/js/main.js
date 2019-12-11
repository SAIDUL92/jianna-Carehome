(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /*
            	Searching & Expand Menu Popup
            	------------------------------- */
        var sToggle = $('.scale-toggle'),
            closeA = $('.close-scale'),
            closeB = $('.searching button'),
            cBody = $('body'),
            closeScale = closeA.add(closeB);
        if (sToggle.length > 0) {
            sToggle.on('click', function() {
                cBody.toggleClass('open');
                return false;
            });
        }
        if (closeScale.length > 0) {
            closeScale.on('click', function() {
                cBody.removeClass('open');
                return false;
            });
        }



        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        $('#mobile-menu-active').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.menu-prepent',
        });



        $('.menu-open').click(function() {

            $('.page-left-bar, .page-right-main-content').toggleClass('activee');
            $('.menu-open').toggleClass('toggle');
            $('.hide').toggleClass('none')

        });







        $(".header-bar-section").sticky({ topSpacing: 0 });

        $(".main-sldier-wrap").owlCarousel({
            items: 5,
            nav: true,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            margin: 0,
            stagePadding: 100,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,

                },
                768: {
                    items: 1,

                },
                1000: {
                    items: 1,

                },
                1200: {
                    items: 2,

                },
                1600: {
                    items: 3,

                },
                1700: {
                    items: 4,

                }
            }


        });



        $(".wrapre-content-active ").owlCarousel({
            items: 3,
            nav: true,
            navText: ["<i class='fal fa-long-arrow-left line'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            margin: 0,
            // stagePadding: 100,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,


                },
                768: {
                    items: 2,

                },
                1000: {
                    items: 3,

                },
                1600: {
                    items: 4

                }
            }


        });


        $(".booking-content-active ").owlCarousel({
            items: 3,
            nav: true,
            navText: ["<i class='fal fa-long-arrow-left line'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            margin: 0,
            // stagePadding: 100,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    // stagePadding: 10,

                },
                768: {
                    items: 2,

                },
                1000: {
                    items: 3,

                },
                1600: {
                    items: 4

                }
            }


        });

        $(".sldier-wrapre-content booking-content-active-2").owlCarousel({
            items: 3,
            nav: true,

            navText: false,
            //  ["<i class='fal fa-long-arrow-left line'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            margin: 0,
            // stagePadding: 100,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    // stagePadding: 10,

                },
                768: {
                    items: 2,

                },
                1000: {
                    items: 3,

                },
                1600: {
                    items: 4

                }
            }


        });


        $(".sldier-wrapre-content.booking-payment-content ").owlCarousel({
            items: 3,
            nav: true,
            navText: ["<i class='fal fa-long-arrow-left line'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,


                },
                768: {
                    items: 1,

                },
                1000: {
                    items: 1,

                },
                1600: {
                    items: 1,

                }
            }


        });


        $(".time-sheet-active").owlCarousel({
            nav: true,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,


                },
                768: {
                    items: 1,

                },
                1000: {
                    items: 1,

                },
                1200: {
                    items: 1,

                },
                1600: {
                    items: 1,

                },
                1700: {
                    items: 1,

                }
            }

        });




        $(".footer-slider-active").owlCarousel({
            nav: true,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,


                },
                768: {
                    items: 1,

                },
                1000: {
                    items: 1,

                },
                1200: {
                    items: 1,

                },
                1600: {
                    items: 1,

                },
                1700: {
                    items: 1,

                }
            }

        });

        // niceSelect
        $('select').niceSelect();

        const canvas = document.querySelector("#sign");
        const ctx = canvas.getContext("2d");
        const saveButton = document.getElementById("save");
        const previewButton = document.getElementById("preview");
        const clearButton = document.getElementById("clear");

        canvas.width = canvas.parentNode.clientWidth;
        canvas.height = 200;

        ctx.strokeStyle = "#4091fe";
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.lineWidth = 2;
        ctx.fillStyle = "rgb(235, 246, 255)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let signatureBoxWidth = canvas.parentNode.clientWidth;
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        function draw(x, y) {
            if (!isDrawing) return; // stop the fn from running when they are not moused down
            ctx.beginPath();
            // start from
            ctx.moveTo(lastX, lastY);
            // go to
            ctx.lineTo(x, y);
            ctx.stroke();
            [lastX, lastY] = [x, y];
        }

        function clearSignature() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //fill bg
            ctx.fillStyle = "rgb(235, 246, 255)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function openSignature() {
            window.open(canvas.toDataURL("image/png"), "Signature"); // image/jpeg also works
        }

        function downloadURI(uri, name) {
            var link = document.createElement("a");
            link.download = name;
            link.href = uri;
            link.click();
        }

        //Init Drawing
        canvas.addEventListener("mousedown", e => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });
        canvas.addEventListener("touchstart", e => {
            if (e.touches && e.touches.length == 1) {
                isDrawing = true;
                let touch = e.touches[0];
                let touchX = touch.pageX - touch.target.offsetLeft;
                let touchY = touch.pageY - touch.target.offsetTop;
                [lastX, lastY] = [touchX, touchY];
                e.preventDefault();
            }
        });

        //Begin Drawing
        canvas.addEventListener("mousemove", function(e) {
            draw(e.offsetX, e.offsetY);
        });
        canvas.addEventListener("touchmove", e => {
            if (e.touches && e.touches.length == 1) {
                let touch = e.touches[0];
                let touchX = touch.pageX - touch.target.offsetLeft;
                let touchY = touch.pageY - touch.target.offsetTop;
                draw(touchX, touchY);
            }
        });

        //End Drawing
        canvas.addEventListener("mouseup", () => (isDrawing = false));
        canvas.addEventListener('mouseout', () => isDrawing = false);
        canvas.addEventListener("touchend", () => (isDrawing = false));

        clearButton.addEventListener("click", clearSignature);
        previewButton.addEventListener("click", clearSignature);
        saveButton.addEventListener("click", () => {
            downloadURI(canvas.toDataURL("image/png"), "Signature");
        });

        window.addEventListener("resize", () => {
            if (canvas.parentNode.clientWidth !== signatureBoxWidth) {
                canvas.width = canvas.parentNode.clientWidth;
                ctx.fillStyle = "rgb(235, 246, 255)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                signatureBoxWidth = canvas.parentNode.clientWidth;
            }
        });




        // niceSelect
        $('select').niceSelect();


        // $readMoreJS.init({
        //     target: '.dummy p', // Selector of the element the plugin applies to (any CSS selector, eg: '#', '.'). Default: ''
        //     numOfWords: 13, // Number of words to initially display (any number). Default: 50
        //     toggle: true, // If true, user can toggle between 'read more' and 'read less'. Default: true
        //     moreLink: 'read more ...', // The text of 'Read more' link. Default: 'read more ...'
        //     lessLink: 'read less' // The text of 'Read less' link. Default: 'read less'
        // });

    });



}(jQuery));