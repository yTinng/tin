/**
 * Created by THINKPAD on 2016/10/28.
 */
function userNameT(){
    var userName = document.getElementById('userName');
    userName.className = '';
    var userNameTips = document.getElementById('userNameTips');
    userNameTips.innerHTML = '';
    if(userName.value.length == 0){
        userName.className = 'checkin';
        userNameTips.innerHTML="用户名不能为空";
        return false;
    }
}
function  passWordT() {
    var passWord =document.getElementById('passWord');
    passWord.className = '';
    var passWordTips = document.getElementById('passWordTips');
    passWordTips.innerHTML ='';
    if(passWord.value.length ==0){
        passWord.className="checkin";
        passWordTips.innerHTML="内容不能为空"
        return false;
    }
    var reg = /^\d{6}$/;
    if(reg.test(passWord.value)){
        return true ;
    }else{
        passWord.className='checkin';
        passWordTips.innerHTML="密码必须为六位数";
        return false;
    }
}
function repassWordT() {
    var passWord = document.getElementById('passWord')
    var repassWord = document.getElementById('repassWord');
    repassWord.className = '';
    var repassWordTips = document.getElementById('repassWordTips');
    repassWordTips.innerHTML = '';
    if (repassWord.value.length == 0) {
        repassWord.className = 'checkin';
        repassWordTips.innerHTML = "内容不能为空";
        return false;
    }
    if (repassWord.value !== passWord.value) {
        repassWord.className = 'checkin';
        repassWordTips.innerHTML = "密码不符，请再输入密码";
        return false;
    }
    return true;
}
    function checkform() {
        return userNameT() && passWordT() && repassWordT();
    }
