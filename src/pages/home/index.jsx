import React from 'react'
import Home from '../../view/home'
export default ((Component) => {
    return class extends Home {
        render() {
            return <Component
                {...this.props}
                flag={true}
            />
        }
    }
})(Home)