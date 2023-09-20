<?php
//----------------------------------------
//  ヘッダーバー
//----------------------------------------
?>
<?php
  $homeurl = esc_url(home_url());
?>

<header class="l-header p-headerbar">

<div class="p-headerbar__inner">
  <div class="p-headerbar__startwrapper">
    <!-- ロゴ -->
    <h1 class="p-headerbar__logo">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="c-link" data-accgroup="main">
        <picture>
            <source srcset="<?php echo GET_PATH()?>/header/logo-header-pc.svg">
            <img src="<?php echo GET_PATH()?>/header/logo-header-pc.svg" alt="SAKATA KOMUTEN" width="140" height="36">
        </picture>
      </a>
    </h1>
  </div>
  <div class="p-headerbar__centerwrapper">
    <!-- ナビメニュー -->
    <div class="p-headerbar__menulist">
      <ul>
        <li class="p-headerbar__menuitem"><a href="#concept"><span>コンセプト</span><span>Concept</span></a></li>
        <li class="p-headerbar__menuitem"><a href="#works"><span>施工実績</span><span>Works</span></a></li>
        <li class="p-headerbar__menuitem"><a href="#news"><span>お知らせ</span><span>News</span></a></li>
        <li class="p-headerbar__menuitem"><a href="#company"><span>会社概要</span><span>Company</span></a></li>
        <li class="p-headerbar__menuitem"><a href="#faq"><span>よくある質問</span><span>Faq</span></a></li>
      </ul>
    </div>
  </div>

  <div class="p-headerbar__endwrapper">
    <!-- お問い合わせ・ハンバーガーボタン エリア-->
    <div class="p-headerbar__buttonarea">
      <a href="#contact" id="btnContact">
        <div class="c-button__cv p-button__cv"><span>お問い合わせ</span><span>Contact</span></div>
      </a>

      <div class="p-hamburger__wrapper">
        <button class="p-hamburger"  aria-controls="spnavigation" aria-expanded="false" data-acc="hamburger" data-accgroup="main">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
</div>

</header>

<?php
//----------------------------------------
//  SPメニュー
//----------------------------------------
?>
<div class="p-spmenu__background"></div>
<div class="p-spmenu" data-hide="true">
  <div class="p-spmenu__inner">
    <div class="p-spmenu__list__wrapper">
      <ul>
        <li><a href="<?php echo $homeurl; ?>#" data-accgroup="spmenu">TOP</a></li>
        <li><a href="<?php echo $homeurl; ?>#concept" data-accgroup="spmenu">コンセプト</a></li>
        <li><a href="<?php echo $homeurl; ?>#works" data-accgroup="spmenu">施工実績</a></li>
        <li><a href="<?php echo $homeurl; ?>#news" data-accgroup="spmenu">お知らせ</a></li>
        <li><a href="<?php echo $homeurl; ?>#company" data-accgroup="spmenu">会社概要</a></li>
        <li><a href="<?php echo $homeurl; ?>#faq" data-accgroup="spmenu">Q&A</a></li>
        <li><a href="<?php echo $homeurl; ?>#contact" data-accgroup="spmenu">
          <span></span>お問い合わせ</span></a></li>
      </ul>
    </div><!-- p-spmenu__list__wrapper -->
  </div>
</div>

<?php /* */ ?>
