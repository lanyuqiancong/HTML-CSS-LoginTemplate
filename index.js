//const container = document.querySelector('#container');
//const signInButton = document.querySelector('#signIn');
//const signUpButton = document.querySelector('#signUp');
const container = document.getElementById('container')
var signInButton = document.getElementById('signIn')
const signUpButton = document.getElementById('signUp')
signUpButton.addEventListener('click', () => container.classList.add
('right-panel-active'));
signInButton.onclick = function () {
    self.location = 'https://qiancong.me/reward/';
}

const userName = document.getElementById('userName');
const btn = document.getElementById('btn');
const userUrl =document.getElementById('userUrl');
const userDonate = document.getElementById('userDonate');
const payWay = document.getElementById('payWay');
btn.addEventListener('click',function () {
    if (userName.value.length > 15){
    userName.value="";
    window.alert("用户名过长");
    }else if (userName.value.length === 0){
    userName.value="";
    window.alert("用户名不能为空!")
    }else if (parseFloat(userDonate.value) >9999.99 || parseFloat(userDonate.value)<0.01 || userDonate.value === "" ){
        userDonate.value="";
        window.alert("打赏范围(0-9999.99)!")
    }else if ((payWay.value !== "微信") && (payWay.value !== "支付宝")){
        payWay.value = "";
        window.alert("打赏方式有误！");
    }
})
