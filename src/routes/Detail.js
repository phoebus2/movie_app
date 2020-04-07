import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        console.log(location);
        if (location.state) {
            return (
                <div>
                    <span>{location.state.year}</span>
                    <span>{location.state.title}</span>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
