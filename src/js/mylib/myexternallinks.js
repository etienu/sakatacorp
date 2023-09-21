//----------------------------------------
//
//  WP External Linksの代わり
//  全a hrefにチェックを入れ、外部なら外部ページ処理する
//
//
//----------------------------------------
export default class myExternalLinks {
    constructor() {
        //  全てのa hrefを取得
        this.hrefs = document.querySelectorAll('a');
    }

    //  外部リンクの修正
    fixingExternalLinks() {
        this.hrefs.forEach((target) => {
            let url = target.href;
            var reg = new RegExp("^(https?:)?\/\/" + location.hostname);
            if (url.match(reg) || url.charAt(0) === "/") {
            }
            //  外部リンクである
            else {
                let fexception = false;
                //  例外判定
                if (url.indexOf('twitter.com/etienu352') !== -1) {
                    fexception = true;
                }
                if (!fexception) {
                    let acls = "c-link__exicon";
                    if (target.classList.contains("exi-xs")) {
                        acls += " c-link__exicon--xs";
                    } else if (target.classList.contains("exi-md")) {
                        acls += " c-link__exicon--md";
                    }

                    //属性追加
                    target.setAttribute("rel", "noopener noreferrer");
                    target.setAttribute("target", "_blank");
                    //  fontawesome軽量型
                    if (true) {
                        let ne = document.createElement('i');
                        ne.setAttribute("class", "fa-solid fa-external-link-alt");
                        target.appendChild(ne);
                    }
                }
            }
        });
    }
}