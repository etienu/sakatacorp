<?php
//===================================================
//  PHP
//      function.php用の追記ファイル
//
//      function.phpの独自記述の前に行う
//  
//===================================================
//---------------------------------------------------
//      get_templatename
//      テンプレート名取得
//---------------------------------------------------
function get_templatename(){
    global $template; // テンプレートファイルのパスを取得
    $ret = basename($template); // パスの最後の名前（ファイル名）を取得
    $temp_name = pathinfo($ret, PATHINFO_FILENAME); // ファイル名から拡張子を除く
    echo "<!-- get_templatename:".$template."-->";
    echo "<!-- get_templatename:".$ret."-->";
    echo "<!-- get_templatename:".$temp_name."-->";
    return $temp_name;
}

//---------------------------------------------------
//      get_usefilename
//      URLから拡張子を省いたファイル名のみ取得
//---------------------------------------------------
function get_usefilename(){
    $fname = "";
    //  URLからファイル名以降を取得
    $ret = end(explode('/', $_SERVER['REQUEST_URI']));
    //  ファイル名に付属する?以降を分断
    $ret = explode('?', $ret);
    //  配列が1以上ある
    if( 0< count($ret) ){
        //  .phpを省く
        $fname = basename($ret[0], ".php");
    }
    return $fname;

}

//---------------------------------------------------
//      is_post
//      投稿ページか判別
//---------------------------------------------------
function is_post(){
    $ret = get_usefilename();

    // ファイル名の表示
    if( strcmp($ret, "post" ) == 0 ) return true;

    return false;
}


//---------------------------------------------------
//      debug__echo__template
//      このページのテンプレート名を出力
//---------------------------------------------------
function debug__echo_template(){
    $fname = get_usefilename();
    // ログイン中ならデバッグ表示
    if (is_user_logged_in()){
        // ファイル名の表示
        echo "<!-- ログイン中DEBUG : '現在使用している[ファイル名]".$fname."-->";
   }

}
