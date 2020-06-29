import React from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native';

export default function Loading({ loading }) {
    return (
        loading ?
            <ActivityIndicator size='large' color='#61DBFB' /> : null
    )
}

const mapStateToProps = (state) => ({loading: state.loading})

Loading = connect(mapStateToProps, null) (Loading)