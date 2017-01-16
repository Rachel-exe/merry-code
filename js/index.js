$(function() {
	//Swiper
	var galleryTop = new Swiper('.gallery-top', {
		
		spaceBetween: 10,
		loop: true,
		loopedSlides: 5,
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		nextButton: '.swiper-button-next2',
		prevButton: '.swiper-button-prev2',
		spaceBetween: 10,
		slidesPerView: 6,
		loop: true,
		touchRatio: 0.6,
		slideToClickedSlide: true,
		
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;

	var swiper3 = new Swiper('.swiper3', {
		nextButton: '.swiper-button-next3',
		prevButton: '.swiper-button-prev3',
		spaceBetween: 10,
		loop: true,
		 //looped slides should be the same     
		slidesPerView: 4,
		centeredSlides: true,
		slideToClickedSlide: true
	});
	var swiper4 = new Swiper('.swiper4', {
		spaceBetween: 2,
		loop: true,
		// slidesPerView: 5,
		// slidesPerGroup: 5, //每次滑动多少个为一组
		// slidesPerColumn: 2,
		// slidesPerColumnFill: 'row'
	});
	var swiper5 = new Swiper('.swiper5', {
		slidesPerView: 4,
		spaceBetween: 15,
		loop: true


	});
	var swiper6 = new Swiper('.swiper6', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,


	});
	var swiper7 = new Swiper('.swiper7', {
		slidesPerView: 4,
		spaceBetween: 15,
		loop: true,


	});
	//fullpage
	var h1='',h3='',small='',more='',moreIntro='',smLine='',name='',arr=[];
	$('#fullpage').fullpage({
		'navigation': true,
		navigationColor: 'red',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7','page8'],
		menu: '#menu',
		afterLoad: function(anchorLink, index) {
			h1='.section' + index + ' .title .fir-block h1';
			h3='.section' + index + ' .title .fir-block h3';
			small='.section' + index + ' .title .fir-block small';
			more='.section' + index + ' .title .more';
			moreIntro='.section' + index + ' .title .more-intro';
			smLine='.section' + index + ' .title .sm-line';
			connect='.section' + index +' .block-connect>div';
			links='.section' + index +' .block-links';
			arr=[];
			arr.push(h1,h3,small,more,moreIntro,smLine,connect,links);
			name=arr.join(',');
			$(name).addClass('current');
			// console.log('a');
		},
		onLeave:function(index){
			// console.log(name);
			$(name).removeClass('current');
		}
	});

	//控制横屏箭头
	$('.half-view.float-l,.fp-controlArrow.fp-prev').mouseover(function() {
		$('.fp-controlArrow.fp-next').fadeOut();
		$('.fp-controlArrow.fp-prev').fadeIn();
	})
	
	$('.half-view.float-r,.fp-controlArrow.fp-next').mouseover(function() {
		$('.fp-controlArrow.fp-prev').fadeOut();
		$('.fp-controlArrow.fp-next').fadeIn();
	})
	$('.fp-controlArrow.fp-prev').mouseover(function(e) {
		e.stopPropagation();
	})

	//header二维码显示
	$('.mobile').mousemove(function(){
		$('#head-QRcode-mobile').fadeIn();
	})
	$('.mobile').mouseout(function(){
		$('#head-QRcode-mobile').fadeOut();
	})
	$('.wechat').mousemove(function(){
		$('#head-QRcode-weChat').fadeIn();
	})

	$('.wechat').mouseout(function(){
		$('#head-QRcode-weChat').fadeOut();
	})

	//swiper5动画
	//不能用css写因为不符合hover条件
	$('.swiper5 .swiper-slide').mouseover(function(){
		// console.log($(this).index());
		var idx=$(this).index();
		$('.swiper5 .swiper-slide .name:eq('+idx+')').css('transform','translateY(0)');

	})
	$('.swiper5 .swiper-slide').mouseout(function(){
		// console.log($(this).index());
		var idx=$(this).index();
		$('.swiper5 .swiper-slide .name:eq('+idx+')').css('transform','translateY(40px)');

	})
	//解决ie不兼容hover
	var s1Name='.gallery-top .swiper-slide img,.swiper4 .swiper-slide img,.swiper6 .swiper-slide img';
	$('.swiper-container img').css('transition','all .6s');
	$(s1Name).mouseover(function(){
		$(this).css('transform','scale(1.1,1.1)');
	})
	$(s1Name).mouseout(function(){
		$(this).css('transform','scale(1,1)');
	})

    //AJAX
    // $ajax.getasdfasdf
})