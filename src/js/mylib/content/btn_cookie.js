//  ライブラリ js-cookie使用
//  <head>で読み込み
//--------------------------------------------------
//  アイテム
//--------------------------------------------------
class buttonCookie {
    constructor(i_parentgroup, i_btnclass, i_cookiename, i_cookietype) {
        this.parentgroup = i_parentgroup;
        this.btn = i_btnclass;
        this.cookiename = i_cookiename;
        this.cookietype = i_cookietype;

        //this.setInit();
        this.get();
        //  cssにデータをセット
        this.setcssdata();
    }

    // スクロールを禁止にする関数
    disableScroll(event) {
        event.preventDefault();
    }

    //  初期値で上書き
    setInit() {
        switch (this.cookietype) {
            case "bool":
                Cookies.set(this.cookiename, "false");
                break;

            default:
                Cookies.set(this.cookiename, "false");
                break;
        }
    }

    set(i_state) {
        Cookies.set(this.cookiename, i_state);
    }

    get() {
        //  クッキーがなければ初期値をセット
        let ret = Cookies.get(this.cookiename);
        if (typeof ret === "undefined") {
            this.setInit();
        } else {
        }
        return ret;
    }
    checktype_bool() {
        if (this.cookietype == "bool") return true;
        return false;
    }
    setcssdata() {
        this.btn.dataset.data = Cookies.get(this.cookiename);
    }

    //  グループに、このデータ名と同じデータ名があればdataを同じにする
    groupupdate() {
        let name = this.cookiename;
        this.parentgroup.forEach((target) => {
            if (target.cookiename == name) {
                target.btn.dataset.data = Cookies.get(this.cookiename);
            }
        });
    }

    toggle() {
        //  クッキー取得
        let cook = Cookies.get(this.cookiename, this.cookiestate);
        //  クッキーの
        switch (cook) {
            case "true":
                Cookies.set(this.cookiename, "false");
                //  データ属性の追加
                this.setcssdata();
                break;

            case "false":
                Cookies.set(this.cookiename, "true");
                //  データ属性の追加
                this.setcssdata();
                break;
        }
        return this.get();
    }
}



//--------------------------------------------------
//  エンジン
//--------------------------------------------------
export default class buttonCookieEngine {
    // パララックスアイテム
    constructor() {
        this.items = [];
    }

    //  アイテムの追加
    add(i_item) {
        //  クリックイベントセット
        i_item.btn.addEventListener("click", () => {
            if (i_item.checktype_bool()) {
                i_item.toggle();
            }
            i_item.groupupdate();
        });
        this.items.push(i_item);

    }

    //  処理
    task() {
    }

    //  個別アイテム処理
    taskItem(i_Item) {
    }

    //  指定クラスがあれば全部登録
    eventRegistration() {
        let jsbtns = document.querySelectorAll('.js-cookiebutton');
        let itemgroup = this.items;
        jsbtns.forEach((target) => {
            let name = target.dataset['name'] || "dummy";
            let type = target.dataset['type'] || "default";
            let data = target.dataset['data'] || "false";
            const btn = new buttonCookie(itemgroup, target, name, type);
            this.add(btn);
        });
    }
}