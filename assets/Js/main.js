$(document).ready(function(){
    $("#topFooter .links .linkUl .footerBrands .responsiveBrand").click(function(){
        $("#topFooter .links .linkUl .footerBrands ul").slideToggle()
    })
    $("#topFooter .links .linkUl .footerProducts .responsiveProducts").click(function(){
        $("#topFooter .links .linkUl .footerProducts ul").slideToggle()
    })
    $("#topFooter .links .linkUl .footerInformaton .responsiveInformation").click(function(){
        $("#topFooter .links .linkUl .footerInformaton ul").slideToggle()
    })
    $("#topFooter .getInTouch").click(function(){
        $("#topFooter .info").slideToggle()
    })

    $(".menuIcon").click(function(){
        $(".menu").css("display","block")
        $(".menu").addClass("animate__slideInLeft")
        $(".menu").removeClass("animate__slideOutLeft")
    })
    $(".closeIcon i").click(function(){
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
    })
    $("section").click(function(){
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
    })
    $(".menuShopLi").click(function(e){
        e.preventDefault()
        $(".menuShopUl").slideToggle()
    })
    $(".menuProductsLi").click(function(e){
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
})