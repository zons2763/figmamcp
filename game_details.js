document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    const imgImage = "http://localhost:3845/assets/f0565267d9ca07332cc629cfa907c6ac56fca06e.png";
    const imgFrame100 = "http://localhost:3845/assets/b29fa3d22cb60fb34ecf6529066b9f2a28907cf8.png";
    const imgFrame132 = "http://localhost:3845/assets/9f4e8a18ef12c09b22a5ba461708c81d9f28ac40.png";
    const imgFrame133 = "http://localhost:3845/assets/2c9c8519b0ed967bf9008708aa1a47a39847237d.png";
    const imgImage1 = "http://localhost:3845/assets/5812abb6ddd6abee0672e6d9443a5f5dab06d0dd.png";
    const imgImage2 = "http://localhost:3845/assets/daae28df7e7cc51dd12332caa9b6d41a57f7d1f9.png";
    const imgImage3 = "http://localhost:3845/assets/b52092c3a47e094da523d38ddb50218870fe0cb7.png";
    const imgImage4 = "http://localhost:3845/assets/734ed6f77703576582339a7e42aaf9ec33b5288e.png";
    const imgImage5 = "http://localhost:3845/assets/55b96933b5a1ab493c385a354bf75dbb15374d20.png";
    const imgImage6 = "http://localhost:3845/assets/5badf8bd2905c663ca85f6ec17fc007b26200975.png";
    const imgImage7 = "http://localhost:3845/assets/9512d77729d2b69cd004f8febc43a090e17ef239.png";
    const imgImage8 = "http://localhost:3845/assets/8b1d348dec8a29cc8c82848405799edcb73c9eab.png";
    const imgImage9 = "http://localhost:3845/assets/fc77e333b944def321f7b88d7d236c85bfddf933.png";
    const imgLogo = "http://localhost:3845/assets/017889acd85efe87097ed475b5d46ee026236758.png";
    const imgFrame117 = "http://localhost:3845/assets/a8639d0ae786337c368845cba1867e981fc6676c.png";
    const imgGravityUiHeart = "http://localhost:3845/assets/d1a5f99e6fd143f33a50b581ceca081c8a24b4d1.svg";
    const imgGravityUiShoppingCart = "http://localhost:3845/assets/3ec343bb11c494db0c4af14e3548f2ad4df920b2.svg";
    const imgFrame164 = "http://localhost:3845/assets/0c4e81f528c8f6e7bf4ce60fc6c3480a4269b74c.svg";
    const imgGravityUiBell = "http://localhost:3845/assets/96680d7ae1394c5233cb990961ef7e488db0fab8.svg";
    const imgGravityUiCaretDown = "http://localhost:3845/assets/9ed21041c4d320fdc4adfe1a05c1346c4d709b1e.svg";

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

    function GameDetails() {
        return createElement('div', { className: 'game-details-container' }, [
            createNavBar(),
            createElement('div', { className: 'main-wrapper' }, [
                createSidePanel(),
                createPageContainer()
            ])
        ]);
    }

    function createNavBar() {
        return createElement('div', { className: 'nav-bar' }, [
            createElement('button', { className: 'logo', onclick: () => window.location.href = 'index.html' }, [
                createElement('div', { className: 'logo-image', style: { backgroundImage: `url('${imgLogo}')` } })
            ]),
            createElement('div', { className: 'top-menu' }, [
                createElement('button', { className: 'top-menu-tab', onclick: () => window.location.href = 'index.html' }, ['STORE']),
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
                    createElement('div', { className: 'avatar', style: { backgroundImage: `url('${imgFrame117}')` } })
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
                createElement('button', { className: 'side-tab', onclick: () => window.location.href = 'index.html' }, ['Your Store']),
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
                createGameTitleSection(),
                createGameInfoLayout(),
                createAboutGameSection()
            ])
        ]);
    }

    function createGameInfoLayout() {
        return createElement('div', { className: 'game-info-layout' }, [
            createGameDetailsMain(),
            createGameDetailsSidebar()
        ]);
    }

    function createGameTitleSection() {
        return createElement('div', { className: 'game-title-section' }, [
            createElement('div', { className: 'game-title' }, ['Game Name'])
        ]);
    }

    function createGameDetailsMain() {
        return createElement('div', { className: 'game-details-main' }, [
            createElement('div', { className: 'game-media' }, [
                createElement('div', { className: 'main-image', style: { backgroundImage: `url('${imgImage}')` } })
            ]),
            createElement('div', { className: 'game-info-panel' }, [
                createElement('div', { className: 'info-panel-top' }, [
                    createElement('div', { className: 'sub-image', style: { backgroundImage: `url('${imgFrame100}')` } }),
                    createElement('div', { className: 'reviews-section' }, [
                        createElement('div', { className: 'review-summary' }, [
                            createElement('div', { className: 'review-score' }, ['VERY POSITIVE']),
                            createElement('div', { className: 'review-count' }, ['(000,000)'])
                        ]),
                        createElement('div', { className: 'recent-reviews' }, [
                            createElement('div', { className: 'recent-reviews-label' }, ['RECENT REVIEWS:']),
                            createElement('div', { className: 'recent-reviews-score' }, ['Positive']),
                            createElement('div', { className: 'recent-reviews-count' }, ['(0,000)'])
                        ])
                    ]),
                    createElement('div', { className: 'release-date-section' }, [
                        createElement('div', { className: 'release-date-label' }, ['RELEASE DATE:']),
                        createElement('div', { className: 'release-date-value' }, ['MM/DD YYYY'])
                    ]),
                    createElement('div', { className: 'developer-publisher-section' }, [
                        createElement('div', { className: 'developer-section' }, [
                            createElement('div', { className: 'developer-label' }, ['DEVELOPER:']),
                            createElement('div', { className: 'developer-value' }, ['Developer'])
                        ]),
                        createElement('div', { className: 'publisher-section' }, [
                            createElement('div', { className: 'publisher-label' }, ['PUBLISHER:']),
                            createElement('div', { className: 'publisher-value' }, ['Publisher'])
                        ])
                    ]),
                    createElement('div', { className: 'tags-section' }, [
                        createElement('div', { className: 'tag' }, ['Tag']),
                        createElement('div', { className: 'tag' }, ['Tag 2']),
                        createElement('div', { className: 'tag' }, ['Tag 3']),
                        createElement('div', { className: 'tag' }, ['Tag 4']),
                        createElement('div', { className: 'tag' }, ['Tag 5']),
                        createElement('div', { className: 'tag' }, ['+'])
                    ])
                ]),
                createElement('div', { className: 'price-section' }, ['$ 00.00']),
                createElement('div', { className: 'button-section' }, [
                    createElement('button', { className: 'wishlist-button-large' }, [
                        createImage(imgGravityUiHeart, 'Wishlist', 'button-icon'),
                        createElement('span', {}, ['Add to Wishlist'])
                    ]),
                    createElement('button', { className: 'cart-button' }, [
                        createImage(imgGravityUiShoppingCart, 'Cart', 'button-icon'),
                        createElement('span', {}, ['Add to Cart'])
                    ])
                ])
            ])
        ]);
    }

    function createAboutGameSection() {
        return createElement('div', { className: 'about-game-section' }, [
            createElement('div', { className: 'about-game-title' }, ['About This Game']),
            createElement('div', { className: 'about-game-content' }, [
                createElement('div', { className: 'about-game-image', style: { backgroundImage: `url('${imgFrame132}')` } }),
                createElement('div', { className: 'about-game-text' }, [
                    'Lorem ipsum dolor sit amet consectetur. Nec interdum enim imperdiet massa aliquam. Sapien etiam eleifend maecenas semper libero. Cras elit in et rutrum. Eget erat nulla morbi tortor tellus vitae cras. In praesent sed vel magna odio suscipit.'
                ]),
                createElement('div', { className: 'about-game-image', style: { backgroundImage: `url('${imgFrame133}')` } }),
                createElement('div', { className: 'about-game-text' }, [
                    'Lorem ipsum dolor sit amet consectetur. Ullamcorper massa venenatis cursus sed est interdum cras amet. Ultrices massa quam nam ac erat nulla. Scelerisque sed sagittis adipiscing a pellentesque pharetra. Sed cras enim donec turpis gravida faucibus etiam.'
                ])
            ])
        ]);
    }

    function createGameDetailsSidebar() {
        return createElement('div', { className: 'game-details-sidebar' }, [
            createElement('div', { className: 'sidebar-section-title' }, ['Game rating']),
            createElement('div', { className: 'rating-awards-section' }, [
                createElement('div', { className: 'rating-section' }, [
                    createElement('div', { className: 'rating-image', style: { backgroundImage: `url('${imgImage1}')` } }),
                    createElement('div', { className: 'rating-reason' }, ['Reason 1']),
                    createElement('div', { className: 'rating-reason' }, ['Reason 2']),
                    createElement('div', { className: 'rating-reason' }, ['Reason 3'])
                ]),
                createElement('div', { className: 'awards-section' }, [
                    createElement('div', { className: 'award-image', style: { backgroundImage: `url('${imgImage2}')` } }),
                    createElement('div', { className: 'award-image', style: { backgroundImage: `url('${imgImage2}')` } }),
                    createElement('div', { className: 'award-image', style: { backgroundImage: `url('${imgImage2}')` } })
                ])
            ]),
            createElement('div', { className: 'sidebar-section-title' }, ['Achievements']),
            createElement('div', { className: 'achievements-section' }, [
                createElement('div', { className: 'achievements-row' }, [
                    createElement('div', { className: 'achievement-image', style: { backgroundImage: `url('${imgImage3}')` } }),
                    createElement('div', { className: 'achievement-image', style: { backgroundImage: `url('${imgImage4}')` } }),
                    createElement('div', { className: 'achievement-image', style: { backgroundImage: `url('${imgImage5}')` } }),
                    createElement('div', { className: 'achievement-image', style: { backgroundImage: `url('${imgImage6}')` } }),
                    createElement('div', { className: 'achievement-image', style: { backgroundImage: `url('${imgImage7}')` } }),
                    createElement('div', { className: 'achievement-image', style: { backgroundImage: `url('${imgImage8}')` } }),
                    createElement('div', { className: 'achievement-image', style: { backgroundImage: `url('${imgImage9}')` } }),
                    createElement('div', { className: 'achievement-count' }, ['+'])
                ])
            ])
        ]);
    }

    root.appendChild(GameDetails());
});
