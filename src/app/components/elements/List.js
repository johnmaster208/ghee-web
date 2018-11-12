import React, {Component} from 'react'

const List = ({ordered, items, type}) => {
    const isPrimitiveArray = items.every( item => typeof item !== 'object')
    const renderPrimitiveList = () => {
        if(type === 'bullet') {
            if(ordered) {
                return (
                    <ol className="">
                    {
                        items.map( (item, i) => {
                            return <li key={i}>{item}</li>
                        })
                    }
                    </ol>
                )
            } else {
                return (
                    <ul>
                    {
                        items.map( (item, i) => {
                            return <li key={i}>{item.name ? item.name : 'No #name attribute found...'}</li>
                        })
                    }
                    </ul>
                )
            }
        }
        if(type === 'card') {
            return (
                <div className="list-card">
                        {
                            items.map( (item, i) => {
                                return (
                                    <div className="list-card-item" key={i}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
            )
        }
    }
    const renderObjectList = () => {
        if(type === 'bullet') {
            if(ordered) {
                return (
                    <ol className="">
                        {
                            items.map( (item, i) => {
                                return <li key={i}>{item.name ? item.name : 'No #name attribute found...'}</li>
                            })
                        }
                    </ol>
                )
            } else {
                return (
                    <ul>
                        {
                            items.map( (item, i) => {
                                return <li key={i}>{item.name ? item.name : 'No #name attribute found...'}</li>
                            })
                        }
                    </ul>
                )
            }
        }
        if(type === 'card') {
            return (
                <div className="list-card">
                    {
                        items.map( (item, i) => {
                            return (
                                <div className="list-card-item" key={i}>
                                    <div className="list-card-item-profile">
                                        <div className="avatar">
                                        
                                        </div>
                                    </div>
                                    <div className="list-card-item-info">
                                        <div>
                                            <span>Id:</span>
                                            {
                                                item.id ?
                                                item.id :
                                                'No #id attribute found...'
                                            }
                                        </div>
                                        <div>
                                            <span>Name:</span>

                                            {
                                                item.name ? 
                                                item.name : 
                                                'No #name attribute found...'
                                            }
                                        </div>
                                        <div>
                                            <span>Phone:</span>

                                            {
                                                item.phone ?
                                                item.phone :
                                                'No #phone attribute found...'
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
    return (isPrimitiveArray ? renderPrimitiveList() : renderObjectList()) || null
}


export default List