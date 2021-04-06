var repeater = function() {};
//var spans = document.getElementsByTagName('span');
var i = 0;

function startAnimation() {
    //document.write($('input').val(this.value()));
    repeater = setInterval(animation, 150);
}

function stopAnimation() {
    clearInterval(repeater);
}

function animation() {
    $(`span:eq(${i == 0 ? $('span').length - 1 : i - 1})`).css({
        'font-size' : '200%',
        'color' : 'black'
    });
    $(`span:eq(${i})`).css({
        'font-size': $('input').val() + '%',
        'color' : caseForSelect($('select option:selected').text())
    });
    i = (i + 1) % $('span').length;
}

/*function animation() {
    spans[i == 0 ? spans.length - 1 : i - 1].style.cssText = `
        font-size: 200%;
    `;
    spans[i].style.cssText = `
        font-size: 300%;
        color: ${$("#select option:selected").text};
    `;
    i = (i + 1) % spans.length;
}*/

function caseForSelect(str) {
    switch (str) {
        case 'Чёрный': return 'black'; break;
        case 'Красный': return 'red'; break;
        case 'Зелёный': return 'green'; break;
        case 'Синий': return 'blue'; break;
    }
}