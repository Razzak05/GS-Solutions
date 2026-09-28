/**
 * GS SOLUTIONS — Executive B2B Interactions & Dynamic Capacity Calculator
 */

(function () {
    'use strict';

    // -------------------------------------------------------------------------
    // 1. Header Scroll Polish & Sticky State
    // -------------------------------------------------------------------------
    const siteHeader = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTop');

    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (siteHeader) {
            if (scrollY > 20) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }

        if (backToTop) {
            if (scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // -------------------------------------------------------------------------
    // 2. Mobile Menu Drawer & Outside Click
    // -------------------------------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
            });
        });

        // Close on document click outside menu
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && e.target !== menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
            }
        });
    }

    // -------------------------------------------------------------------------
    // 3. Verticals Filter Tabs
    // -------------------------------------------------------------------------
    const filterTabs = document.querySelectorAll('#verticalFilters .tab-btn');
    const verticalCards = document.querySelectorAll('.verticals-grid .vertical-card');

    if (filterTabs.length > 0) {
        filterTabs.forEach(btn => {
            btn.addEventListener('click', () => {
                filterTabs.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                const filterValue = btn.getAttribute('data-filter');

                verticalCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(8px)';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 20);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // -------------------------------------------------------------------------
    // 4. Practical Capacity & Volume Estimator with Live Slider Track Styling
    // -------------------------------------------------------------------------
    const calcVertical = document.getElementById('calcVertical');
    const leadSlider = document.getElementById('leadSlider');
    const agentSlider = document.getElementById('agentSlider');
    const leadDisplay = document.getElementById('leadDisplay');
    const agentDisplay = document.getElementById('agentDisplay');
    const outMonthlyLeads = document.getElementById('outMonthlyLeads');
    const outPerAgent = document.getElementById('outPerAgent');
    const calcBufferDisplay = document.getElementById('calcBufferDisplay');
    const btnApplyEstimator = document.getElementById('btnApplyEstimator');

    function updateSliderTrack(slider) {
        if (!slider) return;
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const val = parseFloat(slider.value) || 0;
        const percentage = ((val - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, #6366F1 0%, #818CF8 ${percentage}%, #10172A ${percentage}%, #10172A 100%)`;
    }

    function updateEstimator() {
        if (!leadSlider || !agentSlider || !calcVertical) return;

        const dailyLeads = parseInt(leadSlider.value, 10);
        const agents = parseInt(agentSlider.value, 10);
        const selectedOption = calcVertical.options[calcVertical.selectedIndex];
        const bufferSec = selectedOption.getAttribute('data-buffer') || '120';

        leadDisplay.textContent = `${dailyLeads.toLocaleString()} / day`;
        agentDisplay.textContent = `${agents} Rep${agents > 1 ? 's' : ''}`;

        // 22 operational business days per month
        const monthlyTotal = dailyLeads * 22;
        const leadsPerAgent = Math.max(1, Math.round(dailyLeads / agents));

        if (outMonthlyLeads) outMonthlyLeads.textContent = monthlyTotal.toLocaleString();
        if (outPerAgent) outPerAgent.textContent = leadsPerAgent.toLocaleString();
        if (calcBufferDisplay) {
            calcBufferDisplay.textContent = `${bufferSec} Seconds Guaranteed`;
        }

        updateSliderTrack(leadSlider);
        updateSliderTrack(agentSlider);
    }

    if (leadSlider && agentSlider && calcVertical) {
        leadSlider.addEventListener('input', updateEstimator);
        agentSlider.addEventListener('input', updateEstimator);
        calcVertical.addEventListener('change', updateEstimator);
        updateEstimator();
    }

    // Pre-fill contact form on calculator inquiry click
    if (btnApplyEstimator) {
        btnApplyEstimator.addEventListener('click', (e) => {
            const verticalMap = {
                'aca': 'ACA',
                'final-expense': 'Final Expense',
                'medicare': 'Medicare',
                'ssdi': 'SSDI',
                'home-improvement': 'Home Improvement',
                'bpo-support': 'Customer Support'
            };
            const currentVal = calcVertical.value;
            const targetVerticalForm = document.getElementById('fVertical');
            if (targetVerticalForm && verticalMap[currentVal]) {
                targetVerticalForm.value = verticalMap[currentVal];
            }

            const dailyVal = parseInt(leadSlider.value, 10);
            const targetVolForm = document.getElementById('fDailyVol');
            if (targetVolForm) {
                if (dailyVal <= 50) targetVolForm.value = '20-50';
                else if (dailyVal <= 100) targetVolForm.value = '50-100';
                else if (dailyVal <= 250) targetVolForm.value = '100-250';
                else targetVolForm.value = '250+';
            }
        });
    }

    // -------------------------------------------------------------------------
    // 5. FAQ Accordion
    // -------------------------------------------------------------------------
    const faqNodes = document.querySelectorAll('.faq-node');

    faqNodes.forEach(node => {
        const trigger = node.querySelector('.faq-trigger');
        if (trigger) {
            trigger.addEventListener('click', () => {
                const isActive = node.classList.contains('active');

                // Close other items
                faqNodes.forEach(otherNode => {
                    otherNode.classList.remove('active');
                    const otherTrigger = otherNode.querySelector('.faq-trigger');
                    if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                });

                if (!isActive) {
                    node.classList.add('active');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // -------------------------------------------------------------------------
    // 6. Campaign Pilot Request Form
    // -------------------------------------------------------------------------
    const pilotForm = document.getElementById('pilotForm');
    const pilotSubmitBtn = document.getElementById('pilotSubmitBtn');
    const pilotFeedback = document.getElementById('pilotFeedback');

    if (pilotForm && pilotSubmitBtn) {
        pilotForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fName = document.getElementById('fName').value.trim();
            const fEmail = document.getElementById('fEmail').value.trim();
            const fPhone = document.getElementById('fPhone').value.trim();
            const fVertical = document.getElementById('fVertical').value;

            if (!fName || !fEmail || !fPhone || !fVertical) {
                if (pilotFeedback) {
                    pilotFeedback.style.display = 'block';
                    pilotFeedback.className = 'form-feedback error';
                    pilotFeedback.textContent = 'Please complete all required fields (*) to submit your inquiry.';
                }
                return;
            }

            const originalBtnContent = pilotSubmitBtn.innerHTML;
            pilotSubmitBtn.disabled = true;
            pilotSubmitBtn.innerHTML = `<span>Sending Inquiry...</span>`;

            setTimeout(() => {
                if (pilotFeedback) {
                    pilotFeedback.style.display = 'block';
                    pilotFeedback.className = 'form-feedback success';
                    pilotFeedback.innerHTML = `
                        <strong>Inquiry Received Successfully</strong><br>
                        Thank you, ${fName}. Our campaign director will review your requirements and reach out within 15 minutes.
                    `;
                }

                pilotForm.reset();
                pilotSubmitBtn.innerHTML = `<span>Inquiry Sent ✓</span>`;

                setTimeout(() => {
                    pilotSubmitBtn.disabled = false;
                    pilotSubmitBtn.innerHTML = originalBtnContent;
                }, 4000);
            }, 600);
        });
    }

})();
