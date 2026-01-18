// Custom Cursor with Dual Circle Effect - Optimized
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Set initial position to center of screen
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
let followerX = mouseX;
let followerY = mouseY;

cursor.style.left = mouseX + 'px';
cursor.style.top = mouseY + 'px';
cursorFollower.style.left = mouseX + 'px';
cursorFollower.style.top = mouseY + 'px';

// Smooth cursor movement using requestAnimationFrame
function updateCursor() {
    // Smooth interpolation for main cursor (fast following)
    cursorX += (mouseX - cursorX) * 0.9;
    cursorY += (mouseY - cursorY) * 0.9;

    // Smooth interpolation for follower (delayed following)
    followerX += (mouseX - followerX) * 0.7;
    followerY += (mouseY - followerY) * 0.7;

    // Apply positions
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(updateCursor);
}

// Start the animation loop
updateCursor();

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Hide cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .pricing-card, .filter-btn, .service-category-card, .testimonial-card, .profile-image-wrapper');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Portfolio Category Images
const categoryImages = {
    logo: ['Gallery Section/Gallery_1.jpg', 'Gallery Section/Gallery_6.jpg', 'Gallery Section/Gallery_11.jpg', 'Gallery Section/Gallery_16.JPG', 'Gallery Section/Gallery_21.jpg'],
    social: ['Gallery Section/Gallery_2.jpg', 'Gallery Section/Gallery_7.png', 'Gallery Section/Gallery_12.JPG', 'Gallery Section/Gallery_17.JPG', 'Gallery Section/Gallery_22.jpg'],
    banner: ['Gallery Section/Gallery_3.png', 'Gallery Section/Gallery_8.JPG', 'Gallery Section/Gallery_13.png', 'Gallery Section/Gallery_18.JPG', 'Gallery Section/Gallery_23.jpg'],
    video: ['Gallery Section/Gallery_4.jpg', 'Gallery Section/Gallery_9.JPG', 'Gallery Section/Gallery_14.jpg', 'Gallery Section/Gallery_19.png', 'Gallery Section/Gallery_24.png'],
    photo: ['Gallery Section/Gallery_5.jpg', 'Gallery Section/Gallery_10.JPG', 'Gallery Section/Gallery_15.JPG', 'Gallery Section/Gallery_20.png', 'Gallery Section/Gallery_25.jpg']
};

// Pricing Data
const pricingPlans = [
    {
        title: "Basic",
        price: "Rs. 2500",
        features: ["1 Logo Design", "5 Social Media Posts", "Basic Photo Editing"],
        details: ["Source Files", "2 Revisions", "3 Day Delivery"],
        popular: false
    },
    {
        title: "Standard",
        price: "Rs. 5000",
        features: ["2 Logo Designs", "10 Social Media Posts", "Advanced Photo Editing", "1 Banner Design"],
        details: ["Source Files", "Unlimited Revisions", "5 Day Delivery", "Social Media Kit"],
        popular: true
    },
    {
        title: "Premium",
        price: "Rs. 10000",
        features: ["5 Logo Designs", "20 Social Media Posts", "Premium Photo Editing", "3 Banner Designs", "1 Video Edit"],
        details: ["Source Files", "Unlimited Revisions", "7 Day Delivery", "Social Media Kit", "Brand Guidelines"],
        popular: false
    },
    {
        title: "Business Package",
        price: "Rs. 8000",
        features: ["5 Logos", "10 Posts", "10 Other Services"],
        details: ["One Week Delivery", "Source Files", "Unlimited Revisions", "Social Media Kit"],
        popular: false
    },
    {
        title: "VIP Level",
        price: "Rs. 10000",
        features: ["10 Logos", "20 Posts", "10 Other Services"],
        details: ["One Week Delivery", "Source Files", "Unlimited Revisions", "Priority Support", "Brand Guidelines"],
        popular: false
    },
    {
        title: "VIP Express",
        price: "Rs. 15000",
        features: ["Unlimited Designs", "Protection", "Priority Support"],
        details: ["One Week Delivery", "Source Files", "Unlimited Revisions", "24/7 Support", "All Rights Included"],
        popular: false
    }
];

