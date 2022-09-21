//--------------------------------------------------
//Global変数
//--------------------------------------------------
//BlueJellyのインスタンス生成
const ble = new BlueJelly();


//--------------------------------------------------
//ロード時の処理
//--------------------------------------------------
window.onload = function () {
  //UUIDの設定
  ble.setUUID("UUID1", BlueJelly.MICROBIT_UART_SERVICE, BlueJelly.MICROBIT_TX_CHARACTERISTIC);
}


//--------------------------------------------------
//Scan後の処理
//--------------------------------------------------
ble.onScan = function (deviceName) {
  document.getElementById('device_name').innerHTML = deviceName;
  document.getElementById('status').innerHTML = "found device!";
}


//--------------------------------------------------
//ConnectGATT後の処理
//--------------------------------------------------
ble.onConnectGATT = function (uuid) {
  console.log('> connected GATT!');

  document.getElementById('uuid_name').innerHTML = uuid;
  document.getElementById('status').innerHTML = "connected GATT!";
}

//--------------------------------------------------
//Write後の処理
//--------------------------------------------------
ble.onWrite = function(uuid){
    document.getElementById('uuid_name').innerHTML = uuid;
    document.getElementById('status').innerHTML = "written data"
}


//-------------------------------------------------
//ボタンが押された時のイベント登録
//--------------------------------------------------
document.getElementById('scan').addEventListener('click', function() {
      ble.scan('UUID1');
});

document.getElementById('connect').addEventListener('click', function(){
      ble.connectGATT('UUID1');
});

document.getElementById('write').addEventListener('click', function() {
    let DateNumbler = 0001
    ble.write('UUID1', DateNumbler);
});