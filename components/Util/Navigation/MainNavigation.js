import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MainNavbar, Brand, MainNav } from './Styles';
import { Site } from '../../../lib/siteConfig';

export const MainNavigation = (props) => {
    const { currentUser } = props;
    return(
        <MainNavbar expand="lg">
            <Link href="/">
                <Brand href={'/'}>
                    <img src={'/static/img/GPS_logo_fullcolor.png'} alt={Site.meta.title} />
                </Brand>
            </Link>

                <MainNavbar.Collapse id="main-nav">
                    <MainNav className="ml-auto">
                        <Link href="/"><MainNav.Item>Home</MainNav.Item></Link>
                    </MainNav>
                </MainNavbar.Collapse>

        </MainNavbar>
    )
}
MainNavigation.propTypes = {
    currentUser: PropTypes.object
}