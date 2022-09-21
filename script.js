(function (global) {
    "use strict";

    /*
    * スロットのリール回転速度(実行毎秒数)
    */
    var sec = 20;

    /*
    * スロットのリール情報
    * ・スロットのリールelement
    * ・スロットのリール停止フラグ
    * ・スロットのリール回転数
    */
    var $reels       = [],
        stopReelFlag = [],
        reelCounts   = [];

    /*
    * 位置情報
    */
    var slotFrameHeight     = 0,
        slotReelsHeight     = 0,
        slotReelItemHeight  = 0,
        slotReelStart       = 0,
        slotReelStartHeight = 0;

    /**
     * スロット
     */
    var Slot = {
        /**
         * 初期化処理
         */
        init: function init() {
            $reels[0] = $reels[1] = $reels[2] = null;
            stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;
            reelCounts[0] = reelCounts[1] = reelCounts[2] = 0;
        },
        /**
         * スタートボタンのクリックイベント
         */
        start: function () {
            for (var index = 0; index<3; index++) {
                Slot.animation(index);
            }
        },
        /**
         * ストップボタンのクリックイベント
         */
        stop: function (index) {
            stopReelFlag[index] = true;
            if (stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]) {
                // 全リール停止したらリセットボタンを押下できるようにする
                switch(reelCounts[0]){
                    case 0:
                        if(reelCounts[1] == 6 && reelCounts[2] == 7){
                            //ここに当たり処理
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[0]', reelCounts[0]);
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 1:
                        if((reelCounts[1] == 3 || reelCounts[1] == 12) && reelCounts[2] == 8){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 2:
                        if((reelCounts[1] == 7 || reelCounts[1] == 14) && (reelCounts[2] == 1 || reelCounts[2] == 9)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 3:
                        if((reelCounts[1] == 2 || reelCounts[1] == 8 || reelCounts[1] == 11) && reelCounts[2] == 10){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 4:
                        if((reelCounts[1] == 0 || reelCounts[1] == 9) && (reelCounts[2] == 3 || reelCounts[2] == 5 || reelCounts[2] == 14)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 5:
                        if((reelCounts[1] == 4 || reelCounts[1] == 13) && (reelCounts[2] == 2 || reelCounts[2] == 4 || reelCounts[2] == 13)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 6:
                        if((reelCounts[1] == 1 || reelCounts[1] == 10) && (reelCounts[2] == 0 || reelCounts[2] == 11)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;  
                    case 7:
                        if(reelCounts[1] == 5 && reelCounts[2] == 6){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;  
                    case 8:
                        if(reelCounts[1] == 6 && reelCounts[2] == 7){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 9:
                        if((reelCounts[1] == 3 || reelCounts[1] == 12) && reelCounts[2] == 8){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 10:
                        if((reelCounts[1] == 7 || reelCounts[1] == 14) && (reelCounts[2] == 1 || reelCounts[2] == 9)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 11:
                        if((reelCounts[1] == 2 || reelCounts[1] == 8 || reelCounts[1] == 11) && reelCounts[2] == 10){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 12:
                        if((reelCounts[1] == 0 || reelCounts[1] == 9) && (reelCounts[2] == 3 || reelCounts[2] == 5 || reelCounts[2] == 14)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 13:
                        if((reelCounts[1] == 4 || reelCounts[1] == 13) && (reelCounts[2] == 2 || reelCounts[2] == 4 || reelCounts[2] == 13)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;
                    case 14:
                        if((reelCounts[1] == 1 || reelCounts[1] == 10) && (reelCounts[2] == 0 || reelCounts[2] == 11)){
                            $("#slot-frame").css( { 'background-color' : 'red' });
                            console.log('reelCounts[0]', reelCounts[0]);
                            console.log('reelCounts[1]', reelCounts[1]);
                            console.log('reelCounts[2]', reelCounts[2]);
                            value = new Uint8Array([0x04]);
                            beepCharacteristic.writeValue(value);   
                        }
                        break;  
                }
                $('.btn-reset').attr('disabled', false);
            }
        },
        /**
         * 位置情報の初期化処理
         */
        resetLocationInfo: function () {
            slotFrameHeight    = $('.slot-frame').outerHeight();
            slotReelsHeight    = $('.reels').eq(0).outerHeight();
            slotReelItemHeight = $('.reel').eq(0).outerHeight();
            slotReelStart      = 5 - 2;
            // リールの上下は、半分だけ表示させるための位置調整
            slotReelStartHeight = -slotReelsHeight;
            slotReelStartHeight = slotReelStartHeight + slotFrameHeight + ((slotReelItemHeight * 3 / 2) - (slotFrameHeight / 2));

            $('.reels').css({
                'top':slotReelStartHeight 
            });
        },
        /**
         * スロットの回転アニメーション
         * reelCounts[index] = リール上限
         * index      = リール列
         */
        animation: function (index) {
            console.log('アニメーション', '開始', index);
            if (reelCounts[index] >= 15) {
                reelCounts[index] = 0;
            }
            
            console.log('slotReelStartHeight', slotReelStartHeight);
            console.log('reelCounts[index]', reelCounts[index]);
            console.log('slotReelsHeight', slotReelsHeight);
            console.log('top', slotReelStartHeight + (reelCounts[index] * slotReelItemHeight));

            /**
             * eq関数で指定のreelをindexを取得
             * animate関数で動作を決定
             * animate リファレンス : http://semooh.jp/jquery/api/effects/animate/params%2C+options/
             */
            $('.reels').eq(index).animate({
                'top': slotReelStartHeight + (reelCounts[index] * slotReelItemHeight)
            }, {
                duration: sec,
                easing: 'linear',
                complete: function () {
                    console.log('アニメーション', '完了', index, reelCounts[index]);
                    if (stopReelFlag[index]) {
                        console.log('アニメーション', 'ストップ-', index, reelCounts[index]);
                        return ;
                    }
                    // 移動階数をカウント
                    reelCounts[index]++;
                    // スロット回転のアニメーションを実行する
                    Slot.animation(index);
                }
            });
        },
    };

    global.Slot = Slot;

})((this || 0).self || global);

/**
 * 読み込み後
 */
$(document).ready(function () {

    /*
    * スロットの初期化処理を実行
    */
    Slot.init();
    Slot.resetLocationInfo();

    /**
     * スタートボタンのクリックイベント
     */
    document.body.addEventListener('keydown',
        event => {
            if (event.key === 'b') {
                Slot.start();
                $('.btn-stop').attr('disabled', false);
            }
    });

    /**
     * リセットボタンのクリックイベント
     */
    $('.btn-reset').click(function () {
        // リセットボタンを押せないようにする
        $(this).attr('disabled', true);
        // スタートボタンを押せるようにする
        $('.btn-start').attr('disabled', false);
        // ストップボタンを押せないようにする
        $('.btn-stop').attr('disabled', true);
        // スロットのリール情報を初期化
        Slot.init();
        $("#slot-frame").css( { 'background-color' : 'white'});
    });

    /**
     * ストップボタンのクリックイベント
     */
    $('.btn-stop').click(function () {
        // ストップボタンを押せないようにする
        $(this).attr('disabled', true);
        // レールの回転を停止
        Slot.stop($(this).attr('data-val'));
    });

});

