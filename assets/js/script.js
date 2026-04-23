// Products data (from your provided array)
const products = [
    // Stationery (8 items)
    {
        id: 1,
        name: 'Pilot G2 Gel Pen',
        price: 15.99,
        category: 'Stationery',
        image: 'assets/images/stat1.png',
        description: 'Smooth gel ink pen with a comfortable rubber grip. Ideal for students and office use. Refillable and available in multiple colors.',
        rating: 4.5,
        reviews: 24,
        sku: 'Stat001'
    },
    {
        id: 2,
        name: 'Faber-Castell 2B Pencils',
        price: 6.90,
        category: 'Stationery',
        image: 'assets/images/stat2.png',
        description: 'Trusted quality pencils with strong break-resistant leads. Great for school exams and drawing.',
        rating: 4.2,
        reviews: 18,
        sku: 'Stat002'
    },
    {
        id: 3,
        name: 'Staedtler Mars Plastic Eraser',
        price: 5.99,
        category: 'Stationery',
        image: 'assets/images/stat3.png',
        description: 'Soft, clean eraser that removes pencil marks without damaging paper. Highly rated among students.',
        rating: 4.7,
        reviews: 32,
        sku: 'stat003'
    },
    {
        id: 4,
        name: 'Deli Clear Plastic Ruler (15cm)',
        price: 2.50,
        category: 'Stationery',
        image: 'assets/images/stat4.png',
        description: 'Transparent ruler with clear markings. Durable and flexible, perfect for drawing or measuring.',
        rating: 4.3,
        reviews: 15,
        sku: 'stat004'
    },
    {
        id: 5,
        name: 'Stabilo Exam Grade Ball Pen',
        price: 10.99,
        category: 'Stationery',
        image: 'assets/images/stat5.png',
        description: 'Affordable black/blue pen made for exam use. Smooth writing and anti-smudge.',
        rating: 4.8,
        reviews: 28,
        sku: 'Stat005'
    },
    {
        id: 6,
        name: 'Faber-Castell Sharpener with Container',
        price: 10.00,
        category: 'Stationery',
        image: 'assets/images/stat6.png',
        description: 'Compact pencil sharpener with a container for shavings. Safe blade and ergonomic design.',
        rating: 4.9,
        reviews: 42,
        sku: 'Stat006'
    },
    {
        id: 7,
        name: ' Deli Geometry Set',
        price: 15.00,
        category: 'Stationery',
        image: 'assets/images/stat7.png',
        description: ' Complete math set including ruler, protractor, compass, and triangle rulers. Comes in a plastic case.',
        rating: 4.4,
        reviews: 19,
        sku: 'Stat007'
    },
    {
        id: 8,
        name: 'Astar Transparent Pencil Case',
        price: 10.99,
        category: 'Stationery',
        image: 'assets/images/stat8.png',
        description: 'Durable pencil case with clear material so you can easily see your stationery. Lightweight and fits neatly in school bags.',
        rating: 4.6,
        reviews: 37,
        sku: 'Stat008'
    },
    
    // Notebooks & Files (8 items)
    {
        id: 9,
        name: 'Kokuyo Campus Notebook (B5)',
        price: 20.00,
        category: 'notebooks',
        image: 'assets/images/nb1.png',
        description: 'Premium Japanese notebook with smooth paper, minimal ink bleed, and simple design. Perfect for neat note-taking and study notes.',
        rating: 4.7,
        reviews: 45,
        sku: 'NB001'
    },
    {
        id: 10,
        name: 'CBE Spiral Notebook A5',
        price: 10.00,
        category: 'notebooks',
        image: 'assets/images/nb2.png',
        description: 'Affordable and practical spiral notebook for everyday writing. Wide lines and quality paper for school or casual use.',
        rating: 4.5,
        reviews: 38,
        sku: 'NB002'
    },
    {
        id: 11,
        name: 'Faber-Castell Hardcover Notebook (A5)',
        price: 20.00,
        category: 'notebooks',
        image: 'assets/images/nb3.png',
        description: 'Stylish hardcover notebook with ruled pages and strong binding. Ideal for journaling, meetings, and to-do lists.',
        rating: 4.8,
        reviews: 52,
        sku: 'NB003'
    },
    {
        id: 12,
        name: 'Moleskine Soft Cover Ruled Notebook',
        price: 50.00,
        category: 'notebooks',
        image: 'assets/images/nb4.png',
        description: 'Premium notebook with iconic design, rounded corners, and elastic closure. Ideal for professionals, writers, and creatives.',
        rating: 4.3,
        reviews: 27,
        sku: 'NB004'
    },
    {
        id: 13,
        name: 'Astar 2D Ring File (A4)',
        price: 9.99,
        category: 'notebooks',
        image: 'assets/images/nb5.png',
        description: 'Durable PVC ring binder with 2-ring mechanism. Great for organizing documents, assignments, and reports.',
        rating: 4.9,
        reviews: 63,
        sku: 'NB005'
    },
    {
        id: 14,
        name: 'Avery 10-Pocket Display Book (A4)',
        price: 12.99,
        category: 'notebooks',
        image: 'assets/images/nb6.png',
        description: 'Transparent sleeves to store and display documents. Lightweight and professional, suitable for reports or presentations.',
        rating: 4.4,
        reviews: 31,
        sku: 'NB006'
    },
    {
        id: 15,
        name: 'CBE Expanding File (13 Pockets, A4)',
        price: 22.99,
        category: 'notebooks',
        image: 'assets/images/nb7.png',
        description: 'Accordion-style file for sorting papers into categories. Comes with index tabs for labels.',
        rating: 4.6,
        reviews: 47,
        sku: 'NB007'
    },
    {
        id: 16,
        name: 'Premier Exercise Book',
        price: 5.99,
        category: 'notebooks',
        image: 'assets/images/nb8.png',
        description: 'Classic school exercise book with wide lines. Used by primary and secondary students across Malaysia.',
        rating: 4.2,
        reviews: 29,
        sku: 'NB008'
    },
    
    // Office Items (8 items)
    {
        id: 17,
        name: 'Double A A4 80gsm Copier Paper',
        price: 29.99,
        category: 'office',
        image: 'assets/images/ofc1.png',
        description: 'High-quality paper with smooth texture. Suitable for printers, copiers, and fax machines. Popular choice for office printing.',
        rating: 4.5,
        reviews: 36,
        sku: 'OFF001'
    },
    {
        id: 18,
        name: 'MAX HD-10 Stapler',
        price: 10.00,
        category: 'office',
        image: 'assets/images/ofc2.png',
        description: 'Compact and durable stapler that staples up to 20 sheets. Comes with a built-in staple remover.',
        rating: 4.7,
        reviews: 41,
        sku: 'OFF002'
    },
    {
        id: 19,
        name: 'Pelikan Paper Clips',
        price: 5.00,
        category: 'office',
        image: 'assets/images/ofc3.png',
        description: 'Rust-resistant metal clips to hold documents together. Essential for organizing paperwork neatly.',
        rating: 4.1,
        reviews: 18,
        sku: 'OFF003'
    },
    {
        id: 20,
        name: 'Astar Lever Arch File (A4)',
        price: 14.99,
        category: 'office',
        image: 'assets/images/ofc4.png',
        description: 'Heavy-duty file with metal locking mechanism and label spine. Commonly used for storing large amounts of documents.',
        rating: 4.3,
        reviews: 24,
        sku: 'OFF004'
    },
    {
        id: 21,
        name: 'Deli Office Scissors',
        price: 9.99,
        category: 'office',
        image: 'assets/images/ofc5.png',
        description: 'Sharp stainless steel blades with comfortable grip handles. Suitable for cutting paper, packaging, and more.',
        rating: 4.6,
        reviews: 33,
        sku: 'OFF005'
    },
    {
        id: 22,
        name: 'Casio MJ-120D Desktop Calculator',
        price: 60.00,
        category: 'office',
        image: 'assets/images/ofc6.png',
        description: '12-digit calculator with tax and memory functions. Large display and durable buttons — perfect for daily accounting tasks.',
        rating: 4.2,
        reviews: 21,
        sku: 'OFF006'
    },
    {
        id: 23,
        name: 'OEM LED Desk Lamp with Adjustable Arm',
        price: 50.00,
        category: 'office',
        image: 'assets/images/ofc7.png',
        description: 'Energy-efficient LED desk lamp with brightness control and flexible neck. Ideal for reading or working long hours.',
        rating: 4.0,
        reviews: 15,
        sku: 'OFF007'
    },
    {
        id: 24,
        name: 'Pentel Correction Tape',
        price: 10.00,
        category: 'office',
        image: 'assets/images/ofc8.png',
        description: 'No-mess correction tape with smooth glide. No drying needed — write over instantly.',
        rating: 4.8,
        reviews: 57,
        sku: 'OFF008'
    }
];

