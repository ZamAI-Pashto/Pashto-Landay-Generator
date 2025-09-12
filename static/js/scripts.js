const samples = [
  'زه د ګلو باغوانه، ګلو ته مې سلام دی',
  'ستا د سترګو جادو، زړه مې کړه ناکراره',
  'په یو نظر مې واخیست، قرار مې په قرار کې',
  'زما د ښکلا وطنه، ستا په مینه یم ګروېږی'
];

document.addEventListener('DOMContentLoaded', () => {
  const out = document.getElementById('landay');
  const btn = document.getElementById('generate');
  function pick() { return samples[Math.floor(Math.random() * samples.length)]; }
  function render() { if (out) out.textContent = pick(); }
  if (btn) btn.addEventListener('click', render);
  render();
});
