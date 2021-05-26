---
template: post
title: 초보를 위한 Docker 세팅과 명령어
slug: /development/Server/2021-05-14-docker-commend
draft: false
priority: 0
date: 2021-05-12T22:22:02.039Z
description: |-
  If you faced with scrolling issues in Chrome - disable this flag 
  ```chrome://flags/#disable-threaded-scrolling```
category: Server
tags:
  - docker
  - server
---

#### 초보를 위한 도커 안내서

https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html

##### 매번 세팅하기 힘들다 힘들어. 빨리 공부해야겠다.

도커 세팅 [이재홍](http://pyrasis.com/docker.html)  
가장쉽게 배우는 도커 [얄팍한 코딩사전](https://www.youtube.com/watch?v=hWPv9LMlme8)

### 도커 명령어

**출처 [얄팍한 코딩사전](https://www.yalco.kr/36_docker/)**  
명령 입력 시 permission 관련 오류가 뜨는 환경에서는 각 명령어 앞에 sudo를 붙인다.

- 도커 버전 확인

```c {numberLines}
docker - v
```

- 도커 이미지 다운만 받기

```c {numberLines}
docker pull {이미지명}:{태그}
//ex : docker pull python:3   (태그는 필수가 아님)
```

- 컴퓨터내 도커 이미지들 보기

```c {numberLines}
docker images
```

- 이미지로 컨테이너 생성하기

```c {numberLines}
docker create {옵션} {이미지명}:{태그}
//ex : docker create -it python
```

- 만들어진 컨테이너 시작하기 (이미지에 CMD로 지정해놓은 작업 시키기)

```c {numberLines}
docker start {컨테이너 id 또는 이름}
```

- 컨테이너로 들어가기 (컨테이너 내 CLI 이용하기)

```c {numberLines}
docker attach {컨테이너 id 또는 이름}
```

- 이미지를 다운받아(없을 시에만) 바로 컨테이너 실행하여 진입하기

```c {numberLines}
docker run {이미지명}:{태그}
// ex : docker -it run python:3
```

pull,create,start,attach를 한번에 실행하는 것과 같다.

| 옵션                                           | 설명                                                                        |
| ---------------------------------------------- | --------------------------------------------------------------------------- |
| -d                                             | 데몬으로 실행(뒤에서 - 안 보이는 곳(백그라운드)에서 알아서 돌라고 하기)     |
| -it                                            | 컨테이너로 들어갔을 때 bash로 CLI 입출력을 사용할 수 있도록 해 줍니다.      |
| --name {이름}                                  | 컨테이너 이름 지정                                                          |
| -p {호스트의 포트 번호}:{컨테이너의 포트 번호} | 호스트와 컨테이너의 포트를 연결합니다.                                      |
| --rm                                           | 컨테이너가 종료되면{내부에서 돌아가는 작업이 끝나면} 컨테이너를 제거합니다. |
| -v {호스트의 디렉토리}:{컨테이너의 디렉토리}   | 호스트와 컨테이너의 디렉토리를 연결합니다.                                  |

- 동작중인 컨테이너 재시작

```c {numberLines}
docker restart {컨테이너 id 또는 이름}
```

- 도커 컨테이너 내부 쉘에서 빠져나오기 (컨테이너를 종료)

```c {numberLines}
exit
또는
Ctrl + D
```

- 도커 컨테이너의 내부 쉘에서 빠져나오기 (컨테이너를 종료하지 않음)

```c {numberLines}
Ctrl + P, Q
```

- 동작중인 컨테이너들 보기

```c {numberLines}
docker ps
//동작중이 아닌 것을 포한한 모든 컨테이너를 보려면 -a 옵션을 뒤에 붙입니다.
```

- 컨테이너 삭제

```c {numberLines}
docker rm {컨테이너 id 또는 이름}
//모든 컨테이너 삭제
docker rm `docker ps -a -q`
```

- 이미지 삭제

```c {numberLines}
docker rmi {옵션} {이미지 id}
//컨테이너가 있을 시 강제삭제 : -f 옵션 사용
```

- 모든 컨테이너와 이미지 등 도커 요소 중지 및 삭제

```c {numberLines}
//모든 컨테이너 중지
docker stop ${docker ps -aq}

//사용되지 않는 모든 도커 요소(컨테이너, 이미지, 네트워크, 볼륨 등) 삭제
docker system prune -a

//아래를 복붙하여 함께 실행하면 편리하다.
docker stop $(docker ps -aq)
docker system prune -a

//확인 질문에 y로 답하고 마무리
```

- 도커 파일로 이미지 생성

```c {numberLines}
//Dockerfile 파일이 있는 디렉토리 기준. 마지막의 . 이 상대주소
docker build -t {이미지명} .
```

- 도커 컴포즈 실행

```c {numberLines}
//docker-compose 파일이 있는 디렉토리 기준
docker-compose up
```
