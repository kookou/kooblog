---
template: post
title: Mysql 기본 명령어
slug: /development/Database/2021-05-13-mysql-commend
draft: false
priority: 0
date: 2021-05-12T22:22:02.039Z
description: |-
  If you faced with scrolling issues in Chrome - disable this flag 
  ```chrome://flags/#disable-threaded-scrolling```
category: Mysql
tags:
  - mysql
  - database
---

### Mysql

**CREATE / USE (생성/사용)**

- 데이터베이스 생성

```query
CREATE DATABASE [데이터베이스명];
```

- 데이터베이스 사용

```query
mysql> USE [데이터베이스명];

ex)
mysql> CREATE TABLE mytable(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  modelnumber VARCHAR(15) NOT NULL,
  series VARCHAR(30) NOT NULL
  );


NOT NULL 반드시입력하게만듭니다.
AUTO_INCREMENT 자동으로숫자가증가하게만듭니다.
PRIMARY KEY 기본키로지정합니다.
```

- DESCRIBE 조회

```query
데이블 필드와 관련된 정보 조회
mysql> DESCRIBE [테이블명]
```

- 데이터 조회

```query
mysql> SELECT * FROM [테이블명]
```

- 원하는 필드만 조회

```query
mysql> SELECT [필드명], [필드명] FROM [테이블명]
```

- 논리 연산자

```query
OR, AND
mysql> SELECT * FROM [테이블명] WHERE (필드명='값') OR ( 필드명 ='값');
mysql> SELECT * FROM [테이블명] WHERE (필드명='값') AND ( 필드명 ='값');
```

- 특정부분 일치하는 데이터조회 LIKE

```query
ex) 홍으로시작되는값을모두찾을경우
mysql> SELECT * FROM [테이블명] WHERE [필드명] LIKE '홍%';

ex) 홍으로시작되고뒤에 2글자가붙을경우
mysql> SELECT * FROM [테이블명] WHERE [필드명] LIKE '홍__';
```

**ORDER BY 데이터 정렬**

- 오름차순

```query
mysql> SELECT * FROM [테이블명] ORDER BY [필드명] ASC;
* ASC를 입력안하면 오름차순으로된다.
```

- 내림차순

```query
mysql> SELECT * FROM [테이블명] ORDER BY [필드명] DESC;
```

**LIMIT 선택 범위**

- 특정 위치에 있는 레코드 까지 선택

```
mysql> SELECT * FROM [필드명] LIMIT [레코드번호];
```

- 특정 위치에 있는 레코드 ~ 레코드 까지 선택

```
ex) 2번째레코드부터 4개까지선택
mysql> SELECT * FROM [필드명] LIMIT 2,4;
```

**명령어 조합**

```
명령어조합순서
SELECT FROM WHERE ORDER BY LIMIT

ex) id(int 필드), name(varchar 필드), modelnumber(varchar 필드)

mysql> SELECT id, name modelnumber FROM [테이블명]
  WHERE( id < 7 ) AND (modelnumber LIKE 'A%')
  ORDER BY name DESC
  LIMIT 3;
```

**INSERT 데이터 삽입(저장)**

- 데이터 저장

```
mysql> INSERT INTO 테이블명 (필드명, 필드명, 필드명) VALUES ('값','값', '값');
```

**UPDATE 데이터 업데이트 (수정)**

- 데이터 수정

```
mysql> UPDATE [테이블명] SET [수정하고싶은필드명] = '수정하고싶은값' WHERE [기본(PrimaryKey)필드] = '값';
```

- 다수, 여러개 수정

```
mysql> UPDATE [테이블명] SET [수정하고싶은필드명] = '수정하고싶은값', [수정하고싶은필드명] = '수정하고싶은값', [수정하고싶은필드명] = '수정하고싶은값' WHERE [기본(PrimaryKey)필드] = '값';
```

**DELETE 데이터 삭제**

```
mysql> DELETE FROM [테이블명] WHERE [필드] = '값';
```

[밥보람의 블로그](http://blog.naver.com/PostView.nhn?blogId=skybrend&logNo=90155183457)
