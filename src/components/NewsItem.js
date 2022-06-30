import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,desc,imageUrl,newsUrl,date,source}=this.props
        return (
            <div>
                <div className="card"  >
                   <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}... <span className="badge text-bg-info">{source}</span></h5>
                            <p className="card-text">{desc}...</p>
                            <p className="card-text"><small className="text-muted">Date-{new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem