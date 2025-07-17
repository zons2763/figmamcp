document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    const imgFrame117 = "http://localhost:3845/assets/a8639d0ae786337c368845cba1867e981fc6676c.png";
    const img = "http://localhost:3845/assets/fb900fe795bc2769f71050e06fd3a06afac0a87a.png";
    const img3 = "http://localhost:3845/assets/17576961826278f665b7ab8ede43ab15706c6600.png";
    const img4 = "http://localhost:3845/assets/742312c0f3bcca4c769df958ce72038fd20773c7.png";
    const img5 = "http://localhost:3845/assets/d448defe99a3d4db9fb4e5bfb2f42d235fffef4b.png";
    const imgLogo = "http://localhost:3845/assets/017889acd85efe87097ed475b5d46ee026236758.png";
    const imgFrame163 = "http://localhost:3845/assets/14672eb2ffd08e710220a0dbb4bae284b390070b.svg";
    const imgGravityUiShoppingCart = "http://localhost:3845/assets/3ec343bb11c494db0c4af14e3548f2ad4df920b2.svg";
    const imgFrame164 = "http://localhost:3845/assets/0c4e81f528c8f6e7bf4ce60fc6c3480a4269b74c.svg";
    const imgFilter = "http://localhost:3845/assets/8bb0ae42ff54d0a7f1c1e06a30f3e292c3d6cec5.svg";
    const img1 = "http://localhost:3845/assets/869f418e8615bd2f37474e6ac8b56595db0b2770.svg";
    const img2 = "http://localhost:3845/assets/f18349185f5e20551863e6c04b8006e0b90e8531.svg";
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

    function Wishlist() {
        return createElement('div', { className: 'wishlist-container' }, [
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
                createElement('button', { className: 'side-tab' }, ['Wishlist']),
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
                createWishlistHeader(),
                createWishlistedGamesContainer()
            ])
        ]);
    }

    function createWishlistHeader() {
        return createElement('div', { className: 'wishlist-header' }, [
            createElement('div', { className: 'user-wishlist-title' }, [
                createElement('div', { className: 'user-avatar', style: { backgroundImage: `url('${imgFrame117}')` } }),
                createElement('div', { className: 'wishlist-username' }, ['Username\'s Wishlist'])
            ]),
            createElement('div', { className: 'filter-search-buttons' }, [
                createImage(imgFilter, 'Filter', 'filter-icon'),
                createElement('button', { className: 'search-button' }, [
                    createImage(imgFrame163, 'Search', 'search-button-icon')
                ])
            ])
        ]);
    }

    function createWishlistedGamesContainer() {
        return createElement('div', { className: 'wishlisted-games-container' }, [
            createWishlistedGameCard(img, 'Game Name', 'rating', '(000,000)', 'MM/DD YYYY', img1, ['Tag', 'Tag 2', 'Tag 3'], 'MM/DD YYYY', img2, '$ 00.00'),
            createWishlistedGameCard(img3, 'Game Name', 'rating', '(000,000)', 'MM/DD YYYY', img1, ['Tag', 'Tag 2', 'Long Tag'], 'MM/DD YYYY', img2, '$ 00.00'),
            createWishlistedGameCard(img4, 'Game Name', 'rating', '(000,000)', 'MM/DD YYYY', img1, ['Tag', 'Tag 2', 'Long Tag'], 'MM/DD YYYY', img2, '$ 00.00'),
            createWishlistedGameCard(img5, 'Game Name', 'rating', '(000,000)', 'MM/DD YYYY', img1, ['Tag', 'Tag 2', 'Long Tag'], 'MM/DD YYYY', img2, '$ 00.00')
        ]);
    }

    function createWishlistedGameCard(imageSrc, gameName, rating, ratingCount, releaseDate, platformIconSrc, tags, addedDate, removeIconSrc, price) {
        return createElement('div', { className: 'wishlisted-game-card' }, [
            createElement('button', { className: 'game-card-image-wrapper', onclick: () => window.location.href = 'game_details.html' }, [
                createElement('div', { className: 'game-card-image', style: { backgroundImage: `url('${imageSrc}')` } })
            ]),
            createElement('div', { className: 'game-card-details' }, [
                createElement('div', { className: 'game-info-left' }, [
                    createElement('button', { className: 'game-card-title', onclick: () => window.location.href = 'game_details.html' }, [gameName]),
                    createElement('div', { className: 'game-card-rating-section' }, [
                        createElement('span', { className: 'game-card-rating' }, [rating]),
                        createElement('span', { className: 'game-card-rating-count' }, [ratingCount])
                    ]),
                    createElement('div', { className: 'game-card-release-date' }, [releaseDate]),
                    createImage(platformIconSrc, 'Platforms', 'game-card-platform-icons'),
                    createElement('div', { className: 'game-card-tags' }, tags.map(tag => createElement('div', { className: 'game-card-tag' }, [tag])))
                ]),
                createElement('div', { className: 'game-info-right' }, [
                    createElement('div', { className: 'added-date-remove' }, [
                        createElement('div', { className: 'added-date' }, [`Added on ${addedDate}`]),
                        createImage(removeIconSrc, 'Remove', 'remove-wishlist-icon')
                    ]),
                    createElement('div', { className: 'game-card-price' }, [price]),
                    createElement('button', { className: 'game-card-cart-button' }, [
                        createImage(imgGravityUiShoppingCart, 'Cart', 'button-icon'),
                        createElement('span', {}, ['Add to Cart'])
                    ])
                ])
            ])
        ]);
    }

    root.appendChild(Wishlist());
});