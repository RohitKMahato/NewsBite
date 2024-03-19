import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 
  constructor(){
    super();
    console.log("hello i am a constroctuer from news components")
    this.state = {
      articles: [],
      loading: false,
      page:1

    }
}

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=93d50c1d984d4c39b92ef8e306f097af&page=1pageSize=30"
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles, totalArticles: parseData.totalResults})
    }

    handelPreviousClick = async ()=>{
      console.log("previous");
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=93d50c1d984d4c39b92ef8e306f097af&page=${this.state.page - 1}&pageSize=30`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
    }
     handelNextClick = async ()=>{

      console.log("next");
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/30)){

      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=93d50c1d984d4c39b92ef8e306f097af&page=${this.state.page + 1}&pageSize=30`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
          page: this.state.page + 1,
          articles: parseData.articles
        })
      }
    }

  render() {
    return (
      <div className="container my-5">
        <h1>NewsBite - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 50):""} description={element.description?element.description.slice(0, 150):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-secondary"onClick={this.handelPreviousClick}> &larr; Previous Page</button>
        <button type="button" className="btn btn-secondary" onClick={this.handelNextClick}>Next Page &rarr;</button>
       </div>
      </div>
    );
  }
}

export default News;
