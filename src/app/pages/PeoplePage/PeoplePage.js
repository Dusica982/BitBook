import React from 'react';


class PeoplePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        fetchAuthors()
            .then(authors => this.setState({ authors }))
    }

    render() {
        return (
            <div className="container author-wrapper">
                <h2>AUTHORS (6)</h2>
                <ListOfAuthors authors={this.state.authors} />
            </div>
        )
    }
}

export default PeoplePage; 