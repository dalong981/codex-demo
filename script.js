// Hardcoded data for each day's story
const dailyStories = [
  {
    day: 1,
    image: "https://placehold.co/600x400/FFDDC1/333333?text=A+Sunny+Day",
    sentences: [
      { en: "The sun is shining.", cn: "太阳在发光。" },
      { en: "A happy dog is running on the grass.", cn: "一只快乐的狗在草地上跑。" },
      { en: "It is a beautiful day!", cn: "真是美好的一天！" }
    ]
  },
  {
    day: 2,
    image: "https://placehold.co/600x400/A2E4B8/333333?text=In+the+Forest",
    sentences: [
      { en: "This is a big green forest.", cn: "这是一片绿色的大森林。" },
      { en: "A little bird is singing on a branch.", cn: "一只小鸟在树枝上唱歌。" }
    ]
  },
  {
    day: 3,
    image: "https://placehold.co/600x400/B2CCFF/333333?text=Bedtime+Story",
    sentences: [
      { en: "The moon is in the sky.", cn: "月亮在天空中。" },
      { en: "It is time to go to sleep.", cn: "是时候睡觉了。" },
      { en: "Good night, little star.", cn: "晚安，小星星。" }
    ]
  }
];

let currentDayIndex = 0;

const imageEl = document.getElementById('story-image');
const textContainer = document.getElementById('story-text-container');
const prevBtn = document.getElementById('prev-day-btn');
const nextBtn = document.getElementById('next-day-btn');

function renderStory(index) {
  const story = dailyStories[index];
  imageEl.src = story.image;
  textContainer.innerHTML = '';

  story.sentences.forEach((sentence) => {
    const p = document.createElement('p');
    p.textContent = sentence.en;
    textContainer.appendChild(p);

    let pressTimer;

    p.addEventListener('mousedown', () => {
      pressTimer = setTimeout(() => {
        alert(sentence.cn);
        p.dataset.longPress = 'true';
      }, 800);
    });

    ['mouseup', 'mouseleave'].forEach((evt) => {
      p.addEventListener(evt, () => clearTimeout(pressTimer));
    });

    p.addEventListener('click', () => {
      if (p.dataset.longPress === 'true') {
        p.dataset.longPress = 'false';
        return;
      }
      if (p.dataset.clicked === 'true') {
        alert(sentence.cn);
        p.dataset.clicked = 'false';
      } else {
        const utterance = new SpeechSynthesisUtterance(sentence.en);
        speechSynthesis.speak(utterance);
        p.dataset.clicked = 'true';
      }
    });
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === dailyStories.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentDayIndex > 0) {
    currentDayIndex--;
    renderStory(currentDayIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentDayIndex < dailyStories.length - 1) {
    currentDayIndex++;
    renderStory(currentDayIndex);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderStory(currentDayIndex);
});
