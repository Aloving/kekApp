import React from 'react';

class NotFound extends React.Component{
    componentDidMount() {
        document.title = "Ошибка";
    }

    render(){
        return(
            <div className="error404">
                <h1 className="error404__title">404</h1>
                <h3 className="error404__description">Страница не найдена :((</h3>
            </div>
        )
    }
}
export default NotFound;