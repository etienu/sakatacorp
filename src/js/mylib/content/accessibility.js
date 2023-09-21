//----------------------------------------
//  アクセシビリティ
//  フォーカス、入力、タブ操作など
//----------------------------------------
export default class accessibility {
    constructor() {
        //  ハンバーガー( 唯一 )
        this.acc_hamburger = document.querySelector('[data-acc="hamburger"]');
        //  固有 : グループ : メイン
        this.acc_group_main = document.querySelectorAll('[data-accgroup="main"]');
        //  固有 : グループ : SPメニュー
        this.acc_group_spmenu = document.querySelectorAll('[data-accgroup="spmenu"]');
    }

    task_key( i_event ){
        if(i_event.key==="Escape") {
            this.task_esc( i_event );
        }
        if(i_event.key==="Tab") {
            this.task_tab( i_event );
        }
        if( i_event.key=== "ArrowUp" ||
            i_event.key=== "ArrowDown"
         ) {
            this.task_Cursor( i_event );
        }
    
    }

    //----------------------------------------
    //  全体キー処理 : ESC
    //----------------------------------------
    task_esc( i_event ){
        //  現在開いている要素
        let exp = this.acc_hamburger.getAttribute( "aria-expanded" );
        //  メインハンバーガーが開いている
        if( exp == "true" ){
            //  現状ハンバーガーの方で閉じ処理している
        }
    }

    //----------------------------------------
    //  全体キー処理 : Tab
    //----------------------------------------
    task_tab( i_event ){
        //  アクティブな要素を取得
        let elm = document.activeElement;

        //  ハンバーガーが開いているかの確認
        let exp = this.acc_hamburger.getAttribute( "aria-expanded" );

        //  メインハンバーガーが開いている
        if( exp == "true" ){
            //  指定グループ(spmenu)でなければ指定グループのstartに戻す
            if( elm.dataset['accgroup'] != "spmenu" ){
                let ret = this.searchAcc( "spmenu", "start" );
                if( ret ) ret.focus();
                i_event.preventDefault();
            }
        }
        //  メインハンバーガーが閉じている
        else{
        }
    }
    //----------------------------------------
    //  全体キー処理 : カーソル
    //----------------------------------------
    task_Cursor( i_event ){
        //  アクティブな要素を取得
        let elm = document.activeElement;
        elm = elm ? elm : window;

        //  ハンバーガーが開いているかの確認
        let exp = this.acc_hamburger.getAttribute( "aria-expanded" );

        //  メインハンバーガーが開いている
        if( exp == "true" ){
            i_event.preventDefault();
        }
    }


    //----------------------------------------
    //  処理 : タブキーループ - start
    //  グループ最初でTABが押された時の処理
    //----------------------------------------
    set_TabLoop_start( i_target, i_groupName ){
        let ret;
        i_target.addEventListener("keydown", (e) => {
            if( e.key !== 'Tab') return;
            if( !e.shiftKey ) return;
            ret = this.searchAcc( i_groupName, "last" );
            if( ret ){
                ret.focus();
                e.preventDefault();
            }
        });
    }
    //----------------------------------------
    //  処理 : タブキーループ - last
    //  グループ最後でTABが押された時の処理
    //----------------------------------------
    set_TabLoop_last( i_target, i_groupName ){
        let ret;
        i_target.addEventListener("keydown", (e) => {
            if( e.key !== 'Tab') return;
            if( e.shiftKey ) return;
            ret = this.searchAcc( i_groupName, "start" );
            if( ret ){
                ret.focus();
                e.preventDefault();
            }
        });
    }

    //----------------------------------------
    //  処理 : ハンバーガー処理
    //----------------------------------------
    set_Hamburger( i_target, i_groupName ){
        let ret;
        i_target.addEventListener("keydown", (e) => {
            //  現在のaccgroupを確認
            let group = i_target.dataset['accgroup'];
            //  メインループ中
            if( group == 'main' ){
                //  何もしない
                return;
            }

            //  SPメニュー中
            if( group == 'spmenu' ){
                //  このハンバーガーがグループのどの位置か
                let grpary = [...document.querySelectorAll('[data-accgroup="spmenu"]')];
                ret = null;
                //  最初の要素 : Shift+Tabでバックしたら最後へ
                if( grpary[0] === i_target ){
                    if( e.key !== 'Tab') return;
                    if( !e.shiftKey ) return;
                    ret = this.searchAcc( "spmenu", "last" );
    
                }
                //  最後の要素 : Tabで進んだら最初の要素へ
                if( grpary[grpary.length-1] === i_target ){
                    if( e.key !== 'Tab') return;
                    ret = this.searchAcc( "spmenu", "start" );
                }

                if( ret ){
                    ret.focus();
                    e.preventDefault();
                }
            }
        });
    }

    //----------------------------------------
    //  検索 : 指定グループの、指定機能を検索
    //----------------------------------------
    searchAcc( i_groupName, i_FuncName ){
        //  指定名称のグループを全て検索
        //  スプレッド構文でノードリスト→配列化
        let accarray = [...document.querySelectorAll('[data-accgroup="'+i_groupName+'"]')];
        //  配列にして操作
        for( let i = 0 ; i < accarray.length ; i ++ ){
            let tar = accarray[i];
            //  指定名称のグループから指定名称の機能を検索
            let accfuncname = tar.dataset['acc'];
            if( accfuncname == i_FuncName ){
                return tar;
            }

        }
        return null;
    }

    //----------------------------------------
    //  登録 : 基本的なグループの設定
    //----------------------------------------
    set_group_basic( i_groupName ){
        //  グループ名でNode取得
        let aryqs = document.querySelectorAll('[data-accgroup="'+i_groupName+'"]');
        //  配列に変換
        let ary = [...aryqs];
        //  最初と最後にフラグを立てる
        ary[0].dataset['acc'] = "start";
        //  ハンバーガーの場合spmenuの一番最初にstart付けても意味がないので消す
        if( i_groupName == "spmenu" ){
            ary[0].dataset['acc'] = "";
        }

        //  配列数が２以上なら最後にlastを付ける
        if( 1 < ary.length ){
            ary[ary.length-1].dataset['acc'] = "last";
        }
        aryqs.forEach((target) => {
            //  機能名の取得
            let accfuncname = target.dataset['acc'];
            switch( accfuncname ){
            case "start" : this.set_TabLoop_start( target, i_groupName ); break;
            case "last"  :  this.set_TabLoop_last( target, i_groupName );  break;
            case "hamburger" : this.set_Hamburger( target );  break;
            }
        });
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration() {
        //  グループごとに設定
        //  「メイン」
        this.set_group_basic( "main" );
        //  「SPメニュー」
        this.set_group_basic( "spmenu" );
    }
}