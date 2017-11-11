function serialize(form) {
    var arrs=new Array();
    for(var i=0;i<form.elements.length;i++){
        var filed=form.elements[i];   //取出每一个元素
        switch (filed.type){
            case "select":
                //下拉列表的input
                break;
            case "file":
            case "button":
            case "reset":
            case "submit":
                break;
            case "radio":
            case "checkbox":
                //这里放选择框的input
                break;
            default:
                //都是一些text、password
                arrs.push( filed.name + "=" + filed.value );
        }
    }
    return arrs.join("&");
}