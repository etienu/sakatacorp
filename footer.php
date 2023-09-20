<?php
/*------------------------------------------
フッター
------------------------------------------*/
?>
	<footer id="footer" class="l-footer u-color-bg__main">
		<div class="p-footer__inner">
			<ul class="p-footer__content">
				<li class="p-footer__logo">
					<picture>
						<source srcset="<?php echo GET_PATH()?>/footer/logo-footer-pc.svg">
						<img src="<?php echo GET_PATH()?>/footer/logo-footer-pc.svg" alt="SAKATA KOMUTEN" width="82" height="90">
					</picture>
				</li>
				<li class="p-footer__company">株式会社酒田工務店</li>
				<li class="p-footer__address"><span>〒123-4567</span>山形県山形市山形1-1</li>
				<li class="p-footer__tel">0120-123-456</li>
				<li class="p-footer__mail">info@example.com</li>
				<li class="p-footer__links">
					<ul class="p-footer__menulist">
						<li class="p-footer__menuitem"><a href="#concept">コンセプト</a></li>
						<li class="p-footer__menuitem"><a href="#works">施工実績</a></li>
						<li class="p-footer__menuitem no03"><a href="#news">お知らせ</a></li>
						<li class="p-footer__menuitem no04"><a href="#company">会社概要</a></li>
						<li class="p-footer__menuitem no05"><a href="#qanda">よくある質問</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="p-footer__bottom">
			<div class="p-footer__bottom__inner">
				<ul class="p-footer__bottom__menu">
					<li class="p-footer__bottom__menuitem"><a href="#" class="c-link">サイトマップ</a></li>
					<li class="p-footer__bottom__menuitem"><a href="#" class="c-link"
					data-accgroup="main" data-acc="last">
						プライバシーポリシー</a></li>
				</ul>
				<div class="p-footer__copylight">
					© SAKATAKOMUTEN inc.
				</div>
			</div>
		</div>

	</footer><!-- /footer -->


    <?php wp_footer(); ?>
