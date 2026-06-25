const products = [
    {
        id: 1,
        name: 'Inabel Everyday Tote Bag',
        productCode: 'LUZ-ILO-TOTE01',
        collection: 'Luzon Collection – Ilocos',
        category: 'Tote Bag',
        region: 'Luzon',
        province: 'Ilocos',
        price: 899,
        size: 'Approximately 14 x 15 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'School, work, errands, and everyday use',
        material: 'Inabel woven textile with canvas or cotton lining and reinforced handles',
        description: 'The Inabel Everyday Tote Bag is a functional woven tote designed for school, work, errands, and casual daily use. It features Ilocos-inspired woven textile that gives customers a practical way to carry Filipino craftsmanship wherever they go.',
        producer: 'This tote bag highlights the weaving tradition of Ilocos, where Inabel or Abel Iloko textiles are created through a careful loom-weaving process. Local textile makers prepare the threads, arrange the patterns, and weave the fabric into durable cloth known for its strength and everyday functionality. For this product, the woven textile is transformed into a modern tote bag with lining and reinforced handles. This allows the traditional fabric to become a practical accessory for school, work, errands, and daily use while still carrying the identity of Ilocos craftsmanship.',
        culturalNote: 'Inabel, also known as Abel Iloko, is associated with the weaving traditions of Ilocos. The fabric is known for its strength, patterns, and everyday functionality. Slight variations may occur due to small-batch or handmade production.',
        care: ['Spot clean only', 'Avoid machine washing, bleach, and harsh detergents', 'Store in a dry place'],
        image: 'assets/images/product-1.jpg'
    },
    {
        id: 2,
        name: 'Cordillera Woven Pouch',
        productCode: 'LUZ-COR-POUCH01',
        collection: 'Luzon Collection – Cordillera / Benguet',
        category: 'Pouch',
        region: 'Luzon',
        province: 'Cordillera / Benguet',
        price: 499,
        size: 'Approximately 7 x 5 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Coins, makeup, school supplies, travel items, and small essentials',
        material: 'Cordillera-inspired handwoven textile with zipper closure',
        description: 'The Cordillera Woven Pouch is a compact and useful accessory for small daily essentials. Its woven design highlights local craftsmanship while offering a practical item that can be used for school, work, travel, or gifting.',
        producer: 'This pouch is inspired by Cordillera weaving traditions, which are known for geometric patterns, bold color combinations, and strong cultural identity. The weaving process requires careful planning of thread colors and pattern arrangement before the textile is completed. The woven fabric is then sewn into a compact pouch with a zipper closure, making it useful for coins, makeup, school supplies, travel items, and small personal essentials. This product turns traditional textile inspiration into a simple and functional everyday item.',
        culturalNote: 'Cordillera woven products are known for their distinctive patterns and strong cultural identity. HabiPinas will source only from legitimate local producers and avoid copying or misrepresenting traditional patterns.',
        care: ['Spot clean only', 'Avoid soaking', 'Keep away from excessive moisture'],
        image: 'assets/images/product-2.jpg'
    },
    {
        id: 3,
        name: 'Inabel Laptop Sleeve',
        productCode: 'LUZ-ILO-LS01',
        collection: 'Luzon Collection – Ilocos',
        category: 'Laptop Sleeve',
        region: 'Luzon',
        province: 'Ilocos',
        price: 999,
        size: 'Fits a 13-inch laptop or tablet',
        availability: 'Limited small-batch stock',
        bestFor: 'Laptop protection, school, work, and online classes',
        material: 'Inabel textile with padded lining',
        description: 'The Inabel Laptop Sleeve combines function and Filipino culture by transforming woven textile into a modern protective accessory for students and professionals. It is designed for customers who want a useful item with local identity.',
        producer: 'This laptop sleeve uses Ilocos-inspired Inabel textile and applies it to a modern digital lifestyle product. Inabel fabric is traditionally made through loom weaving, where threads are carefully interlaced to create durable and patterned textile. After the woven fabric is prepared, it is combined with padding and lining to protect laptops or tablets. This product connects traditional weaving with the needs of students, professionals, freelancers, and online workers.',
        culturalNote: 'This product presents Inabel textile in a modern format suitable for students and working customers. It connects traditional weaving with everyday digital lifestyle needs.',
        care: ['Spot clean only', 'Do not machine wash', 'Keep away from water and heavy moisture'],
        image: 'assets/images/product-3.jpg'
    },
    {
        id: 4,
        name: 'Hablon Mini Wallet',
        productCode: 'VIS-ILO-WALLET01',
        collection: 'Visayas Collection – Iloilo',
        category: 'Wallet',
        region: 'Visayas',
        province: 'Iloilo',
        price: 349,
        size: 'Approximately 4 x 3 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Cash, cards, coins, and small essentials',
        material: 'Hablon woven textile with stitched lining',
        description: 'The Hablon Mini Wallet is a lightweight and affordable woven wallet designed for everyday use. It is ideal for customers who want a simple, useful, and meaningful Filipino-made accessory.',
        producer: 'This wallet is inspired by Hablon weaving from Iloilo and Panay. Hablon textiles are known for their colorful patterns and handwoven quality. Weavers carefully arrange threads on the loom to create fabric that can be used for clothing, accessories, and home items. For this product, the woven fabric is sewn into a small wallet suitable for cash, cards, coins, and small essentials. It is designed as an affordable and meaningful item for customers who want to support Filipino weaving in a simple and practical way.',
        culturalNote: 'Hablon is a handwoven textile associated with Iloilo and Panay weaving traditions. It can be used for clothing, shawls, accessories, and other textile-based products.',
        care: ['Spot clean only', 'Avoid washing directly with strong detergent', 'Air dry if slightly damp'],
        image: 'assets/images/product-4.jpg'
    },
    {
        id: 5,
        name: 'Hablon Everyday Sling Bag',
        productCode: 'VIS-ILO-SLING01',
        collection: 'Visayas Collection – Iloilo',
        category: 'Sling Bag',
        region: 'Visayas',
        province: 'Iloilo',
        price: 799,
        size: 'Approximately 8 x 6 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Casual outings, errands, travel, and daily essentials',
        material: 'Hablon textile with lining and adjustable strap',
        description: 'The Hablon Everyday Sling Bag is a stylish and functional accessory for customers who want an easy-to-carry bag with Filipino woven identity. It is suitable for casual days, travel, and simple daily use.',
        producer: 'This sling bag is based on the Hablon textile tradition of Iloilo. Hablon weaving involves the careful interlacing of threads to create colorful fabric with a distinct Visayan textile identity. The fabric is often used in garments, accessories, and functional products. The woven textile is then transformed into a sling bag with lining, zipper, and adjustable strap. This allows the traditional fabric to become a modern everyday accessory for errands, casual outings, travel, and daily use.',
        culturalNote: 'Hablon textiles are known for their woven patterns and connection to Iloilo\'s weaving heritage. This sling bag turns traditional textile into a functional modern accessory.',
        care: ['Spot clean only', 'Avoid heavy washing', 'Store flat or hanging in a dry area'],
        image: 'assets/images/product-5.jpg'
    },
    {
        id: 6,
        name: 'Raffia Travel Pouch',
        productCode: 'VIS-RAF-POUCH01',
        collection: 'Visayas Collection – Bohol / Aklan',
        category: 'Travel Pouch',
        region: 'Visayas',
        province: 'Bohol / Aklan',
        price: 499,
        size: 'Approximately 8 x 5 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Travel items, makeup, toiletries, and accessories',
        material: 'Raffia or natural woven fiber with zipper closure',
        description: 'The Raffia Travel Pouch is a lightweight woven accessory made for organizing small items. Its natural texture makes it practical, giftable, and easy to pair with other HabiPinas products.',
        producer: 'This travel pouch is inspired by raffia weaving from Bohol and other Visayan craft communities. Raffia is commonly made from fibers taken from the buri palm. The fibers are processed, dried, and woven into natural-textured materials used for bags, pouches, and handicrafts. The woven raffia material is shaped into a travel pouch with a zipper and wrist handle, making it useful for toiletries, makeup, accessories, and small travel items. Its natural texture gives the product a clean, handmade, and eco-conscious appeal.',
        culturalNote: 'Raffia weaving is associated with traditional craft practices in parts of the Visayas, including Bohol. The material gives the product a natural and handmade appeal.',
        care: ['Keep dry', 'Wipe gently with a clean cloth', 'Avoid soaking or folding heavily'],
        image: 'assets/images/product-6.jpg'
    },
    {
        id: 7,
        name: 'Yakan Card Wallet',
        productCode: 'MIN-YAK-WALLET01',
        collection: 'Mindanao Collection – Basilan / Zamboanga',
        category: 'Card Wallet',
        region: 'Mindanao',
        province: 'Basilan / Zamboanga',
        price: 349,
        size: 'Approximately 4 x 3 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Cards, IDs, bills, and small essentials',
        material: 'Yakan-inspired woven textile with stitched lining',
        description: 'The Yakan Card Wallet is a compact accessory that highlights the colorful woven artistry associated with Mindanao. It is small, practical, affordable, and meaningful for everyday use.',
        producer: 'This card wallet is inspired by Yakan weaving from Basilan and Zamboanga. Yakan textiles are known for vibrant colors, geometric details, and strong visual patterns. The weaving process requires careful thread counting and pattern control to create detailed designs. The woven textile is then made into a compact card wallet for IDs, cards, bills, and small essentials. This product presents Yakan-inspired weaving in a simple, affordable, and accessible everyday form.',
        culturalNote: 'Yakan weaving is known for vibrant colors and geometric patterns. HabiPinas will source from legitimate producers and avoid misrepresenting cultural designs.',
        care: ['Spot clean only', 'Avoid machine washing', 'Keep away from moisture'],
        image: 'assets/images/product-7.jpg'
    },
    {
        id: 8,
        name: "T'nalak Keepsake Pouch",
        productCode: 'MIN-SCO-POUCH01',
        collection: 'Mindanao Collection – South Cotabato',
        category: 'Keepsake Pouch',
        region: 'Mindanao',
        province: 'South Cotabato',
        price: 499,
        size: 'Approximately 7 x 5 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Keepsakes, small essentials, and gift packaging',
        material: "T'nalak-inspired or T'nalak textile sourced from a legitimate producer",
        description: 'The T\'nalak Keepsake Pouch is a meaningful woven accessory inspired by the weaving heritage of South Cotabato. It is designed for customers who want a practical item with a strong cultural story.',
        producer: 'This keepsake pouch is inspired by T’nalak weaving of the T’boli people of South Cotabato. Traditional T’nalak is made from abaca fibers and is known for its deep cultural meaning. The process may involve preparing fibers, dyeing threads, and weaving symbolic patterns with great care. Because T’nalak has strong cultural value, HabiPinas prioritizes respectful sourcing and proper representation. This pouch format allows the textile inspiration to become a small, functional, and meaningful product while still recognizing the importance of its cultural background.',
        culturalNote: "T'nalak is strongly associated with T'boli weaving traditions in South Cotabato. Because it has deep cultural value, HabiPinas will prioritize ethical sourcing and avoid copying sacred or traditional patterns without proper permission.",
        care: ['Spot clean gently', 'Avoid soaking, bleaching, and machine washing', 'Store in a dry place'],
        image: 'assets/images/product-8.jpg'
    },
    {
        id: 9,
        name: 'Inaul Soft Scarf',
        productCode: 'MIN-MAG-SCARF01',
        collection: 'Mindanao Collection – Maguindanao',
        category: 'Scarf',
        region: 'Mindanao',
        province: 'Maguindanao',
        price: 1500,
        size: 'Approximately 60 x 12 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Fashion accent, formal styling, semi-formal outfits, and premium gifting',
        material: 'Inaul textile or Inaul-inspired woven fabric from local producer',
        description: 'The Inaul Soft Scarf is a statement accessory that adds Filipino elegance to everyday or special-occasion outfits. It is ideal as a personal piece or as a meaningful Filipino-made gift.',
        producer: 'This scarf is inspired by Inaul weaving from Maguindanao. Inaul is a handwoven textile known for its vibrant colors, smooth texture, and elegant patterns. Weavers carefully arrange threads on the loom to create fabric that is often used for traditional clothing, formal wear, and meaningful textile pieces. For this product, the woven textile is presented as a soft scarf that can be used for styling, semi-formal outfits, cultural events, or premium gifting. It is one of the higher-value items in the HabiPinas collection because of its elegance, cultural identity, and visual appeal.',
        culturalNote: 'Inaul is a handwoven textile associated with Maguindanao. It is valued for its vibrant colors, woven detail, and cultural meaning. HabiPinas will present the product respectfully and source only from legitimate local producers.',
        care: ['Hand wash gently only when needed or dry clean if possible', 'Do not bleach', 'Air dry flat', 'Store carefully'],
        image: 'assets/images/product-9.jpg'
    },
    {
        id: 10,
        name: 'Mindanao Woven Clutch',
        productCode: 'MIN-WOV-CLUTCH01',
        collection: 'Mindanao Collection – Mindanao Artisan Partner',
        category: 'Clutch',
        region: 'Mindanao',
        province: 'Mindanao Artisan Partner',
        price: 899,
        size: 'Approximately 9 x 5 inches',
        availability: 'Limited small-batch stock',
        bestFor: 'Events, casual occasions, formal accents, and gifts',
        material: 'Mindanao woven textile with lining and zipper or snap closure',
        description: 'The Mindanao Woven Clutch is a fashionable accessory designed for special occasions and casual events. It combines modern styling with local woven craftsmanship, making it useful, stylish, and meaningful.',
        producer: 'This clutch represents the diverse weaving traditions found in Mindanao. Mindanao is home to several weaving communities, each with its own patterns, colors, materials, and cultural identity. Because of this, the final source of the product must be clearly identified once actual sourcing is confirmed. The woven textile is shaped into a clutch with lining and secure closure, making it suitable for events, casual occasions, and meaningful gifting. This product showcases Mindanao-inspired textile artistry in a stylish and modern accessory while respecting the identity of the community behind the fabric.',
        culturalNote: 'Mindanao is home to several weaving traditions, each with its own identity and style. This product will be clearly labeled based on its final confirmed source to avoid misrepresentation.',
        care: ['Spot clean only', 'Avoid direct soaking', 'Keep in a dry place and store flat to maintain shape'],
        image: 'assets/images/product-10.jpg'
    }
];

