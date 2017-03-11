import React, { Component } from 'react'
import { PreloadWrapper } from 'ozon-ui-common'

import { Connect } from 'ozon-ui-common/lib/Middleware'
import Edit from './Edit'
import Actions from './../Actions'

const IS_PROD = process.env && process.env.NODE_ENV === 'production';

class Dictionary extends Component {

    render() {
        const store = this.props[Actions.ComponentName]
        return <PreloadWrapper
            fetching={store.IsFetching || store.IsSaving}
            blank={false}
            error={store.LoadingError}
            renderChildren={() => <Edit
                {...this.props}
                />} />
    }
}

export default Connect(Actions.ComponentName, Container)