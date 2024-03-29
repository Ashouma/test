'use strict';

const UUID = '7530f362-3daa-11ed-b878-0242ac120002';
const SERVICE_UUID = '7530F8E4-3DAA-11ED-B878-0242AC120002';
let g_characteristic = {};
const $light = document.querySelector('#light');
const $bulb = document.querySelector('.bulb');

const ledToggel = () => {
  g_characteristic.readValue()
  .then((val) => {
    let led_state = val.getUint8(0); //値読み取り
    led_state = led_state ? 0 : 1;
    g_characteristic.writeValue(new Uint8Array([led_state]));
    toggelClass(led_state);
  })
}

const main = () => {
  return navigator.bluetooth.requestDevice({acceptAllDevices:true, optionalServices:[UUID]})
  .then(device => {
    console.log(device);
    console.log('> Name:             ' + device.name);
    console.log('> Id:               ' + device.id);
    console.log('> Connected:        ' + device.gatt.connected);
    console.log('--デバイスに接続中です...--');
    return device.gatt.connect();
  })
  .then(server => {
      console.log('Getting ___ Service...');
      return server.getPrimaryService(UUID);
  })
  .then(service => {
      console.log('Getting ____ Characteristic...');
      return service.getCharacteristic(SERVICE_UUID);
    })
  .then(characteristic => {
      g_characteristic = characteristic;
      $light.removeEventListener('click',main);
      $light.addEventListener('click',ledToggel);
      return characteristic;
    })
  .catch(error => {
    console.log('Argh! ' + error);
  });
}

/**
 * 
 */
function toggelClass(led_state){
  if(led_state){
    addClass('#ff0000');
  }else{
    removeClass();
  }
}

function removeClass(){
    $bulb.style.background = '#bbb';
    $bulb.style.boxShadow = '';
    $bulb.classList.remove("light_up");
}

function addClass(color){
    $bulb.style.background = color;
    $bulb.style.boxShadow = `0 -10px 100px ${color}`;
    $bulb.classList.add("light_up");
}

$light.addEventListener('click', main);