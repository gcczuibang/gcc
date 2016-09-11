$(function(){

     var slider = new osSlider({
    pNode:'.slider',
    cNode:'.slider-main li',
    speed:3000,
    autoPlay:true   
});          
            $(".tbyb .a2,.tby .v").hover(function(){
             $(".tby .v").show();
          },function(){
             $(".tby .v").hide();
          });
          
            $(".sp .b1,.w1").hover(function(){
             $(".w1").show();
          },function(){
             $(".w1").hide();
          });
          
          $(".sp .b2,.w2").hover(function(){
             $(".w2").show();
          },function(){
             $(".w2").hide();
          });
            $(".sp .b3,.w3").hover(function(){
             $(".w3").show();
          },function(){
             $(".w3").hide();
          });
            $(".sp .b4,.w4").hover(function(){
             $(".w4").show();
          },function(){
             $(".w4").hide();
          });

// 滑动条
 $(document).scroll(function(){
                $top = $("body").scrollTop();
                $wheight = $(window).innerHeight();
                if($top >= ($wheight + 100)){
                    $(".container").css({
                        "position":"fixed",
                        "top":"300px"
                    });
                }else{
                    if($(".container").css("position") == "fixed"){
                         $(".container").css({
                            "position":"absolute",
                             "top":($wheight + 100)+"px"
                         });
                    }
                   
                }
            });

            $(".box").click(function(){ 
                $i = $(".box").index($(this));
                $("body").animate({
                    scrollTop:"1"*$i*($(window).innerHeight())+"px"
                },200);
                 
            })

// 轮询

          var block = document.querySelector(".block"); 
          var left = 0; 
          block.style.left = block.offsetLeft + "px"; 
          var frames = 0;
          var moveframes = 0;

          var outid,innerid,outid2,innerid2;
          function interval(){
               cancelAnimationFrame(outid2);
               frames++;
               if(frames%180 == 0){
                   innerid = requestAnimationFrame(moveLeft);
                   frames = 0;
               }
               outid = requestAnimationFrame(interval);
          }
          function moveLeft(){ 
             left = parseInt(block.style.left);
             if(left<=-250*12){
                  left = 0;
                  block.style.left = left + "px";
             }
              moveframes++;
              block.style.left = (left - 100) + "px";
              if(moveframes%10 == 0){
                  moveframes = 0;
                  frames = 0
                  outid2 = requestAnimationFrame(interval);
                  return;  
              }  
              innerid = requestAnimationFrame(moveLeft); 
          }

          function moveRight(){
              left = parseInt(block.style.left);
              if(left >= 0){
                  left = -250 *12;
                  block.style.left = left + "px";
              }
              moveframes++;
              block.style.left = (left + 100) + "px";
              if(moveframes%10 == 0){
                  moveframes = 0;
                  frames = 0
                  outid2 = requestAnimationFrame(interval);
                  return;  
              }  
              innerid2 = requestAnimationFrame(moveRight); 
          }

        outid = requestAnimationFrame(interval);


         var next = document.querySelector(".next img");
         next.onclick = function(){
              cancelAnimationFrame(outid);
              requestAnimationFrame(moveLeft);

         }

         var prev = document.querySelector(".prev img");
         prev.onclick = function(){
              cancelAnimationFrame(outid);
              requestAnimationFrame(moveRight);
         }

$(".dbt3 .x2").mouseover(function(){
     $(".dbt4").animate({top:"338px"},200)
});
  $(":not(.dbt4)").click(function(){
     $(".dbt4").animate({top:"700px"},200)
});


$(".dbt4a li").mouseover(function(){
   $(this).css( "border-top","1px").css("border-left","0px").css("color","red");
   $(".dbt4a li").not($(this)).css("border-top","1px").css( "border-left","1px")
   .css("border-top-color","#666").css("border-bottom","1px").css("color","#666");
    var $i=$(".dbt4 li").index($(this));
    $(".dbt4b").eq($i).show();
    $(".dbt4b").each(function(i){
    if(i !==$i){
        $(this).hide()  
    }

    })




  })


});