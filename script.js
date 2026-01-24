// Place Your Order - WhatsApp Integration
document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('orderName').value.trim();
            const email = document.getElementById('orderEmail').value.trim();
            const service = document.getElementById('orderService').value.trim();
            const details = document.getElementById('orderDetails').value.trim();
            if (!name || !email || !service || !details) {
                showOrderMessage('Please fill in all fields.', false);
                return;
            }
            // WhatsApp number (replace with your number)
            const phoneNumber = '94706004033'; // e.g., 94771234567 (no + or 0)
            const message = `New Order!%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(details)}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
            showOrderMessage('Order details sent to WhatsApp!', true);
            orderForm.reset();
        });
    }

    function showOrderMessage(msg, success) {
        let msgDiv = document.getElementById('orderMsg');
        if (!msgDiv) {
            msgDiv = document.createElement('div');
            msgDiv.id = 'orderMsg';
            msgDiv.style.marginTop = '1rem';
            msgDiv.style.fontWeight = 'bold';
            msgDiv.style.transition = 'opacity 0.3s';
            orderForm.appendChild(msgDiv);
        }
        msgDiv.textContent = msg;
        msgDiv.style.color = success ? '#f3f315' : '#ff4d4d';
        msgDiv.style.opacity = '1';
        setTimeout(() => {
            msgDiv.style.opacity = '0';
        }, 3000);
    }
});
// Smooth scroll for RapidGo nav link
document.querySelectorAll('.rapidgo-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('rapidgo').scrollIntoView({ behavior: 'smooth' });
    });
});
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
    // Body scroll lock for mobile menu
    if (navLinks.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.classList.remove('no-scroll');
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
        title: "Logo Design",
        price: "Rs. 3000 - Rs. 10000",
        features: ["Basic Rs. 3000 - Rs. 6000", "Premium Rs. 6000 - Rs. 10000",],
        details: ["For more details about our packages, please message us on WhatsApp."],
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
// New Pricing Section Logic (Tabs & Accordion)
function initPricing() {
    // Tab switching
    const tabs = document.querySelectorAll('.pricing-tab');
    const accordions = document.querySelectorAll('.pricing-accordion');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const tabType = this.getAttribute('data-tab');
            accordions.forEach(acc => {
                if (acc.classList.contains(`pricing-${tabType}`)) {
                    acc.classList.add('active');
                } else {
                    acc.classList.remove('active');
                }
            });
        });
    });

    // Accordion expand/collapse
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function(e) {
            // For sub-accordions, only toggle this one
            const parent = header.closest('.accordion-item');
            const isSub = parent.classList.contains('sub');
            if (!isSub) {
                // Close others at this level
                const siblings = parent.parentElement.querySelectorAll('.accordion-item');
                siblings.forEach(sib => {
                    if (sib !== parent) {
                        sib.classList.remove('open');
                        sib.querySelector('.accordion-header').classList.remove('active');
                    }
                });
            }
            parent.classList.toggle('open');
            header.classList.toggle('active');
        });
    });

    // Details dropdown for plans
    document.querySelectorAll('.details-toggle').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const details = btn.parentElement.nextElementSibling;
            btn.classList.toggle('active');
            details.classList.toggle('open');
        });
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
// (No longer needed: replaced by new accordion logic)

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
        
        // Auto-slide every 2 seconds
        autoplay: {
            delay: 2000,
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
    initOrderModal();
    initSmoothScroll();
    initPortfolioReveal();
    initPortfolioModal();
    initCounters();
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
// 3D Video Showreel - Professional Implementation
class VideoShowreel {
    constructor() {
        console.log('VideoShowreel constructor called');
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.video-3d-slide');
        this.wrapper = document.querySelector('.video-3d-wrapper');
        this.autoSwipeInterval = null;
        this.isAutoSwipeActive = true;
        this.isUserInteracting = false;

        console.log(`Found ${this.slides.length} video slides`);
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeVideos();
        this.startAutoSwipe();
    }

    setupEventListeners() {
        // Navigation arrows
        const leftArrow = document.querySelector('.nav-arrow-left');
        const rightArrow = document.querySelector('.nav-arrow-right');

        if (leftArrow) {
            leftArrow.addEventListener('click', () => this.previousSlide());
        }

        if (rightArrow) {
            rightArrow.addEventListener('click', () => this.nextSlide());
        }

        // Video and center play button interactions
        this.slides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            const card = slide.querySelector('.video-glass-card');
            const centerPlayBtn = slide.querySelector('.center-play-btn');

            if (video) {
                // Video click handler
                video.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.handleVideoInteraction(index);
                });

                // Center play button click handler
                if (centerPlayBtn) {
                    centerPlayBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.handleVideoInteraction(index);
                    });
                }

                // Video state change handlers
                video.addEventListener('play', () => {
                    console.log(`Video ${index} started playing`);
                    this.handleVideoPlay(index);
                });

                video.addEventListener('pause', () => {
                    console.log(`Video ${index} paused`);
                    this.handleVideoPause(index);
                });

                video.addEventListener('ended', () => {
                    console.log(`Video ${index} ended`);
                    this.handleVideoEnd(index);
                });

                video.addEventListener('waiting', () => {
                    console.log(`Video ${index} is buffering`);
                });

                video.addEventListener('playing', () => {
                    console.log(`Video ${index} is now playing`);
                });

                // Prevent auto-swipe when user hovers over video
                video.addEventListener('mouseenter', () => {
                    if (this.isAutoSwipeActive) {
                        this.stopAutoSwipe();
                    }
                });

                video.addEventListener('mouseleave', () => {
                    // Only resume if video is not playing
                    if (!video.paused && !video.ended) {
                        // Keep stopped if video is playing
                        return;
                    }
                    this.resumeAutoSwipe();
                });
            }
        });

        // Audio controls
        const audioControls = document.querySelectorAll('.audio-control');
        audioControls.forEach((control, index) => {
            control.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleAudio(index);
            });
        });
    }

    initializeVideos() {
        // Initialize videos but don't auto-play all at once
        this.slides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (video) {
                video.muted = true; // Ensure muted for auto-play
                video.preload = 'auto'; // Preload video content

                // Add loading and error event listeners
                video.addEventListener('loadstart', () => {
                    console.log(`Video ${index} started loading`);
                });

                video.addEventListener('loadeddata', () => {
                    console.log(`Video ${index} loaded successfully`);
                });

                video.addEventListener('error', (e) => {
                    console.error(`Video ${index} failed to load:`, e);
                    console.error('Video error code:', video.error ? video.error.code : 'Unknown');
                    console.error('Video error message:', video.error ? video.error.message : 'Unknown');
                    console.error('Video src:', video.src);

                    // Try alternative URL format if direct download fails
                    if (video.src.includes('uc?export=download&id=')) {
                        const fileId = video.src.split('id=')[1];
                        if (fileId) {
                            console.log(`Trying alternative URL format for video ${index}`);
                            video.src = `https://drive.google.com/uc?id=${fileId}&export=download`;
                            video.load(); // Reload with new source
                        }
                    }
                });

                video.addEventListener('canplay', () => {
                    console.log(`Video ${index} can play`);
                });

                // Only auto-play the first video initially
                if (index === 0) {
                    setTimeout(() => {
                        video.play().catch(e => {
                            console.log('Initial auto-play failed for first video:', e);
                        });
                    }, 1000); // Small delay to ensure video is ready
                }
            }
        });
    }

    startAutoSwipe() {
        if (this.autoSwipeInterval) {
            clearInterval(this.autoSwipeInterval);
        }

        this.autoSwipeInterval = setInterval(() => {
            if (this.isAutoSwipeActive && !this.isUserInteracting) {
                this.nextSlide();
            }
        }, 5000); // 5 seconds

        this.isAutoSwipeActive = true;
    }

    stopAutoSwipe() {
        if (this.autoSwipeInterval) {
            clearInterval(this.autoSwipeInterval);
            this.autoSwipeInterval = null;
        }
        this.isAutoSwipeActive = false;
    }

    resumeAutoSwipe() {
        // Check if any video is currently playing
        const anyVideoPlaying = Array.from(this.slides).some(slide => {
            const video = slide.querySelector('video');
            return video && !video.paused && !video.ended;
        });

        // Only resume if no video is playing and we're not in user interaction mode
        if (!anyVideoPlaying && !this.isUserInteracting && !this.isAutoSwipeActive) {
            this.startAutoSwipe();
        }
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlidePosition();
        this.handleSlideChange();
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlidePosition();
        this.handleSlideChange();
    }

    updateSlidePosition() {
        this.wrapper.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }

    handleSlideChange() {
        // Pause all videos except current slide and handle playback
        this.slides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            const card = slide.querySelector('.video-glass-card');

            if (video) {
                if (index === this.currentSlide) {
                    // Play current slide video if auto-swipe is active and no user interaction
                    if (this.isAutoSwipeActive && !this.isUserInteracting) {
                        // Small delay to ensure smooth transition
                        setTimeout(() => {
                            video.play().catch(e => {
                                console.log(`Auto-play failed for slide ${index}:`, e);
                            });
                        }, 500);
                    }
                } else {
                    // Pause other videos
                    video.pause();
                    card.classList.remove('playing');
                }
            }
        });
    }

    handleVideoInteraction(index) {
        const video = this.slides[index].querySelector('video');
        if (video) {
            console.log(`User interacted with video ${index}, current state: paused=${video.paused}`);
            this.isUserInteracting = true;
            this.stopAutoSwipe();

            if (video.paused) {
                video.play().catch(e => {
                    console.log('Video play failed:', e);
                    // Reset user interaction state if play fails
                    this.isUserInteracting = false;
                    this.resumeAutoSwipe();
                });
            } else {
                video.pause();
            }
        }
    }

    handleVideoPlay(index) {
        // Mark as playing and stop auto-swipe
        this.slides[index].querySelector('.video-glass-card').classList.add('playing');
        this.isUserInteracting = true;
        this.stopAutoSwipe();
    }

    handleVideoPause(index) {
        // Remove playing class
        this.slides[index].querySelector('.video-glass-card').classList.remove('playing');

        // Resume auto-swipe after a short delay
        setTimeout(() => {
            this.isUserInteracting = false;
            this.resumeAutoSwipe();
        }, 1000);
    }

    handleVideoEnd(index) {
        // Remove playing class and resume auto-swipe
        this.slides[index].querySelector('.video-glass-card').classList.remove('playing');
        this.isUserInteracting = false;
        this.resumeAutoSwipe();
    }

    toggleAudio(index) {
        const slide = this.slides[index];
        const video = slide.querySelector('video');
        const control = slide.querySelector('.audio-control');
        const icon = control.querySelector('i');

        if (video) {
            video.muted = !video.muted;

            if (video.muted) {
                icon.className = 'fas fa-volume-mute';
            } else {
                icon.className = 'fas fa-volume-up';
            }
        }
    }
}

// Initialize the video showreel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing video showreel...');
    if (document.querySelector('.video-3d-section')) {
        console.log('Video section found, creating VideoShowreel instance');
        new VideoShowreel();
    } else {
        console.log('Video section not found');
    }
});