// Make products available globally
window.products = products;

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to get cart items
function getCart() {
    return cart;
}

// Function to add item to cart (adds only 1 item at a time)
function addToCart(productId, quantity = 1) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity });
    }
    
    saveCart();
    updateCartCount();
    updateFabCount();
    
    // Show notification
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} added to cart!`, 'success');
    }
}

// Function to update cart item quantity
function updateCartItem(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        saveCart();
        updateCartCount();
        updateFabCount();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateFabCount();
    showNotification('Item removed from cart', 'success');
}

// Function to clear cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    updateFabCount();
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update cart count in header
function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    countElements.forEach(element => {
        element.textContent = totalItems;
        if (totalItems > 0) {
            element.classList.add('has-items');
        } else {
            element.classList.remove('has-items');
        }
    });
}

// Function to update FAB count
function updateFabCount() {
    const fabCount = document.querySelector('.fab-count');
    if (fabCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        fabCount.textContent = totalItems > 0 ? totalItems : '';
        if (totalItems > 0) {
            fabCount.style.display = 'flex';
        } else {
            fabCount.style.display = 'none';
        }
    }
}

// Function to display products in a grid
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box-open"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-meta">
                    <div class="rating">
                        ${generateStarRating(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                </div>
                <div class="price">RM ${product.price.toFixed(2)}</div>
            </div>
        `;
        
        container.appendChild(productElement);
    });
    
    // Add event listeners for interactive elements
    addProductEventListeners();
}

