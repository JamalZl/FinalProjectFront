$(document).ready(function () {
    $("#filterIcon").click(function (e) {
        e.preventDefault()
        $(".filterOptions").slideToggle()
        $(".filterOptions").toggleClass("d-flex")

    })
})