import React from 'react'
import { Link } from 'gatsby'
import { Layout, Tag, Divider } from 'antd'
import Utterances from './Utterances'
import Content from './Content'
import Tags from './Tags'
import getCategoryColor from '../../utils/get-category-color'

const AntContent = Layout.Content

const Post = ({ post, allCategories }) => {
  const { html } = post
  const { tagSlugs, slug, categorySlug } = post.fields
  const { tags, date, category } = post.frontmatter
  let { title } = post.frontmatter
  let externalLink = null

  const isTitleLinkPattern = /(?=.*\[)(?=.*\])(?=.*\()(?=.*\))/i
  if (isTitleLinkPattern.test(title)) {
    const found = title.match(/\[(.*)]\((.*)\)/)
    title = found[1]
    externalLink = found[2]
  }

  const categoryColor = getCategoryColor({ allCategories, category })

  return (
    <AntContent className="p-10">
      <Link className="back" to="/">
        ← All Articles
      </Link>

      <div className="">
        <Content body={html} title={title} date={date} externalLink={externalLink} />
      </div>

      <div className="tag_and_categories">
        <Link to={categorySlug} className="">
          <Tag
            className={`bg-${categoryColor} text-white border-transparent cursor-pointer`}
          >
            {category}
          </Tag>
        </Link>
        <Divider type="vertical" />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Divider type="vertical" />
      </div>

      <div className="mt-10">
        <Utterances repo="kookou/comments" theme="preferred-color-scheme" />
      </div>
    </AntContent>
  )
}

export default Post
