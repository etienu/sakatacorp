//----------------------------------------
//  c-title modan
//----------------------------------------
let textWrappers = document.querySelectorAll('[data-jstype="heading-eff"]');
textWrappers.forEach((textWrapper) => { //配列
    let bgcl,bgcr,bg,text;

    let base = textWrapper.querySelector('[data-headingparts="base"]'); //  ベース
    if( base == null ) return;

    bg   = base.querySelector('[data-headingparts="bg"]');
    bgcl = base.querySelector('[data-headingparts="boxlu"]'); //  左上角
    bgcr = base.querySelector('[data-headingparts="boxrb"]'); //  右下角
    lead = base.querySelector('[data-headingparts="lead"]');

    let title = textWrapper.querySelector('.js__title');
    gsap.fromTo(bgcl, { autoAlpha: 0, rotate: -270, scale: 0.5 }, {
        autoAlpha: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: bg,
            start: 'top center+=50%',
            toggleActions: 'play pause resume reverse', 
        }
    });
    gsap.fromTo(bgcr, { autoAlpha: 0, rotate: 270, scale: 0.5 }, {
        autoAlpha: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: bg,
            start: 'top center+=50%',
            toggleActions: 'play pause resume reverse', 
        }
    });

    //  背景
    gsap.fromTo(bg, { autoAlpha: 0, x: '10%' }, {
        autoAlpha: 1,
        duration: 3,
        x: 0,
        ease: 'Power4.easeOut',
        scrollTrigger: {
            trigger: bg,
            start: 'top center+=50%',
            toggleActions: 'play pause resume reverse', 
        }
    });

    gsap.fromTo(lead, { x: '-160%' }, {
        rotate: 0,
        x: '-50%',
        ease: 'Power4.easeOut',
        duration: 2,
        scrollTrigger: {
            trigger: lead, //アニメーションが始まるトリガーとなる要素
            toggleActions: 'play pause resume reverse', 
            start: 'top center+=50%' //アニメーションが始まる位置を指定
        }
    });
})



//----------------------------------------
//  ヘッダー : li
//----------------------------------------
let header_li_a_span = document.querySelectorAll('.p-header__nav ul li a span');
let header_li_a = document.querySelectorAll('.p-header__nav ul li a');
//文字列（テキスト）を分割しspanで囲む
function js_li_splitspan() {
    header_li_a_span.forEach(target => {
        let newText = '';
        const text = target.textContent;
        const result = text.split('');
        for (let i = 0; i < result.length; i++) {
            newText += '<span>' + result[i] + '</span>';
        }
        target.innerHTML = newText;
    });
}

js_li_splitspan();
header_li_a.forEach((h_lia) => {
    let li_a_i = h_lia.querySelector('[data-parts="boxlt"]'); //  左上角
    let li_a_u = h_lia.querySelector('[data-parts="boxrb"]'); //  右下角
    let li_a_span = h_lia.querySelector('[data-parts="text"]'); //  aの下の文字列格納span

    // 初期の状態(取ってきたドット・テキストは最初は非表示)
    // ドットとテキストを非表示
    gsap.set([li_a_i, li_a_u], { opacity: 0 });
    // timelineを作成（各アニメーションを連動させる）
    const tl = gsap.timeline();
    // toで状態を変化させる
    let ani = tl.to(
        li_a_i, {
            rotate: 180,
            duration: 0.2,
            opacity: 1
        },
    ).to(
        li_a_u, {
            rotate: 180,
            duration: 0.3, // 0.3秒かけてアニメーション
            opacity: 1
        },
    );
    ani.pause();
    h_lia.addEventListener("mouseenter", () => ani.play());
    h_lia.addEventListener("mouseleave", () => ani.reverse());
});


//====================================================================
//----------------------------------------
//  blur_in : 「出現時ブラー」
//----------------------------------------
{
    let eff_classs = document.querySelectorAll('[data-jsanime="blur__in"]');
    eff_classs.forEach((target) => {
        gsap.set( target, { filter: "blur(10px)" });
        const tl = gsap.timeline();
        tl.to(
            target, { filter: "blur(0px)", duration: 2 }
        );
    });
}