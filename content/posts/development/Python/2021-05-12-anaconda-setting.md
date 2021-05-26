---
template: post
title: Anaconda 가상환경 생성
slug: /development/Python/2021-05-12-anaconda-setting
draft: false
priority: 0
date: 2021-05-12T22:22:02.039Z
description:
category: Python
tags:
  - anaconda
---

### Anaconda

- 아나콘다 가상환경 생성

```c {numberLines}
conda create --name(-n) // 가상환경명 설치할 패키지
//ex :
conda create --name test python=3.5
//또는
conda create --n test python=3.5
```

- 아나콘다 가상환경 활성화, 비활성화

```c {numberLines}
//설치된 가상환경 리스트 확인
conda info --envs

//가상환경 활성화
activate 가상환경명

//가상환견 비활성화
deactivate 가상환경명
```
