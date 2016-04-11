/*
	2016.4
	所有商品页面js文件
	xyf
*/
/*全局定义*/
var btnReset = $('.btn-area').find('.reset');
var btnSure = $('.btn-area').find('.sure');
var btnArea = $('.btn-area');
var brandUl = $('.brand').find('ul');
var classifyUl = $('.classify').find('ul');
var effectUl =  $('.effect').find('ul');
var priceUl =  $('.price').find('ul');
var brand = $('.brand');
var classify = $('.classify');
var effect =  $('.effect');
var price =  $('.price');
var right_word_box =  $('.right-word-box');
var allUl = right_word_box.find('ul');



var rightHeader = $('.right-word-header');
/*left 箭头旋转*/
	function arrowsRotate(){
		var arrows = $('.left-classify').find('.sanjiao');
		var h1 = $('.left-classify').find('h1');
		h1.each(function(i){
			var $this = $(this);
			var arrow = $this.find('.sanjiao');
			var ul = $this.next();
			/*var ulWidth = (ul.find('a').length)*33;
			ul.attr('height',ulWidth+'px');*/
			var a = ul.find('a');
			
			$this.on('click',function(){//点击后  ul隐藏，箭头旋转
				if (arrow.hasClass('angle')) {
					arrow.removeClass('angle');
					a.css('height','33px');
					h1.eq(i+1).css('border-top-style', 'solid')
				}else{
					a.css('height',0);
				    arrow.addClass('angle');
				    h1.eq(i+1).css('border-top-style','none')
				}
				
			})
		})
	}
/*多选展开按钮*/
var btnExpansion = $('.right-word-header').find('.expansion');
var inp = $('.inp');
var btnShrink = $('.right-word-header').find('.shrink');
	function expansion(){	
		btnExpansion.on('click',function(){
			inp.show();
			btnExpansion.hide();
			btnShrink.show();
			btnArea.show();
			allUl.off('click');

		})
	}
/*多选收起按钮*/
function shrink(){
			btnShrink.on('click',function(){
			inp.hide();
			btnExpansion.show();
			btnShrink.hide();
			btnArea.hide();
			xyf_choose();
			
		})
	}

/*更多按钮*/
var more = right_word_box.find('.more');
var less = right_word_box.find('.less');
function fnMore(){
	more.each(function(){
		var $this = $(this);
		$this.on('click',function(){
			var $parent = $this.parent();
			$parent.css('overflow','visible');
			$this.hide();
			$parent.find('.less').show();
		})
	})
}
/*更少按钮*/
function fnLess(){
	less.each(function(){
		var $this = $(this);
		$this.on('click',function(){
			var $parent = $this.parent();
			$parent.css('overflow','hidden');
			$this.hide();
			$parent.find('.more').show();
		})
	})
}

/*是否显示more按钮*/
function showMore(){//如果选项过少则无需显示更多按钮
	var brandLilength = $('.brand').find('li').length;
	var classifyLilength = $('.classify').find('li').length;
	var effectLilength = $('.effect').find('li').length;
	var priceLilength = $('.price').find('li').length;
	if (brandLilength > 14) {
		$('.brand').find('.more').show();
	}
	if (classifyLilength > 14) {
		$('.classify').find('.more').show();
	}
	if (effectLilength > 14) {
		$('.effect').find('.more').show();
	}
	if (priceLilength > 14) {
		$('.price').find('.more').show();
	}

}
/*reset重选按钮*/
function reset(){
	
	btnReset.on('click',function(){
		inp.each(function(){
			$(this).attr('checked',false);
		})
	})
}
/*点击项目类选中*/
var brandList = brandUl.find('li');
var classifyList = brandUl.find('li');
var effectList = brandUl.find('li');
var priceList = brandUl.find('li');
function xyf_choose(){
 brandUl.on('click', brandList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n = $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p class=one-' + n + '>品牌: ' + txt + '<i class="close one-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            rightHeader.append(content);
            brand.hide();
            $eTar.find('input').attr('checked',false);
        } 

    });
  classifyUl.on('click', classifyList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n =  $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p class=two-' + n + '>分类: ' + txt + '<i class="close two-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            rightHeader.append(content);
            classify.hide();
            $eTar.find('input').attr('checked',false);
        }

    });
   effectUl.on('click', effectList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n =  $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p class=three-' + n + '>功效：' + txt + '<i class="close three-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            rightHeader.append(content);
            effect.hide();
            $eTar.find('input').attr('checked',false);
        }

    });
    priceUl.on('click', priceList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n = $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p class=four-' + n + '>价格：' + txt + '<i class="close four-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            rightHeader.append(content);
            price.hide();
            $eTar.find('input').attr('checked',false);
        } 
    });
}


/*删除项目类删除*/
function xyf_delete(){
	var pList = rightHeader.find('.close');
	rightHeader.on('click',pList,function(e){
		 var eTar = e.target;
         var $eTar = $(eTar);
         var p = $eTar.parent();
         var tagTar = eTar.tagName.toLocaleLowerCase();
         if (tagTar == 'i') {
         var s = $eTar.attr('class');  
         var arr = s.split('-');
         var nub = arr[1];//数字
         var n = arr[0];//英文数字
         n = n.split(' ')[1];
         p.hide();
         switch(n){
         	case 'one':
         		brand.show();
         	break;
         	case 'two':
         		classify.show();
         	break;
         	case 'three':
         		effect.show();
         	break;
         	case 'four':
         		price.show();
         	break;
         }
     }
	})
}










showMore();
reset();
arrowsRotate();
shrink();
expansion();
fnMore();
fnLess();
xyf_choose();
xyf_delete();
