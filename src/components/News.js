import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "Steven Taranto",
        "title": "NASCAR Cup Series at Nashville: Live updates, results, highlights from the Ally 400 - CBS Sports",
        "description": "The Cup Series race at Nashville Superspeedway is back underway after a lengthy rain delay",
        "url": "https://www.cbssports.com/nascar/news/nascar-cup-series-at-nashville-live-updates-results-highlights-from-the-ally-400/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/24/297111d2-fd09-4b50-bdb7-2dd7d0c8d78d/thumbnail/1200x675/09169300974b72c58b418ac27581b6db/gettyimages-1324580535.jpg",
        "publishedAt": "2022-06-27T02:39:00Z",
        "content": "LEBANON, Tenn. -- After rediscovering Music City's rich racing heritage, NASCAR and Nashville have proven to be a perfect pair over the last several years. Nashville's reclamation as one of the count… [+1289 chars]"
        },
        
        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "Maria Cheng",
        "title": "WHO panel: Monkeypox not a global emergency 'at this stage' - The Associated Press - en Español",
        "description": "LONDON (AP) — The World Health Organization said the escalating monkeypox outbreak in more than 50 countries should be closely monitored but does not warrant being declared a global health emergency.",
        "url": "https://apnews.com/article/covid-politics-health-united-nations-world-organization-349b235908c13a166da97653b7f028fc",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/d321f671980344be89b72aa26da63de7/2676.jpeg",
        "publishedAt": "2022-06-26T20:25:14Z",
        "content": "LONDON (AP) The World Health Organization said the escalating monkeypox outbreak in more than 50 countries should be closely monitored but does not warrant being declared a global health emergency.\r\n… [+4715 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Times"
        },
        "author": "Matthew Haag, Chelsia Rose Marcius, Lauren McCarthy",
        "title": "Pride March in New York Infused With New Sense of Urgency - The New York Times",
        "description": "The annual parade included joyous celebration, but the Supreme Court’s abortion ruling and the threat to gay rights cast an undeniable shadow.",
        "url": "https://www.nytimes.com/2022/06/26/nyregion/ny-pride-parade-abortion.html",
        "urlToImage": "https://static01.nyt.com/images/2022/06/26/us/26-nypride-top/26-nypride-top-facebookJumbo.jpg",
        "publishedAt": "2022-06-26T20:06:33Z",
        "content": "Pride has always gone back and forth between these two things: Its a riot or a celebration, said Cynthia Nixon, the actress and former candidate for governor, who marched behind the Planned Parenthoo… [+711 chars]"
        }
        ]
    constructor() {
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
    }
}
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=e4ad0235e80d46a4b09f9a6ded9e096e&page=1&pageSize=9`;
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData.totalResults)
        this.setState({articles:parsedData.articles, totalResult:parsedData.totalResults});

    }
    handlePrevClick = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=e4ad0235e80d46a4b09f9a6ded9e096e&page=${this.state.page-1}&pageSize=9`;
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })

    }
    handleNextClick = async ()=>{
        if (this.state.page+1  > Math.ceil(this.state.totalResult/9)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=e4ad0235e80d46a4b09f9a6ded9e096e&page=${this.state.page+1}&pageSize=9`;
            let data= await fetch(url);
            let parsedData= await data.json();
            this.setState({
                page:this.state.page+1,
                articles:parsedData.articles
            })}

    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>Top Heading </h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url} >
            <NewsItem  title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

        })}
        </div>
        <div className='container d-flex justify-content-between my-3'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1  > Math.ceil(this.state.totalResult/9)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News