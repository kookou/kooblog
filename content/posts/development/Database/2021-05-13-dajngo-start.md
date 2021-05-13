---
template: post
title: Django 개념과 기본 명령어
slug: /development/Database/2021-05-13-dajngo-start
draft: false
priority: 0
date: 2021-05-12T22:22:02.039Z
description: |-
  If you faced with scrolling issues in Chrome - disable this flag 
  ```chrome://flags/#disable-threaded-scrolling```
category: development
tags:
  - django
  - database
---

## 장고?

Django란 웹사이트를 신속하게 개발하도록 도움을 주는 파이썬 웹 프레임워크  
공식문서 [Django](https://docs.djangoproject.com/ko/3.1/intro/)

### 장고를 공부할때 필요한 기본 지식

Framework : 어떤 일을 할때 자주 사용되는 기능을 미리 준비해 둔것.

- Micro : 최소한의 기능만 가지고 있다. + 추가 기능을 원하는 대로 설치해서 사용한다 (커스터마이징 굿 : Flask)
- FullStack : 거의 대부분의 기능을 가지고 있다. + 추가 기능도 설치 가능 (커스터마이징 배드 : Django)

디자인 패턴 : 개발 설계상 발생하는 문제를 해결하기 위한 해결책(디자이너,프론트,백엔드)

- MVC : Model(데이터베이스) , View(화면-프론트), Controller(계산,처리-백엔드)
- MVT : Model(데이터베이스) , Template(화면-프론트), View(계산,처리-백엔드) << 장고

### 흐름도

![django](https://laziness.xyz/images/django-cycle.jpg)

### 장고로 프로젝트 만드는 순서

1. 파이참 프로젝트 만들기
2. 장고 설치
3. 장고프로젝트 만들기
4. 설정하기 (데이터베이스, S3)
5. 관리자 계정 만들기
6. 앱만들기
7. 모델 설계 (데이터베이스)
8. 뷰 만들기 (기능, 계산)
9. 템플릿 만들기 (화면에 표시될 내용, 양식)
10. URL을 만든다.

- 대표적인 기능(화면) : CRUD ->Create , Read, Update, Delete

출처 [배우는 프로그래머](https://youtu.be/Nv_9uZ4ld9U)

### 명령어

- 장고 프로젝트 생성

```
//해당폴더에 생성
django-admin startproject config .
```

- runserver 포트변경

```
$ python manage.py runserver 8080
```

- shell 실행

```
$ python manage.py shell
```

- admin 생성

```
$ python manage.py createsuperuser
```