window.products = products;
window.dispatchEvent(new Event('products-ready'));

function initProductUI() {
    featured();
    renderProducts(products);
    loadProductDetails();

    document.querySelectorAll('.filter').forEach(b => {
        b.onclick = () => renderProducts(
            b.dataset.r === 'All'
                ? products
                : products.filter(p => p.region === b.dataset.r)
        );
    });

    document.getElementById('search')?.addEventListener('input', e =>
        renderProducts(products.filter(p =>
            p.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            p.province?.toLowerCase().includes(e.target.value.toLowerCase()) ||
            p.category?.toLowerCase().includes(e.target.value.toLowerCase())
        ))
    );
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductUI);
} else {
    initProductUI();
}

function imgSrc(p) {
    return p.image || `assets/images/product-${p.id}.jpg`;
}

function card(p) {
    return `
        <div class='card'>
            <img
                src='${imgSrc(p)}'
                alt='${p.name}'
                onerror="this.src='assets/images/placeholder.jpg'"
            >
            <h3>${p.name}</h3>
            <p style="font-size:0.82rem;color:#888;margin-bottom:0.3rem">${p.province}, ${p.region}</p>
            <p style="font-weight:700;color:var(--terra)">₱${p.price.toLocaleString()}</p>
            <p style="font-size:0.82rem;color:#666;margin-bottom:0.8rem">${p.bestFor}</p>
            <a class='btn' href='product.html?id=${p.id}'>View Product</a>
        </div>
    `;
}

