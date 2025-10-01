document.addEventListener('DOMContentLoaded', () => {
  const steps = [...document.querySelectorAll('.question')];
  const bar = document.querySelector('.progress-bar');
  const fill = document.querySelector('.progress-fill');
  let current = 0;

  const update = i => {
    const pct = Math.round(((i + 1) / steps.length) * 100);
    fill.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', pct);
  };

  const show = i => {
    steps.forEach((q, idx) => q.classList.toggle('active', idx === i));
    update(i);
  };

  window.nextQuestion = n => show(current = n - 1);
  window.openQuiz = () => {
    current = 0;
    document.querySelectorAll('button.selected').forEach(b => b.classList.remove('selected'));
    window.resetQuiz?.();
    show(0);
    document.getElementById('quizModal').style.display = 'flex';
  };
  window.closeQuiz = () => document.getElementById('quizModal').style.display = 'none';

  show(0);
});
