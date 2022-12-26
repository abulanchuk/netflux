import React from "react";
import AddMovie from "../AddMovie";
import {connect} from "react-redux";

class AddMovieContainer extends React.Component {
    render() {
        return <AddMovie/>
    }
}

const mapStateToProps = () => {
    return {
        title: state.addMovie.name
    };
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieContainer);