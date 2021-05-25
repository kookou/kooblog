---
template: post
title: Gatsby blog 에 code highlight 적용하기
slug: /blog/2021-05-25-gatsby-blog-gatsby-remark-highlight-code
draft: false
priority: 4
date: 2021-05-25T22:22:02.039Z
description:
category: Blog
tags:
  - npm
  - gatsby
---

브로그를 작성할때 쓰는 Markdown엔 코드를 작성할때 사용하는 문법이 있다.  
**일명 백틱 바로 &#96;&#96;&#96; 이다.**  
백틱을 사용하면 백틱과 백틱 사이의 코드들이 &#60;code&gt; 태그안에 작성되는데 이 코드라인을 언어에 맞춰 보기좋게 보여주는 방법에 대해 알아보자.

## 1. gatsby-remark-highlight-code

Gatsby의 npm 패키지 **gatsby-remark-highlight-code**  
이 패키지는 Markdown 파일 안에 작성된 코드라인을 ios 터미널과 유사한 형태로 보여준다.

- 디자인  
  ![](https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-carbon.png)
- 테마
  ![](https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-carbon-themes.png)
- 우분투 디자인
  ![](https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-ubuntu.png)
- 테마 없음
  ![](https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-none.png)
  미리 정의 된 카드는 없지만 여러 CSS 변수로 스타일을 지정할 수 있다.

## 사용방법

### **패키지 설치**

```cmd
npm install --save gatsby-transformer-remark gatsby-remark-highlight-code @deckdeckgo/highlight-code
```

먼저 패키지를 설치한다

### **gatsby-config.js에 패키지 추가**

- "gatsby-transformer-remark"를 사용하는 경우

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`
        }
      ]
    }
  }
]
```

- "gatsby-plugin-mdx"를 사용하는 경우

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: ['.mdx', '.md'],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-highlight-code`
        }
      ]
    }
  }
]
```

_추가 후 init 까먹지 말기로해_

### **페이지에 구성요소 로드 하기**

페이지 또는 구성 요소 중 하나에 @ deckdeckgo/highlight-code를 한 번 로드한다.  
_웹 사이트의 기본 파일 index.js, 또는 layout.js, 등 블로그 템플릿에 다음을 추가하거나 필요한 곳에로드하자_

```js
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
deckDeckGoHighlightElement()
```

### **옵션**

| property    | type                                                                                                                                                                                                                                                                                                                                         | default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| terminal    | carbon, ubuntu or none                                                                                                                                                                                                                                                                                                                       | carbon  |
| theme       | 3024-night , a11y-dark , blackboard , base16-dark , base16-light , cobalt , dracula , duotone , hopscotch , lucario , material , monokai , night-owl , nord , oceanic-next , one-light , one-dark , panda , paraiso , seti , shades-of-purple , solarized-dark , solarized-light , synthwave , twilight , verminal , vscode , yeti , zenburn | dracula |
| editable    | boolean                                                                                                                                                                                                                                                                                                                                      | false   |
| lineNumbers | boolean                                                                                                                                                                                                                                                                                                                                      | false   |

### **테마 적용 방법**

default 는 **carbon** 이며 **ubuntu**(Ubuntu와 유사한 컨테이너) , **none**(창 컨테이너 없음 )을 선택하여 사용할 수 있다.

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'ubuntu'
          }
        }
      ]
    }
  }
]
```

**carbon** 은 다양한 테마를 지정하여 사용할 수 있다.  
[@deckdeckgo/highlight-code](https://docs.deckdeckgo.com/?path=/story/components-highlight-code--highlight-code) 문서 에서 확인해보자

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'carbon',
            theme: 'blackboard'
          }
        }
      ]
    }
  }
]
```

### **강조라인 표기법**

한 줄 또는 여러 줄의 코드를 강조 표시 할 수있다.  
![](https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/highlight-lines.gif)

- 언어 사양 옆의 괄호 사이 {}에서 줄은 쉼표로 구분 된 목록으로 제공되어야한다.
- 단일 행을 제공 하거나 `(ex : dart{1})` 대시로 구분하여 여러 행을 제공 할 수 있다. `(ex : javascript{3-6})`
- 한 줄 또는 여러 줄을 함께 사용할 수 있다. `(ex : typescript{2, 3,4, 7, 8-15})`

**출처**  
gatsby-remark-highlight-code [Gatsby](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)

## 2. Gatsby Remark Vscode

**출처**  
Gatsby Remark Vscode [Awesome Open Source](https://awesomeopensource.com/project/andrewbranch/gatsby-remark-vscode#multi-theme-support)