function renderProducts(list = products) {
    const el = document.getElementById('products');
    if (el) el.innerHTML = list.map(card).join('');
}

function featured() {
    const el = document.getElementById('featured');
    if (!el) return;

    const featuredIds = [1, 3, 5, 9];
    const featuredProducts = featuredIds
        .map(id => products.find(p => p.id === id))
        .filter(Boolean);

    el.innerHTML = featuredProducts.length
        ? featuredProducts.map(card).join('')
        : products.slice(0, 4).map(card).join('');
}

function loadProductDetails() {
    const container = document.getElementById('product-details');
    if (!container) return;

    const id = Number(new URLSearchParams(window.location.search).get('id'));
    const p = products.find(x => x.id === id);

    if (!p) {
        container.innerHTML = `<h2 style="text-align:center;padding:3rem 0">Product not found.</h2>`;
        return;
    }

    document.title = `${p.name} – HabiPinas`;

    container.innerHTML = `
        <div class="product-page">

            <div>
                <img
                    src="${imgSrc(p)}"
                    alt="${p.name}"
                    class="product-image"
                    onerror="this.src='assets/images/placeholder.jpg'"
                >
                <p class="img-disclaimer">
                    Sample product mockup only. Final patterns and product designs will
                    be based on actual verified supplier products.
                </p>
            </div>

            <div class="product-info">

                <p class="product-code">Product Code: ${p.productCode}</p>
                <span class="collection-badge">${p.collection}</span>
                <h1>${p.name}</h1>

                <div class="product-meta-grid">
                    <p><strong>Category:</strong> ${p.category}</p>
                    <p><strong>Region:</strong> ${p.region}</p>
                    <p><strong>Province:</strong> ${p.province}</p>
                    <p><strong>Size:</strong> ${p.size}</p>
                    <p><strong>Material:</strong> ${p.material}</p>
                    <p>
                        <span class="availability-pill">
                            ${p.availability}
                        </span>
                    </p>
                </div>

                <p class="price-tag">₱${p.price.toLocaleString()}</p>
                <span class="best-for-tag">✦ Best for: ${p.bestFor}</span>

                <p class="section-label">About This Product</p>
                <p>${p.description}</p>

                <p class="section-label">About the Makers and Craft Process</p>
                <p>${p.producer}</p>

                <p class="section-label">Cultural & Design Note</p>
                <div class="cultural-note">${p.culturalNote}</div>

                <p class="section-label">Care Instructions</p>
                <ul>
                    ${p.care.map(item => `<li>${item}</li>`).join('')}
                </ul>

                <div class="btn-group">
                    <button class="btn" onclick="addToCart(${p.id})">
                        Add to Cart
                    </button>
                    <a class="btn btn-shopee" href="#">
                        Buy on Shopee
                    </a>
                    <a class="btn btn-ask" href="faq-contact.html">
                        Ask About This Product
                    </a>
                </div>

            </div>
        </div>
    `;
}
