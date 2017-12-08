$(function(){
    // 轮播图相关
    var titArr = ['产品','感受','详情','搭配'];
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,

        // 分页器
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationType : 'bullets',
        paginationBulletRender: function (swiper, index, className) {
            console.log()
            return '<span class="' + className + '">' + '<i class="sliber-tit sliber-tit'+(index+1)+'">'+ titArr[index] +'</i></span>';
        }
    });

    // 加入购物车操作
    $(".cart-btn").on("click", function(){
        $(".js-cart-layer").show();
    });
    // 关闭弹层操作
    $(".p-layer-content").on( "click", ".icon-close,.cart-confirm", function(){
        $(this).closest(".js-cart-layer").hide();
    });

    // 购物规则选择
    $(".p-spec").on("click", "a", function(e){
        $(this).closest("dl").find(".p-tips").removeClass("active");
        $(this).addClass("active");
    });

    // 数量操作
    $(".calc-wrap").on("click", "a", function(e){
        var _this = $(this).index();
        var _calc = _this === 0? (-1):1;
        var _val = $(".calc-input").val();
        var _value = (_this ===0 && _val == 1) ? 1 : _val-0 +_calc; // -0操作，转换数据类型
        $(".calc-input").val(_value);
    });

    // 产品属性模板
    var proProperty = {
        data:[
            {'name':'规格',value:['50g','100g','150g','200g','250g']},
            {'name':'颜色',value:['红色','白色','蓝色']},
            {'name':'尺寸',value:['18寸','20寸','21寸','22寸','23寸','24寸']}
        ]
    }
    var proPropertyHtml = template('product-wrap-html', proProperty);
    $("#product-wrap").html(proPropertyHtml);

    // 产品信息
    var proDetails = {
        title:'兰芝净透亚光气垫BB',
        subTitle:'美白遮瑕保湿裸妆',
        imgSrc:'images/product@2x.png',
        price:160,
        pPrice:280,
        time:'1512752567310',
        countTime:'',
        number:1999
    };
    proDetails.countTime = changeTimeStamp(proDetails.time); // 初次计算倒计时
    var proDetailsHtml = template('pro-details', proDetails);
    $("#swiper-slide1").html(proDetailsHtml);
    
     // 倒计时函数
    function changeTimeStamp(timeStamp){
        var distancetime = timeStamp - new Date().getTime();
        // console.log(distancetime);
        if(distancetime > 0){ //如果大于0.说明尚未到达截止时间              
            var ms = Math.floor(distancetime%1000);  // 毫秒
            var sec = Math.floor(distancetime/1000%60); // 秒
            var min = Math.floor(distancetime/1000/60%60);  // 分
            var hour =Math.floor(distancetime/1000/60/60%24);   // 时
            if(sec<10){
                sec = "0"+ sec;
            }
            if(min<10){
                min = "0"+ min;
            }
            if(hour<10){
                hour = "0"+ min;
            }
            return hour + ":" + min + ":" +sec; // 精确到秒
        }
        else{//若否，就是已经到截止时间了
            return 0;
        }    
    };
    var countTime = setInterval(function(){ //倒计时
        proDetails.countTime = changeTimeStamp(proDetails.time);
        if(proDetails.countTime==0){     // 倒计时截止，调当前期中奖纪录
            console.log('结束');
            clearInterval(countTime);
        }else{
            var proDetailsHtml = template('pro-details', proDetails);
            $("#swiper-slide1").html(proDetailsHtml);
        }
    },1000);

});