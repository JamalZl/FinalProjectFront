$(document).ready(function () {
    $('.myOwl').owlCarousel({
        loop: true,
        // margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.featured').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            820: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    if ($(".featured .owl-item").hasClass("active")) {
        $(".featured .owl-item").siblings().addClass("d-flex justify-content-center")
    }
    let plMinus = document.querySelector(".addToCard .increase-number-decrease .minus")
    let plPlus = document.querySelector(".addToCard .increase-number-decrease .plus")
    let plproductCount = document.querySelector(".addToCard .increase-number-decrease #inputNumber")
    
    $(".addToCard .increase-number-decrease .plus").click(function(e){
        e.preventDefault()
        $(".addToCard .increase-number-decrease #inputNumber").innerText = Number($(".addToCard .increase-number-decrease #inputNumber").innerText) + 1;
        console.log($(".addToCard .increase-number-decrease #inputNumber"));

    })
    // plMinus.addEventListener("click", (e) => {
    //     e.preventDefault()
    //     if (plproductCount.innerHTML > 0) {
    //         plproductCount.innerHTML = Number(plproductCount.innerHTML) - 1;
    //     } else {
    //         alert("Number of the products can't be lower than zero")
    //     }
    // })

})