// Function to add all product event listeners
function addProductEventListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-id'));
            
            // Add visual feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.classList.add('added');
            
            // Add to cart (only 1 item)
            addToCart(productId, 1);
            
            // Reset button after 1 second
            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('added');
            }, 1000);
        });
    });
    
    // Quick view buttons
    document.querySelectorAll('.quick-view').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-id'));
            window.location.href = `product-detail.html?id=${productId}`;
        });
    });
}

// Function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Function to show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add scroll event for header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('header').classList.add('header-scrolled');
        } else {
            document.querySelector('header').classList.remove('header-scrolled');
        }
        
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
    
    // Back to top button functionality
    document.querySelector('.back-to-top')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    // Add event listeners for all interactive elements
    addProductEventListeners();
});

// Newsletter form submission
document.getElementById('newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Show success message
    showNotification('Thank you for subscribing!', 'success');
    this.reset();
});

// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Your message has been sent!', 'success');
    this.reset();
});

// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-slide every 3 seconds (3000ms)
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover (optional)
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 3000));

    // Manual controls (optional)
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Dot navigation (optional)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 3000);
        });
    });
});

// Add to script.js to update header based on login state
function updateUserState() {
    const userIcon = document.getElementById('user-icon');
    if (userIcon) {
        if (isLoggedIn()) {
            userIcon.innerHTML = '<i class="fas fa-user-check"></i>';
            userIcon.href = 'dashboard.html';
        } else {
            userIcon.innerHTML = '<i class="fas fa-user"></i>';
            userIcon.href = 'login.html';
        }
    }
}

// Call this function whenever login state changes
updateUserState();

// In script.js
function refreshUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return null;
    
    const users = JSON.parse(localStorage.getItem('users'));
    const updatedUser = users.find(u => u.id === currentUser.id);
    
    if (updatedUser) {
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        return updatedUser;
    }
    return null;
}