/*
	2016.4
	所有商品页面js文件
	xyf
	注：此处的域名：特指：品牌，分类，功效，价格
*/
/*全局定义*/
var GLOBAL = {};
(function() {
    var btnArea = $('.btn-area');
    var brand = $('.brand'),
        classify = $('.classify'),
        effect = $('.effect'),
        price = $('.price');
    var btnReset = btnArea.find('.reset'),
        btnSure = btnArea.find('.sure'),
        brandUl = brand.find('ul'),
        classifyUl = classify.find('ul'),
        effectUl = effect.find('ul'),
        priceUl = price.find('ul'),
        right_word_box = $('.right-word-box'),
        allUl = right_word_box.find('ul'),
        xyfBox = $('.xyf-box'),
        rightHeader = $('.right-word-header');

    var more = right_word_box.find('.more');
    var less = right_word_box.find('.less');

    var btnExpansion = rightHeader.find('.expansion');

    var btnShrink = rightHeader.find('.shrink');
    var inp = $('.inp');
    var brandList = brandUl.find('li');
    var classifyList = brandUl.find('li');
    var effectList = brandUl.find('li');
    var priceList = brandUl.find('li');
/*按钮*/
    GLOBAL.btnReset = btnReset;
    GLOBAL.btnSure = btnSure;
    GLOBAL.btnArea = btnArea;
    GLOBAL.btnExpansion = btnExpansion;
    GLOBAL.btnShrink = btnShrink;
    GLOBAL.btnMore = more;
    GLOBAL.btnLess = less;
/*ul*/
    GLOBAL.brandUl = brandUl;
    GLOBAL.classifyUl = classifyUl;
    GLOBAL.effectUl = effectUl;
    GLOBAL.priceUl = priceUl;
/*li*/
    GLOBAL.brandList = brandList;
    GLOBAL.classifyList = classifyList;
    GLOBAL.effectList = effectList;
    GLOBAL.priceList = priceList;
/*各类*/
    GLOBAL.brand = brand;
    GLOBAL.classify = classify;
    GLOBAL.effect = effect;
    GLOBAL.price = price;
/*其余*/
    GLOBAL.rwbox = right_word_box;
    GLOBAL.allUl = allUl;
    GLOBAL.xyfBox = xyfBox;
    GLOBAL.inp = inp;
    GLOBAL.rightHeader = rightHeader;

})();

   




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
function expansion(){	
		GLOBAL.btnExpansion.on('click',function(){
			GLOBAL.inp.show();
			GLOBAL.btnExpansion.hide();
			GLOBAL.btnShrink.show();
			GLOBAL.btnArea.show();
			GLOBAL.allUl.off('click');

		})
	}
/*多选收起按钮*/
function shrink(){
			GLOBAL.btnShrink.on('click',function(){
			GLOBAL.inp.hide();
			GLOBAL.btnExpansion.show();
			GLOBAL.btnShrink.hide();
			GLOBAL.btnArea.hide();
			xyf_choose();
			
		})
	}

/*更多按钮*/
function fnMore(){
	GLOBAL.btnMore.each(function(){
		var $this = $(this);
		$this.on('click',function(){
			var $parent = $this.parent();
			$parent.css('height','auto');
			$this.hide();
			$parent.find('.less').show();
		})
	})
}

/*更少按钮*/
function fnLess(){
	GLOBAL.btnLess.each(function(){
		var $this = $(this);
		$this.on('click',function(){
			var $parent = $this.parent();
			$parent.css('height','95px');
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
	GLOBAL.btnReset.on('click',function(){
		GLOBAL.inp.each(function(){
			$(this).attr('checked',false);
		})
	})
}
/*点击项目类选中*/

function xyf_choose(){
 GLOBAL.brandUl.on('click', GLOBAL.brandList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n = $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p>品牌: ' + txt + '<i class="close brand-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            GLOBAL.xyfBox.append(content);
            GLOBAL.brand.hide();
            $eTar.find('input').attr('checked',false);
        } 

    });
  GLOBAL.classifyUl.on('click', GLOBAL.classifyList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n =  $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p>分类: ' + txt + '<i class="close classify-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            GLOBAL.xyfBox.append(content);
            GLOBAL.classify.hide();
            $eTar.find('input').attr('checked',false);
        }

    });
   GLOBAL.effectUl.on('click', GLOBAL.effectList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n =  $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p>功效：' + txt + '<i class="close effect-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            GLOBAL.xyfBox.append(content);
            GLOBAL.effect.hide();
            $eTar.find('input').attr('checked',false);
        }

    });
    GLOBAL.priceUl.on('click', GLOBAL.priceList, function(e) { //点击待选区 ，添加到选中区
        var eTar = e.target;
        var $eTar = $(eTar);
        var htm = $eTar.text();
        var n = $eTar.parent().index();
        var tagTar = eTar.tagName.toLocaleLowerCase();
        if (tagTar == 'p') {
            var txt = htm;
            var content = '<p>价格：' + txt + '<i class="close price-' + n + '">+</i></p>'; //讲点击的元素在当前数值中的位置以类的形式记录下来。从而达到后续点击消失后对应的元素的出现和隐藏
            GLOBAL.xyfBox.append(content);
            GLOBAL.price.hide();
            $eTar.find('input').attr('checked',false);
        } 
    });
}


/*删除项目类删除*/
function xyf_delete(){
	var pList = GLOBAL.rightHeader.find('.close');
	GLOBAL.rightHeader.on('click',pList,function(e){
		 var eTar = e.target;
         var $eTar = $(eTar);
         var p = $eTar.parent();
         var tagTar = eTar.tagName.toLocaleLowerCase();
         if (tagTar == 'i') {
         var clsName = $eTar.attr('class');  
         var arr = clsName.split(' ')[1].split('-');
         var nub = arr[1];//数字
         var n = arr[0];//域名
         var ele = $("."+ n).find('li').eq(parseInt(nub));
         p.remove();//移除生成的p元素

         ele.show();
         switch(n){
         	case 'brand':
         		GLOBAL.brand.show();
         	break;
         	case 'classify':
         		GLOBAL.classify.show();
         	break;
         	case 'effect':
         		GLOBAL.effect.show();
         	break;
         	case 'price':
         		GLOBAL.price.show();
         	break;
         }
     }
	})
}
/*多选确定*/
function sure(){
	GLOBAL.btnSure.on('click',function(){
		var arr_0 = [];//存储当前元素所在域名
		var arr_1 = [];//存储当前元素的序号
		var valarr = [];//存储当前input元素中的
		var content = '';
		inparr = GLOBAL.rwbox.find('input:checked');
		inparr.each(function(i){
			var $this = $(this);
			var clsName = $this.attr('class');
			var array = clsName.split(' ')[1].split('-');
			var htm = $this.val();
			valarr.push(htm);
			arr_0.push(array[0]);
			arr_1.push(array[1]);
			content += content;
						
			$this.parent().hide();
			$this.attr('checked',false);
			 
		})
		$(arr_1).each(function(n){//将选中的选项在js中统一生成字符串，一次性添加
			content += '<p>价格：' + valarr[n] + '<i class="close '+ arr_0[n]+'-' + arr_1[n]+ '">+</i></p>';
		})
				GLOBAL.xyfBox.append(content);
				content = '';
				GLOBAL.btnShrink.click();//模拟点击多选收起
	})
}










showMore();//是否显示更多按钮
reset();//重置
arrowsRotate();//箭头旋转
shrink();//多选收起
expansion();//多选展开
fnMore();//收起
fnLess();//展开
xyf_choose();
xyf_delete();
sure();