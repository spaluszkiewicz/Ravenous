import React from 'react';
import './BusinessList.scss';
import Business from '../Business/Business'


class BusinessList extends React.Component{
    render() {
        return(
            <div className="BusinessList">
                {
                    this.props.businessProp.map((business) => {
                        return <Business business={business}/>;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;