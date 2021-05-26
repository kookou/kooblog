---
template: post
title: Gitbash 명령어
slug: /development/Software/2021-05-14-gitbash-commend
draft: false
priority: 0
date: 2021-05-12T22:22:02.039Z
description: |-
  If you faced with scrolling issues in Chrome - disable this flag 
  ```chrome://flags/#disable-threaded-scrolling```
category: Software
tags:
  - git
---

### git bash 명렁어

&#32;
**깃허브 커밋하기**

- 리모트 저장소 변경사항 불러오기 - PULL

```js {numberLines}
$ git pull [리모트 저장소 이름] [브랜치 이름]
```

- 리모트 저장소 변경사항 올리기 - PUSH

```js {numberLines}
$ git push [리모트 저장소 이름] [브랜치 이름]
```

- 변경사항 저장 - COMMIT

```js {numberLines}
$ git commit -m "[커밋설명]"
```

- 커밋 취소 후 해당 파일 staged 상태로 working directory에 보존

```js {numberLines}
$ git reset --soft HEAD^
```

- 커밋 취소 후 해당 파일 unstaged 상태로 working directory에 보존

```js {numberLines}
$ git reset --mixed HEAD^
```

- 마지막 두 개의 커밋을 취소

```js {numberLines}
$ git reset HEAD~2
```

- 커밋을 취소하고 해당 파일 unstaged 상태로 working directory에서 삭제

```js {numberLines}
$ git reset --hard HEAD^
```

&#32;
**커맨드창 명령어**

- 커맨드창 화면 초기화

```js {numberLines}
Ctrl + L
```

- 명령어 맨 앞 / 맨 뒤로 이동

```js {numberLines}
Ctrl + A / Ctrl + E
```

- 디렉토리 이동

```js {numberLines}
$ cd [이동할 하위 디렉토리명]
```

- 디렉토리 생성

```js {numberLines}
$ mkdir [현재 경로에 생성할 디렉토리명]
```

- 디렉토리 삭제

```js {numberLines}
$ git rm -r [삭제할 디렉토리명]
```

- 디렉토리 목록 조회 (2 가지)

```js {numberLines}
$ dir
$ ls
```

- 파일 내용 조회

```js {numberLines}
$ cat [파일명]
```

&#32;
**리모트 저장소 연결**

- 리모트 저장소에 Github 원격저장소 연결정보 추가

```js {numberLines}
$ git remote add origin [자신의 Github 원격저장소 주소]
```

- 리모트 저장소 초기화

```js {numberLines}
$ git init
```

- 리모트 저장소 연결정보 조회

```js {numberLines}
$ git remote show [리모트 저장소 이름]
```

- 리모트 저장소 연결정보 url만 조회

```js {numberLines}
$ git config --get remote.[리모트 저장소 이름].url
```

- 리모트 저장소 연결정보 url 수정

```js {numberLines}
$ git remote set-url [리모트 저장소 이름] [url]
```

- 리모트 저장소 연결조회

```js {numberLines}
$ git remote -v
```

- 리모트 저장소 이름 변경

```js {numberLines}
$ git remote rename [기존 저장소 이름] [변경할 저장소 이름]
```

- 리모트 저장소 삭제

```js {numberLines}
$ git remote rm [삭제할 저장소 이름]
```

- 리모트 브랜치 삭제

```js {numberLines}
$ git push [리모트 저장소 이름] --delete [삭제할 브랜치 이름]
```

&#32;
**커밋 이력 조회**

- 깃허브 커밋 상태 조회

```js {numberLines}
$ git status
```

- 커밋 이력 상세 조회

```js {numberLines}
$ git log
```

- 커밋 이력 중 커밋 ID, 타이틀만 조회

```js {numberLines}
$ git log --oneline
```

- 모든 브랜치 커밋 이력 조회

```js {numberLines}
$ git log --oneline --decorate --graph --all
```

- 특정 파일 커밋 이력 조회

```js {numberLines}
$ git log --[파일명.파일확장자]
```

- 모든 commit, reset 등 로그 이력 조회

```js {numberLines}
$ git reflog
```

- 조회된 헤드숫자를 확인하여 해당 시점으로 파일 복구

```js {numberLines}
$ git reset --hard HEAD@{헤드숫자}
```

&#32;
**브랜치**

- 브랜치 확인

```js {numberLines}
$ git branch
```

- 서버 브랜치 확인

```js {numberLines}
$ git branch -r
```

[시뮝 연구소](https://simuing.tistory.com/entry/Git-Bash-명령어-정리)
