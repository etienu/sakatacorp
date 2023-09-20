<?php
    $worktitle = $args['title'];
    $picfile_base = GET_PATH()."works/works-image-".$args['image']."-";
    $picfilepc = $picfile_base."pc.jpg";
    $picfilepc_webp = $picfilepc.".webp";
    $picfilesp = $picfile_base."sp.jpg";
    $picfilesp_webp = $picfilesp.".webp";
    $picalt = "works".$args['image'];
?>
            <div class="p-works__item" data-imageindex="<?php echo $args['image']; ?>" data-jsanime="surface__up">
                <div class="p-works__image">
                    <picture>
                        <source srcset="<?php echo $picfilesp_webp;?>" media="(max-width:768px)" type="image/webp" width="160" height="104">
                        <source srcset="<?php echo $picfilesp;?>" media="(max-width:768px)" width="160" height="104">
                        <source srcset="<?php echo $picfilepc_webp;?>" type="image/webp" width="320" height="240">
                        <img src="<?php echo $picfilepc;?>" alt="<?php echo $picalt;?>" width="320" height="240">
                    </picture>
                </div>
                <div class="p-works__content">
                    <h3 class="p-works__title"><?php echo $worktitle;?></h3>

                    <button class="p-works__readmore c-button__readmore p-button__readmore" data-icontype="arrow-black" data-section="works">
                        詳しく見る
                    </button>
                </div>
            </div>
