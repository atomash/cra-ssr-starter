import React, { Component } from 'react'
import { RedirectWithStatus } from '../lib'

export default class TestRedirect extends Component {
    render() {
        return (
            <RedirectWithStatus
            status={302}
            from="/red"
            to="/"
            />
        )
    }
}

   