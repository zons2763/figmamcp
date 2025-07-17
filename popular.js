document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    const imgFrame117 = "http://localhost:3845/assets/a8639d0ae786337c368845cba1867e981fc6676c.png";
    const img = "http://localhost:3845/assets/a3afd900c9838a0b397d54216943a8a4012604b1.png";
    const img1 = "http://localhost:3845/assets/b5c3804c82b2168265c3dd95724debb1ceec2989.png";
    const img2 = "http://localhost:3845/assets/96bc4a57295f957f2783f01036a031e6cd6eb92f.png";
    const img3 = "http://localhost:3845/assets/a6648e8509d805dcf40fd93d172d477839c6b78e.png";
    const img4 = "http://localhost:3845/assets/f4603261eee8e267bb0cb4c6a9cc3d4057f44ea1.png";
    const img5 = "http://localhost:3845/assets/154783ef0caec2e0c551c272503b0c5ecd057111.png";
    const img6 = "http://localhost:3845/assets/450f7c634deb6ce69a0a7c7652829657c9750681.png";
    const img7 = "http://localhost:3845/assets/b5c0edf37d0588b0d5f2c01e4cbf7eda4fd95f24.png";
    const img8 = "http://localhost:3845/assets/92cdfd67edc0ee01bb90b67bfec058d95c8b7e72.png";
    const img9 = "http://localhost:3845/assets/2376e8ab9839d98921d53ff91831a26de2f9d5fe.png";
    const img10 = "http://localhost:3845/assets/57af132824b1232260b4fd6d488e164020fd6479.png";
    const img11 = "http://localhost:3845/assets/1b208feceff3657597326ab88a703d7bd68dec2d.png";
    const img12 = "http://localhost:3845/assets/e819c79779ede4ddc4cefa3fc3904a0c2467f648.png";
    const img13 = "http://localhost:3845/assets/701662b1a253ef2d3a25a005ca1817b5bc9c7c72.png";
    const img14 = "http://localhost:3845/assets/432a510c74273fc68a447a900fbb0ff847a2e352.png";
    const img15 = "http://localhost:3845/assets/586563857b5381073657edd0b17497a5ed2f9d9e.png";
    const img16 = "http://localhost:3845/assets/facb2fba3df12aab19b06fb944193cbc5bd969da.png";
    const img17 = "http://localhost:3845/assets/02769b06c8511136e957a636b12f29ee0bce3f43.png";
    const img18 = "http://localhost:3845/assets/4a19a71cbaa82d9f7e43cb22b5232756368cd584.png";
    const img19 = "http://localhost:3845/assets/4edf6534bb44137f69f249b113f2207a2828a8f0.png";
    const img20 = "http://localhost:3845/assets/4a589e0fd7bd36260e9e3939224d3553b1f3c2c5.png";
    const img21 = "http://localhost:3845/assets/e9153dec748a5cd0c88a1cb5f64f9b5d1e50196b.png";
    const img22 = "http://localhost:3845/assets/faf2f75a7ef448d773f4e4987aa0e091e9f9b910.png";
    const img23 = "http://localhost:3845/assets/ee3de34c7c4d74bc3f3aa38b86b8bd3fb30f7b6d.png";
    const img24 = "http://localhost:3845/assets/37f8ddd06db26287fb300f301dead441c35c3e44.png";
    const img25 = "http://localhost:3845/assets/41891eb96bd5b570e59b12c02e0fc3d10b1fddb1.png";
    const img26 = "http://localhost:3845/assets/24259a2ad970341efefbfc0b039574e5d38b2e9d.png";
    const img27 = "http://localhost:3845/assets/6cb0ae7558c77f17533d70b54e240a03c1e26da0.png";
    const img28 = "http://localhost:3845/assets/e96efc98a4fab04124d8ea57bd3d8b3fd9827a98.png";
    const img29 = "http://localhost:3845/assets/27b582cfb7ad013fb73dc93766bb96774d9aa885.png";
    const imgLogo = "http://localhost:3845/assets/017889acd85efe87097ed475b5d46ee026236758.png";
    const imgFrame163 = "http://localhost:3845/assets/14672eb2ffd08e710220a0dbb4bae284b390070b.svg";
    const imgGravityUiShoppingCart = "http://localhost:3845/assets/3ec343bb11c494db0c4af14e3548f2ad4df920b2.svg";
    const imgFrame164 = "http://localhost:3845/assets/0c4e81f528c8f6e7bf4ce60fc6c3480a4269b74c.svg";
    const imgFilter = "http://localhost:3845/assets/8bb0ae42ff54d0a7f1c1e06a30f3e292c3d6cec5.svg";
    const imgVector = "http://localhost:3845/assets/df4319269074f5a8f695fc38a98b064bfbfa0bc6.svg";
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

    function Popular() {
        return createElement('div', { className: 'popular-container' }, [
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
                createChartsSection()
            ])
        ]);
    }

    function createChartsSection() {
        return createElement('div', { className: 'charts-section' }, [
            createElement('div', { className: 'charts-header' }, [
                createElement('div', { className: 'charts-title-dropdown' }, [
                    createElement('div', { className: 'charts-title' }, ['Most Played']),
                    createImage(imgVector, 'Dropdown', 'charts-dropdown-icon')
                ]),
                createElement('div', { className: 'charts-columns-header' }, [
                    createElement('div', {}, ['Price']),
                    createElement('div', {}, ['Current Players']),
                    createElement('div', {}, ['Peak Today'])
                ])
            ]),
            createPopularGameCardsContainer()
        ]);
    }

    function createPopularGameCardsContainer() {
        const container = createElement('div', { className: 'popular-game-cards-container' });
        const gameData = [
            { image: img, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img1, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img2, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img3, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img4, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img5, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img6, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img7, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img8, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img9, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img10, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img11, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img12, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img13, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img14, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img15, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img16, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img17, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img18, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img19, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img20, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img21, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img22, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img23, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img24, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img25, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img26, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img27, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img28, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
            { image: img29, price: '$ 00.00', currentPlayers: '000,000', peakToday: '000,000' },
        ];

        gameData.forEach(game => {
            container.appendChild(createPopularGameCard(game.image, 'Game Name', game.price, game.currentPlayers, game.peakToday));
        });

        return container;
    }

    function createPopularGameCard(imageSrc, gameName, price, currentPlayers, peakToday) {
        return createElement('div', { className: 'popular-game-card' }, [
            createElement('button', { className: 'game-card-image-wrapper', onclick: () => window.location.href = 'game_details.html' }, [
                createElement('div', { className: 'game-card-image', style: { backgroundImage: `url('${imageSrc}')` } })
            ]),
            createElement('div', { className: 'game-card-details' }, [
                createElement('div', { className: 'game-card-title-wrapper' }, [
                    createElement('div', { className: 'game-card-title', onclick: () => window.location.href = 'game_details.html' }, [gameName])
                ]),
                createElement('div', { className: 'game-stats' }, [
                    createElement('div', { className: 'game-price' }, [price]),
                    createElement('div', { className: 'game-current-players' }, [currentPlayers]),
                    createElement('div', { className: 'game-peak-today' }, [peakToday])
                ])
            ])
        ]);
    }

    root.appendChild(Popular());
});
