module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="alien">👽</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="robot">🤖</span>`;
      } else {
        return `<span for="img" aria-label="ghost">👻</span>`;
      }
    },
  };
  