// Testimonials Data
const testimonials = [
    {
        name: "Ruvini Perera",
        role: "Marketing Manager",
        content: "Lahiru designed our company logo and social media posts. The work was professional and exceeded our expectations. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        rating: 5
    },
    {
        name: "Kamal Silva",
        role: "Event Planner",
        content: "The wedding video editing was exceptional. Captured all the special moments beautifully. Will definitely work with Lahiru again.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        rating: 5
    },
    {
        name: "Samantha Fernando",
        role: "Small Business Owner",
        content: "Professional banner designs that helped increase our store traffic. Quick turnaround and great communication throughout.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        rating: 4
    },
    {
        name: "Dinesh Rathnayake",
        role: "Content Creator",
        content: "Social media content editing was top-notch. Helped grow my Instagram following by 30% in just one month. Amazing work!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        rating: 5
    },
    {
        name: "Nayomi Alwis",
        role: "Author",
        content: "Book cover design was exactly what I envisioned. Professional, creative, and delivered on time. Will hire for my next book!",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        rating: 5
    }
];

// Initialize Portfolio Reveal Animation
function initPortfolioReveal() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animationPlayState = 'running';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    categoryCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}

// Initialize Portfolio Modal
function initPortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    const modalClose = document.querySelector('.portfolio-modal-close');
    const modalTitle = document.querySelector('.modal-category-title');
    const modalGrid = document.querySelector('.modal-gallery-grid');
    const viewAllButtons = document.querySelectorAll('.view-all-btn');
    
    // Open modal
    viewAllButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            const categoryNames = {
                logo: 'Logo Design',
                social: 'Social Media Posts',
                banner: 'Banner Design',
                video: 'Video Editing',
                photo: 'Photo Editing'
            };
            
            modalTitle.textContent = categoryNames[category];
            modalGrid.innerHTML = '';
            
            categoryImages[category].forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = categoryNames[category];
                modalGrid.appendChild(img);
            });
            
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

// Initialize Pricing
function initPricing() {
    const pricingContainer = document.querySelector('.pricing-container');
    
    // Clear existing cards
    pricingContainer.innerHTML = '';
    
    // Add pricing cards
    pricingPlans.forEach((plan, index) => {
        const pricingCard = document.createElement('div');
        pricingCard.className = `pricing-card glassmorphism ${plan.popular ? 'popular' : ''}`;
        
        pricingCard.innerHTML = `
            ${plan.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
            <div class="pricing-header">
                <h3 class="pricing-title">${plan.title}</h3>
                <div class="pricing-price">${plan.price}</div>
            </div>
            <div class="pricing-features">
                <ul>
                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="pricing-details" id="details-${index}">
                <ul>
                    ${plan.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
            <button class="btn-choose" data-plan="${plan.title}" data-price="${plan.price}">Choose Plan</button>
            <button class="toggle-details" data-target="details-${index}">View Details</button>
        `;
        
        pricingContainer.appendChild(pricingCard);
    });
}

