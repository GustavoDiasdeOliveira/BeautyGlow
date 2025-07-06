// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")

  // Change icon
  const icon = mobileMenuBtn.querySelector("i")
  if (navMenu.classList.contains("active")) {
    icon.className = "fas fa-times"
  } else {
    icon.className = "fas fa-bars"
  }
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.className = "fas fa-bars"
  })
})

// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm")
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = e.target.querySelector('input[type="email"]').value

  // Simulate API call
  const submitBtn = e.target.querySelector("button")
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Inscrevendo..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert(`Obrigado! ${email} foi inscrito com sucesso!`)
    e.target.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Product cards hover effect
const productCards = document.querySelectorAll(".product-card")
productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Add to cart functionality (simulation)
const buyButtons = document.querySelectorAll(".product-card .btn")
buyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card")
    const productName = productCard.querySelector(".product-name").textContent
    const productPrice = productCard.querySelector(".product-price").textContent

    // Simulate adding to cart
    const originalText = button.textContent
    button.textContent = "Adicionado!"
    button.style.background = "#10b981"

    setTimeout(() => {
      button.textContent = originalText
      button.style.background = ""
    }, 2000)

    // You could integrate with a real shopping cart here
    console.log(`Produto adicionado: ${productName} - ${productPrice}`)
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.9)"
    header.style.boxShadow = "none"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
const animatedElements = document.querySelectorAll(".product-card, .testimonial-card, .feature-item")
animatedElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Social media sharing (simulation)
const socialLinks = document.querySelectorAll(".social-link")
socialLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const platform = e.target.closest(".social-link").querySelector("i").className

    if (platform.includes("instagram")) {
      console.log("Compartilhar no Instagram")
    } else if (platform.includes("facebook")) {
      console.log("Compartilhar no Facebook")
    } else if (platform.includes("twitter")) {
      console.log("Compartilhar no Twitter")
    }

    // Here you would integrate with actual social media APIs
  })
})

// Search functionality (if you want to add a search feature)
function searchProducts(query) {
  const products = document.querySelectorAll(".product-card")
  const searchTerm = query.toLowerCase()

  products.forEach((product) => {
    const productName = product.querySelector(".product-name").textContent.toLowerCase()
    if (productName.includes(searchTerm)) {
      product.style.display = "block"
    } else {
      product.style.display = "none"
    }
  })
}

// Local storage for user preferences
function saveUserPreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getUserPreference(key) {
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : null
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  console.log("BeautyGlow Landing Page carregada com sucesso!")

  // Load user preferences
  const savedEmail = getUserPreference("newsletter_email")
  if (savedEmail) {
    const emailInput = document.querySelector(".newsletter-input")
    if (emailInput) {
      emailInput.value = savedEmail
    }
  }
})

// Error handling
window.addEventListener("error", (e) => {
  console.error("Erro na página:", e.error)
})

// Performance monitoring
window.addEventListener("load", () => {
  const loadTime = performance.now()
  console.log(`Página carregada em ${Math.round(loadTime)}ms`)
})
