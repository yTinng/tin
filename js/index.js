window.onload=function () {
    //关闭导航banner S
    alert("请试着点击顶部 我的订单,免费注册和我的360");
    var banner=document.getElementById("banner");
    var close=document.getElementById("close");
    var h_search=document.getElementById("h_search");
    close.onclick=function () {
        banner.style.display="none";
        h_search.style.marginTop="55px";
    };
    //关闭导航 E
    //红包二维码 S
    var hb=document.getElementById("hb");
    var hide=document.getElementById("hide");
    hb.onmouseover=function () {
        hide.style.display="block";
    }
    hb.onmouseout=function () {
        hide.style.display="none";
    }
    //红包二维码 E
    //floor S
    var floor=function (fid,pid) {
    var floors=document.getElementById(fid);
        var lis=floors.getElementsByTagName("li");
        var pics=document.getElementById(pid);
        var imgs=pics.getElementsByTagName("div");
        for (var i = 0; i < lis.length; i++) {
            lis[i].index=i;
            lis[i].onclick=function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className="";
                    imgs[i].className="hide";
                }
                this.className="active";
                imgs[this.index].className="show";
            }

        }

    }
    floor("floor1","pic1");
    floor("floor2","pic2");
    floor("floor3","pic3");
    //floor E

}
