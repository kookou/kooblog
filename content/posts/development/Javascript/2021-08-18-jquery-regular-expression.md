---
template: post
title: script 정규표현식
slug: /development/Javascript/2021-08-18-jquery-regular-expression
draft: false
priority: 0
date: 2021-08-18T22:22:02.039Z
description: |-
  If you faced with scrolling issues in Chrome - disable this flag 
  ```chrome://flags/#disable-threaded-scrolling```
category: Javascript
tags:
  - javascript
  - jquery
---

### script 정규표현식

- email 정규표현식

```js {numberLines}

  //영문+.만 입력 가능
  var emailExp = "value";
  var result = emailExp.replace(/[^a-zA-Z.]/gi,'');

  //keyup 이벤트
  $("#email").keyup(function(){
      $(this).val( $(this).val().replace(/[^a-zA-Z.]/gi,''));
  });

  //영문+숫자만 입력가능
  var emailExp = "value";
  var result = emailExp.replace(/[^a-z0-9]/gi,'');
  
  //keyup 이벤트
  $("#email").keyup(function(){
     	$(this).val( $(this).val().replace(/[^a-z0-9]/gi,'') );
  });
  
```

- 핸드폰번호 정규표현식

```js {numberLines}

  //핸드폰 번호 숫자만 11자리 입력가능
  var mobile = "vlaue"
  var mobileNum = mobile.replace(/[^0-9]/g,"");  // 숫자만
  var result = mobileNum.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3") // 000-0000-0000 형식

  //on으로 이벤트 추가 (그려진 태그) 
  $('#mobile').on('keyup', function() {
      var originText = $('#mobile').val().replace(/[^0-9]/g,"");
      $('#mobile').val(originText.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3"));
  });

```

- 1000단위 콤마 정규표현식

```js {numberLines}

  //콤마찍기
  var num = "value";
  var result = num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

  //함수형
  function comma(str) {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  }

  //콤마풀기
  var num = "value";
  var result = num.replace(/[^\d]+/g, '');

  //함수형
  function uncomma(str) {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
  }

  //이벤트 bind 로 실시간 적용 
  $("input[name=pay]").bind('keyup keydown', function() {
      inputNumberFormat(this);
  });

  //콤마 찍은 문자열 전달
  function inputNumberFormat(obj) {
      obj.value = comma(uncomma(obj.value));
  }
  
```