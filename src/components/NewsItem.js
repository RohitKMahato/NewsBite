import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    const {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://scontent.fccu2-2.fna.fbcdn.net/v/t39.30808-6/391605092_3583318818661432_4680233351332196274_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dtt_PMeyf2kAX8jJIWI&_nc_ht=scontent.fccu2-2.fna&oh=00_AfBLmQtEVrXxuXbZog1JBhVeG6WHpemhVF_TvwJKA5t_Yg&oe=65FED291":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl}target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem