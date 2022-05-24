$('#datepicker-example').datepicker({
    calendarWeeks: true,
    autoclose: true,
    todayHighlight: true
});

$(".form-add-part2").hide();

$(".next").click(function (){
    $(".form-add-part1").hide();
    $(".form-add-part2").show();
})
$(".prev").click(function (){
    $(".form-add-part1").show();
    $(".form-add-part2").hide();
})