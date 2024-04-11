/**
 * https://www.w3schools.com/howto/howto_html_include.asp
 */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      // 조각 페이지의 로딩 지연으로 인한, javascript 이벤트가 적용안되는 문제를 예방하기 위해 동기 방식으로 변경.
      // xhttp.open("GET", file, true);
      xhttp.open("GET", file, false);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
  if(location.href.indexOf('index.html') > 0){
    $('.pc-image img').attr('src','/images/sendphoto_pc.png')
  }

  // TODO: 홈 팝업 임시 숨기기(매번 보이니 불편함)
  // $('#main-01').modal('show')
}