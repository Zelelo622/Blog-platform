import React from 'react'
import { articles } from '../utils/articleObj'
import ArticleCard from './ArticleCard'

const ArticleList = () => {
  return (
    <div className='home__list'>
        {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
        ))}
    </div>
  )
}

export default ArticleList