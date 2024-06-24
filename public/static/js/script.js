$('.k_nav_btn').click(function() {
$('.k_nav').slideToggle(300);
});

$('.k-dg').matchHeight();
$('.radiohe').click(function() {
    if ($(this).val() == 1){
        $(this).removeClass('active').val('')
    }else {
        $(this).addClass('active').val(1)
    }
    f();
});
$('.radiohes').click(function() {
    if ($(this).val() == 1){
        $(this).removeClass('active').val('')
    }else {
        $(this).addClass('active').val(1)
    }
    f();
});
function f() {
    if ($('.radiohe').val() == 1 && $('.radiohes').val() == 1){
        $('.fromBtn').addClass('active')
    }else {
        $('.fromBtn').removeClass('active')
    }
}
