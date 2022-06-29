import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,desc,imageUrl,newsUrl,date,source}=this.props
        return (
            <div>
                <div classNameName="card"  >
                   <img src={imageUrl} classNameName="card-img-top" alt="..."/>
                        <div classNameName="card-body">
                            <h5 classNameName="card-title">{title}... <span className="badge text-bg-info">{source}</span></h5>
                            <p classNameName="card-text">{desc}...</p>
                            <p className="card-text"><small className="text-muted">Date-{new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem