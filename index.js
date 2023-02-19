        // 날짜 계산기
        var date; 
        $(document).ready(function () { 
            nDate(); 
        }); 
        
        function nDate() { 
            date = setInterval(function () { 
                var today = "TODAY :  "; 
                var newDate = new Date(); 
                
                today += newDate.getFullYear() + "/"; 
                today += ("0" + (newDate.getMonth() + 1)).slice(-2) + "/";
                today += ("0" + newDate.getDate()).slice(-2) + " "; 
                
                $("#date").text(today); 
            }, 1000); 
        } 

        // 메뉴박스 드롭
        $(document).ready(function(){
            $(".header_div2_menu_ul").mouseenter(function(){    // 마우스오버
                $("#header_div2_submenu").show();   //서브메뉴
                $("#header_div2_submenu").css({'background-color':'white', 'color':'black'});

                $(".header_div2_logo_text").css('color', 'black');  //로고 텍스트
                $(".header_div2_logo").css('background-color', 'white');    //로고 배경화면
                
                $(".pr1").css('color','black'); // 메인메뉴 텍스트
                $("#n1").css('border-bottom','1px solid black');

            });
            $(".header_div2").mouseleave(function(){
                $("#header_div2_submenu").hide();

                $(".header_div2_logo_text").css('color', 'white');  //로고 텍스트
                $(".header_div2_logo").css('background', 'none');   //로고 배경화면

                $(".pr1").css('color','white');
                $("#n1").css('border','0');
            });
        });
        // 예약 박스
        $(document).ready(function(){
            $(".main2_div_e_div_d2").mouseenter(function(){
                $(".main2_div_e_div_d2").css({'border':'7px solid red'});
                $(".main2_div_e_div_d2 a").css({'color':'red'});
            })
            $(".main2_div_e_div_d3").mouseenter(function(){
                $(".main2_div_e_div_d3").css({'border':'7px solid red'});
                $(".main2_div_e_div_d3 a").css({'color':'red'});
            })
            $(".main2_div_e_div_d2").mouseleave(function(){
                $(".main2_div_e_div_d2 a").css('color','black');
                $(".main2_div_e_div_d2").css('border','7px solid rgb(185, 183, 183)');
                $(".main2_div_e_div_d2").css('border-bottom','none');
            })
            $(".main2_div_e_div_d3").mouseleave(function(){
                $(".main2_div_e_div_d3 a").css('color','black');
                $(".main2_div_e_div_d3").css('border','7px solid rgb(185, 183, 183)');
                $(".main2_div_e_div_d3").css('border-top','1px solid rgb(185, 183, 183)');
            })
        })

        //백그라운드 이미지 슬라이드
        /*
        $(document).ready(function() {
            var currentImage = 0;
            var images = $("#slideshow img");
            var numberOfImages = images.length;
          
            function changeImage() {
              var image = images.eq(currentImage);
              images.hide();
              image.show();
            }
          
            changeImage();
            setInterval(function() {
              currentImage = (currentImage + 1) % numberOfImages;
              changeImage();
            }, 2000);
          });
          */

          //백그라운드 이미지
          $(document).ready(function() {
            var backimages = [
              "image1.jpg",
              "image2.jpg",
              "image3.jpg",
            ];
            var i = 0;
            
            function changeBackground() {
              $("body").css("background-image", "url(" + backimages[i] + ")");
              i = (i + 1) % backimages.length;
            }
            
            setInterval(changeBackground, 3000);
          });