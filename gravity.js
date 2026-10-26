(function () {
const elements = document.querySelectorAll('p, h1, h2, h3, span, img, button, a, input');
const physicsElements = []; 

// Get viewport dimensions
const viewWidth = window.innerWidth;
const viewHeight = window.innerHeight;

elements.forEach((el) => {
const rect = el.getBoundingClientRect();
// Skip elements that are too small or not visible
if (rect.width === 0 || rect.height === 0) return;

// Save original styles and positions
const originalStyle = el.getAttribute('style') || '';

// Setup physics properties
const item = {
    el: el,
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
    w: rect.width,
    h: rect.height,
    vx: (Math.random() - 0.5) * 4, // Initial random horizontal velocity
    vy: (Math.random() - 0.5) * 4, // Initial random vertical velocity
    originalStyle: originalStyle
};

physicsElements.push(item);

});

// Second pass: apply absolute positioning so elements can float freely
physicsElements.forEach((item) => {
item.el.style.position = 'fixed';
item.el.style.left = item.x + 'px';
item.el.style.top = item.y + 'px';
item.el.style.width = item.w + 'px';
item.el.style.height = item.h + 'px';
item.el.style.zIndex = '9999';
item.el.style.transition = 'none';
});

// Animation Loop
function updatePhysics() {
physicsElements.forEach((item) => {
// Update positions based on velocity
item.x += item.vx;
item.y += item.vy;
    // Bounce off left/right walls
    if (item.x <= 0) {
        item.x = 0;
        item.vx *= -1;
    } else if (item.x + item.w >= viewWidth) {
        item.x = viewWidth - item.w;
        item.vx *= -1;
    }

    // Bounce off top/bottom walls
    if (item.y <= 0) {
        item.y = 0;
        item.vy *= -1;
    } else if (item.y + item.h >= viewHeight) {
        item.y = viewHeight - item.h;
        item.vy *= -1;
    }

    // Apply positions to the DOM element
    item.el.style.left = item.x + 'px';
    item.el.style.top = item.y + 'px';
});

requestAnimationFrame(updatePhysics);

}

// Start the drift
requestAnimationFrame(updatePhysics);

})();
