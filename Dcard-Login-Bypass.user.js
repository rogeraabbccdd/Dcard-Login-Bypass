// ==UserScript==
// @name         Dcard login bypass
// @version      0.1
// @description  Browse Dcard without logging in
// @author       rogeraabbccdd
// @match        https://www.dcard.tw/*
// @namespace    https://github.com/rogeraabbccdd/Dcard-Login-Bypass/
// @updateURL    https://raw.githubusercontent.com/rogeraabbccdd/Dcard-Login-Bypass/master/Dcard-Login-Bypass.user.js
// @downloadURL  https://raw.githubusercontent.com/rogeraabbccdd/Dcard-Login-Bypass/master/Dcard-Login-Bypass.user.js
// @grant        none
// ==/UserScript==

let timer = setInterval(() => {
    const pos = document.body.style.position
    if(pos === 'fixed') {
        const portal = document.getElementsByClassName('__portal')[0]
        if(portal.innerText.includes('註冊 / 登入')) {
            portal.innerHTML = ''
            const top = parseInt(document.body.style.top)*-1
            document.body.style.position = ''
            document.body.style.top = ''
            window.scrollTo(0, top)
            console.log('Dcard login bypassed')
            clearInterval(timer)
        }
    }
}, 100)
