document.addEventListener('DOMContentLoaded', function () {
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
            } else {
                element[key] = attributes[key];
            }
        }
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else if (child) {
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

    function Store() {
        return createElement('div', { className: 'store-container' }, [
            createNavBar(),
            createElement('div', { className: 'main-wrapper' }, [
                createSidePanel(),
                createPageContainer()
            ])
        ]);
    }

    function createNavBar() {
        return createElement('div', { className: 'nav-bar' }, [
            createElement('div', { className: 'logo' }, [createElement('div', { className: 'logo-image', style: { backgroundImage: `url('${imgLogo}')` } })]),
            createElement('div', { className: 'top-menu' }, [
                createElement('div', { className: 'top-menu-tab active' }, ['STORE']),
                createElement('div', { className: 'top-menu-tab' }, ['LIBRARY']),
                createElement('div', { className: 'top-menu-tab' }, ['COMMUNITY']),
                createElement('div', { className: 'top-menu-tab' }, ['CHAT']),
                createElement('div', { className: 'top-menu-tab' }, ['SUPPORT'])
            ]),
            createElement('div', { className: 'user-section' }, [
                createImage(imgGravityUiBell, 'Notifications', 'notification-bell'),
                createElement('div', { className: 'user-info' }, [
                    createElement('div', { className: 'user-details' }, [
                        createElement('div', { className: 'username-dropdown' }, [
                            createElement('div', { className: 'username' }, ['Username']),
                            createImage(imgGravityUiCaretDown, 'dropdown', 'dropdown-arrow')
                        ]),
                        createElement('div', { className: 'balance' }, ['Balance'])
                    ]),
                    createElement('div', { className: 'avatar', style: { backgroundImage: `url('${imgFrame118}')` } })
                ])
            ])
        ]);
    }

    function createSidePanel() {
        return createElement('div', { className: 'side-panel' }, [
            createElement('div', { className: 'side-menu-inner' }, [
                createElement('button', { className: 'search-bar' }, [
                    createImage(imgFrame164, 'Search', 'search-icon'),
                    createElement('span', { className: 'search-text' }, ['Search'])
                ]),
                createElement('button', { className: 'side-tab', onclick: () => window.location.href = 'wishlist.html' }, ['Wishlist']),
                createElement('button', { className: 'side-tab' }, ['My Cart']),
                createElement('button', { className: 'side-tab' }, ['Your Store']),
                createElement('button', { className: 'side-tab' }, ['New & Noteworthy']),
                createElement('button', { className: 'side-tab' }, ['Special Offers']),
                createElement('button', { className: 'side-tab', onclick: () => window.location.href = 'popular.html' }, ['Popular']),
                createElement('button', { className: 'side-tab' }, ['Free To Play']),
                createElement('button', { className: 'side-tab' }, ['Categories']),
                createElement('button', { className: 'side-tab' }, ['Genres']),
                createElement('button', { className: 'side-tab' }, ['Points Shop']),
                createElement('button', { className: 'side-tab' }, ['Steam Gift Cards']),
                createElement('button', { className: 'side-tab' }, ['Steam Deck']),
                createElement('button', { className: 'side-tab' }, ['News']),
                createElement('button', { className: 'side-tab' }, ['Labs'])
            ])
        ]);
    }

    function createPageContainer() {
        return createElement('div', { className: 'page-container' }, [
            createElement('div', { className: 'main-content' }, [
                createBanner(),
                createFeaturedSection(),
                createGameCardsSection()
            ])
        ]);
    }

    function createBanner() {
        return createElement('div', { className: 'banner', style: { backgroundImage: `url('${imgBanner}')` } }, [
            createElement('div', { className: 'banner-text' }, ['EVENT BANNER'])
        ]);
    }

    function createFeaturedSection() {
        return createElement('div', { className: 'featured-section' }, [
            createImage(imgPrev, 'Previous', 'nav-arrow prev-arrow'),
            createElement('div', { className: 'featured-content' }, [
                createElement('div', { className: 'featured-title' }, ['Featured & Recommended']),
                createElement('div', { className: 'featured-display' }, [
                    createElement('div', { className: 'featured-image-main', style: { backgroundImage: `url('${imgFrame}')` }, onclick: () => window.location.href = 'game_details.html' }),
                    createElement('div', { className: 'featured-info' }, [
                        createElement('div', { className: 'thumbnail-grid' }, [
                            createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame103}')` } }),
                            createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame104}')` } }),
                            createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame105}')` } }),
                            createElement('div', { className: 'thumbnail', style: { backgroundImage: `url('${imgFrame106}')` } })
                        ]),
                        createElement('div', { className: 'game-title', onclick: () => window.location.href = 'game_details.html' }, ['Game Name']),
                        createElement('div', { className: 'game-info' }, [
                            createElement('div', { className: 'tags-and-wishlist' }, [
                                createElement('div', { className: 'tags' }, [
                                    createElement('div', { className: 'tag' }, ['Tag']),
                                    createElement('div', { className: 'tag' }, ['Tag 2']),
                                    createElement('div', { className: 'tag' }, ['Tag 3'])
                                ]),
                                createElement('button', { className: 'wishlist-button' }, [createImage(imgDefault, 'Wishlist', 'wishlist-icon')])
                            ]),
                            createElement('div', { className: 'price-and-platform' }, [
                                createElement('div', { className: 'price' }, ['$ 00.00']),
                                createImage(imgFrame102, 'Platforms', 'platform-icons')
                            ])
                        ])
                    ])
                ]),
                createSlideshowControls()
            ]),
            createImage(imgNext, 'Next', 'nav-arrow next-arrow')
        ]);
    }

    function createSlideshowControls() {
        const controls = createElement('div', { className: 'slideshow-controls' });
        for (let i = 0; i < 12; i++) {
            const button = createElement('button', { className: `slideshow-button ${i === 0 ? 'active' : ''}` });
            controls.appendChild(button);
        }
        return controls;
    }

    function createGameCardsSection() {
        return createElement('div', { className: 'game-cards-section' }, [
            createImage(imgPrev, 'Previous', 'nav-arrow prev-arrow'),
            createElement('div', { className: 'game-cards-container' }, [
                createGameCard(img),
                createGameCard(img1),
                createGameCard(img2),
                createGameCard(img3)
            ]),
            createImage(imgNext, 'Next', 'nav-arrow next-arrow')
        ]);
    }

    function createGameCard(image) {
        return createElement('div', { className: 'game-card' }, [
            createElement('div', { className: 'game-card-image', style: { backgroundImage: `url('${image}')` }, onclick: () => window.location.href = 'game_details.html' }),
            createElement('div', { className: 'game-card-bar' }, [
                createElement('div', { className: 'price' }, ['$ 00.00']),
                createElement('button', { className: 'wishlist-button' }, [createImage(imgDefault, 'Wishlist', 'wishlist-icon')])
            ])
        ]);
    }

    root.appendChild(Store());
});