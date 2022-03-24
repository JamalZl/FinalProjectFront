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
    $(".productsLi a").click(function(e){
        e.preventDefault()
    })
    $(".shopLi a").click(function(e){
        e.preventDefault()
    })

    $(".searchIcon").click(function(e){
        e.preventDefault()
        $(".searchArea").css("display","block")
        $(".searchArea").addClass("animate__slideInRight")
        $(".searchArea").removeClass("animate__slideOutRight")
        $(".menu").addClass("animate__slideOutLeft")
        $(".menu").removeClass("animate__slideInLeft")
    })
    $(".searchCloseIcon i").click(function(){
        $(".searchArea").addClass("animate__slideOutRight")
        $(".searchArea").removeClass("animate__slideInRight")
        
    })
    $("section").click(function(){
        $(".searchArea").addClass("animate__slideOutRight")
        $(".searchArea").removeClass("animate__slideInRight")
    })
})