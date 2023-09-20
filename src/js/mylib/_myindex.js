import './slide'; //  jQueryのtoggle再現
import './smoothscroll'; //  スムーススクロール
import buttonGotoTop from './content/btn_gototop'; //  トップに戻るボタン
import buttonHumburger from './content/btn_humburger'; //  ハンバーガー
import accessibility from './content/accessibility'; //  アクセシビリティ
import buttonModal from './content/btn_modal'; //  モーダル
import partsHeader from './content/header'; //  ヘッダー
import displayLoader from './content/disp_loader'; //  ローディング画面
import contactForm from './content/contactform'; //  コンタクトフォーム
import pageBackGround from './content/pagebackground'; //  背景処理
import osCheck from './content/oscheck'; //  OSの判別
import adjustViewport from './adjustviewport'; //  ビューポート調整
import myExternalLinks from './myexternallinks'; //  外部リンク
import eeParallax from './eeparallax/eeparallax'; //  パララックス
import buttonCookie from './content/btn_cookie'; //  クッキークラス
import webpDetection from './webp_detection'; //  WebP判定

//  練習兼、見出し背景、
import './gsap/eegsap';
//  wowの真似事、up,upgroupなどふわっと出る演出
//  ヒーローのアニメーション
import './gsap/eegsap_surface';
//  ヒーローページのSCROLL
import './gsap/eegsap_scrollbutton';
//  パララックス
import './gsap/eegsap_parallax';
//  swiperより演出数は少ないがとても軽い
import './splide-setting';


// ブレイクポイント
const bp = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
};

const btnHumburger = new buttonHumburger('.p-hamburger', ".p-spmenu__closebutton", ".l-header", ".p-spmenu");
const acsb = new accessibility();
const dispLoader = new displayLoader();
const contactform = new contactForm();
const pbg = new pageBackGround();
const oscheck = new osCheck();
const adjustviewport = new adjustViewport();
const eeparallax = new eeParallax();
const btncookie = new buttonCookie();


//----------------------------------------------------
//  ロード時初期化
//----------------------------------------------------
const init = function() {
    //  ヘッダーハンバーガーの設定
    btnHumburger.eventRegistration('.p-spmenu__inner', 'ul li a', '.l-header__buttonswrapper a');
    //  汎用キー入力関係の設定
    acsb.eventRegistration();
    //  クッキー
    btncookie.eventRegistration();

    //  トップページのみローディング画面設定
    dispLoader.init();
    if (wp_template == "front-page.php" ||
        wp_template == "home.php") {
        dispLoader.eventRegistration();
    }
    //  コンタクトフォームのページのみ設定
    if (wp_template == "page-contact.php") {
        contactform.eventRegistration();
    }

    //  OSの判別
    oscheck.markBody(); //  bodyにOS判断クラス付け(iOS Machintosh 等)

    //  ビューポートの調整
    adjustviewport.set();
};

//----------------------------------------------------
//  イベント : ロード
//----------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    init();
});

//----------------------------------------------------
//  イベント : スクロール
//----------------------------------------------------
window.addEventListener('scroll', () => {
});

//----------------------------------------------------
//  イベント : リサイズ
//----------------------------------------------------
window.addEventListener("resize", () => {
    //  ビューポートの調整
    adjustviewport.task();
});

//----------------------------------------------------
//  イベント : キー
//----------------------------------------------------
window.addEventListener("keydown", (event) =>{
    //  アクセシビリティ
    acsb.task_key( event );

    //  ハンパーガー
    if(event.key==="Escape") {
        btnHumburger.taskEsc();
    }
});
