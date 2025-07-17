
document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');

    const imgLogo = "http://localhost:3845/assets/017889acd85efe87097ed475b5d46ee026236758.png";
    const imgFrame118 = "http://localhost:3845/assets/a8639d0ae786337c368845cba1867e981fc6676c.png";
    const imgBanner = "http://localhost:3845/assets/88bc0a0194e674e6a4cbf1a760e983030e4a2a5a.png";
    const imgFrame = "http://localhost:3845/assets/402aa1a487419e827dec0a7fc67232bb06f01b80.png";
    const imgFrame103 = "http://localhost:3845/assets/05b23cafff6e139afbd878d9a9bf8f40436defdb.png";
    const imgFrame104 = "http://localhost:3845/assets/6e02f2c7eaa948b4f4ba94bf41577693a46e76ec.png";
    const imgFrame105 = "http://localhost:3845/assets/5e6a4681413d60266f0ad1a4f66d70421aa7de4b.png";
    const imgFrame106 = "http://localhost:3845/assets/2c5c317ff0f66f136ca31c97e552031b9ab40689.png";
    const img = "http://localhost:3845/assets/7b5f1211cdcd66ec265e7b1aeea3bbbdaddb7404.png";
    const img1 = "http://localhost:3845/assets/f3c68c69e1adae25e92a7c1f8f8fb3f9836c110d.png";
    const img2 = "http://localhost:3845/assets/86394d3fd11774f9a35c6310cc5ad4b72e43a347.png";
    const img3 = "http://localhost:3845/assets/68d126758967cfcc1ff7a12605c88ca8e45d9455.png";
    const imgDefault = "http://localhost:3845/assets/2e55f836910465d92000de6f8f2e72477cf56bac.svg";
    const imgFrame164 = "http://localhost:3845/assets/0c4e81f528c8f6e7bf4ce60fc6c3480a4269b74c.svg";
    const imgGravityUiBell = "http://localhost:3845/assets/ebe1f1c7f4094c69a71655827c9108c31e57ad8e.svg";
    const imgGravityUiCaretDown = "http://localhost:3845/assets/9ed21041c4d320fdc4adfe1a05c1346c4d709b1e.svg";
    const imgPrev = "http://localhost:3845/assets/e189b2b002c7c6d45c419f652619be846dd3b326.svg";
    const imgFrame102 = "http://localhost:3845/assets/21e44fd1b11e7a42e9ac069a54510135a6338644.svg";
    const imgNext = "http://localhost:3845/assets/cf23d349f5711a96db5bcab575080212f325ded0.svg";

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

    function createImage(src, alt = '', className = '') {
        const img = new Image();
        img.src = src;
        img.alt = alt;
        img.className = className;
        return img;
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
        return createElement('button', { className: 'wishlist-button' }, [createImage(imgDefault)]);
    }

    function SearchBar() {
        return createElement('button', { className: 'search-bar' }, [
            createElement('div', { className: 'search-icon' }, [createImage(imgFrame164)]),
            createElement('div', { className: 'search-text' }, ['Search'])
        ]);
    }

    function Store() {
        const store = createElement('div', { className: 'store-container' }, [
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
                createElement('div', { className: 'logo' }, [createElement('div', { className: 'logo-image', style: { backgroundImage: `url('${imgLogo}')` } })]),
                createElement('div', { className: 'top-menu' }, [
                    createElement('div', { className: 'top-menu-tab active' }, ['STORE']),
                    createElement('div', { className: 'top-menu-tab' }, ['LIBRARY']),
                    createElement('div', { className: 'top-menu-tab' }, ['COMMUNITY']),
                    createElement('div', { className: 'top-menu-tab' }, ['CHAT']),
                    createElement('div', { className: 'top-menu-tab' }, ['SUPPORT'])
                ]),
                createElement('div', { className: 'user-section' }, [
                    createElement('div', { className: 'notification-bell' }, [createImage(imgGravityUiBell)]),
                    createElement('div', { className: 'user-info' }, [
                        createElement('div', { className: 'user-details' }, [
                            createElement('div', { className: 'username-dropdown' }, [
                                createElement('div', { className: 'username' }, ['Username']),
                                createElement('div', { className: 'dropdown-arrow' }, [createImage(imgGravityUiCaretDown)])
                            ]),
                            createElement('div', { className: 'balance' }, ['Balance'])
                        ]),
                        createElement('div', { className: 'avatar', style: { backgroundImage: `url('${imgFrame118}')` } })
                    ])
                ])
            ]),
            // Page Container
            createElement('div', { className: 'page-container' }, [
                createElement('div', { className: 'main-content' }, [
                    createElement('div', { className: 'main-content-inner' }, [
                        // Banner
                        createElement('div', { className: 'banner', style: { backgroundImage: `url('${imgBanner}')` } }, [
                            createElement('div', { className: 'banner-text' }, [
                                createElement('p', {}, ['EVENT BANNER'])
                            ])
                        ]),
                        // Featured Section
                        createElement('div', { className: 'featured-section' }, [
                            createElement('div', { className: 'nav-arrow' }, [createImage(imgPrev)]),
                            createElement('div', { className: 'featured-content' }, [
                                createElement('div', { className: 'featured-title' }, [
                                    createElement('p', {}, ['Featured & Recommended'])
                                ]),
                                createElement('div', { className: 'featured-display' }, [
                                    createElement('div', { className: 'featured-display-inner' }, [
                                        createElement('div', { className: 'featured-image-main', style: { backgroundImage: `url('${imgFrame}')` } }),
                                        createElement('div', { className: 'featured-info' }, [
                                            createElement('div', { className: 'thumbnail-grid' }, [
                                                createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame103}')`, gridArea: '1 / 1' } }),
                                                createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame104}')`, gridArea: '1 / 2' } }),
                                                createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame105}')`, gridArea: '2 / 1' } }),
                                                createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame106}')`, gridArea: '2 / 2' } })
                                            ]),
                                            createElement('div', { className: 'game-title' }, [createElement('p', {}, ['Game Name'])]),
                                            createElement('div', { className: 'game-info' }, [
                                                createElement('div', { className: 'tags-and-wishlist' }, [
                                                    createElement('div', { className: 'tags' }, [Tag(), Tag('Tag 2'), Tag('Tag 3')]),
                                                    Wishlist()
                                                ]),
                                                createElement('div', { className: 'price-and-platform' }, [
                                                    createElement('div', { className: 'price' }, [createElement('p', {}, ['$ 00.00'])]),
                                                    createElement('div', { className: 'platform-icons' }, [createImage(imgFrame102)])
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
                            createElement('div', { className: 'nav-arrow' }, [createImage(imgNext)])
                        ]),
                        // Game Cards Section
                        createElement('div', { className: 'game-cards-section' }, [
                            createElement('div', { className: 'nav-arrow' }, [createImage(imgPrev, '', 'lazy')]),
                            createElement('div', { className: 'game-cards-container' }, [
                                ...[img, img1, img2, img3].map((gameImg) =>
                                    createElement('div', { className: 'game-card' }, [
                                        createElement('div', { className: 'game-card-bar' }, [
                                            createElement('div', { className: 'price' }, ['$ 00.00']),
                                            Wishlist()
                                        ]),
                                        createElement('div', { className: 'game-card-image', style: { backgroundImage: `url('${gameImg}')` } })
                                    ])
                                )
                            ]),
                            createElement('div', { className: 'nav-arrow' }, [createImage(imgNext, '', 'lazy')])
                        ])
                    ])
                ])
            ]),
        ]);
        return store;
    }

    root.appendChild(Store());
});
