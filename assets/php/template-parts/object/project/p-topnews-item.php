<?php
    $txt_date = $args['date'];
    $txt_type = $args['type'];
    //  文字列によってフラグ付与
    $txt_type_flag = "";
    if( strcmp( $txt_type,"News" ) == 0 ){ $txt_type_flag = " news"; }
    if( strcmp( $txt_type,"Event" ) == 0 ){ $txt_type_flag = " event"; }
    $txt_title = $args['title'];
?>
            <li class="p-topnews__item" data-jsanime="surface__up">
                <div class="p-topnews__date"><?php echo $txt_date;?> <span class="p-topnews__type<?php echo $txt_type_flag;?>"><?php echo $txt_type;?></span></div>
                <div class="p-topnews__title"><?php echo $txt_title;?></div>
            </li>
