const whatsappNumber = '923001234567';

const formSubmitConfig = {
    to: 'your-formsubmit-email@example.com',
    subjectPrefix: 'Pak Hoisery Enquiry',
    note: 'Update this address in js/main.js before going live. The receiving email must be activated through FormSubmit.'
};

const productCatalog = [
    {
        slug: 'all-season-men-towel',
        collection: 'All Season',
        gender: 'Men',
        title: 'Cotton Towel',
        shortDescription: 'Soft absorbent towel built for everyday use and long-lasting comfort.',
        description: 'Our all-season towel offers reliable absorbency, breathable feel, and a clean finish for daily essentials. Designed for men who want practical comfort without compromise.',
        badge: 'Most Loved',
        colors: ['White', 'Navy', 'Sand', 'Black'],
        sizes: ['Small', 'Medium', 'Large', 'XL'],
        subcategories: ['Classic Cotton', 'Premium Weave', 'Ribbed Finish'],
        features: ['Durable cotton blend', 'Soft on skin', 'Quick-dry finish', 'Strong stitch quality'],
        gallery: [
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-men-azarnband',
        collection: 'All Season',
        gender: 'Men',
        title: 'Azarnband',
        shortDescription: 'Flexible everyday wrap with a secure fit and modern finish.',
        description: 'The Azarnband is designed for comfort, fit, and convenient daily wear. It is a practical accessory with premium finish and consistent quality.',
        badge: 'Popular',
        colors: ['Black', 'Grey', 'Maroon', 'Olive'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Basic', 'Stretch', 'Comfort'],
        features: ['Soft elasticity', 'Secure fit', 'Lightweight feel', 'Everyday use'],
        gallery: [
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-men-underwear',
        collection: 'All Season',
        gender: 'Men',
        title: 'Underwear Collection',
        shortDescription: 'Briefs and boxer styles in multiple colors and sizes for daily comfort.',
        description: 'Crafted for easy movement and all-day comfort, this underwear range offers breathable materials and a refined fit. Available in briefs and boxer styles in multiple shades.',
        badge: 'Core Range',
        colors: ['White', 'Black', 'Charcoal', 'Navy'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        subcategories: ['Brief', 'Boxer'],
        features: ['Breathable fabric', 'Elastic waist', 'Comfort waist band', 'Clean finish'],
        gallery: [
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-men-handkerchiefs',
        collection: 'All Season',
        gender: 'Men',
        title: 'Handkerchiefs',
        shortDescription: 'Clean everyday essentials with crisp finish and practical comfort.',
        description: 'These handkerchiefs combine softness, durability, and a clean fabric finish for daily use, travel, and practical gifting.',
        badge: 'Daily Use',
        colors: ['White', 'Cream', 'Blue', 'Olive'],
        sizes: ['Standard'],
        subcategories: ['Plain', 'Printed'],
        features: ['Soft cotton feel', 'Reliable absorbency', 'Easy care', 'Polished finish'],
        gallery: [
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-women-socks',
        collection: 'All Season',
        gender: 'Women',
        title: 'Socks Collection',
        shortDescription: 'Daily wear socks available in ankle, khusa, and classic styles.',
        description: 'Made with a soft-touch finish and comfortable elasticity, these socks bring daily practicality and polished styling to everyday wear.',
        badge: 'New',
        colors: ['Pink', 'Black', 'Beige', 'Ivory'],
        sizes: ['S', 'M', 'L'],
        subcategories: ['Socks', 'Ankle', 'Khusa'],
        features: ['Soft knit', 'Comfort stretch', 'Daily wear ready', 'Lightweight feel'],
        gallery: [
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-women-wardrobe',
        collection: 'All Season',
        gender: 'Women',
        title: 'Wardrobe Essentials',
        shortDescription: 'Night suits and night gowns with soft comfort and elegant styling.',
        description: 'A refined wardrobe range designed for relaxed comfort and graceful everyday wear, with a soft hand feel and durable finish.',
        badge: 'Coming Soon',
        colors: ['Rose', 'Ivory', 'Navy', 'Peach'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Night Suits', 'Night Gowns'],
        features: ['Soft fabrics', 'Elegant finish', 'Comfort-fit', 'Easy care'],
        gallery: [
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-women-gloves',
        collection: 'All Season',
        gender: 'Women',
        title: 'Gloves',
        shortDescription: 'Minimal everyday gloves designed for comfort and a graceful touch.',
        description: 'Our gloves range offers a polished everyday look with soft-touch texture and a comfortable fit suitable for daily use.',
        badge: 'Coming Soon',
        colors: ['Cream', 'Chocolate', 'Black', 'Pink'],
        sizes: ['S', 'M', 'L'],
        subcategories: ['Classic', 'Soft Knit'],
        features: ['Gentle finish', 'Stretch comfort', 'Soft texture', 'Everyday styling'],
        gallery: [
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-kids-school-socks',
        collection: 'All Season',
        gender: 'Kids',
        title: 'School Socks',
        shortDescription: 'Friendly, soft socks for school days and everyday movement.',
        description: 'Built for comfort and easy wear, the school socks range offers cushioning and reliable elasticity for active kids throughout the day.',
        badge: 'Everyday',
        colors: ['Blue', 'Pink', 'White', 'Purple'],
        sizes: ['4-6Y', '7-9Y', '10-12Y'],
        subcategories: ['Socks', 'Ankle'],
        features: ['Flexible knit', 'Comfort cushioning', 'Soft feel', 'Active wear'],
        gallery: [
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-kids-towel',
        collection: 'All Season',
        gender: 'Kids',
        title: 'Kids Towel',
        shortDescription: 'Soft, lovable towels designed for comfort after play or bath time.',
        description: 'Made with gentle fabric feel and durable finish, these towels bring softness and practicality to everyday family use.',
        badge: 'Family Favorite',
        colors: ['Blue', 'Pink', 'White', 'Yellow'],
        sizes: ['S', 'M', 'L'],
        subcategories: ['Cotton', 'Bath Towel'],
        features: ['Quick-dry soft fabric', 'Comfort feel', 'Safe detail', 'Easy care'],
        gallery: [
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'all-season-kids-underwear',
        collection: 'All Season',
        gender: 'Kids',
        title: 'Kids Underwear',
        shortDescription: 'Soft briefs and boxes built around comfort and active play.',
        description: 'Created for everyday wear, this underwear range ensures softness, flexibility, and a dependable fit for active young children.',
        badge: 'Comfort',
        colors: ['White', 'Blue', 'Pink', 'Grey'],
        sizes: ['4-6Y', '7-9Y', '10-12Y'],
        subcategories: ['Brief', 'Boxer'],
        features: ['Stretch comfort', 'Soft cotton feel', 'Easy movement', 'Daily durability'],
        gallery: [
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'summer-men-vest',
        collection: 'Summer',
        gender: 'Men',
        title: 'Summer Vest',
        shortDescription: 'Lightweight sleeveless essentials designed for warm weather comfort.',
        description: 'A breathable vest range for summer wear provides airflow, ease, and an effortless fit for everyday comfort in warm conditions.',
        badge: 'Seasonal',
        colors: ['White', 'Black', 'Olive', 'Navy'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Sleeveless', 'Half Sleeves'],
        features: ['Lightweight knit', 'Airy finish', 'Breathable', 'Summer-ready comfort'],
        gallery: [
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'summer-women-socks',
        collection: 'Summer',
        gender: 'Women',
        title: 'Summer Socks',
        shortDescription: 'Light and soft socks built for comfortable warm-weather wear.',
        description: 'A breathable sock option for summer days, designed to be lightweight, soft, and easy to style with everyday looks.',
        badge: 'Fresh Pick',
        colors: ['White', 'Rose', 'Beige', 'Lavender'],
        sizes: ['S', 'M', 'L'],
        subcategories: ['Socks', 'Ankle', 'Khusa'],
        features: ['Lightweight', 'Breathable', 'Soft texture', 'Comfort-fit'],
        gallery: [
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'summer-women-towel',
        collection: 'Summer',
        gender: 'Women',
        title: 'Summer Towel',
        shortDescription: 'Quick-dry towel for home and travel with soft finish.',
        description: 'This towel delivers quick drying, soft touch, and reliable finish for warm-weather routines and everyday comfort.',
        badge: 'Travel Ready',
        colors: ['White', 'Dusty Pink', 'Sky Blue', 'Sand'],
        sizes: ['Small', 'Medium', 'Large'],
        subcategories: ['Cotton', 'Quick Dry'],
        features: ['Fast drying', 'Soft hand feel', 'Lightweight', 'Everyday use'],
        gallery: [
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'summer-women-undergarments',
        collection: 'Summer',
        gender: 'Women',
        title: 'Undergarments',
        shortDescription: 'Camisole, bra, BD, and panty options for airy summer comfort.',
        description: 'Refined undergarments made with breathable material and soft support for comfortable everyday wear in warm weather.',
        badge: 'Soft Support',
        colors: ['White', 'Nude', 'Black', 'Blush'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        subcategories: ['Camisole', 'Bra', 'BD', 'Panty'],
        features: ['Breathable fabric', 'Soft support', 'Comfort shaping', 'Everyday wear'],
        gallery: [
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'summer-kids-vest',
        collection: 'Summer',
        gender: 'Kids',
        title: 'Kids Summer Vest',
        shortDescription: 'Comfort-driven sleeveless essentials for active summer days.',
        description: 'Lightweight and practical, these vests support ease of movement and all-day comfort in warmer weather.',
        badge: 'Active Fit',
        colors: ['Sky Blue', 'Pink', 'White', 'Green'],
        sizes: ['4-6Y', '7-9Y', '10-12Y'],
        subcategories: ['Sleeveless', 'Half Sleeves'],
        features: ['Breathable knit', 'Comfort stretch', 'Active range', 'Soft feel'],
        gallery: [
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'winter-men-warmer',
        collection: 'Winter',
        gender: 'Men',
        title: 'Warmer',
        shortDescription: 'Warm cotton winter warmer available in cream, blue, and grey.',
        description: 'Crafted for colder days, this warmer range offers insulation, flexibility, and an easy fit for daily wear in cream, blue, and grey finishes.',
        badge: 'Winter Essential',
        colors: ['Cream', 'Blue', 'Grey'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        subcategories: ['Knee Warmer'],
        features: ['Warm knit', 'Flexible stretch', 'Seasonal support', 'Durable finish'],
        gallery: [
            '../assets/images/Winter-Men-Warmer 1.png',
            '../assets/images/Winter-Men-Warmer 2.jpeg',
            '../assets/images/Winter-Men-Warmer 3.png',
            '../assets/images/Winter-Men-Warmer 4.jpeg',
            '../assets/images/Winter-Men-Warmer 5.jpg',
            '../assets/images/Winter-Men-Warmer 6.jpeg',
            '../assets/images/Winter-Men-Warmer 7.jpg',
            '../assets/images/Winter-Men-Warmer 8.jpg',
            '../assets/images/Winter-Men-Warmer 9.jpg'
        ]
    },
    {
        slug: 'winter-men-socks',
        collection: 'Winter',
        gender: 'Men',
        title: 'Winter Socks',
        shortDescription: 'Warm, medicated, ankle, and khusa socks for colder conditions.',
        description: 'Our winter socks range offers added warmth and comfort for daily wear, with classic and medicated options included.',
        badge: 'Cozy Fit',
        colors: ['Dark Grey', 'Black', 'Navy', 'Wine'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Socks', 'Medicated', 'Ankle', 'Khusa'],
        features: ['Extra warmth', 'Soft cushioning', 'Comfort stretch', 'Daily wear'],
        gallery: [
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'winter-men-gloves',
        collection: 'Winter',
        gender: 'Men',
        title: 'Winter Gloves',
        shortDescription: 'Warm knit gloves designed for practical winter protection.',
        description: 'The winter gloves collection balances warmth and flexibility for daily comfort in cool weather.',
        badge: 'Coming Soon',
        colors: ['Black', 'Grey', 'Navy'],
        sizes: ['S', 'M', 'L'],
        subcategories: ['Classic Knit'],
        features: ['Warm insulation', 'Comfort fit', 'Soft support', 'Daily use'],
        gallery: [
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'winter-women-warmer',
        collection: 'Winter',
        gender: 'Women',
        title: 'Winter Warmer',
        shortDescription: 'Soft and warm knit warmers with comfortable daily styling.',
        description: 'Designed for comfort and warmth, this range offers soft insulation and practical styling for cooler days.',
        badge: 'Warmth',
        colors: ['Cream', 'Blush', 'Charcoal', 'Navy'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Classic', 'Premium'],
        features: ['Soft insulation', 'Comfort knit', 'Warmth retention', 'Easy layering'],
        gallery: [
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'winter-women-socks',
        collection: 'Winter',
        gender: 'Women',
        title: 'Winter Socks',
        shortDescription: 'Cozy socks for ankle, khusa, and daily cold-weather wear.',
        description: 'Warm socks built for softer insulation, foot comfort, and reliable wear during cooler weather.',
        badge: 'Layered Comfort',
        colors: ['Beige', 'Pink', 'Grey', 'Black'],
        sizes: ['S', 'M', 'L'],
        subcategories: ['Socks', 'Ankle', 'Khusa'],
        features: ['Warm cushioning', 'Comfort stretch', 'Daily wear ready', 'Soft knit'],
        gallery: [
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'winter-women-wardrobe',
        collection: 'Winter',
        gender: 'Women',
        title: 'Winter Wardrobe',
        shortDescription: 'Night suits and night gowns with winter-ready softness.',
        description: 'A comfortable wardrobe collection designed for cosier nights and everyday warmth with elegant styling.',
        badge: 'Coming Soon',
        colors: ['Ivory', 'Rose', 'Navy', 'Grey'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Night Suits', 'Night Gowns'],
        features: ['Warm softness', 'Elegant styling', 'Comfort fit', 'Easy care'],
        gallery: [
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'winter-kids-warmer',
        collection: 'Winter',
        gender: 'Kids',
        title: 'Kids Warmer',
        shortDescription: 'Warm and flexible knit layers for children in colder weather.',
        description: 'These warmers are built for warmth, flexibility, and easy all-day movement during winter weather.',
        badge: 'Little Warmth',
        colors: ['Blue', 'Pink', 'Grey', 'Maroon'],
        sizes: ['4-6Y', '7-9Y', '10-12Y'],
        subcategories: ['Classic'],
        features: ['Warm knit', 'Soft stretch', 'Durable', 'Play-ready comfort'],
        gallery: [
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'winter-kids-socks',
        collection: 'Winter',
        gender: 'Kids',
        title: 'Kids Winter Socks',
        shortDescription: 'Soft socks designed to keep kids warm and comfortable in winter.',
        description: 'With flexible knit quality and warm support, these kids socks provide comfort for cold-weather play and daily wear.',
        badge: 'Cold-Weather Ready',
        colors: ['Blue', 'Pink', 'White', 'Purple'],
        sizes: ['4-6Y', '7-9Y', '10-12Y'],
        subcategories: ['Socks', 'Ankle'],
        features: ['Warm cushioning', 'Soft feel', 'Comfort stretch', 'Everyday wear'],
        gallery: [
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'kitchen-towels',
        collection: 'Kitchen',
        gender: 'Unisex',
        title: 'Kitchen Towels',
        shortDescription: 'High-quality kitchen towels built for daily dining and cleaning needs.',
        description: 'Our kitchen towel solutions are built to bring absorbency, durability, and polished finish to daily home use.',
        badge: 'Home Essentials',
        colors: ['White', 'Sand', 'Navy', 'Teal'],
        sizes: ['Standard'],
        subcategories: ['Kitchen Towels'],
        features: ['Absorbent', 'Quick-dry', 'Durable finish', 'Home use ready'],
        gallery: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'kitchen-matte',
        collection: 'Kitchen',
        gender: 'Unisex',
        title: 'Kitchen Matte',
        shortDescription: 'Polished practical matte for kitchen work surfaces and daily use.',
        description: 'Kitchen matte options combine functional performance with a contemporary finish for everyday kitchen environments.',
        badge: 'Coming Soon',
        colors: ['Cream', 'Charcoal', 'Navy'],
        sizes: ['Standard'],
        subcategories: ['Matte'],
        features: ['Clean finish', 'Functional design', 'Durable', 'Practical'],
        gallery: [
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'kitchen-gloves',
        collection: 'Kitchen',
        gender: 'Unisex',
        title: 'Kitchen Gloves',
        shortDescription: 'Durable gloves for safe food handling and practical kitchen use.',
        description: 'Our kitchen gloves are made with grip and flexibility in mind, providing dependable daily performance in busy kitchens.',
        badge: 'Kitchen Ready',
        colors: ['White', 'Black', 'Green'],
        sizes: ['S', 'M', 'L'],
        subcategories: ['Gloves'],
        features: ['Protective grip', 'Comfortable', 'Daily use', 'Practical finish'],
        gallery: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'kitchen-apron',
        collection: 'Kitchen',
        gender: 'Unisex',
        title: 'Apron',
        shortDescription: 'Practical apron with clean finish and comfortable day-to-day wear.',
        description: 'This apron brings utility and presentation together in one essential item for kitchen professionals and home cooks.',
        badge: 'Utility',
        colors: ['Black', 'Navy', 'Grey'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Apron'],
        features: ['Easy fit', 'Practical pockets', 'Daily durability', 'Simple styling'],
        gallery: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'kitchen-cap',
        collection: 'Kitchen',
        gender: 'Unisex',
        title: 'Kitchen Cap',
        shortDescription: 'Functional cap for clean, practical kitchen environments.',
        description: 'A minimal, comfortable cap designed for clean presentation and useful daily kitchen coverage.',
        badge: 'Coming Soon',
        colors: ['White', 'Black', 'Blue'],
        sizes: ['Standard'],
        subcategories: ['Cap'],
        features: ['Comfort fit', 'Minimal styling', 'Practical use', 'Easy care'],
        gallery: [
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'bath-towels',
        collection: 'Bath',
        gender: 'Unisex',
        title: 'Bath Towels',
        shortDescription: 'Soft, plush bath towels for everyday home comfort.',
        description: 'Bath towels designed with restful softness and practical durability for daily home routines and wellness spaces.',
        badge: 'Spa Feel',
        colors: ['White', 'Ivory', 'Sand', 'Linen'],
        sizes: ['Standard'],
        subcategories: ['Bath Towel'],
        features: ['Soft plush feel', 'Absorbent', 'Durable finish', 'Comfortable'],
        gallery: [
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'bath-bathrobe',
        collection: 'Bath',
        gender: 'Unisex',
        title: 'Bathrobe',
        shortDescription: 'Minimal bathrobe collection for comfort after bath and spa rituals.',
        description: 'Our bathrobe range offers a relaxed fit, soft touch, and refined finish suited to everyday home or wellness routines.',
        badge: 'Luxury Comfort',
        colors: ['Cream', 'Navy', 'Charcoal', 'Rose'],
        sizes: ['S', 'M', 'L', 'XL'],
        subcategories: ['Bathrobe'],
        features: ['Soft interior', 'Relaxed fit', 'Premium feel', 'Everyday comfort'],
        gallery: [
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    },
    {
        slug: 'bath-matte',
        collection: 'Bath',
        gender: 'Unisex',
        title: 'Bath Matte',
        shortDescription: 'Soft bath mat for modern and functional bathroom essentials.',
        description: 'A practical bath mat that balances slip resistance, comfort, and a minimal look for everyday bathroom use.',
        badge: 'Coming Soon',
        colors: ['Ivory', 'Stone', 'Taupe', 'Grey'],
        sizes: ['Standard'],
        subcategories: ['Bath Matte'],
        features: ['Soft grip', 'Comfort finish', 'Minimal style', 'Daily practicality'],
        gallery: [
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
        ]
    }
];

const productLookup = Object.fromEntries(productCatalog.map((product) => [product.slug, product]));

function initHeaderEffects() {
    const mainHeader = document.querySelector('.main-header');
    if (mainHeader) {
        const onScroll = () => {
            if (window.scrollY > 100) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
}

function initProductDropdownMenus() {
    const navDropdowns = document.querySelectorAll('.nav-dropdown');

    navDropdowns.forEach((dropdown) => {
        const menuGroups = dropdown.querySelectorAll('.menu-group');
        const productTrigger = dropdown.firstElementChild;

        const closeDropdown = () => {
            if (window.innerWidth > 992) {
                dropdown.classList.remove('open');
                menuGroups.forEach((group) => group.classList.remove('active'));
                if (productTrigger && productTrigger.tagName === 'A') {
                    productTrigger.setAttribute('aria-expanded', 'false');
                }
            }
        };

        const toggleTopLevelDropdown = (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (window.innerWidth <= 992) {
                dropdown.classList.toggle('open');
                productTrigger.setAttribute('aria-expanded', String(dropdown.classList.contains('open')));
                return;
            }

            const shouldOpen = !dropdown.classList.contains('open');
            dropdown.classList.toggle('open', shouldOpen);
            productTrigger.setAttribute('aria-expanded', String(shouldOpen));

            if (!shouldOpen) {
                menuGroups.forEach((group) => group.classList.remove('active'));
            }
        };

        if (productTrigger && productTrigger.tagName === 'A') {
            productTrigger.setAttribute('href', '#');
            productTrigger.setAttribute('aria-expanded', String(dropdown.classList.contains('open')));
            productTrigger.addEventListener('click', toggleTopLevelDropdown);
        }

        menuGroups.forEach((group) => {
            const trigger = group.firstElementChild;
            if (!trigger || trigger.tagName !== 'A') return;

            const handleSubmenuToggle = (event) => {
                event.preventDefault();
                event.stopPropagation();

                if (window.innerWidth <= 992) {
                    dropdown.classList.toggle('open');
                    return;
                }

                const isActive = group.classList.contains('active');
                menuGroups.forEach((item) => item.classList.remove('active'));

                if (!isActive) {
                    group.classList.add('active');
                    dropdown.classList.add('open');
                    if (productTrigger && productTrigger.tagName === 'A') {
                        productTrigger.setAttribute('aria-expanded', 'true');
                    }
                } else {
                    closeDropdown();
                }
            };

            trigger.addEventListener('click', handleSubmenuToggle);
            group.addEventListener('mouseenter', () => {
                if (window.innerWidth > 992) {
                    menuGroups.forEach((item) => item.classList.remove('active'));
                    group.classList.add('active');
                    dropdown.classList.add('open');
                }
            });
            group.addEventListener('mouseleave', () => {
                if (window.innerWidth > 992) {
                    const submenuPanel = group.querySelector('.submenu-panel');
                    if (submenuPanel && submenuPanel.matches(':hover')) {
                        return;
                    }
                    group.classList.remove('active');
                    const isAnyGroupActive = Array.from(menuGroups).some((item) => item.classList.contains('active'));
                    if (!isAnyGroupActive) {
                        closeDropdown();
                    }
                }
            });
        });

        dropdown.addEventListener('mouseleave', closeDropdown);
    });
}

function initMobileNavigation() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navDropdowns = document.querySelectorAll('.nav-dropdown');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    navDropdowns.forEach((dropdown) => {
        const trigger = dropdown.firstElementChild;
        if (!trigger) return;

        trigger.addEventListener('click', (event) => {
            if (window.innerWidth <= 992) {
                event.preventDefault();
                event.stopPropagation();
                dropdown.classList.toggle('open');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (navLinks && mobileBtn) {
            const clickedInsideNav = Array.from(navDropdowns).some((dropdown) => dropdown.contains(event.target)) || navLinks.contains(event.target) || mobileBtn.contains(event.target);
            if (!clickedInsideNav) {
                navLinks.classList.remove('open');
                navDropdowns.forEach((dropdown) => {
                    dropdown.classList.remove('open');
                    dropdown.querySelectorAll('.menu-group').forEach((group) => group.classList.remove('active'));
                });
            }
        }
    });
}

function populateCatalogPage() {
    const catalogRoot = document.querySelector('[data-catalog-root], .catalog-grid, .product-grid');
    if (!catalogRoot) return;

    const collection = catalogRoot.dataset.collection || catalogRoot.getAttribute('data-collection');
    const gender = catalogRoot.dataset.gender || catalogRoot.getAttribute('data-gender');
    const category = catalogRoot.dataset.category || catalogRoot.getAttribute('data-category');

    let filteredProducts = productCatalog.filter((product) => {
        if (collection && product.collection !== collection) return false;
        if (gender && product.gender !== gender) return false;
        if (category && product.collection !== category) return false;
        return true;
    });

    if (!filteredProducts.length) {
        catalogRoot.innerHTML = '<div class="empty-state">No products available in this category yet.</div>';
        return;
    }

    catalogRoot.innerHTML = filteredProducts.map((product) => `
        <article class="product-card">
            <div class="product-card__image" style="background-image: url('${product.gallery[0]}');"></div>
            <div class="product-card__content">
                <span class="product-badge">${product.collection}</span>
                <h3>${product.title}</h3>
                <p>${product.shortDescription}</p>
                <div class="product-meta">
                    <span>${product.colors.length} Colors</span>
                    <span>${product.sizes.length} Sizes</span>
                </div>
                <a href="product.html?slug=${product.slug}" class="btn btn-find">View Product</a>
            </div>
        </article>
    `).join('');
}

function renderProductDetail() {
    const detailRoot = document.getElementById('product-detail');
    if (!detailRoot) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const product = productLookup[slug];

    if (!product) {
        detailRoot.innerHTML = '<div class="empty-state">The selected product is not available. Please choose another item.</div>';
        return;
    }

    const thumbnailMarkup = product.gallery.map((image, index) => `
        <button class="gallery-thumbnail${index === 0 ? ' active' : ''}" type="button" data-image="${image}" data-index="${index}">
            <img src="${image}" alt="${product.title} gallery ${index + 1}">
        </button>
    `).join('');

    const colorOptions = product.colors.map((color) => `<option value="${color}">${color}</option>`).join('');
    const sizeOptions = product.sizes.map((size) => `<option value="${size}">${size}</option>`).join('');
    const featuresMarkup = product.features.map((feature) => `<li>${feature}</li>`).join('');
    const relatedProducts = productCatalog.filter((item) => item.slug !== product.slug && (item.collection === product.collection || item.gender === product.gender)).slice(0, 4);
    const relatedMarkup = relatedProducts.map((item) => `
        <article class="related-product-card">
            <img src="${item.gallery[0]}" alt="${item.title} preview">
            <div class="related-product-card__body">
                <span class="product-badge">${item.collection}</span>
                <h4>${item.title}</h4>
                <p>${item.shortDescription}</p>
                <a href="product.html?slug=${item.slug}">View Product</a>
            </div>
        </article>
    `).join('');
    const quoteLink = `../contact.html?product=${encodeURIComponent(product.title)}&subject=${encodeURIComponent('Enquiry: ' + product.title)}`;

    detailRoot.innerHTML = `
        <div class="product-detail-shell">
            <div class="product-gallery">
                <div class="gallery-stage">
                    <img id="main-product-image" src="${product.gallery[0]}" alt="${product.title}">
                    <button class="gallery-fullscreen" type="button" data-fullscreen-image="${product.gallery[0]}">Full Screen</button>
                </div>
                <div class="gallery-grid">${thumbnailMarkup}</div>
            </div>

            <div class="product-detail-copy">
                <span class="product-badge">${product.collection} • ${product.gender}</span>
                <h1>${product.title}</h1>
                <p class="product-desc">${product.description}</p>
                <div class="product-detail-meta">
                    <span>Colors: ${product.colors.length}</span>
                    <span>Sizes: ${product.sizes.length}</span>
                    <span>${product.badge}</span>
                </div>

                <form class="whatsapp-order-form" id="whatsappOrderForm">
                    <div class="form-grid">
                        <label>
                            <span>Color</span>
                            <select name="color">${colorOptions}</select>
                        </label>
                        <label>
                            <span>Size</span>
                            <select name="size">${sizeOptions}</select>
                        </label>
                        <label>
                            <span>Quantity</span>
                            <input type="number" min="1" max="100" value="1" name="quantity">
                        </label>
                    </div>

                    <div class="form-grid compact-grid">
                        <label>
                            <span>Name</span>
                            <input type="text" name="customerName" placeholder="Your name" required>
                        </label>
                        <label>
                            <span>Phone</span>
                            <input type="tel" name="customerPhone" placeholder="Your WhatsApp number" required>
                        </label>
                    </div>

                    <div class="detail-actions">
                        <button type="submit" class="btn btn-find">Order on WhatsApp</button>
                        <a href="${quoteLink}" class="btn btn-secondary">Request a Quote</a>
                    </div>
                </form>
            </div>
        </div>

        <div class="product-specs">
            <div class="product-specs__box">
                <h3>Features</h3>
                <ul>${featuresMarkup}</ul>
            </div>
            <div class="product-specs__box">
                <h3>Recommended use</h3>
                <p>Perfect for everyday wear, premium gifting, and sample ordering. Select your color and size, then place your request through WhatsApp or the enquiry form.</p>
            </div>
        </div>

        <div class="related-products">
            <div class="section-header">
                <div class="subtitle-wrapper">
                    <span class="line"></span>
                    <span class="section-subtitle">RELATED PRODUCTS</span>
                    <span class="line"></span>
                </div>
                <h2 class="section-title" style="color: var(--primary-blue);">You may also like</h2>
            </div>
            <div class="related-product-grid">${relatedMarkup || '<p class="empty-state">No related products available right now.</p>'}</div>
        </div>
    `;

    const mainImage = document.getElementById('main-product-image');
    document.querySelectorAll('.gallery-thumbnail').forEach((button) => {
        button.addEventListener('click', () => {
            const image = button.dataset.image;
            const imageIndex = Number(button.dataset.index ?? 0);
            if (mainImage && image) {
                mainImage.src = image;
                const fullScreenButton = document.querySelector('.gallery-fullscreen');
                if (fullScreenButton) {
                    fullScreenButton.dataset.fullscreenImage = image;
                    fullScreenButton.dataset.fullscreenIndex = String(imageIndex);
                }
            }
            document.querySelectorAll('.gallery-thumbnail').forEach((thumb) => thumb.classList.remove('active'));
            button.classList.add('active');
        });
    });

    const fullScreenButton = document.querySelector('.gallery-fullscreen');
    if (fullScreenButton) {
        fullScreenButton.addEventListener('click', () => {
            const modal = document.getElementById('gallery-modal');
            const modalImage = document.getElementById('gallery-modal-image');
            const galleryImages = product.gallery || [];
            if (!modal || !modalImage) return;
            const startIndex = Number(fullScreenButton.dataset.fullscreenIndex ?? 0);
            const openModalAtIndex = (index) => {
                const safeIndex = (index + galleryImages.length) % galleryImages.length;
                modal.dataset.currentIndex = String(safeIndex);
                modalImage.src = galleryImages[safeIndex];
                const prevButton = document.getElementById('gallery-modal-prev');
                const nextButton = document.getElementById('gallery-modal-next');
                if (prevButton) prevButton.dataset.index = String(safeIndex);
                if (nextButton) nextButton.dataset.index = String(safeIndex);
                modal.classList.add('is-open');
            };
            openModalAtIndex(startIndex);
            const prevButton = document.getElementById('gallery-modal-prev');
            const nextButton = document.getElementById('gallery-modal-next');
            if (prevButton) {
                prevButton.onclick = () => openModalAtIndex(Number(modal.dataset.currentIndex || 0) - 1);
            }
            if (nextButton) {
                nextButton.onclick = () => openModalAtIndex(Number(modal.dataset.currentIndex || 0) + 1);
            }
        });
    }

    const orderForm = document.getElementById('whatsappOrderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(orderForm);
            const payload = Object.fromEntries(formData.entries());
            const message = `Hello, I would like to order\n- Product: ${product.title}\n- Collection: ${product.collection}\n- Gender: ${product.gender}\n- Color: ${payload.color}\n- Size: ${payload.size}\n- Quantity: ${payload.quantity}\n- Name: ${payload.customerName}\n- Phone: ${payload.customerPhone}`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank', 'noopener');
        });
    }
}

function initImageModal() {
    if (document.getElementById('gallery-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'gallery-modal';
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="gallery-modal__backdrop" data-close-modal="true"></div>
        <div class="gallery-modal__content">
            <button type="button" class="gallery-modal__nav gallery-modal__prev" id="gallery-modal-prev" aria-label="Previous image">‹</button>
            <button type="button" class="gallery-modal__close" data-close-modal="true">×</button>
            <img id="gallery-modal-image" src="" alt="Product full screen preview">
            <button type="button" class="gallery-modal__nav gallery-modal__next" id="gallery-modal-next" aria-label="Next image">›</button>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (event) => {
        if (event.target.dataset.closeModal !== undefined) {
            modal.classList.remove('is-open');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.classList.remove('is-open');
        }
    });
}

function initRevealAnimations() {
    const revealItems = document.querySelectorAll('.section-header, .quality-item, .why-item, .page-product-card, .about-copy, .about-image, .contact-form-box, .contact-details, .product-card, .product-detail-shell');

    if ('IntersectionObserver' in window && revealItems.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });

        revealItems.forEach((item) => {
            item.classList.add('reveal');
            revealObserver.observe(item);
        });
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const params = new URLSearchParams(window.location.search);
    const productName = params.get('product');
    const subjectField = contactForm.querySelector('input[name="subject"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');

    if (productName && subjectField) {
        subjectField.value = `Enquiry: ${productName}`;
    }

    if (productName && messageField && !messageField.value.trim()) {
        messageField.value = `Hello, I am interested in ${productName}. Please share product details, pricing, and availability.`;
    }

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        const formMessage = document.getElementById('formMessage');
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
        formMessage.innerText = '';
        formMessage.className = 'form-status';

        try {
            const payload = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                subject: data.subject || formSubmitConfig.subjectPrefix,
                message: data.message
            };

            const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(formSubmitConfig.to)}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Unable to send your enquiry right now. Please try again shortly.');
            }

            formMessage.innerText = 'Thank you. Your enquiry has been sent successfully. We will be in touch soon.';
            formMessage.classList.add('success-message');
            contactForm.reset();

            if (productName && subjectField) {
                subjectField.value = `Enquiry: ${productName}`;
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formMessage.innerText = 'There was a problem sending your enquiry. Please check the email configuration and try again.';
            formMessage.classList.add('error-message');
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initHeaderEffects();
    initProductDropdownMenus();
    initMobileNavigation();
    initRevealAnimations();
    populateCatalogPage();
    renderProductDetail();
    initImageModal();
    initContactForm();
});

