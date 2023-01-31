

        
$(document).ready(function(){
    $(".header_div2_menu_ul").mouseenter(function(){    // 마우스오버
        $("#header_div2_submenu").show();   //서브메뉴
    });
    $(".header_div2").mouseleave(function(){
        $("#header_div2_submenu").hide();
    });
});

