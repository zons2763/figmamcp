
document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');

    function createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);
        for (const key in attributes) {
            if (key === 'style' && typeof attributes[key] === 'object') {
                for (const styleKey in attributes[key]) {
                    element.style[styleKey] = attributes[key][styleKey];
                }
            } else if (key.startsWith('data-')) {
                element.setAttribute(key, attributes[key]);
            } else {
                element[key] = attributes[key];
            }
        }
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
        return element;
    }

    function createSvg(viewBox, paths) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', viewBox);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('preserveAspectRatio', 'none');
        svg.setAttribute('class', 'block size-full');

        paths.forEach(pathData => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            for (const attr in pathData) {
                path.setAttribute(attr, pathData[attr]);
            }
            svg.appendChild(path);
        });
        return svg;
    }

    function Tag(text = 'Tag') {
        return createElement('div', { className: 'tag' }, [text]);
    }

    function Slideshow(isActive = false) {
        const button = createElement('button', {
            className: `slideshow-button ${isActive ? 'active' : ''}`,
        });
        return button;
    }

    function Wishlist() {
        const svg = createSvg('0 0 18 16', [{
            'clip-rule': 'evenodd',
            'd': 'M1.3596 1.5564C2.274 0.552 3.5796 0 5.112 0C6.5088 0 8.0004 0.66 9 1.9512C9.9936 0.6612 11.4792 0 12.888 0C14.4168 0 15.72 0.5496 16.6368 1.5516C17.544 2.5452 18 3.906 18 5.4156C18 8.0148 16.6644 10.1064 14.9736 11.7324C13.2876 13.3548 11.1696 14.592 9.414 15.5004C9.28541 15.5669 9.14268 15.6014 8.99791 15.601C8.85314 15.6006 8.7106 15.5653 8.5824 15.498C6.8268 14.58 4.7088 13.3524 3.0228 11.7384C1.332 10.1172 0 8.0328 0 5.4168C0 3.9108 0.4536 2.55 1.3596 1.5564ZM2.6904 2.7684C2.1444 3.3684 1.8 4.2648 1.8 5.4168C1.8 7.3656 2.7792 9.012 4.2684 10.4376C5.6436 11.7552 7.3884 12.8196 9.0024 13.6836C10.6044 12.8316 12.3504 11.7588 13.7268 10.4352C15.2184 8.9988 16.2 7.3452 16.2 5.4168C16.2 4.2612 15.8544 3.3648 15.3072 2.7648C14.7696 2.178 13.968 1.8012 12.888 1.8012C11.7168 1.8012 10.3764 2.5548 9.8556 4.1412C9.7967 4.3217 9.68222 4.47895 9.52855 4.59046C9.37487 4.70196 9.18987 4.76201 9 4.76201C8.81013 4.76201 8.62513 4.70196 8.47145 4.59046C8.31778 4.47895 8.2033 4.3217 8.1444 4.1412C7.6248 2.5572 6.27 1.8012 5.112 1.8012C4.0284 1.8012 3.228 2.178 2.6904 2.7684Z',
            'fill': 'var(--fill-0, white)',
            'fill-rule': 'evenodd'
        }]);
        return createElement('button', { className: 'wishlist-button' }, [svg]);
    }

    function SearchBar() {
        const searchIcon = createSvg('0 0 14 14', [{
            'clip-rule': 'evenodd',
            'd': 'M10.6762 6.10045C10.6762 6.70135 10.5579 7.29637 10.3279 7.85153C10.098 8.40669 9.76092 8.91112 9.33602 9.33602C8.91112 9.76092 8.40669 10.098 7.85153 10.3279C7.29637 10.5579 6.70135 10.6762 6.10045 10.6762C5.49955 10.6762 4.90453 10.5579 4.34937 10.3279C3.79421 10.098 3.28978 9.76092 2.86488 9.33602C2.43998 8.91112 2.10293 8.40669 1.87297 7.85153C1.64302 7.29637 1.52466 6.70135 1.52466 6.10045C1.52466 4.88688 2.00675 3.72301 2.86488 2.86488C3.72301 2.00675 4.88688 1.52466 6.10045 1.52466C7.31403 1.52466 8.4779 2.00675 9.33602 2.86488C10.1941 3.72301 10.6762 4.88688 10.6762 6.10045ZM9.84243 10.9203C8.6165 11.872 7.07394 12.3208 5.52878 12.1752C3.98362 12.0296 2.55202 11.3007 1.52542 10.1367C0.498826 8.97274 -0.0455953 7.46129 0.00299355 5.91005C0.0515825 4.35881 0.689528 2.88439 1.78696 1.78696C2.88439 0.689528 4.35881 0.0515825 5.91005 0.00299355C7.46129 -0.0455953 8.97274 0.498826 10.1367 1.52542C11.3007 2.55202 12.0296 3.98362 12.1752 5.52878C12.3208 7.07394 11.872 8.6165 10.9203 9.84243L13.7573 12.6794C13.8322 12.7492 13.8923 12.8334 13.934 12.927C13.9757 13.0205 13.9981 13.1215 13.9999 13.2239C14.0017 13.3263 13.9829 13.428 13.9445 13.523C13.9061 13.6179 13.849 13.7042 13.7766 13.7766C13.7042 13.849 13.6179 13.9061 13.523 13.9445C13.428 13.9829 13.3263 14.0017 13.2239 13.9999C13.1215 13.9981 13.0205 13.9757 12.927 13.934C12.8334 13.8923 12.7492 13.8322 12.6794 13.7573L9.84243 10.9203Z',
            'fill': 'var(--fill-0, white)',
            'fill-opacity': '0.7',
            'fill-rule': 'evenodd'
        }]);
        return createElement('button', { className: 'search-bar' }, [
            createElement('div', { className: 'search-icon' }, [searchIcon]),
            createElement('div', { className: 'search-text' }, ['Search'])
        ]);
    }

    function Store() {
        const store = createElement('div', { className: 'store-container' }, [
            // Page Container
            createElement('div', { className: 'page-container' }, [
                createElement('div', { className: 'main-content' }, [
                    createElement('div', { className: 'main-content-inner' }, [
                        // Banner
                        createElement('div', { className: 'banner' }, [
                            createElement('div', { className: 'banner-text' }, [
                                createElement('p', {}, ['EVENT BANNER'])
                            ])
                        ]),
                        // Featured Section
                        createElement('div', { className: 'featured-section' }, [
                            createElement('div', { className: 'nav-arrow' }, [/* prev arrow svg */]),
                            createElement('div', { className: 'featured-content' }, [
                                createElement('div', { className: 'featured-title' }, [
                                    createElement('p', {}, ['Featured & Recommended'])
                                ]),
                                createElement('div', { className: 'featured-display' }, [
                                    createElement('div', { className: 'featured-display-inner' }, [
                                        createElement('div', { className: 'featured-image-main' }),
                                        createElement('div', { className: 'featured-info' }, [
                                            createElement('div', { className: 'thumbnail-grid' }, [
                                                createElement('div', { className: 'thumbnail', style: { gridArea: '1 / 1' } }),
                                                createElement('div', { className: 'thumbnail', style: { gridArea: '1 / 2' } }),
                                                createElement('div', { className: 'thumbnail', style: { gridArea: '2 / 1' } }),
                                                createElement('div', { className: 'thumbnail', style: { gridArea: '2 / 2' } })
                                            ]),
                                            createElement('div', { className: 'game-title' }, [createElement('p', {}, ['Game Name'])]),
                                            createElement('div', { className: 'game-info' }, [
                                                createElement('div', { className: 'tags-and-wishlist' }, [
                                                    createElement('div', { className: 'tags' }, [Tag(), Tag('Tag 2'), Tag('Tag 3')]),
                                                    Wishlist()
                                                ]),
                                                createElement('div', { className: 'price-and-platform' }, [
                                                    createElement('div', { className: 'price' }, [createElement('p', {}, ['$ 00.00'])]),
                                                    createElement('div', { className: 'platform-icons' }, [/* platform icons svg */])
                                                ])
                                            ])
                                        ])
                                    ])
                                ]),
                                createElement('div', { className: 'slideshow-controls' }, [
                                    Slideshow(true), Slideshow(), Slideshow(), Slideshow(), Slideshow(),
                                    Slideshow(), Slideshow(), Slideshow(), Slideshow(), Slideshow(),
                                    Slideshow(), Slideshow()
                                ])
                            ]),
                            createElement('div', { className: 'nav-arrow' }, [/* next arrow svg */])
                        ]),
                        // Game Cards Section
                        createElement('div', { className: 'game-cards-section' }, [
                            createElement('div', { className: 'nav-arrow' }, [/* prev arrow svg */]),
                            createElement('div', { className: 'game-cards-container' }, [
                                ...Array(4).fill(0).map(() =>
                                    createElement('div', { className: 'game-card' }, [
                                        createElement('div', { className: 'game-card-bar' }, [
                                            createElement('div', { className: 'price' }, ['$ 00.00']),
                                            Wishlist()
                                        ]),
                                        createElement('div', { className: 'game-card-image' })
                                    ])
                                )
                            ]),
                            createElement('div', { className: 'nav-arrow' }, [/* next arrow svg */])
                        ])
                    ])
                ])
            ]),
            // Side Panel
            createElement('div', { className: 'side-panel' }, [
                createElement('div', { className: 'side-panel-inner' }, [
                    createElement('div', { className: 'side-menu' }, [
                        createElement('div', { className: 'side-menu-inner' }, [
                            SearchBar(),
                            createElement('button', { className: 'side-tab' }, ['Wishlist']),
                            createElement('div', { className: 'side-tab' }, ['My Cart']),
                            createElement('div', { className: 'side-tab' }, ['Your Store']),
                            createElement('div', { className: 'side-tab' }, ['New & Noteworthy']),
                            createElement('div', { className: 'side-tab' }, ['Special Offers']),
                            createElement('button', { className: 'side-tab' }, ['Popular']),
                            createElement('div', { className: 'side-tab' }, ['Free To Play']),
                            createElement('div', { className: 'side-tab' }, ['Categories']),
                            createElement('div', { className: 'side-tab' }, ['Genres']),
                            createElement('div', { className: 'side-tab' }, ['Points Shop']),
                            createElement('div', { className: 'side-tab' }, ['Steam Gift Cards']),
                            createElement('div', { className: 'side-tab' }, ['Steam Deck']),
                            createElement('div', { className: 'side-tab' }, ['News']),
                            createElement('div', { className: 'side-tab' }, ['Labs'])
                        ])
                    ])
                ])
            ]),
            // Nav Bar
            createElement('div', { className: 'nav-bar' }, [
                createElement('div', { className: 'logo' }, [createElement('div', { className: 'logo-image' })]),
                createElement('div', { className: 'top-menu' }, [
                    createElement('div', { className: 'top-menu-tab active' }, ['STORE']),
                    createElement('div', { className: 'top-menu-tab' }, ['LIBRARY']),
                    createElement('div', { className: 'top-menu-tab' }, ['COMMUNITY']),
                    createElement('div', { className: 'top-menu-tab' }, ['CHAT']),
                    createElement('div', { className: 'top-menu-tab' }, ['SUPPORT'])
                ]),
                createElement('div', { className: 'user-section' }, [
                    createElement('div', { className: 'notification-bell' }, [/* bell svg */]),
                    createElement('div', { className: 'user-info' }, [
                        createElement('div', { className: 'user-details' }, [
                            createElement('div', { className: 'username-dropdown' }, [
                                createElement('div', { className: 'username' }, ['Username']),
                                createElement('div', { className: 'dropdown-arrow' }, [/* arrow svg */])
                            ]),
                            createElement('div', { className: 'balance' }, ['Balance'])
                        ]),
                        createElement('div', { className: 'avatar' })
                    ])
                ])
            ])
        ]);
        return store;
    }

    root.appendChild(Store());
});
