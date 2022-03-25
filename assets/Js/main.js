$(document).ready(function () {
    $("#topFooter .links .linkUl .footerBrands .responsiveBrand").click(function () {
        $("#topFooter .links .linkUl .footerBrands ul").slideToggle()
    })
    $("#topFooter .links .linkUl .footerProducts .responsiveProducts").click(function () {
        $("#topFooter .links .linkUl .footerProducts ul").slideToggle()
    })
    $("#topFooter .links .linkUl .footerInformaton .responsiveInformation").click(function () {
        $("#topFooter .links .linkUl .footerInformaton ul").slideToggle()
    })
    $("#topFooter .getInTouch").click(function () {
        $("#topFooter .info").slideToggle()
    })
    $(".menuIcon").click(function () {
        $(".menu").css("display", "block")
        $(".menu").addClass("animate__slideInLeft")
        $(".menu").removeClass("animate__slideOutLeft")
        $(".login-register").addClass("animate__slideOutRight")
        $(".login-register").removeClass("animate__slideInRight")
        $(".searchArea").addClass("animate__slideOutRight")
        $(".searchArea").removeClass("animate__slideInRight")
        $(".basketArea").addClass("animate__slideOutRight")
        $(".basketArea").removeClass("animate__slideInRight")
    })
    $(".closeIcon i").click(function () {
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
    })
    $(".menuShopLi").click(function (e) {
        e.preventDefault()
        $(".menuShopUl").slideToggle()
    })
    $(".menuProductsLi").click(function (e) {
        e.preventDefault()
        $(".menuProductsUl").slideToggle()
    })
    $(window).scroll(function () {
        if (window.scrollY >= 650) {
            $(".goUp").removeClass("d-none")
        }
        if (window.scrollY <= 650) {
            $(".goUp").addClass("d-none")
        }
    })
    $(".goUp").click(function () {
        $(window).scrollTop(0);
    })

    $(".addToCard .increase-number-decrease .plus").click(function (e) {
        e.preventDefault()
        $(this).siblings()[1].innerText++;

    })
    $(".addToCard .increase-number-decrease .minus").click(function (e) {
        e.preventDefault()
        if ($(this).siblings()[0].innerText > 1) {
            $(this).siblings()[0].innerText--;
        } else {
            alert("Number of the products can't be lower than 1")
        }
    })
    $(".productsLi a").click(function (e) {
        e.preventDefault()
    })
    $(".shopLi a").click(function (e) {
        e.preventDefault()
    })

    $(".searchIcon").click(function (e) {
        e.preventDefault()
        $(".searchArea").css("display", "block")
        $(".searchArea").addClass("animate__slideInRight")
        $(".searchArea").removeClass("animate__slideOutRight")
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
    })
    $(".searchCloseIcon i").click(function () {
        $(".searchArea").addClass("animate__slideOutRight")
        $(".searchArea").removeClass("animate__slideInRight")

    })
    $("section").click(function () {
        $(".searchArea").addClass("animate__slideOutRight")
        $(".searchArea").removeClass("animate__slideInRight")
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
        $(".login-register").addClass("animate__slideOutRight")
        $(".login-register").removeClass("animate__slideInRight")
        $(".basketArea").addClass("animate__slideOutRight")
        $(".basketArea").removeClass("animate__slideInRight")

    })

    $(".userIcon").click(function (e) {
        e.preventDefault()
        $(".login-register").css("display", "block")
        $(".login-register").addClass("animate__slideInRight")
        $(".login-register").removeClass("animate__slideOutRight")
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
    })
    $(".goRegister").click(function (e) {
        e.preventDefault()

        $(".register").css("display", "block")
        $(".register").addClass("animate__slideInRight")
        $(".register").removeClass("animate__slideOutRight")
        $(".login").addClass("animate__slideOutRight")
        $(".login").removeClass("animate__slideInRight")
    })
    $(".goRecoverPassword").click(function (e) {
        e.preventDefault()

        $(".recoverPassword").css("display", "block")
        $(".recoverPassword").addClass("animate__slideInRight")
        $(".recoverPassword").removeClass("animate__slideOutRight")
        $(".login").addClass("animate__slideOutRight")
        $(".login").removeClass("animate__slideInRight")
    })


    $(".login-register i").click(function () {
        $(".login-register").addClass("animate__slideOutRight")
        $(".login-register").removeClass("animate__slideInRight")
    })

    $(".goLogin").click(function (e) {
        e.preventDefault()
        $(".login").css("display", "block")
        $(".login").addClass("animate__slideInRight")
        $(".login").removeClass("animate__slideOutRight")

        $(".recoverPassword").addClass("animate__slideOutRight")
        $(".recoverPassword").removeClass("animate__slideInRight")

        $(".register").addClass("animate__slideOutRight")
        $(".register").removeClass("animate__slideInRight")
    })

    $(".basket").click(function (e) {
        e.preventDefault()
        $(".basketArea").css("display", "block")
        $(".basketArea").addClass("animate__slideInRight")
        $(".basketArea").removeClass("animate__slideOutRight")
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
    })
    $(".basketCloseIcon i").click(function (e) {
        e.preventDefault()
        $(".basketArea").addClass("animate__slideOutRight")
        $(".basketArea").removeClass("animate__slideInRight")
    })

    // $("#StickyNavBar").hide()
    $(window).scroll(function () {
        if (window.scrollY >= 80) {
            // $("#StickyNavBar").show()
            $("#StickyNavBar").css("display","block")
            $("#StickyNavBar").addClass("animate__slideInDown")
            $("#StickyNavBar").css({
                "position": "sticky",
                "top": "0px",
                "z-index": "1000000000",
                "background-color": "black"
            })
        }
        console.log(window.scrollY);
        if (window.scrollY <= 100) {
            $("#StickyNavBar").css("display","none")
        }
    })


})