function toggleCard(header) {
  const card = header.parentElement;
  const panel = card.querySelector('.card-panel');
  const chev = header.querySelector('.chev');
  const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

  if (isOpen) {
    panel.style.maxHeight = '0';
    chev.style.transform = 'rotate(0deg)';
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    chev.style.transform = 'rotate(180deg)';
  }
}