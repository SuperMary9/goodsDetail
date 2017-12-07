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
        },

        // 网格分布
        centeredSlides : true,
    
        // 前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev', 
    });

    // 加入购物车操作
    $(".cart-btn").on("click", function(){
        console.log(1);
        $(".p-layer").show();
    });


});