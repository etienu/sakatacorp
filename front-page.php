<?php
/*---------------------------------------------------------
    front-page.php
    トップページ
-----------------------------------------------------------*/
?>

<!DOCTYPE html>
<html lang="ja">

<?php /* head */ ?>
<?php get_template_part(GET_PATH_R('template').'layout/combo/lc-wp-header')?>

<body class="l-header__float">

  <?php /* header bar */ ?>
  <?php get_template_part(GET_PATH_R('template').'layout/l-headerbar' ); ?>
  <?php /* 一番上に戻る */ ?>
  <?php //get_template_part(GET_PATH_R('template').'object/project/p-js-gototop' ); ?>
  <?php /* ローディング */ ?>
  <?php get_template_part(GET_PATH_R('template').'layout/l-loader' ); ?>

<main role="main">
<!-- ヒーローセクション -->
<section class="l-section p-hero">
    <div class="p-hero__background" data-jsanime="blur__in">
    </div>

    <div class="p-hero__inner">
        <div class="p-hero__content">
            <div class="p-hero__headline">
                自然に抱かれた<br class="u-display__sp">安らぎの住まい
            </div>
            <div class="p-hero__lead">
                美しい自然と豊かな住空間が<br class="u-display__sp">調和する暮らし
            </div>
            <div class="p-hero__border"></div>
        </div>
    </div>
</section>

<!-- Concept -->
<section class="l-section p-concept">
    <div class="p-concept__inner">
        <div class="c-anchor__t-40" id="concept"></div>
        <h2 class="c-headline__h2 p-headline__h2 ti1" data-subtitle="Concept">コンセプト</h2>
        <?php /* 1 */ ?>
        <div class="p-concept__group">
            <div class="p-concept__item" data-jsanime="surface__up">
                <div class="p-concept__content">
                    <h3 class="p-concept__title">自然と調和しながら暮らす家</h3>
                    <p class="p-concept__lead">
                    窓から射し込む太陽の光で目が覚め、美しい自然の風景を見ながら、朝のひと時を過ごす<span>。</span>季節折々の風景の移り変わりを身近に感じられる理想の暮らしをご提案します<span class="last">。</span>
                    </p>
                    <button class="p-concept__readmore c-button__readmore p-button__readmore" data-icontype="arrow-white" data-section="concept">
                        詳しく見る
                    </button>
                </div>
                <div class="p-concept__image">
                    <picture>
                        <source srcset="<?php echo GET_PATH()?>/concept/concept-image-sp.jpg.webp" media="(max-width: 768px)" width="375" height="360">
                        <source srcset="<?php echo GET_PATH()?>/concept/concept-image-sp.jpg" media="(max-width: 768px)" width="375" height="360">
                        <source srcset="<?php echo GET_PATH()?>/concept/concept-image-pc.jpg.webp" media="(max-width: 768px)" width="957" height="410">
                        <source srcset="<?php echo GET_PATH()?>/concept/concept-image-pc.jpg" media="(max-width: 768px)" width="957" height="410">
                        <img src="<?php echo GET_PATH()?>/concept/concept-image-pc.jpg" alt="concept"  width="957" height="410">
                    </picture>

                </div>
            </div>
        </div><!-- group -->
    </div><!-- inner -->
</section>


<!-- Works -->
<section class="l-section p-works">
    <div class="p-works__inner">
        <div class="c-anchor__t-40" id="works"></div>
        <h2 class="c-headline__h2 p-headline__h2 ti1" data-subtitle="Works">施工実績</h2>
        <?php /* 1 */ ?>
        <div class="p-works__groupwrapper">
            <div class="p-works__background__wrapper">
                <div class="p-works__background"></div>
            </div>
            <div class="p-works__group">
                <?php get_template_part(GET_PATH_R('template').'object/project/p-works-item', null, ['title' => '若木の家','image'=>'1']); ?>
                <?php get_template_part(GET_PATH_R('template').'object/project/p-works-item', null, ['title' => '長谷堂の家','image'=>'2']); ?>
                <?php get_template_part(GET_PATH_R('template').'object/project/p-works-item', null, ['title' => '荒谷の家','image'=>'3']); ?>
                <?php get_template_part(GET_PATH_R('template').'object/project/p-works-item', null, ['title' => '寺津の家','image'=>'4']); ?>
                <?php get_template_part(GET_PATH_R('template').'object/project/p-works-item', null, ['title' => '沼沢の家','image'=>'5']); ?>
                <?php get_template_part(GET_PATH_R('template').'object/project/p-works-item', null, ['title' => '青田の家','image'=>'6']); ?>
            </div><!-- group -->

        </div>
        <div class="p-works__buttonwrapper p-button__wrapper">
            <button class="c-button__lineframe p-button__lineframe">一覧を見る</こ>
        </div>
    </div><!-- inner -->
