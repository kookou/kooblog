---
template: post
title: SQL 명령어 컬럼명으로 테이블찾기
slug: /development/Database/2021-06-18-sql-commend
draft: false
priority: 0
date: 2021-06-18T22:22:02.039Z
description: |-
  If you faced with scrolling issues in Chrome - disable this flag 
  ```chrome://flags/#disable-threaded-scrolling```
category: Mysql
tags:
  - mysql
  - mssql
  - database
---

### Mssql

**컬럼명으로 테이블 찾기**

- 컬럼명이 정확할때

```SQL {numberLines}
SELECT  TABLE_NAME,
  COLUMN_NAME,
  DATA_TYPE,
  CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME = '컬럼명'
```

- 컬럼명이 정확하지 않을떄

```SQL {numberLines}
SELECT  TABLE_NAME,
  COLUMN_NAME,
  DATA_TYPE,
  CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME like '%컬럼명%'
```


### Mysql

**컬럼명으로 테이블 찾기**

- 컬럼명이 정확할때

```SQL {numberLines}
SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME='컬럼명';
```

- 컬럼명이 정확하지 않을떄

```SQL {numberLines}
SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME LIKE '%컬럼명%';
```

- 스키마를 알고 있을때

```SQL {numberLines}
SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME LIKE '%컬럼명%' AND TABLE_SCHEMA='디비명';
```