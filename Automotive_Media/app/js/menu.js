var btn_start_mirror = document.getElementById("btn-start-mirror");
var btn_stop_mirror = document.getElementById("btn-stop-mirror");
var btn_back_main = document.getElementById("btn-to-main");
var btn_go_game = document.getElementById("btn-to-game");
var displayIdFrom = 0;
var displayIdTo = 1;

btn_start_mirror.addEventListener("click", function () {
  console.log("Start Mirror");
  setMirrorAPP(true);
});

btn_stop_mirror.addEventListener("click", function () {
  console.log("Stop Mirror");
  setMirrorAPP(false);
});

btn_back_main.addEventListener("click", function () {
  console.log("Back to Main");
  switchApp("com.automotive.infotainment");
});

btn_go_game.addEventListener("click", function () {
  console.log("Go to Game");
  switchApp("com.automotive.game");
});

document.addEventListener("DomContentLoaded", function () {
  displayIdFrom = getForegroundAppInfo();
});

/**
 * 애플리케이션의 미러 모드를 설정합니다.
 * @param {boolean} isMirror - 미러링을 활성화 또는 비활성화할지 여부를 나타냅니다.
 *
 * API 사용 - luna://com.webos.surfacemanager/setAppMirroring
 */
async function setMirrorAPP(isMirror) {
  // [개발] 미러링 설정 구현
}

/**
 * 현재 화면에 표시되는 애플리케이션의 정보를 가져옵니다.
 * @returns {number} 현재 화면에 표시되는 애플리케이션의 디스플레이 ID를 반환합니다.
 *
 * API 사용 - luna://com.webos.surfacemanager/getForegroundAppInfo
 */
function getForegroundAppInfo() {
  // [개발] 현재 화면에 표시되는 앱 정보 가져오기 구현
}

/**
 * 두 번째 디스플레이 없이 디스플레이 미러링이 불가능한 경우 사용자에게 알립니다.
 *
 * API 사용 - luna://com.webos.notification/createToast
 */
function notifyPossibleMirror() {
  // [개발] 사용자에게 알림 구현
}

/**
 * 지정된 appId로 애플리케이션을 전환합니다.
 *
 * @param {string} appId - 전환할 앱의 ID입니다.
 *
 * API 사용 - luna://com.webos.service.applicationmanager/launch
 */
function switchApp(appId) {
  // [개발] 앱 전환 구현
}

/**
 * 지정된 URI와 매개변수를 사용하여 서비스를 호출합니다.
 * @param {string} uri - 호출할 서비스의 URI입니다.
 * @param {Object} params - 서비스에 전달할 매개변수입니다.
 * @returns {Promise} 성공한 경우 서비스의 응답으로 해결되는 프로미스이며, 실패한 경우 응답으로 거부됩니다.
 */
function callService(uri, params) {
  return new Promise((resolve, reject) => {
    // [개발] webOSServiceBridge 객체 생성 구현

    console.log(`uri: ${uri}`);
    // [개발] service callback 호출 구현

    // [개발] service call 호출 구현
  });
}
