import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chroma from 'chroma-js';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Text } from "../../components/base/Text";
import { StyledView, View } from "../../components/base/View";
import { Compose } from "../../components/common/Compose";
import { Logo } from "../../components/static/Logo";

const items = [{
    label: 'Inicio',
    icon: faHome,
    href: "/music/inicio"
}, {
    label: 'Busca',
    icon: faSearch,
    href: "/music/busca"
}];

export const MenuLateral = Compose({

    inject: ['routing'],

    render({routing}) {
        
        const location = useLocation()
        const pathName = location.pathname

        const index = items.findIndex(item => pathName.startsWith(item.href))

        return <Container>

            <View style={{padding: 20}}>
                <Logo size={140} />
            </View>

            <View>

                {items.map((item, index) => <Link key={index} to={item.href}><MenuItem active={pathName.startsWith(item.href)}>
                    <FontAwesomeIcon icon={item.icon} size={"1x"} />
                    <Text size={10}>{item.label}</Text>
                </MenuItem></Link>)}

                {index != -1 && <ActiveBar height={40} index={index} />}

            </View>
        </Container>
    }

});

const Container = StyledView.attrs({internalDistance: 10})(props => `
    width: 230px;
    box-shadow: -14px -23px 116px 26px rgba(0,0,0,0.48);
    background-color: ${chroma(props.theme.bgPrimary).alpha(0.8)};
    
`);

const MenuItem = StyledView.attrs({
    internalDistance: 15,
    direction: 'row',
    alignCenter: true
})(({active}) => `

    cursor: pointer;
    padding: 20px 20px 10px 20px;
        
    transition: all 0.2s;
    color: ${chroma("white").alpha(0.6)}
    font-weight: 700;
    
    :hover {
        color: white;
    }

    ${active? `
        color: white; 
    `: ''}
`);

const ActiveBar = StyledView(({index, theme, height}) => `
    content: "";
    ${height? `height: ${height}px;`: ''}
    ${index && height? `transform: translateY(${index * height}px);`: ''}
    transition: transform 0.2s;
    display: block;
    position: absolute;
    top: 5px;
    left: 0;
    bottom: 5px;
    width: 4px;
    background-color: ${theme.colorPrimaryActive};
`);