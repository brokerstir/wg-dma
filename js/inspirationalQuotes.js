function showInspirationalQuote() {
  // Hide div text and button
  const container = document.getElementById('inspirationContainer');
  const originalContent = container.innerHTML;
  container.innerHTML = '';

  // Display a randomly selected inspirational quote
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
    { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
    { text: "A journey of a thousand miles begins with a single step.", author: "Laozi" },
    { text: "Smile, breathe, and go slowly.", author: "Thich Nhat Hanh" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Gautama Buddha" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
    { text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
    { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "If you don't like something, change it. If you can't change it, change your attitude.", author: "Maya Angelou" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung" },
    { text: "You wanna fly, you got to give up the thing that weighs you down.", author: "Toni Morrison" },
    { text: "If there is no struggle, there is no progress.", author: "Frederick Douglass" },
    { text: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", author: "Booker T. Washington" },
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "You need to learn how to select your thoughts just the same way you select your clothes every day. This is a power you can cultivate.", author: "Elizabeth Gilbert" },
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteElement = document.createElement('p');
  quoteElement.className = 'p-size text-primary'; // Add the class 'p-size' to the <p> element
  quoteElement.innerHTML = `"${randomQuote.text}" - ${randomQuote.author}`;
  container.appendChild(quoteElement);

  // Revert back to the original content after 3 seconds
  setTimeout(() => {
    container.innerHTML = originalContent;
  }, 3000);
}
