//  https://white-space.work/css-background-using-webp/
///--------------------------------------------------------------------------------
// 
//  このファイルを読み込むと、webp対応かを判断して
//  bodyに"is-webp"または"is-no-webp"を付与します。
//
//--------------------------------------------------------------------------------

/**--------------------------------------------------------------------------------
 * ブラウザが webp をサポートしているかどうか
 *
 * @returns webp をサポートしているなら true そうでないなら false
 *--------------------------------------------------------------------------------*/
export const supportsWebp = async () => {
    if (!self.createImageBitmap){
        return false;
    }
    // webp の仮データ
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then((r) => r.blob());
    return createImageBitmap(blob).then(
        () => true,
        () => false,
    );

};


/**--------------------------------------------------------------------------------
//* webp 対応していれば target に is-webp、対応していなければ is-no-webp クラスを追加する
//*
//* @param {string} target (default: body)
//----    ----    ----    ----
//  以下をbodyに付与
//  webp に対応している … .is-webp
//  webp に対応していない … .is-no-webp
*--------------------------------------------------------------------------------*/
const addWebpDetectionClass = (target = 'body') => {
    const tar= document.querySelector(target);
    if (supportsWebp()) {
        tar.classList.add('is-webp');
    } else {
        tar.classList.add('is-no-webp');
    }
};


  // 実行
addWebpDetectionClass();
