---
template: post
title: Gatsby에 Disqus을 적용하여 댓글 붙이기
slug: /blog/2021-05-13-gatsby-disqus
draft: false
priority: 3
date: 2021-05-12T22:22:02.039Z
description:
category: Blog
tags:
  - disqus
  - gatsby
  - react
---

## [Disqus 공식홈](https://disqus.com/)

**적용방법**

웹 사이트 디렉토리에서 다음 명령을 실행 하여 gatsby-plugin-disqus플러그인을 npm 과 함께 종속성으로 설치하십시오.

```cmd {numberLines}
npm install --save gatsby-plugin-disqus
```

gatsby-config.js 에 Disqus 단축 이름으로 파일에 플러그인을 추가하십시오 .

```tsx {numberLines}
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `kooblog`
      }
    }
  ]
}
```

그런 다음 플러그인을 사용하여 다음 예제와 같이 페이지에 Disqus 주석 섹션을 배치 할 수 있습니다.

```tsx {numberLines}
import { Disqus } from 'gatsby-plugin-disqus';

const Template = () => (
    /* Page contents */

    <Disqus
        config={
            /* Replace PAGE_URL with your post's canonical URL variable */
            url: 'PAGE_URL',
            /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
            identifier: 'PAGE_IDENTIFIER',
            /* Replace PAGE_TITLE with the title of the page */
            title: 'PAGE_TITLE',
        }
    />
);
```

참고 [Regyu](https://www.regyu.dev/etc/start-gatsby-for-blog/)
