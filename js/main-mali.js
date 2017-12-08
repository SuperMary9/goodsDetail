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
    $(".p-layer-content").on( "click", ".icon-close", function(){
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
    var data = {
        data:[
            {'name':'规格',value:['50g','100g','150g','200g','250g']},
            {'name':'颜色',value:['红色','白色','蓝色']},
            {'name':'尺寸',value:['18寸','20寸','21寸','22寸','23寸','24寸']}
        ]
    }
    var html = template('product-wrap-html', data);
    $("#product-wrap").html(html);


});