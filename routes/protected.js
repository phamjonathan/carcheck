import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom',

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100 ) //fake async
    },
}

// const Public = () => <h3> Public </h3>
// const Protected = () => <h3> Protected </h3>