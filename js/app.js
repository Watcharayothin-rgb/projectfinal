/**
 * โครงการแจกกางเกงในฟรี เพื่อคนไทยทุกคน - Main Interactive JavaScript Module
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initFaqAccordion();
  initModal();
  initForms();
  initNewsletter();
});

/* --------------------------------------------------------------------------
   1. Active Navigation Indicator
   -------------------------------------------------------------------------- */
function initNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      mobileNav.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;'; // Hamburger icon
    } else {
      mobileNav.classList.add('open');
      toggleBtn.innerHTML = '&times;'; // Close X icon
    }
  });

  // Close mobile nav when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('.nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
    });
  });
}

/* --------------------------------------------------------------------------
   3. FAQ Accordion Controller
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle clicked item
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 40 + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Registration / Claim Modal Controller
   -------------------------------------------------------------------------- */
function initModal() {
  const modalBackdrop = document.getElementById('registrationModal');
  const claimButtons = document.querySelectorAll('.btn-claim-modal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const claimForm = document.getElementById('claimForm');

  if (!modalBackdrop) return;

  // Open modal triggers
  claimButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close modal function
  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking backdrop outside modal card
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Handle modal form submission
  if (claimForm) {
    claimForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('claimName').value.trim();
      const phone = document.getElementById('claimPhone').value.trim();
      const email = document.getElementById('claimEmail') ? document.getElementById('claimEmail').value.trim() : '';
      const address = document.getElementById('claimAddress').value.trim();
      const sizeElem = document.querySelector('input[name="size"]:checked');
      const size = sizeElem ? sizeElem.value : 'M';

      if (!name || !phone || !address) {
        showToast('กรุณากรอกข้อมูลให้ครบถ้วนก่อนยืนยันสิทธิ์', 'error');
        return;
      }

      // Save to localStorage
      const existingClaims = JSON.parse(localStorage.getItem('free_underwear_claims')) || [];
      const newId = 'CLM-' + (1000 + existingClaims.length + 1);
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const newClaim = {
        id: newId,
        name: name,
        phone: phone,
        email: email || '-',
        size: size,
        address: address,
        status: 'รอยืนยัน',
        date: formattedDate
      };

      existingClaims.unshift(newClaim);
      localStorage.setItem('free_underwear_claims', JSON.stringify(existingClaims));

      // Success
      closeModal();
      claimForm.reset();
      showToast('🎉 ลงทะเบียนสำเร็จ! เจ้าหน้าที่จะตรวจสอบข้อมูลและจัดส่งภายใน 3-7 วันทำการ', 'success');
    });
  }
}

/* --------------------------------------------------------------------------
   5. Contact Form Validation & Persistence
   -------------------------------------------------------------------------- */
function initForms() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    // Simple email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (!nameInput.value.trim()) {
      setError(nameInput, 'กรุณากรอกชื่อ-นามสกุลของคุณ');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      setError(emailInput, 'กรุณากรอกอีเมล');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, 'รูปแบบอีเมลไม่ถูกต้อง');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      setError(subjectInput, 'กรุณากรอกหัวข้อ');
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      setError(messageInput, 'กรุณากรอกข้อความ');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid) {
      // Save contact message to localStorage
      const existingMsgs = JSON.parse(localStorage.getItem('free_underwear_messages')) || [];
      const newMsgId = 'MSG-' + (2000 + existingMsgs.length + 1);
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const newMsg = {
        id: newMsgId,
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        date: formattedDate
      };

      existingMsgs.unshift(newMsg);
      localStorage.setItem('free_underwear_messages', JSON.stringify(existingMsgs));

      contactForm.reset();
      showToast('✉️ ส่งข้อความถึงทีมงานเรียบร้อยแล้ว เราจะตอบกลับโดยเร็วที่สุด', 'success');
    }
  });
}

function setError(input, message) {
  input.classList.add('error');
  const errorText = input.nextElementSibling;
  if (errorText && errorText.classList.contains('error-text')) {
    errorText.textContent = message;
  }
}

function clearError(input) {
  input.classList.remove('error');
}

/* --------------------------------------------------------------------------
   6. Newsletter Form
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (input && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          showToast('กรุณากรอกอีเมลให้ถูกต้อง', 'error');
          return;
        }
        input.value = '';
        showToast('🔔 สมัครรับข่าวสารสำเร็จ! เราจะแจ้งเตือนคุณเมื่อมีของพร้อมส่ง', 'success');
      } else {
        showToast('กรุณากรอกอีเมลของคุณ', 'error');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Global Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
