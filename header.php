<head>
<!-- Google Analytics -->
<?php /*
	<!-- preconnect : 事前接続 -->
	<link rel="preconnect" href="https://google-analytics.com">
	*/	?>
<!-- Google Analytics END -->
	<meta charset="UTF-8">
<?php /* CSS and JavaScript */ ?>
	<script><?php global $template;?>const wp_template = "<?php echo basename( $template ); ?>";</script>
<?php /* Base */ ?>
	<?php wp_head(); ?>
<?php /*
	// プラグインでSEO記述行う場合は不要
	<meta name="description" content="<?php bloginfo('description'); ?>">
	*/?>
<?php /* Setting */ ?>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="canonical" href="<?php echo get_pagenum_link(1); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="format-detection" content="email=no,telephone=no,address=no">

	<!-- favicon -->
	<link rel="shortcut icon" href="<?php echo GET_PATH();?>common/favicon/favicon.ico">
    <link rel="apple-touch-icon" href="<?php echo GET_PATH();?>common/favicon/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" type="image/png" href="<?php echo GET_PATH();?>common/favicon/android-touch-icon.png" sizes="192x192">
	<!-- favicon画像の背景色、Windowsタイルの背景色 -->
	<meta name="msapplication-TileColor" content="RGB(100,150,80)">
<?php /* モバイル向け */ ?>
	<!-- スマホブラウザのバーの色 -->
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="white">
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black">
<?php /* noindex */ ?>
<?php if (is_page('contact-thanks')) : ?>
	<meta name="robots" content="noindex,nofollow">
	<?php endif; ?>
</head>