</section>


<!-- お知らせ -->
<section class="l-section p-topnews">
    <div class="p-topnews__inner">
        <div class="c-anchor__t-40" id="news"></div>
        <h2 class="c-headline__h2 p-headline__h2" data-subtitle="News">お知らせ</h2>
        <?php /* 1 */ ?>
        <div class="p-topnews__groupwrapper">
            <ul class="p-topnews__group">
                <?php get_template_part(GET_PATH_R('template').'object/project/p-topnews-item', null,
                 ['date' => '2021.07.05', 'type'=>'News', 'title' => '夏季休業のお知らせ。']); ?>
                <?php get_template_part(GET_PATH_R('template').'object/project/p-topnews-item', null,
                 ['date' => '2021.06.30', 'type'=>'Event', 'title' => 'オンライン見学会開催決定しました。']); ?>
                <?php get_template_part(GET_PATH_R('template').'object/project/p-topnews-item', null,
                 ['date' => '2021.06.25', 'type'=>'Event', 'title' => '3棟同時現場内覧会開催いたします。｜ 山形市・天童市・東根市']); ?>
            </ul><!-- group -->
        </div>
        <div class="p-button__wrapper p-topnews__buttonwrapper">
            <button class="c-button__lineframe p-button__lineframe">一覧を見る</button>
        </div>
    </div><!-- inner -->
</section>

<!-- お問い合わせ -->
<section class="l-section p-topcontact">
    <div class="p-topcontact__inner">
        <div class="c-anchor__t-40" id="contact"></div>
        <h2 class="c-headline__h2 p-headline__h2" data-subtitle="Contact">お問い合わせ</h2>
        <?php /* 1 */ ?>
        <div class="p-topcontact__groupwrapper">
            <ul class="p-topcontact__group">
                <li class="p-topcontact__item no01">
                    <div class="p-topcontact__icon">
                        <picture>
                            <source srcset="<?php echo GET_PATH()?>/common/doc-icon-pc.svg">
                            <img src="<?php echo GET_PATH()?>/common/doc-icon-pc.svg" alt="アイコン" width="27" height="32">
                        </picture>
                    </div>
                    <div class="p-topcontact__title">資料請求</div>
                    <div class="p-topcontact__content">
                        <div class="p-topcontact__buttonwrapper">
                            <button class="button c-button__lineframe p-button__lineframe" data-buttoncolor="yellow">資料請求する</button>
                        </div>
                    </div>
                </li>
                <li class="p-topcontact__item no02">
                    <div class="p-topcontact__icon">
                        <picture>
                            <source srcset="<?php echo GET_PATH()?>/common/mail-icon-pc.svg">
                            <img src="<?php echo GET_PATH()?>/common/mail-icon-pc.svg" alt="メール" width="32" height="25">
                        </picture>
                    </div>
                    <div class="p-topcontact__title">メールでの<br class="u-display__sp">お問い合わせ</div>
                    <div class="p-topcontact__content">
                        <div class="p-topcontact__buttonwrapper">
                            <button class="button c-button__lineframe p-button__lineframe" data-buttoncolor="green">問い合わせる</button>
                        </div>
                    </div>
                </li>
                <li class="p-topcontact__item no03">
                    <div class="p-topcontact__icon">
                        <picture>
                            <source srcset="<?php echo GET_PATH()?>/common/tel-icon-pc.svg">
                            <img src="<?php echo GET_PATH()?>/common/tel-icon-pc.svg" alt="電話" width="22" height="30">
                        </picture>
                    </div>
                    <div class="p-topcontact__title">お電話での<br class="u-display__sp">お問い合わせ</div>
                    <div class="p-topcontact__content">
                        <div class="p-topcontact__buttonwrapper">
                            <button class="button c-button__lineframe p-button__lineframe u-display__sp" data-buttoncolor="green">電話する</button>
                        </div>
                        <p class="tel">0120-123-456</p>
                        <p class="time">営業時間<span class="u-hidden__sp"> / </span><span>9:00</span>〜<span>18:00</span> (水曜定休)</p>
                    </div>
                </li>
            </ul><!-- group -->
        </div>
    </div><!-- inner -->
</section>



</main>

<?php get_footer(); ?>

</body>
</html>
