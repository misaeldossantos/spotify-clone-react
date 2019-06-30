import React from 'react'
import {observer} from 'mobx-react-lite'
import {inject} from 'mobx-react'

const EMPTY_RFC = () => <></>;

function create({inject: injectStores, observer: putObserver = true, render: component}) {

    if (!component) return EMPTY_RFC;

    if (putObserver) {
        component = observer(component)
    }

    if (injectStores) {
        component = inject(injectStores)(component)
    }

    return component;

}

export const Compose = create;