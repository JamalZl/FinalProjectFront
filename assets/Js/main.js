$(document).ready(function(){
    $("#topFooter .links .linkUl .footerBrands").click(function(){
        $("#topFooter .links .linkUl .footerBrands ul").slideToggle()
    })
    $("#topFooter .links .linkUl .footerProducts").click(function(){
        $("#topFooter .links .linkUl .footerProducts ul").slideToggle()
    })
    $("#topFooter .links .linkUl .footerInformaton").click(function(){
        $("#topFooter .links .linkUl .footerInformaton ul").slideToggle()
    })

    $("#topFooter .getInTouch").click(function(){
        $("#topFooter .info").slideToggle()
    })
})