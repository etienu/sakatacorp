//----------------------------------------
//  ハンバーガー
//----------------------------------------
export default class buttonHumburger {
    constructor(i_id, i_closebtn, i_header, i_spmenu) {
        this.btn = document.querySelector(i_id);
        this.closebtn = document.querySelector(i_closebtn);
        this.header = document.querySelector(i_header);
        this.spmenu = document.querySelector(i_spmenu);
        //  バックグラウンド
        this.background = document.querySelector(".p-spmenu__background");
    }

    // スクロールを禁止にする関数
    disableScroll(event) {
        event.preventDefault();
    }
    addScrollStop() {
        document.addEventListener('touchmove', this.disableScroll, { passive: false });
        document.addEventListener('wheel', this.disableScroll, { passive: false });
    }
    removeScrollStop() {
        document.removeEventListener('touchmove', this.disableScroll, { passive: false });
        document.removeEventListener('wheel', this.disableScroll, { passive: false });
    }

    //  ハンバーガー開く
    open() {
        this.btn.classList.toggle("open");
        this.spmenu.classList.toggle("open");
        this.background.classList.toggle("open");
        //  開いた スクロール停止
        if (this.btn.classList.contains("open")) {
            //  非表示 → 表示
            this.spmenu.dataset['hide'] = "false";
            this.addScrollStop();
            //  ハンバーガーのアクセシビリティ属性変更(メイン→SPMENU)
            this.btn.setAttribute( "aria-expanded", "true" );
            this.btn.dataset['accgroup'] = "spmenu";
            this.btn.dataset['acc'] = "start";
        }
        //  閉じた スクロール解除
        else {
            this.close();
        }
    }

    //  ハンバーガー閉じる( 主にメニュークリック時 )
    close() {
        this.btn.classList.remove("open");
        this.spmenu.classList.remove("open");
        this.background.classList.remove("open");
        // スクロール解除
        this.removeScrollStop();
        //  ハンバーガーのアクセシビリティ属性変更(SPMENU→メイン)
        this.btn.setAttribute( "aria-expanded", "false" );
        this.btn.dataset['accgroup'] = "main";
        this.btn.dataset['acc'] = "";
    }

    //  ESCキーの処理
    taskEsc(){
        this.close();
    }

    //  各種イベントの登録
    eventRegistration(i_inner, i_ullia, i_contact) {
        //  元
        //  クリックイベントセット
        this.btn.addEventListener("click", () => { this.open(); });
        //  ul liのメニューがクリックされたら閉じる
        let str_ullia = i_inner + " " + i_ullia;
        let spmenu_li_a = document.querySelectorAll(str_ullia);
        spmenu_li_a.forEach((lia) => {
            lia.addEventListener("click", () => { this.close(); });
        });

        //  コンタクトボタンが押されたら閉じる
        let str_contact = i_inner + " " + i_contact;
        let spmenu_contact = document.querySelectorAll(str_contact);
        if (spmenu_contact) {
            spmenu_contact.forEach((lia) => {
                lia.addEventListener("click", () => { this.close(); });
            });
        }

        //  閉じるボタンが押されたら閉じる
        if (this.closebtn) {
            this.closebtn.addEventListener("click", () => { this.close(); });
        }
        //  閉じる時にアニメーション監視
        this.spmenu.addEventListener('transitionend', () => {
            //  アニメーション終了時にopenが付いてない = closeした
            if (!this.spmenu.classList.contains("open")) {
                console.log(this.spmenu.dataset);
                //  非表示→表示
                this.spmenu.dataset['hide'] = "true";
            }
        });
    }
}