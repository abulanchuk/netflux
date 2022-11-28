import React from 'react';

export default class SecondComponent extends React.PureComponent {

    render() {
        const { text = "Page Not Found" } = this.props;

        return (
            <div>
                <h3 className={"textErr"}>{text}</h3>
            </div>
        )
    }

}