var oli = [].slice.call(document.getElementsByTagName('li'));//类数组变为数组
oli.forEach(function(ele, index){
	 ele.fetch = getStore(ele);
	ele.addEventListener('mouseenter',function(e){
		addClass(this, e, 'in');//this指dom本身
	})
	ele.addEventListener('mouseleave',function(e){
		addClass(this, e, 'out');
	})
})
//优化offsetWidth/Height，减少reflow
function getStore(save) {
    return {
        w: save.offsetWidth,
        h: save.offsetHeight
    }//返回值是指针
}

function addClass(ele, e, state) {

    var x = e.offsetX - ele.fetch.w/2;
    var y = e.offsetY - ele.fetch.h/2;
    var d = (Math.round((Math.atan2(y,x) * (180/Math.PI) + 180)/90) + 3)%4;
    var direction;
    switch(d) {
        case 0:
            direction = 'Top';
            break;
        case 1:
            direction = 'Right';
            break;
        case 2:
            direction = 'Bottom';
            break;
        case 3:
            direction = 'Left';
    }
    ele.className = state+ direction;
}