// Initialize Testimonials
function initTestimonials() {
    const marqueeContent = document.querySelector('.marquee-content');
    
    // Clear existing testimonials
    marqueeContent.innerHTML = '';
    
    // Duplicate testimonials for infinite scroll effect
    const duplicatedTestimonials = [...testimonials, ...testimonials];
    
    // Add testimonial cards
    duplicatedTestimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card glassmorphism';
        
        // Generate star rating
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < testimonial.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
        }
        
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                "${testimonial.content}"
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="author-avatar">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                    <div class="stars">${stars}</div>
                </div>
            </div>
        `;
        
        marqueeContent.appendChild(testimonialCard);
    });
}

// Toggle Pricing Details
function initPricingToggle() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-details')) {
            const targetId = e.target.getAttribute('data-target');
            const detailsElement = document.getElementById(targetId);
            detailsElement.classList.toggle('expanded');
            
            // Update button text
            e.target.textContent = detailsElement.classList.contains('expanded') ? 
                'Hide Details' : 'View Details';
        }
    });
}

// Order Form Modal
function initOrderModal() {
    const modal = document.getElementById('orderModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const choosePlanButtons = document.querySelectorAll('.btn-choose');
    const packageSelectedInput = document.getElementById('packageSelected');
    
    // Open modal when Choose Plan is clicked
    choosePlanButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const plan = button.getAttribute('data-plan');
            const price = button.getAttribute('data-price');
            
            packageSelectedInput.value = `${plan} - ${price}`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle form submission
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('customerName').value;
        const email = document.getElementById('customerEmail').value;
        const phone = document.getElementById('customerPhone').value;
        const packageSelected = document.getElementById('packageSelected').value;
        
        // In a real implementation, you would send this data to a server
        alert(`Thank you ${name}! Your order for ${packageSelected} has been received. We will contact you at ${email} or ${phone} shortly.`);
        
        // Close modal and reset form
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        orderForm.reset();
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate counters when they come into view
function initCounters() {
    const counters = document.querySelectorAll('.counter-number, .stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 1500; // Faster: 1.5 seconds
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        // Format large numbers
                        if (target >= 1000) {
                            counter.textContent = (target / 1000) + 'K+';
                        } else {
                            counter.textContent = target;
                        }
                        clearInterval(timer);
                    } else {
                        // Format during animation
                        if (target >= 1000) {
                            counter.textContent = Math.floor(current / 1000) + 'K+';
                        } else {
                            counter.textContent = Math.floor(current);
                        }
                    }
                }, 16);
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.3 }); // Lower threshold for earlier triggering
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Initialize Services Section
function initServices() {
    const serviceCards = document.querySelectorAll('.service-category-card');
    const servicesContainer = document.querySelector('.services-container');
    
    // Intersection Observer for staggered entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesContainer.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    if (servicesContainer) {
        observer.observe(servicesContainer);
    }
    
    // Category expand/collapse functionality
    serviceCards.forEach(card => {
        const header = card.querySelector('.category-header');
        const servicesGrid = card.querySelector('.services-grid');
        const serviceItems = card.querySelectorAll('.service-item');
        
        header.addEventListener('click', () => {
            // Close other expanded categories
            serviceCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('expanded')) {
                    otherCard.classList.remove('expanded');
                    // Remove active state from all items in other cards
                    otherCard.querySelectorAll('.service-item').forEach(item => {
                        item.classList.remove('active');
                    });
                }
            });
            
            // Toggle current category
            card.classList.toggle('expanded');
            
            // If collapsing, remove active state from items
            if (!card.classList.contains('expanded')) {
                serviceItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
        
        // Service item click functionality
        serviceItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent category toggle
                
                // Remove active state from all items in current category
                serviceItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Add active state to clicked item
                item.classList.add('active');
                
                // Optional: Add visual feedback or additional functionality here
                console.log('Selected service:', item.dataset.service);
            });
        });
    });
}

// Initialize Gallery Slider
function initGallerySlider() {
    const gallerySlider = new Swiper('.gallery-slider', {
        // 3D Coverflow Effect
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        
        // Auto-slide every 3 seconds
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        // Manual navigation
        navigation: {
            nextEl: '.gallery-next',
            prevEl: '.gallery-prev',
        },
        
        // Smooth transitions
        speed: 800,
        
        // Loop the slides
        loop: true,
        
        // Centered slides
        centeredSlides: true,
        
        // Show multiple slides
        slidesPerView: 'auto',
        
        // Watch slides progress for smooth opacity transitions
        watchSlidesProgress: true,
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                },
            },
            768: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 40,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            1024: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                },
            }
        },
        
        // Pause on hover
        on: {
            init: function () {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });
                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            },
        },
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPricing();
    initTestimonials();
    initServices();
    initPricingToggle();
    initOrderModal();
    initSmoothScroll();
    initPortfolioReveal();
    initPortfolioModal();
    
    // Animate counters on scroll
    initCounters();
    
    // Initialize Gallery Slider
    initGallerySlider();
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    const skillsSection = document.getElementById('about');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
    
    // Initialize cursor for non-mobile devices
    if (window.innerWidth > 576) {
        cursor.style.display = 'block';
        cursorFollower.style.display = 'block';
    }
});

// Handle window resize for cursor visibility
window.addEventListener('resize', () => {
    if (window.innerWidth <= 576) {
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
    } else {
        cursor.style.display = 'block';
        cursorFollower.style.display = 'block';
    }
});

// Prevent context menu on images (optional)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});