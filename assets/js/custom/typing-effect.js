class TypingEffect {
  constructor(element, text, speed = 50) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.currentChar = 0;
    this.isTyping = false;
  }

  start() {
    if (this.isTyping) return;
    this.isTyping = true;
    this.type();
  }

  type() {
    if (this.currentChar < this.text.length) {
      this.element.textContent += this.text.charAt(this.currentChar);
      this.currentChar++;
      setTimeout(() => this.type(), this.speed);
    } else {
      this.isTyping = false;
      this.element.classList.add('typing-complete');
    }
  }

  reset() {
    this.currentChar = 0;
    this.element.textContent = '';
    this.isTyping = false;
  }
}

// Add to window object for global access
window.TypingEffect = TypingEffect; 